import './App.css';
import React , {useState, useEffect} from 'react'
import { getData } from './api/getData';
import UserCard from './components/UserCard';
import Loader from './components/Loader';
import {useSelector, useDispatch} from 'react-redux';
import {metaDataLoad} from './reducer/userDataActions'

function App() {
  const userData = useSelector(state => state)
  const [selectedId, setSelectedId] = useState(0);
  const dispatch = useDispatch();
  
  const fetchData = async () => {
    try {
      let res = await getData();
      dispatch(metaDataLoad(res.data))
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=> {
    fetchData();  
  },[])

  if(!userData)
    return <Loader/>

  return (
    <div className="App">
      <UserCard id={selectedId}/>
      
      <div className='btn-container'>
        {Array.from({length:userData.total},(_,id)=> 
          <button className='btn' style={{backgroundColor:selectedId===id+1?'gray':'#8b509d'}} onClick={()=>setSelectedId(id+1)}>{id+1}</button>
        )}
      </div>
     
    </div>
  );
}

export default App;
