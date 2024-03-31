import { ReactNode } from "react";
import authImg from '../../../assets/images/aIcon.svg';
import teacherImg from '../../../assets/images/teacher.png';

interface Props {
    headerText?: any,
    subText?: any,
    children: ReactNode
}



export default function AuthLayout({ headerText, subText, children }: Props) {
    const boxStyle = `w-full bg-white h-[100vh] grid lg:grid-cols-2 grid-cols-1`;
    const h1Style = `font-[AvertaStd-Semibold] text-[40px] leading-[58.8px] text-center text-ryd-headerTextPrimary font-[400]`;
    const pStyle = `font-[AvertaStd-Light] font-[400] text-[18px] leading-[26px] text-center text-ryd-subTextSecondary mt-2`;
    const containerStyle = `lg:w-[85%] w-full mx-auto py-[40px] h-[100vh] py-[3rem] overflow-y-auto`
    const bodyContainerStyle = `lg:px-[3.5rem] px-[1.5rem]`;

    return (
        <div className={`${boxStyle}`}>
            <div className="bg-ryd-primaryLess1 relative h-full col-span-1 hidden lg:grid">
                <div className="relative top-[5rem] ">
                    <img src={authImg} alt="auth" className="absolute -top-[3rem] h-[300px] w-[300px] right-[33%]" />
                    <img src={teacherImg} alt="teacher" className="absolute z-10 h-[450px] w-[450px] object-contain ml-[8rem] top-[2rem]" />
                </div>
                {/* <img src={authImg} alt="auth-bg" className="relative top-[13rem] left-[8rem]" /> */}
                <div data-aos="fade-right" className=" mt-[30rem] px-[50px]">
                    <h1 className={`${h1Style}`}>{headerText || <>Elevate Minds, Ignite Passions</>}</h1>
                    <p className={`${pStyle}`}>{subText || <>Join our educational community as a teacher and shape the <br /> future through inspiring lessons and personalized guidance.</>}</p>
                </div>
            </div>
            <div className="col-span-1">
                <div className={`${containerStyle} scrollbar`}>
                    <div className={`${bodyContainerStyle}`}>{children}</div>
                </div>
            </div>
        </div>
    )
}