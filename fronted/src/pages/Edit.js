import {useEffect, useState} from "react";
import{useNavigate, useParams} from "react-router-dom"
import http from "../http";
const Edit =(props)=>{
    const navigate =useNavigate();
    const [name,setname]=useState();
    const [email,setemail]=useState(); 
    const {id}=useParams();

    useEffect(()=>{
        fetchUser();
    },[]);

  const fetchUser =()=>{
      http.get("/users/"+id+"/edit").then((res)=>{
             const {name,email}=res.data;
             setname(name)
             setemail(email)
           

      })
  }  
     
const updatedata =()=>{
    var obj={
        name:name,
        email:email
    }
    http.put("/users/"+id,obj).then((res)=>{
       navigate("/view"); 
    })
   

}

return(
    <div>
    <h1>Edit User</h1>
     <div className="card"> 
      <div className="card-body">
        <input type="text" className="form-control m-2" placeholder="Entere Name"
           onChange={e => setname(e.target.value)}
           value={name}
        /> 
        <input type="email" className="form-control m-2" placeholder="Entere Email"
           onChange={e => setemail(e.target.value)} 
           value={email}
        /> 
        
        <input type="button" onClick={updatedata}  className="btn btn-success m-2" value="Create" /> 



      </div>

     </div>

    </div>
)


}

export default Edit;