import React from 'react'

const Contact = () => {
    const done = ()=>{
        alert("Thanks! for contacting us.")
    }
    return (
       <>
            <div className="my-5">
                    <h1 className="text-center">Contact Us</h1>
            </div>
                <div className="container contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={done}  style={{fontWeight:'bold'}}>
                               <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                        <input type="text"  style={{fontWeight:'bold'}} className="form-control" id="exampleFormControlInput1" required placeholder="Enter Your Name"/>
                               </div>
                               <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                        <input  style={{fontWeight:'bold'}} type="number" className="form-control" id="exampleFormControlInput1" required placeholder="Mobile Number"/>
                               </div>
                               <div className="mb-3">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                        <input  style={{fontWeight:'bold'}} type="email" className="form-control" id="exampleFormControlInput1" required placeholder="name@example.com"/>
                               </div>
                               <div className="mb-3">
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                        <textarea  className="form-control" id="exampleFormControlTextarea1" rows="3" required ></textarea>
                             </div>
                             <div className="col-12">
                                        <button className="btn btn-outline-primary" type="submit">Submit form</button>
                             </div>
                            </form>
                        </div>

                    </div>
                </div>
       </>
    );
}

export default Contact;
