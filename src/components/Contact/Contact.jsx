import React, { Component } from 'react';
import './contact.css';


class Contact extends Component {
    render() {
        return <>

        <section className=''>
        <div  className="mb-4">
            <div  className="pt-3 conatiner">
                <div  className="text-center pt-4" >
                    <h2  className="text-uppercase mb-3 fs-1 fw-bolder content">conatct section</h2>
                    <div  className="d-flex align-items-center justify-content-center mb-3">
                    <div  className="line me-3" >
                    </div>
                    <i  className="fa-solid fa-star content"></i>
                    <div  className="line ms-3" >
                    </div>
                </div>
            </div>
                                    
            <form  novalidate="" action="" className="w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid">
                <input  id="userName" type="text" placeholder="userName" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"/>
                <input  id="userAge" type="text" placeholder="userAge" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"/>
                <input  id="userEmail" type="text" placeholder="userEmail" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"/>
                <input  id="userPassword" type="text" placeholder="userPassword" name="userName" className="form-control border-0 border-bottom py-3 position-relative ng-untouched ng-pristine ng-valid"/>
                <button  className="btn mt-4 text-white bg-success" > send Message </button>
            </form>
        </div>
        </div>
        </section>
        
        
        
        
        
        </>
    }
}

export default Contact;
