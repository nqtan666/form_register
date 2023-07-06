import React from "react";
import { useForm   } from "react-hook-form"
function FormRegister() {
  const {register, handleSubmit , formState :{errors} , watch} = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }
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
          {errors.name?.type && <div className="text-danger">Name is required</div>}
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label  ">Gender</label>
          <div className="form-check">
            <input
               className="form-check-input"
               type="radio" 
               name="gender" 
               value="male" 
               {...register('gender',{
                required :true
               })}
              />
            <label className="form-check-label" >
              Male
            </label>
          </div>
          <div className="form-check">
          <input
               className="form-check-input"
               type="radio" 
               name="gender" 
               value="female" 
               {...register('gender',{
                required :true
               })}
              />
            <label className="form-check-label" >
              Female
            </label>
          </div>
          <div>
          {errors.gender?.type && <div className="text-danger">Gender is required</div>}
          </div>
        </div>  
        <div className="mb-3">
          <label  className="form-label ">Bio</label>
          <textarea 
            className="form-control"
            name="bio"  
            rows="3"
            {...register('bio',{
              required: true,
              minLength: 10,
              maxLength: 50,
            })}>
            </textarea>
            {errors.bio && errors.bio.type ==='required' && <div className="text-danger">Bio is required</div>}
            {errors.bio && errors.bio.type ==='minLength' && <div className="text-danger">Chiều dài tối thiểu là 10 chữ</div>}
            {errors.bio && errors.bio.type ==='maxLength' && <div className="text-danger">Chiều dài tối đa là 100 chữ</div>}
        </div>
        <div className="mb-3">
          <label className="form-label ">Code Language</label>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="php"{...register('codelanguage',{
                required:true
              })} />
              <label className="form-check-label" >
                PHP
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="java" {...register('codelanguage',{
              required:true
            })} />
            <label className="form-check-label" >
              JAVA
            </label>
          </div>
          {errors.codelanguage && <div className="text-danger">Code Language is required</div>}
        </div>
        <div className="mb-3">
          <label className="form-label ">Email address</label>
          <input type="email" className="form-control" placeholder="name@example.com" id="email" {...register('email',{
            required:true,
            pattern:  {
             value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
             message :'Không đúng định dạng mail'
            }
          })}/>
           {errors.email && errors.email.type =='required' && <div className="text-danger">Email is required</div>}
           {errors.email && errors.email.type =='pattern' && <div className="text-danger">{errors.pattern.message}</div>}
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
          <input type="password"  className="form-control" name="password" {...register('password',{
            required : true,
            minLength : 8,
            pattern: /(?=.*[!@#$%^&*])/
          })} />
           {errors.password && errors.password.type =='required' && <div className="text-danger">Password is required</div>}
           {errors.password && errors.password.type =='minLength' && <div className="text-danger">Password must be at least 8 characters long</div>}
           {errors.password && errors.password.type =='pattern' && <div className="text-danger">Password must not contain special characters</div>}
           
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm-Password</label>
          <input type="password" name="confirmpassword"  className="form-control" {...register('confirmpassword',{
            required:true,
            validate:(value) => value === watch('password') || "Passwords do not match"
          })} />
          {errors.confirmpassword && errors.confirmpassword.type =='required' && <div className="text-danger">Password is required</div>}
          {errors.confirmpassword && errors.confirmpassword.type =='validate' && <div className="text-danger">{errors.confirmpassword.message}</div>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormRegister;