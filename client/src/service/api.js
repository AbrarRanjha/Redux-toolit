import axios from 'axios'
const url="http://localhost:8000"


export const PostStudent=async(data)=>{
    const student=await axios.post(`${url}/signup`,data)
    return student;
}

export const LoginStudent=async(data)=>{
    const student=await axios.post(`${url}/login`,data)
    return student;
}


