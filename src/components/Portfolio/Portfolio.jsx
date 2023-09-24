import React from 'react';
import {useState} from 'react'
import './portfolio.css';


export default function Portfolio () {


    const [ data , setData] = useState([
        {img:(require("../../images/one.png")), id:"img1"},
        {img:(require("../../images/two.png")), id:"img2"},
        {img:(require("../../images/three.png")), id:"img3"},
        {img:(require("../../images/one.png")), id:"img1"},
        {img:(require("../../images/two.png")), id:"img2"},
        {img:(require("../../images/three.png")), id:"img3"},
    ]);

    return  <>
            <section className='mb-4 pt-4 text-center'>
                
                <h2 className="text-uppercase mb-3 fs-1 fw-bolder content1">portfolio component</h2>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="line me-3">
                    </div>
                    <i className="fa-solid fa-star content1"></i>
                    <div className="line ms-3">
                    </div>
                </div>
        
                <div className="container">
                    <div className="row g-5">
                        {data.map( (item) => (
                        <>
                        <div className="col-lg-4 col-md-6">
                            <div className="items rounded-3 overflow-hidden position-relative">
                            <img src={item.img} alt="" className="w-100 rounded-3" />
                            <div data-bs-toggle="modal" data-bs-target={"#"+item.id} className="layer position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center">
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                            </div>
                        </div>
                        </>
                        ))}

                        {data.map( (item) => (<>
                            <div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-body p-0">
                                    <img src={item.img} alt="" className="w-100 rounded-3" />
                                </div>
                                </div>
                            </div>
                            </div>
                        </>))}
                    </div>
                </div>
            </section>     
        </>
    
}










