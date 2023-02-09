import axios from "axios"
import { BASE_URL } from "./helper"
const API=axios.create({baseURL:BASE_URL})

export const logIn =(formData)=>{
    return API.post('/auth/login',formData)
}
export const signUp =(formData)=>{
    return API.post('/auth/register',formData)
}