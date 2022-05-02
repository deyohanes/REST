import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../features/product/productSlice'

function Table({ product }) {
  const dispatch = useDispatch()

  return (
    <div className='goal'>
      <div>{new Date(product.createdAt).toLocaleString('en-US')}</div>
      <h2>{product.symbol}</h2>
      <button onClick={() => dispatch(deleteProduct(product._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default Table