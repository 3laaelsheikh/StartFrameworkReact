import React, { Component } from 'react';
import './about.css';


class About extends Component {
    render() {
        return <>
        
        
        <section className='about'>
        <div className=" text-white d-flex justify-content-center align-items-center">
            <div>
                <div className="text-center pt-4" >
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">about component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white">
                        </div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-white">
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row px-5">
                        <div className="col-md-6 ps-md-5">
                            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                        </div>
                        <div className="col-md-6 pe-5">
                            <p> Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </section>


        </>
    }
}

export default About;
