import axios from "axios";
const REST_API_URL  = "http://localhost:8080/user";


const getUsers = () => {
    return axios.get(REST_API_URL);
}
type userinfo = {
    name: string
    email: string
    password?: string
}
const addUser = (data: userinfo) => {
    return axios.post(REST_API_URL, data);
}
const removeUser = (id: number) => {
    return axios.delete(`${REST_API_URL}/${id}`);
}
const getUserId = (id: number) => {
    return axios.get(`${REST_API_URL}/${ id}`);
}    

const updateUser = (id: number, data: userinfo) => {
    return axios.put(`${REST_API_URL}/${id}`, data);
}
const Service = { 
    getUsers, 
    addUser,
    removeUser,
    getUserId,
    updateUser
}

export default Service 
