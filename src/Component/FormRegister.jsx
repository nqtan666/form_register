
function FormRegister() {
  return (
    <div> 
      <form>
        <div className="mb-3">
          <label className="form-label ">Name</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label  ">Gender</label>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" />
            <label className="form-check-label" >
              Male
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="flexRadioDefault" />
            <label className="form-check-label" >
              Female
            </label>
          </div>
        </div>  
        <div className="mb-3">
          <label  className="form-label ">Bio</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label ">Code Language</label>
          <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" />
              <label className="form-check-label" >
                PHP
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="form-check-label" >
              JAVA
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label ">Email address</label>
          <input type="email" class="form-control" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label class="form-label ">Status</label>
          <select class="form-select ">
            <option selected>Open this select menu</option>
            <option value="1">Pending</option>
            <option value="2">Complete</option>
          </select>
        </div>
        <div className="mb-3">
          <label class="form-label">Password</label>
          <input type="password" class="form-control" />
        </div>
        <div className="mb-3">
          <label class="form-label">Confirm-Password</label>
          <input type="password" class="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormRegister;