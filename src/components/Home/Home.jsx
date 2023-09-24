import React, { Component } from 'react';
import './home.css';


class Home extends Component {
    render() {
        return <>
        
        

    
            <home class="home d-flex justify-content-center align-items-center text-white">
                <div class="text-center">
                    <img src={require("../../images/homeimg.png")} alt="home image" class="mb-3"/>
                    <div class="text-center pt-4">
                        <h2 class="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                        <div class="d-flex align-items-center justify-content-center mb-3">
                            <div class="line me-3 bg-white">
                            </div>
                            <i class="fa-solid fa-star"></i>
                            <div class="line ms-3 bg-white">
                            </div>
                        </div>
                    </div>
                    <div>Graphic Artist - Web Designer - Illustrator</div>
                </div>
            </home>
    
        
    
        
        
        </>
    }
}

export default Home;
