import React from 'react'
import loader from '../loader.gif'
const Spinner = () => {
  return (
    <div className='spinner-container'>
      <img src={loader} alt='spinnerImg' />
    </div>
  )
}
export default Spinner
