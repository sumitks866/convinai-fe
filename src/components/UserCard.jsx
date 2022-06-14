import React, {useState, useEffect}  from 'react'
import { getUser } from '../api/getUser'
import Loader from './Loader'

import './UserCard.css'

function UserCard({id}) {

  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState()

  const fetchUser = async () => {
    try {
      setLoading(true)
      const res = await getUser(id) 
      setUser(res.data.data)
    }catch(err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUser();    
  }, [id])
  
  if(!user) 
    return <div className='user-card'><div style={{fontWeight:'600', fontSize:'1.2rem', margin:'auto'}}>Click on any button to get user details</div></div>

  return (
    <div className='user-card'>
     {loading?<div className='loader-container'> <Loader/> </div>:<> <div className='background'></div>
      <img src={user.avatar} alt='Profile'/>
      <div className='user-details'>
        <div className='name'>{user.first_name} {user.last_name}</div>
        <div className='email'>{user.email}</div>
      </div></>}
    </div>
  )
}

export default UserCard