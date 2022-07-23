import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './staff.scss';
import staffLoad from '../../../apiData/loadStaff';

import { Pagination } from 'antd';
import { useActions } from '../../../hooks/useActions';
import { staffArr } from '../../types';
import { StaffProps } from '../../typesProps';

const Staff: React.FC<StaffProps> = ({id}) => {
  const {setStaffId} = useActions ()
  const [staffShow, setShowStaff] = useState<boolean>(false);
  const [staffList, setStaffList] = useState<staffArr[]> ([]);
  const [current, setCurrent] = useState(1);

  const staffRes: staffArr[] = staffList.reduce((res: staffArr[], itemStaff: staffArr) => {
    if (!res.find(i => i.nameRu == itemStaff.nameRu)) {
      res.push(itemStaff)
    }
    return res
  }, [])

  const staffListArr: Array<staffArr[]> = []
  for (let i=0; i < staffList.length; i+=20) {
    staffListArr.push(staffRes.slice(i, i + 20))
  };

  const onClickStaff = () => {
    setShowStaff(staffShow ? false : true);
  };

  const onSelectCurrent = (value: number) => {
    setCurrent(value)
  };

  const onClickStaffId = React.useCallback ((idStaff: number) => {
    setStaffId(idStaff)
  }, []);

  const loadStaff = async () => {
    const staff = await staffLoad (id);
    setStaffList(staff);
  };
  
  useEffect (() => {
    loadStaff()
  }, []);

  return (
    <div className='film-staff'>
       <div className='film-staff-start'>
       <p>Персоналии</p>
       {staffShow === false 
         ?<button className='button button-down' onClick={onClickStaff}>&#10094;</button>
         :<button className='button button-up' onClick={onClickStaff}>&#10094;</button>}
       </div>
       {staffShow 
         ? <div className='staff-block'>
             {staffListArr[current - 1]?.map(staff => (
              <div className='staff-block-item' key={`${staff.staffId}_${staff.professionKey}`}>
                <Link to={`/staff/${staff.staffId}`}
                onClick={() =>onClickStaffId(staff.staffId)}>
                  <p>{staff.nameRu ? staff.nameRu : ''}</p>
                  {staff.nameRu && staff.nameEn ? '/' : null}
                  <p>{staff.nameEn ? staff.nameEn : ''}</p>
                </Link>
              </div>
             ))}
             {staffList.length>20
             ?<Pagination className='pagination'
              current={current} onChange={onSelectCurrent} total={staffList.length} 
              defaultPageSize={20} showSizeChanger={false}/>
            : ''}
           </div>
         : ''}
     </div>
  )
}

export default Staff;