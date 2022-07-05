import {useState} from "react";
import{useNavigate} from "react-router-dom"
import http from "../http";
const Create =()=>{
    const navigate =useNavigate();
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [pass,setpass]=useState();
     
const submitForm =()=>{
    var obj ={
        name:name,
        email:email,
        password:pass
    }
    http.post("/users",obj).then((res)=>{
        navigate("/");
    })
   

}

return(
    <div>
    <h1>Create User</h1>
     <div className="card"> 
      <div className="card-body">
        <input type="text" className="form-control m-2" placeholder="Entere Name"
           onChange={e => setname(e.target.value)}
        /> 
        <input type="email" className="form-control m-2" placeholder="Entere Email"
           onChange={e => setemail(e.target.value)} 
        /> 
        <input type="password" className="form-control m-2" placeholder="**********"
           onChange={e => setpass(e.target.value)}
        /> 
        <input type="button" onClick={submitForm} className="btn btn-success m-2" value="Create" /> 



      </div>

     </div>

    </div>
)


}

export default Create;