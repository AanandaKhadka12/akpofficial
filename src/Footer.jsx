import React from 'react';


const Footer = () =>{

    const date = new Date().getFullYear();



    return(

        <>

            <footer className="mt-4 w-100 bg-light text-center">

                <p>©️ {date} AKP Official. All Rights Reserved | Terms and conditions </p>

            </footer>

        </>


    );


}


export default Footer;