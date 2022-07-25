import React from 'react'
import '../stylesheet.css'

const CreateOrder = (props) => {
  return (
    <form>
      <div className='container'>
        <h4 align='center' style={{marginTop:'50px'}}>New Order</h4>
        <p align='center' className='instructions'>{props.instruction}</p>
      </div>
      <div className='container'>
        <table className='new-order'>
            <tr><td>Customer Id*</td><td><input type='text' name='Id' /></td></tr>
            <tr><td>Customer Name*</td><td><input type='text' name='Id' /></td></tr>
            <tr><td>Address</td><td><input type='text' name='Id' /></td></tr>
        </table>
      </div>
      <div align='center'>
        <button className='submit' type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default CreateOrder
