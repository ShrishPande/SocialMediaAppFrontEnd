import axios from 'axios'
import { BASE_URL } from "./helper"
const API=axios.create({baseURL:BASE_URL})

export const getTimeLinePosts=(id)=>API.get(`/post/${id}/timeline`)
export const likePost =(id,userId)=>API.put(`post/${id}/like`,{userId:userId})