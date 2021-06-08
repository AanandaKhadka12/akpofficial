import React from 'react';
import Common from './Common';
import camera from "../src/images/camera2.jpg";

const About = () =>{


    return(

        <>

            <Common 
             name="Welcome to About page"
             content="Contact us for any kind of photoshoot."
             imggsrc={camera}
             visit="/contact"
             btname="Contact Now"
            />


        </>



    );


}

export default About;