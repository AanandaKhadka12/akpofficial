import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) =>{

    return(

        <>

        <div className="col-md-4 col-10 mx-auto mb-4">

            <div className="card">
                <img src={props.imgsrc} className="card-img-top" alt="imgall" height="200px" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.moto}</p>
                    <NavLink to="/contact" className="btn">Contact Us</NavLink>
                </div>
            </div>


        </div>

        </>



    );



}

export default Card;