import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

//Register user function
export const registerUser = async(credentials)=>{
    try {
      const {data:{message},status}= await axios.post(`http://localhost:8065/api/user/register`, credentials)

      let {user_name,email} = credentials;

      // send email

      if(status === 201){
        await axios.post(`/api/user/registermail` ,{user_name:user_name,userEmail:email,text:message} )
      }

    } catch (error) {
      return Promise.reject({error});
    }
}

//Login user Function

export const verifyPassword = async ({user_name,password})=>{
  try{
    if(user_name){
      const {data} = await axios.post(`/api/user/login`, {user_name,password} )
      return Promise.resolve({data})
    }
  }catch (error) {
    return Promise.reject({error:"passowrd does not match"});
  }
}

//Update user details
export const updateUser = async (response)=>{
    try {
        const token = await localStorage.getItem('token');
        const data = await axios.put('/api/user/update',response,{headers:{"authorization":`Bearer ${token}`}})
        console.log(data)
        return Promise.resolve({data})
    } catch (error) {
      return Promise.reject({error:"Could Not update the profile"})
      
    }
}


//Genarate OTP
export const genarateOTP = async (email) => {
  try {
    const { data, status } = await axios.get(`/api/user/genarateOTP?email=${email}`);

    if (status === 201) {
   
      console.log(data.code)
      let text = `Your password recovery OTP is ${data.code}. Verify and Recover your password`;
      await axios.post('/api/user/registermail', { user_name: data.user_name, userEmail: email, text, subject: "Password recovery OTP" });
      return { code: data.code };
    }
    return Promise.reject({ error: "Invalid email address or email not found" });
  } catch (error) {
    return Promise.reject({ error });
  }
}

//Verify OTP

export const verifyOTP = async ({code,email})=>{
  try {
    const {data,status} = await axios.get(`/api/user/verifyOTP?code=${code}&email=${email}`);
    console.log('Response Data:', data);
    console.log('Status Code:', status);
    return {data, status};
  } catch (error) {
    return Promise.reject(error);
  }
}

export const resetPassword = async ({email,password})=>{
  try {
    const {data,status} = await axios.put('/api/user/forgetpassword',{email,password});
    return Promise.resolve(data,status);
    
  } catch (error) {
    return Promise.reject(error);
  }
}