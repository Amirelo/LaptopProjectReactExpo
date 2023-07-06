import {axiosInstance} from '../../utils/axios';

export const signIn = async(username,password) =>{
    const data ={
        username:username,
        userPassword:password
    }
    console.log(data);
    const res = await axiosInstance.post('/user/sign-in.php',data);
    
    return res;
}

