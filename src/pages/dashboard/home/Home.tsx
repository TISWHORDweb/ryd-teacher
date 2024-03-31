import  { useEffect, useState } from 'react'
import { AppLayout } from '../../../components/layouts';
import { Button, CustomModal, CustomSearchInput, Empty } from '../../../components/ui';
// import CartModal from './CartModal';
import SectionOne from './SectionOne';
import { students } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/rootReducer';
import UserService from '../../../services/user.service';
import { toast } from 'react-toastify';
import { setUserActivity } from '../../../redux/reducers/activitySlice';
import { getDay, getTime, getTodayDays } from '../../../components/custom-hooks';
import { Link } from 'react-router-dom';

export interface ChildRegProps {
    firstName: string,
    lastName: string,
    dob: Date,
    gender: string,
    days: string,
    time: string
}

const initialValues = {
    firstName: '',
    lastName: '',
    dob: new Date(),
    gender: 'male',
    days: '',
    time: ''
}


export default function Home() {
    const userInfo: any = useSelector((state: RootState) => state.auth.userInfo);
    const userService = new UserService();
    const dispatch = useDispatch();

    const [ formData, setFormData ] = useState(initialValues);
    const [ toggleModal, setToggleModal ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ data, setData ] = useState<any>(null);
    const [ todayClasses, setTodayClasses ] = useState<any>(null);

    useEffect(() => {
        getActivity();
    }, [])


    const getActivity = async() => {
        try {
            const response = await userService.getActivity();
            if(!response.status){
                toast.error(response.message);
                return;
            }
            // console.log(response.data)
            dispatch(setUserActivity(response.data))
            setData(response.data);
            const tdx = getTodayDays(response.data);
            setTodayClasses(tdx)
        }catch(err: any){
            toast.error(err?.message);
            return;
        }
    }


    const handleSearch = () => {}



    const h1Style = 'lg:text-[30px] text-[26px] font-[AvertaStd-Semibold] capitalize font-[400] leading-[46px] text-ryd-headerTextPrimary';
    const h2Style = 'lg:text-[24px] text-[20px] font-[AvertaStd-Semibold] font-[400] leading-[33px] text-ryd-headerTextPrimary';
    const tableHeader = 'text-[17px] font-[400] leading-[26px] font-[AvertaStd-Semibold] text-ryd-headerTextPrimary';
    const tableBody = 'text-[16px] font-[400] font-[AvertaStd-Light]  leading-[26px] text-[#616161]';
    const attendanceBtnStyle = 'rounded-[7px] bg-blue-400 py-1 px-2 text-white text-[11px] border-0'

    const props = { formData, setFormData };

    return (
        <AppLayout>
            <h1 className={h1Style}>Hello, {userInfo.firstName} ☀️</h1>
            <SectionOne />
            <section>
                <div className="w-full flex flex-wrap items-end justify-between mt-[4rem]">
                    <h2 className={h2Style}>Students</h2>
                    <Link 
                        to={data?.classLink} 
                        target='_blank' 
                        referrerPolicy='no-referrer' 
                        className="w-fit rounded-[7px] border-0 mt-6 text-[16px] leading-[26px] font-[400] bg-ryd-primary text-white px-[32px] py-[13px] hover:cursor-pointer"
                        >
                        My Class
                    </Link>
                </div>
                
                <div>{todayClasses?.length > 0 ? 
                        <div className='mt-[3rem] border-x border-x-[#F7F7F7] border-b border-b-[#F7F7F7] lg:w-full w-[700px] overflow-x-auto'>
                            <ul>
                                <li className='w-full flex items-center p-3 rounded-t-[10px] bg-[#F7F7F7]'>       
                                    <p className={`${tableHeader} w-[20%]`}>Name</p>    
                                    <p className={`${tableHeader} w-[15%] `}>Gender</p>
                                    <p className={`${tableHeader} w-[20%]`}>Program</p>
                                    <p className={`${tableHeader} w-[15%] text-center`}>Level</p>
                                    <p className={`${tableHeader} w-[15%] text-center`}>Day of class</p>
                                    <p className={`${tableHeader} w-[15%] text-center`}>Time of class</p>
                                </li>
                            </ul>
                            <ol>
                                {todayClasses?.map((item: any, index: number) => (
                                    <li key={index} className={`w-full flex items-center p-3 ${index % 2 !== 0 ? 'bg-[#F7F7F7]' : 'bg-white'}`}>
                                        <p className={`${tableBody} w-[20%] capitalize`}>{item?.child?.firstName} {item?.child?.lastName}</p>
                                        <p className={`${tableBody} w-[15%] capitalize`}>{item?.child?.gender}</p>
                                        <p className={`${tableBody} w-[20%]`}>{item?.package?.title.replace(/Program/g, '')}</p>
                                        <p className={`${tableBody} w-[15%] text-center`}>{item?.level}</p>
                                        <p className={`${tableBody} w-[15%] text-center`}>{getDay(item?.day)}</p>
                                        <p className={`${tableBody} w-[15%] text-center`}>{getTime(item?.time)}</p>
                                    </li>
                                ))}
                            </ol>     
                        </div> 
                        :
                        <Empty text="You have no class for today." /> 
                    }
                </div>

               
            </section>
        </AppLayout>
    )
}
