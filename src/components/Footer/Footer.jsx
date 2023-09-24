import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return <>





            <footer className="foot1">
                <div className="container">
                    <div className="row text-white p-5">

                        <div className="col-md-4 text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>


                        <div className="col-md-4 text-center">
                            <h3>AROUND THE WEB</h3>
                            <div className="icons">
                                <i className="fa-brands fa-facebook mx-1 p-2 icon"></i>
                                <i className="fa-brands fa-twitter mx-1 p-2 icon"></i>
                                <i className="fa-brands fa-linkedin-in mx-1 p-2 icon"></i>
                                <i className="fa-solid fa-globe mx-1 p-2 icon"></i>
                            </div>
                        </div>


                        <div className="col-md-4 text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
                        </div>

                    </div>
                </div>
            </footer>
            <div className="p foot2 text-center text-white p-3 w-100">
                <div className='container '>
                    <p>Copyright © Your Website 2021</p>
                </div>
            </div>

        </>
    }
}

export default Footer;
