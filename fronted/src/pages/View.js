 
 import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
 import http from "../http"
 const View =()=>{
 const [users,setUsers]=useState([]);
 useEffect(()=>{
 fetchUsers();
 },[]);


 const fetchUsers =()=>{
    http.get("/users").then(res=>{
       setUsers(res.data); 
    })
 }

 const deleteuser =(id)=>{
   http.delete("/users/"+id).then(res=>{
      fetchUsers(); 
   })
}

    return(
        <div>
        <div className="container">
           <div className="row">
               <div className="col-md-12">
                  <table className="table">
                     <tr>
                    <th>SNO</th>
                    <th>name</th>
                    <th>email</th>
                    <th>Button</th>
                    </tr>
                     {users.map((user,i)=>(
                        <tr>
                        <td>{++i}</td>
                         <td>{user.name}</td>
                         <td>{user.email}</td>
                         <td>
                          <Link className="btn btn-info" to={{pathname:"/edit/"+user.id}}>Eidt</Link>
                          <button type="button" className="btn btn-danger" onClick={()=>{deleteuser(user.id)}}>Delete</button>
                         </td>
                    </tr>

                     ))}
                    

                  </table>

               </div>

           </div>

        </div>
        
        
        
        </div>
    )
    
    
    }
    
    export default View;