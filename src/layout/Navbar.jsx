import React from 'react'
import "../App.css"
const Navbar = () => {
  return (
    <nav>
    
        <div className="row navis d-flex justify-content-center">
            <div className="col-2 mt-5 ms-5" style={{width: 370+'px'}}>
                    <h2>MEDIA INTER MITRA</h2>
            </div>
            
                <div className="col col-2 ms-auto mt-5 p-2">
                    
                    <a href="" className='px-2'>Ikuti Kami</a>
                    <a href="" className='px-2'>Redaksi</a>
                    <a href="" className='px-2'>Login</a>
                 
                   
                </div>
        </div>
    

    
    
    
    
    </nav>
  )
}

export default Navbar