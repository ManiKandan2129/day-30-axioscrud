import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Common = createContext();


const intialvalue = {
    name:"",
    username:"",
    email:"",
  }

function CommonData({children}){
const[insertvalues, setinsertvalues] = useState(intialvalue) 
const[datas, setdata] = useState([]);
const[edit, setedit] = useState(null);
const navigate = useNavigate();
const[useradded, setuseradded] = useState(false);
const[userdeleted, setdeleted] = useState(false);
const[userupdated, setupdated] = useState(false)

function FromChange(e){
    const {name,value} = e.target;
    setinsertvalues({...insertvalues,[name]:value,})
  }


useEffect(()=>{
    const jsonapi = axios.get("https://6508472a56db83a34d9c0d72.mockapi.io/all");
    jsonapi.then((response)=>{
    setdata([...response.data])
})
},[useradded, userdeleted, userupdated])

const FormSubmit = (event)=>{
    event.preventDefault();
    axios.post("https://6508472a56db83a34d9c0d72.mockapi.io/all",insertvalues).then((response)=>{
        setinsertvalues({...insertvalues,name:"",username:"",email:""})
        navigate('/user-details')
        setuseradded(!useradded)
    })
  }

const userdelete = async(id)=>{
    await axios.delete(`https://6508472a56db83a34d9c0d72.mockapi.io/all/${id}`)
    setdeleted(!userdeleted)
}  

const useredit = (id)=>{
     axios.get(`https://6508472a56db83a34d9c0d72.mockapi.io/all/${id}`).then((response)=>{
        setinsertvalues({...insertvalues, 
            name:response.data.name, 
            username:response.data.username,
            email:response.data.email})
            navigate('/')
            setedit(response.data.id)
    })
}
const userupdate = async()=>{
    await axios.put(`https://6508472a56db83a34d9c0d72.mockapi.io/all/${edit}`,insertvalues).then((response)=>{
        setinsertvalues({...insertvalues,name:"",username:"",email:""})
        navigate('/user-details')
        setedit(null)
        setupdated(!userupdated)
    })
}

const cancelupdate = ()=>{
    setinsertvalues({...insertvalues,name:"",username:"",email:""})
    setedit(null)
}


return (
    <Common.Provider value={{
        datas, 
        setdata, 
        FormSubmit, 
        userdelete, 
        useredit,
        insertvalues,
        setinsertvalues,
        FromChange,
        edit,
        userupdate,
        cancelupdate
        }}>
        {children}
    </Common.Provider>
);


};

export {Common, CommonData}