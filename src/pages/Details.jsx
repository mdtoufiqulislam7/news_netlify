import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailsproduct } from '../ReduxToolkit/slice'
import { useParams } from 'react-router-dom'

function Details() {
    const {details,status,error}=useSelector((state)=>state.product)
    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(()=>{
        if(status==='idle'){
            dispatch(detailsproduct({id}))
        }
    },[dispatch,status,id])

    if(status==='loading'){
        return <div>Loading</div>
    }
    if(status ==='failed'){
        return <div>Faild data featching : {error}</div>
    }
  return (
    <> 
    <div className="container mx-auto mt-8 mb-20">
        <h2 className="text-2xl font-bold text-center mb-4">Product Details</h2>
        <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transform transition-transform hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{details.name}</h3>
            <p className="text-gray-600">Brand Name: {details.brand}</p>
            <p className="mt-2 text-gray-600">Price: ${details.price}</p>
            <p className="mt-2 text-gray-600">Tag: {details.teg}</p>
            <button className="mt-4 w-full bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details