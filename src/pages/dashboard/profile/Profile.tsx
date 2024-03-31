import React, { useState } from 'react'
import { AppLayout } from '../../../components/layouts'
import ScheduleTable from './ScheduleTable';
import ProgramTable from './ProgramTable';
import SwapTable from './SwapTable';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';

export default function Profile() {
  const userActivity: any = useSelector((state: RootState) => state.activity.userActivity);
  const [ tabs, setTabs ] = useState(0)
  
  const h2Style = 'lg:text-[24px] text-[20px] font-[AvertaStd-Semibold] font-[400] leading-[33px] text-ryd-headerTextPrimary';
  const tabContainer = 'w-full flex gap-2 border-b border-gray-100 mt-7';
  const btnStyle = `px-7 py-1 hover:border-b-2 hover:border-ryd-primary`;

  return (
    <AppLayout>  
        <h2 className={h2Style}>Activity</h2>
        <section>
          {/* tabs */}
          <div className={tabContainer}>
            <button className={`${btnStyle} ${tabs === 0 && 'border-b-2 border-ryd-primary'}`} onClick={() => setTabs(0)}>Schedule</button>
            <button className={`${btnStyle} ${tabs === 1 && 'border-b-2 border-ryd-primary'}`} onClick={() => setTabs(1)}>Programs</button>
            <button className={`${btnStyle} ${tabs === 2 && 'border-b-2 border-ryd-primary'}`} onClick={() => setTabs(2)}>Swap</button>
          </div>

          <div>
            {tabs === 0 &&
              <ScheduleTable 
              data={userActivity.programs}  
              />
            }

            {tabs === 1 &&
              <ProgramTable 
              data={userActivity.programs} 
              />
            }

            {tabs == 2 &&
              <SwapTable 
              data={userActivity.programs}
              />
            }
          </div>
          
        </section>
    </AppLayout>
  )
}
