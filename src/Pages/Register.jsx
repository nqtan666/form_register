import React from "react";
import FormRegister from "../Component/FormRegister";
function Register(){
    return(
        <div className="col ">
            <div className="col-md-6 offset-md-3 border border-primary p-5">
                <h1 className="text-center text-danger">Register</h1>
                <FormRegister/>
            </div>
        </div>
    )
}
export default Register