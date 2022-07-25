import React from 'react'

const GetOrderDetails = (props) => {

  return (
    <form>
      <div className='container'>
        <h4 align='center' style={{marginTop:'50px'}}>Order Details</h4>
        <p align='center' className='instructions'>{props.instruction}</p>
      </div>
      <div className='container'>
        <table className='new-order'>
            <tr><td>Customer Id*</td><td><input type='text' name='Id' /></td></tr>
            <tr><td>Customer Name*</td><td><input type='text' name='Id' /></td></tr>
            <tr><td>Order Number*</td><td><input type='text' name='Id' /></td></tr>
        </table>
      </div>
      <div align='center'>
        <button className='submit' type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default GetOrderDetails
