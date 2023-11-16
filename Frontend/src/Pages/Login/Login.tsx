import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../UserAuth/InputFields";
import { verifyPassword } from "../../UserAuth/API";

const Login = () => {
  const [username,setusername] = useState('');
  const [password,setpassword] = useState('');
  const [error,setError] = useState('');
  const [isLoading,setIsLoading] = useState(false);
  const navigate = useNavigate();
  



  const handleFormSubmit =async(e:React.FormEvent) =>{
      e.preventDefault();

      setError("");
      setIsLoading(true);

      try {
        const response =await verifyPassword({user_name:username,password});

        if(response && response.data){
          setError("Login Success!");
          localStorage.setItem('token',response.data.token);
      
          
        }else{
          setError("User name and Passowrd required")
        }
        
      } catch (error) {
        setError("User name or password incorrect")
        
      }finally{
        setIsLoading(false);
      }
  }

 
  return (
    <>
      <form className="items-center justify-center p-9 md:pl-40 md:pr-40" onSubmit={handleFormSubmit}>
        <div className="justify-center mb-10 heading">
          <h1 className="mb-5 text-2xl font-extrabold md:text-4xl font-volkhavo">
            FASCO
          </h1>
          <p className="mb-5 ml-auto mr-auto text-2xl font-semibold text-center mt-7 font-popins">
           
           {isLoading ? "Logging in..." : "Log in"} 
          </p>
        </div>
        <InputField             
          label="User Name"
          name="Username"
          type="text"
          value={username}
          onChange={setusername}
          error=""
        />

        <InputField
          label="Password"
          name="psw"
          type="password"
          value={password}
          onChange={setpassword}
          error=""
        />
           {error && (
          <div className="mt-2 text-center text-red-500 font-popins">
            {error}
          </div>
        )}
        <div className="items-center justify-center clearfix mb-5 text-center signPage mt-7">
          <button
            type="submit"
            className="pt-4 pb-4 pl-20 pr-20 text-center sm:pt-4 sm:pb-4 sm:pl-40 sm:pr-40 signupbtn"
            disabled={isLoading}
          >
            Log in
          </button>
        </div>
        <div className='mt-2 text-center backToLoginText font-popins'>
            <span className='font-extrabold cursor-pointer text-slate-500 hover:text-red-400'  ><Link to={'/signup'}>Create an account ?</Link></span>
            <p  className="mt-3 text-sm font-bold cursor-pointer font-popins hover:text-red-400"><Link to={'/forgetpassword'}>Forget Password</Link></p>
          </div>
     
      </form>
      <hr />
    </>
  );
};

export default Login;
