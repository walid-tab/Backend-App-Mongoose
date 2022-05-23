import axios from 'axios'
import { GET_CONTACTS } from '../actionTypes'

export const getContacts=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/api/users")
        dispatch({type:GET_CONTACTS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

export const addContact = (newUser,navigate)=> async(dispatch)=>{
    try {
        const res=await axios.post("/api/addUser",newUser)
        navigate("/")
        dispatch(getContacts())
        } catch (error) {
        
    }
}

export const deleteContact = (id)=> async(dispatch)=>{
    try {
        const res=await axios.delete(`/api/delete/${id}`)        
        dispatch(getContacts())
        } catch (error) {
        
    }
}