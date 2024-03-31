import { request } from "../hook/api";
import { PasswordUpdateProps, SwapProgramProps } from "./_model";

/**
 *
 * @param {string} url
 * @param {string, [GET, POST, PATCH, PUT...]} method
 * @param {payload} payload
 * @param {boolean} token
 * @param {boolean} text
 * @param {boolean} form
 * @param {string | null} xHash
 * @returns Response Data;
 */



class UserService {
    
    async passwordUpdate(payload: PasswordUpdateProps) {
        try {  
            const response = await request(
                '/teacher/auth/password-update' , 
                'POST',
                payload,
                true,
                false,
                false,
            )
            return response;
        }catch(err){
            throw err;
        }
    }

    async getActivity() {
        try {  
            const response = await request(
                '/teacher/get/activities' , 
                'GET',
                {},
                true,
                false,
                false,
            )
            return response;
        }catch(err){
            throw err;
        }
    }
   
    async getTeachers() {
        try {  
            const response = await request(
                '/teacher/get/all-teachers' , 
                'GET',
                {},
                true,
                false,
                false,
            )
            return response;
        }catch(err){
            throw err;
        }
    }

    async swapProgram(payload: SwapProgramProps) {
        try {  
            const response = await request(
                '/teacher/swap/set' , 
                'POST',
                payload,
                true,
                false,
                false,
            )
            return response;
        }catch(err){
            throw err;
        }
    }

}


export default UserService;