import React from 'react'
import "../App.css"
const Navbar = () => {
  return (
    <>
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
    <div className="row row-cols-1 d-flex justify-content-center">
    <div className="col-md-12">
      <div className="d-flex justify-content-center">
        <div className="" style={{width: 419+'px'}}>
        <div className="">
        <h2 className='text-center'>
          HOME
          </h2>
        </div>
          
        
        </div>
        
      </div>
    </div>
    <div className="col-md-12">
      <div className="d-flex justify-content-center">
        <form style={{width: 419+'px'}}>
          <input className="form-control rounded-pill bg-color-search text-center ps-4" type="search" placeholder="Pencarian" aria-label="Search"/>
        
        </form>
      </div>
      
    </div>
    
    </div>
    
    </>
    
  )
}

export default Navbar