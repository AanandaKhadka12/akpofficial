import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const Service = () =>{


    return(

        <>

           <div className="my-5">

                <h1 className="text-center" 
                style={{color:"#565387" , fontSize:"30px"}}>Our Services</h1>

           </div>

           <div className="container-fluid">

                <div className='row'>

                    <div className="col-10 mx-auto">

                        <div className="row gy-4">


                            {

                                Sdata.map((ele,indx) =>{


                                   return <Card
                                    key={indx} 
                                    title={ele.title}
                                    imgsrc={ele.imgsrc}  
                                    moto={ele.moto}

                                    />


                                })

                            }
                            

                            

                        </div>

                    
                    </div>


                </div>

            </div>


        </>



    );


}

export default Service;