import { useState , useEffect } from 'react'
import './App.css'
import {db} from './firebase-config'
import { collection, getDocs } from 'firebase/firestore'

 function   App() {

  type user = [any,any]
  const [users,setUsers]:user = useState([])
  const usersCollectionRef =  collection(db,"users")

  useEffect(() => {
    console.log(db)

    const getUsers = async ()=>{

      const data = await getDocs(usersCollectionRef)
      // console.log(data) 
      setUsers(data.docs.map(doc => ({...doc.data(),id:doc.id})))

    }
    getUsers()
  }, [])

  console.log(users)

  return (
    <>
      
    </>
  )
}

export default App
