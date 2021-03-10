import React, { useState } from "react";



const Contact = () => {
  
  const [data, setData] = useState([
    {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    }
  ]);

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
     
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}`);
  }
  return (
    <>
    <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div" >
      <div className="row">
        <div className="col-md-6 col-10 mx-auto" >
          <form onSubmit={formSubmit}>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your FullName" />
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
            </div>
            
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="text" name="phone" value={data.phone} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phoen" />
            </div>
           
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea name="message" value={data.message} onChange={InputEvent} className="form-control"  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
              <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
          </form>
        </div>
      </div>
    </div>
</>
  );
}

export default Contact;
