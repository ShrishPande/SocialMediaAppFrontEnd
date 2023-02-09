import axios from "axios"

import { BASE_URL } from "./helper"
const API=axios.create({baseURL:BASE_URL})

export const uploadImage=(data)=>API.post('/upload',data)
export const uploadPost=(data)=>API.post('/post',data)