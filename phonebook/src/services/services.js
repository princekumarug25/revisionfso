import axios from "axios"

const baseUrl = 'http://localhost:3000/persons'
const getAll = ()=>{
    const result = axios.get(baseUrl)
    return result.then(result => result.data)
}
const create = (data)=>{
    const result = axios.post(baseUrl,data)
    return result.then(result => result.data);
}
const remove = (id)=>{
    const result = axios
    .delete(`${baseUrl}/${id}`)
    return result;
}
const update = (id,data)=>{
    const result = axios
    .put(`${baseUrl}/${id}`,data)
    return result;
}
export default {getAll,create,remove,update}