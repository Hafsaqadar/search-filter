import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {data} from './data.js';



const App = () => {
 const [search, setSearch] = useState('')
  return (
    <div className= 'container d-flex flex-column align-items-center mt-5'>
      <h1 className='text-center mb-4'>contact keeper</h1>
      <div className="col-12 col-md-6 col-lg-4">
      <div className="input-group mb-4 ">  
     
  <input type="text" className="form-control border-3 border-dark  py-2 my-3" placeholder="search contacts" 
   onChange={(e)=> setSearch(e.target.value)} />
</div>
</div>
<table className="table table-striped mx-5">
  <thead>
    <tr className="table-dark px-5" >
      
      <th scope="col">First Name</th>
      <th scope="col">Last name</th>
      <th scope="col">Email</th>
      <th scope="col">phone</th>
    </tr>
  </thead>
  <tbody>

    {data.filter((item) =>{
      return search.toLowerCase() === '' ? item : item.first_name.toLowerCase().includes(search);
    }).map((item) =>(
       <tr key={item.id} >

      <td>{item.first_name}</td>
      <td >{item.last_name}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
    ))}

   

  </tbody>
</table>
     </div>
  )
}

export default App
