import Request from 'superagent';
import { SubmissionError } from 'redux-form'
//import config from '../config';

let apiBaseUrl = '/';
if(process.env.NODE_ENV == 'production') {
    apiBaseUrl = 'http://209.250.243.231:4000'
} else {
    apiBaseUrl = 'http://localhost:2000'
}

 
export function getSingleUser(userId){  
    const url = `${apiBaseUrl}/userFindById/${userId}`;
    return  Request.get(url).then((response=>{
        return{
            type : "GET_USER_BY_ID",
            payload : response.body
        }
    }))
    
}

export function getUserData(){  
    const url = `${apiBaseUrl}/getUserData`;
    return  Request.get(url).then((response=>{
        return{
            type : "USER_DATA_FROM_DB",
            payload : response.body
        }
    }))
    
}
//----------Sign Up----------
export function signUp(data){  

    console.log("signup fun vals",data)
    const url = `${apiBaseUrl}/api/signup`;
    return  Request.post(url).send(data).then(response=>{
        return {
            type : "USER_SIGNUP",
            payload : response.body
        }
    })
    .catch((err)=>{
        throw new SubmissionError({_error: 'Email Alredy Exist!' })
    })
}
//----------login----------
export function loginAction(data){  
    console.log("data",data)


    const url = `${apiBaseUrl}/api/login`;
    return  Request.post(url).send(data).then(response=>{
        console.log("data",response.body.data)
        localStorage.setItem("token",response.body.token);

        return {
            type : "USER_LOGIN",
            payload : response.body.data
        }
    })
    .catch((err)=>{
        throw new SubmissionError({_error: 'Email OR Password Invalid!' })
    })
}
//----------UPDATE----------
export function update(data){ 
    console.log("data>>>>>>",data)
    let id = data._id 
    let token = localStorage.getItem('token')
    console.log(token)
    const url = `${apiBaseUrl}/updateUser/${id}`;
     return  Request.put(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
     .send(data).then(response=>{
        console.log("data",response)
        //localStorage.setItem("loadLogin",JSON.stringify(response.body));

        return {
            type : "USER_UPDATE",
            payload : response.body
        }
    })
    .catch((err)=>{
        throw new SubmissionError({_error: err })
    })
}
//----------Logout----------
export function logout(){  
    localStorage.clear();
    return{
        type : "USER_LOGOUT",
        
    }
}
//----------Reinitiate Logged user----------
export function loadLogin(userData){  
    return{
        type : "LOAD_LOGIN",
        payload: userData
        
    }
}
//----------get user data through token----------
export function getUserDataByToken(){ 
    let token = localStorage.getItem('token')
    const url = `${apiBaseUrl}/api/singleUserData`;
     return  Request.get(url).set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
     .then(response=>{
        console.log("data by token send ",response)
        return{
            type : "LOAD_LOGIN",
            payload: response.body
            
        }
    })
    .catch((err)=>{
        throw new SubmissionError({_error: err })
    })
}

   



