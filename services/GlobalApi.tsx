import axios from'axios'

const axiosClient=axios.create({
    baseURL:'http://192.168.1.11:1337/api',
    headers:{
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_STRAPI_API_KEY}`
    }
})

const createUser=(data:any)=>axiosClient.post('/user-lists',{data:data})
const getUserByEmail=(email:string)=>axiosClient.get('/user-lists?filters[email][$eq]='+email);
const getCategories=()=>axiosClient.get('/categories?populate=*')


export default{
    getUserByEmail,
    createUser,
    getCategories
}