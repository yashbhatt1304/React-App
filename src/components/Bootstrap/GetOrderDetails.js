import React, { useState } from 'react'
import ordersApi from '../api/orders.js'
import '../stylesheet.css'

const GetOrderDetails = (props) => {
  const [Id, setId] = useState('1234');
  const [Name, setName] = useState('John Vensky');
  const [Number, setNumber] = useState(1);
  const [Bool, setBool] = useState(null);
  const [Loading, setLoading] = useState(false);
  window.orderNo=Number;
  window.load=false;

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
    setLoading(false);
    setNumber(event.target.value);
    setBool(null);
  }
  const statusBool = (Data) => {
    setBool(Data);
  }
  async function handleClick(event) {
    event.preventDefault();
    setLoading(true);
    const json = await ordersApi.getOrder(window.orderNo);
    console.log(json);
    statusBool(json);
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
      {(Bool)?(
        <div className='container-fluid' align='center'>
        <p className='after-submit'>Order details of Order #{Bool.orderId}:</p>
        <table className='table table-bordered'>
          <thead>
            <tr>
            <th>Order Number</th>
              <th>Customer Number</th>
              <th>Customer Name</th>
              <th>Address</th>
              <th>Zip Code</th>
              <th>Place</th>
            </tr>
            <tr>
              <td>{Bool.orderId}</td>
              <td>{Bool.customerId}</td>
              <td>{Bool.customerName}</td>
              <td>{Bool.address}</td>
              <td>{Bool.pinCode}</td>
              <td>{Bool.createdAt}</td>
            </tr>
          </thead>
        </table>
      </div>
      ):((Loading)?<div align="center"><p className='after-submit'>Fetching details</p></div>:'')
      }
    </form>
  )
}

export default GetOrderDetails
