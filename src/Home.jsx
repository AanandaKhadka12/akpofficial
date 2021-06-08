import React from 'react';
import { NavLink } from 'react-router-dom';
import camera from "../src/images/camera1.jpg";
import Common from './Common';


const Home = () =>{


    return(

        <>

            <Common 
             name="Capture your moments with"
             content="We provide the best photoshoot with special offers."
             imggsrc={camera}
             visit="/service"
             btname="Get Started"
            />


        </>



    );


}

export default Home;