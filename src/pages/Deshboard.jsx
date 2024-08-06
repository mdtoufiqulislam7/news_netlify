import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getproduct } from '../ReduxToolkit/slice'
import { useNavigate } from 'react-router-dom'

function Deshboard() {

    const {products,status,error} = useSelector((state)=>state.product)
    const dispatch = useDispatch()

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(getproduct())
        }
    },[dispatch,status])

    // navigate to details page 
    const navigate = useNavigate()
    const detailspage = (id)=>{
        navigate(`details/${id}`)
        window.location.reload()
    }

    const handleDelete = async (id) => {
        try {
          await dispatch(deleteProduct(id)).unwrap();
          navigate('/deshboard')
          window.location.reload()
        } catch (err) {
          console.error('Failed to delete product:', err);
        }
      };

  return (
    <>
      <div className="container mx-auto mt-8 mb-20">
      <h2 className="text-2xl font-bold text-center mb-4">Product data</h2>
      {status === 'loading' && <p className="text-center">Loading...</p>}
      {status === 'failed' && <p className="text-red-500 text-center">{error}</p>}
      <div>
      {products.map((productlist,idx)=>(
        <div key={idx} className="bg-white rounded-lg  shadow-lg p-4 border border-gray-200 transition-transform transform hover:scale-105"> 
         
         <h3 className="text-xl font-semibold text-purple-700 " >{productlist?.name}</h3>
         <h3 className="text-xl font-semibold text-purple-700 ">{productlist?.price}</h3>
         <h3 className="text-xl font-semibold text-purple-700 ">{productlist?.teg}</h3>
         <button onClick={()=>detailspage(productlist?._id)} className='bg-green-500 rounded border w-50 mx-auto  border-gray-200 transition-transform transform hover:scale-105 '>show Brand name</button>
         <button onClick={()=>handleDelete(productlist?._id)} className='bg-red-700 rounded border w-50 mx-auto  border-gray-200 transition-transform transform hover:scale-105 '>Delete Product</button>
        
         </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Deshboard