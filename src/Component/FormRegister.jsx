import React from "react";
import { useForm   } from "react-hook-form"
function FormRegister() {
  const {register, handleSubmit , formState :{errors}} = useForm();
  const onSubmit = (data) => {
      console.log(data);
  }
  console.log(errors)
  return (
    <div> 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label ">Name</label>
          <input 
            type="text"
            className="form-control"
            id="name"
             {...register("name",{
              required : true
             })}
          />
          <div>
           
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label  ">Gender</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="male"  {...register('gender')} />
            <label className="form-check-label" >
              Male
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="gender" value="female" {...register('gender')} />
            <label className="form-check-label" >
              Female
            </label>
          </div>
        </div>  
        <div className="mb-3">
          <label  className="form-label ">Bio</label>
          <textarea className="form-control" name="bio"  rows="3" {...register('bio')}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label ">Code Language</label>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="php"{...register('codelanguage')} />
              <label className="form-check-label" >
                PHP
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="java" {...register('codelanguage')} />
            <label className="form-check-label" >
              JAVA
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label ">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" id="email" {...register('email')}/>
        </div>
        <div className="mb-3">
          <label className="form-label ">Status</label>
          <select className="form-select" name="status" {...register('status')}>
            <option value="Pending">Pending</option>
            <option value="Complete">Complete</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password"  className="form-control" name="password" {...register('password')} />
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm-Password</label>
          <input type="password"  className="form-control" {...register('confirmpassword')} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormRegister;