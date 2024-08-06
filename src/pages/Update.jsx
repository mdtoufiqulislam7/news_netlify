import React from 'react'
import { useNavigate } from 'react-router-dom'

function Update() {
    const navigate = useNavigate()

    const gotoadd=()=>{
        navigate('/addproduct')
    }
    
    const gotoupdate=()=>{
        navigate('/update')
    }
  return (
    <>   
    
    <div className="container mx-auto mt-8 mb-20">
        
            <button onClick={gotoadd} className="mt-4 w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
              Add Product
            </button>
            
            <button onClick={gotoupdate} className="mt-4 w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
              Update Product
            </button>
          </div>
       
     
    </>
  )
}

export default Update