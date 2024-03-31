import { Navigate, RouteObject } from "react-router-dom";
import { CreateNewPassword, ErrorPage, ForgotPassword, Home, Profile, SignIn, SignUp } from "../pages";
import SuccessPage from "../pages/auth/sign-up/SuccessPage";


const routes: RouteObject[] = [
    { path: '/', element: <Navigate to="/teacher/sign-in" replace />},
    { path: '/teacher/sign-up', element: <SignUp />},
    { path: '/teacher/sign-in', element: <SignIn />},
    { path: '/teacher/forgot-psd', element: <ForgotPassword />},
    { path: '/teacher/create-psd', element: <CreateNewPassword />},
    { path: '/teacher/home', element: <Home/> },
    { path: '/teacher/activity', element: <Profile /> },

    { path: '/success', element: <SuccessPage />},
    { path: '*', element: <ErrorPage />}
];

export { routes };
