import { useState , useEffect } from 'react'
import './App.css'
import {db} from './firebase-config'
import { collection, getDocs ,addDoc} from 'firebase/firestore'
import User  from './components/User';

 function   App() {
  const [users,setUsers] = useState([])
  const [name,setName] = useState('')
  const [age,setage] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [submit,setSubmit] = useState(true)

  const usersCollectionRef =  collection(db,"users")
  const getUsers = async ()=>{

    const data = await getDocs(usersCollectionRef)
    console.log(data) 
    setUsers(data.docs.map(doc => ({...doc.data(),id:doc.id})))

  }

  useEffect(() => {
    getUsers()
  }, [])

  console.log(users)
  const [alert,setAlert] = useState(false)

  const handleSubmit = async() => {

    await addDoc( usersCollectionRef, {name,age,email,password})
    setAlert(true)
    setTimeout(() => {
      setAlert(false)
    }, 2000)
    await getUsers()
  }

  const handleUpdate = async() => {

  }
  return (
    <div className='main'>
    <div className='formContainer'>
      {
        alert && <div className='alert'>This is an alert</div>
      }
      <input type='text' className='form-input' placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type='text' className='form-input' placeholder='Enter your age' value={age} onChange={(e)=>setage(e.target.value)}/>
      <input type='text' className='form-input' placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type='text' className='form-input' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button className='btn-submit' onClick={submit?handleSubmit:handleUpdate}>{submit?"Submit": "Update" }</button>
    </div>
    <div className='usersContainer'>
      <h1>Users</h1>
      <div className='users'>
        {
          users.map((user:any,index)=>{
            return(
              <User  getUsers = {getUsers} Name = {name} Email = {email} Age={email} Password ={password} index={index} setName={setName} submit={setSubmit} setAge ={setage} setEmail ={setEmail} setPassword ={setPassword}user={user} />
            )
          })
          
        }


      </div>
    </div>
    </div>
  )
}

export default App
