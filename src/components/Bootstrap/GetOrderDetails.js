import React, { useState } from 'react'
import ordersApi from '../api/orders.js'
import '../stylesheet.css'

const GetOrderDetails = (props) => {
  const [Id, setId] = useState('1234');
  const [Name, setName] = useState('John Vensky');
  const [Number, setNumber] = useState(1);
  window.orderNo=Number;

  const handleId = (event) => {
    event.preventDefault();
    setId(event.target.value);
  }
  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  const handleNumber = (event) => {
    event.preventDefault();
    setNumber(event.target.value);
  }
  async function handleClick(event) {
    event.preventDefault();
    const json = await ordersApi.getOrder(window.orderNo);
    console.log(json);
  }

  return (
    <form>
      <div className='container'>
        <h4 align='center' style={{marginTop:'50px'}}>Order Details</h4>
        <p align='center' className='instructions'>{props.instruction}</p>
      </div>
      <div className='container'>
        <table className='new-order'>
          <tbody>
            <tr>
              <td>Customer Id*</td>
              <td><input className='user-info' type='text' name='CustomerId' value={Id} onChange={handleId}/></td>
            </tr>
            <tr>
              <td>Customer Name*</td>
              <td><input className='user-info' type='text' name='Name' value={Name} onChange={handleName}/></td>
            </tr>
            <tr>
              <td>Order Number*</td>
              <td><input className='user-info' type='text' name='OrderNumber' value={Number} onChange={handleNumber}/></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div align='center'>
        <button className='submit' type='submit' onClick={handleClick}>Submit</button>
      </div>
    </form>
  )
}

export default GetOrderDetails
