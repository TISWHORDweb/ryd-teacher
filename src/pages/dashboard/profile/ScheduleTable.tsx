import React, { useState } from 'react';
import { students } from '../../../utils/constants';
import { Link } from 'react-router-dom';
import { CustomModal, Empty } from '../../../components/ui';
import { formatDate, getDay, getTime } from '../../../components/custom-hooks';

interface Props {
    data: any[] | []
}

export default function ScheduleTable({ data }: Props) {
    const [ toggleModal, setToggleModal ] = useState(false);


    const tableHeader = 'text-[17px] font-[400] leading-[26px] font-[AvertaStd-Semibold] text-ryd-headerTextPrimary';
    const tableBody = 'text-[16px] font-[400] font-[AvertaStd-Light]  leading-[26px] text-[#616161]';
    const attendanceBtnStyle = 'rounded-[7px] bg-green-600 py-2.5 px-2.5 text-white text-[11px] border-0';

    return (
        <div className={`mt-[3rem] ${data.length > 0 ? 'border-x border-x-[#F7F7F7] border-b border-b-[#F7F7F7]' : 'border-0'} lg:w-full w-[700px] overflow-x-auto`}>
            { data?.length > 0 ? 
                <>
                    <ul>
                        <li className='w-full flex items-center p-3 rounded-t-[10px] bg-[#F7F7F7]'>       
                            <p className={`${tableHeader} w-[20%]`}>Name</p>     
                            <p className={`${tableHeader} w-[20%]`}>Program</p>
                            <p className={`${tableHeader} w-[10%]`}>Level</p>
                            <p className={`${tableHeader} w-[10%]`}>Day</p>
                            <p className={`${tableHeader} w-[10%]`}>Time</p>
                            <p className={`${tableHeader} w-[15%]`}>Next class</p>
                            <p className={`${tableHeader} w-[15%] text-center`}>Action</p>
                        </li>
                    </ul> 
                    <ol>
                    {data?.map((item: any, index: number) => (
                        <li key={index} className={`w-full flex items-center p-3 ${index % 2 !== 0 ? 'bg-[#F7F7F7]' : 'bg-white'}`}>
                            <p className={`${tableBody} w-[20%] capitalize`}>{item?.child?.firstName} {item?.child?.lastName}</p>
                            {/* <p className={`${tableBody} w-[15%]`}>{item.class}</p> */}
                            <p className={`${tableBody} w-[20%]`}>{item?.package?.title.replace(/Program/g, '')}</p>
                            <p className={`${tableBody} w-[10%]`}>{item?.level}</p>
                            <p className={`${tableBody} w-[10%]`}>{getDay(item?.day)}</p>
                            <p className={`${tableBody} w-[10%]`}>{getTime(item?.time)}</p>
                            <p className={`${tableBody} w-[15%]`}>{formatDate(item?.nextClassDate)}</p>
                            <p className={`${tableBody} w-[15%] text-center`}>
                                <Link to={item?.classLink} target='_blank' referrerPolicy='no-referrer' className={attendanceBtnStyle} onClick={() => setToggleModal(true)}>Go to class</Link>
                            </p>
                        </li>
                    ))}
                    </ol>
                </> :
                <Empty text='You have no student records' />
               
            }

        </div>
    )
}
