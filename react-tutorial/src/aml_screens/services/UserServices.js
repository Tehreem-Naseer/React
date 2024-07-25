import axios from 'axios';

class UserServices{
    static BASE_URL = "http://localhost:8080"

    static async login(email,password){
        try {
            const response = await axios.post(`${UserServices.BASE_URL}/auth/login`,{email,password})
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default UserServices;