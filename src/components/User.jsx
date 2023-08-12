import React from 'react'
import '../App.css'
import { doc } from 'firebase/firestore'
import {db} from '../firebase-config'
import { updateDoc , deleteDoc} from 'firebase/firestore'


function User({user, getUsers,setName , setAge , setEmail , setPassword ,submit , Name , Age , Email , Password}) {
    console.log(user)

    const updateUser = async(id)=>{
        console.log("update user")
        setName(user.Name)
        setAge(user.Age)
        setEmail(user.Email)
        setPassword(user.Password)
        submit(false)

        const userDOc = doc(db,"users",id)
        const dataFields = {
            Name,
            Age,
            Email,
            Password,
        }
        await updateDoc(userDOc,dataFields)
    }

    const deletUser = async (id)=>{

        const userDOc = doc(db,"users",id)
        await deleteDoc(userDOc)
        await getUsers()
    }
  return (
     <div className="user">
          <div className="user-name">{user.name}</div>
          <div className="user-age">{user.age}</div>
          <div className="user-email">{user.email}</div>
          <div className="actions">
            <button onClick={()=>updateUser(user.id)} className="update">
              Update User
            </button>
            <button className="delete" onClick={deletUser(user.id)}>
              Delete User
            </button>
          </div>

        </div>
  )
}

export default User
