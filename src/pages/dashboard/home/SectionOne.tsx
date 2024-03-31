import React, { useEffect, useState } from 'react';
import arrowImg from '../../../assets/icons/arrow.svg';
import userImg from '../../../assets/icons/userImg.svg';
import alumniImg from '../../../assets/icons/graduate.svg';
import classesImg from '../../../assets/icons/book.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import { compareDate } from '../../../components/custom-hooks';

const containerStyle = 'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-[4rem]';
const boxStyle = 'rounded-[10px] p-[35px] bg-[#F7F7F7] grid gap-y-10';
const headerStyle = 'w-full flex items-center';
const pStyle = 'text-[16px] leading-[26px] text-ryd-headerTextPrimary';
const countStyle = 'text-[24px] leading-[33px] font-[AvertaStd-Semibold] text-ryd-headerTextPrimary';

export default function SectionOne() {
    const userActivity: any = useSelector((state: RootState) => state.activity.userActivity);
    const [todayClasses, setTodayClasses] = useState<any>([]);
    const [allStudents, setAllStudents] = useState<any>([]);

    useEffect(() => {
        let arr = [];
        let all = [];
        for (let i = 0; i < userActivity.programs.length; i++) {
           const dx = compareDate(userActivity.programs[i].nextClassDate);
           if(dx){
                arr.push(userActivity.programs[i])
           }    
        //    check for active child 
           if(userActivity.programs[i].child.status){
            all.push(userActivity.programs[i])
           }
        }
        setTodayClasses(arr);
        setAllStudents(all)
    }, [])

   



    return (
        <div className={containerStyle}>
            <div className={boxStyle}>
                <div className={`${headerStyle} gap-x-5`}>
                    <div className='h-[53px] w-[53px] rounded-full flex items-center justify-center'>
                        <img src={userImg} alt="user" />
                    </div>
                    <p className={pStyle}>Total Students</p>
                </div>
                <div className={`${headerStyle} justify-between`}>
                    <p className={countStyle}>{userActivity.programs.length}</p>
                    <img src={arrowImg} alt="growth" />
                </div>
            </div>

            <div className={boxStyle}>
                <div className={`${headerStyle} gap-x-5`}>
                    <div className='h-[53px] w-[53px] rounded-full flex items-center justify-center bg-[#D9D9D9]'>
                        <img src={alumniImg} alt="user" />
                    </div>
                    <p className={pStyle}>Active Students</p>
                </div>
                <div className={`${headerStyle} justify-between`}>
                    <p className={countStyle}>{allStudents?.length}</p>
                    <img src={arrowImg} alt="growth" />
                </div>
            </div>

            <div className={boxStyle}>
                <div className={`${headerStyle} gap-x-5`}>
                    <div className='h-[53px] w-[53px] rounded-full flex items-center justify-center bg-[#D9D9D9]'>
                        <img src={classesImg} alt="user" />
                    </div>
                    <p className={pStyle}>All Classes (today)</p>
                </div>
                <div className={`${headerStyle} justify-between`}>
                    <p className={countStyle}>{todayClasses?.length}</p>
                    <img src={arrowImg} alt="growth" />
                </div>
            </div>
        </div>
    )
}
