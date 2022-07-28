import React, { useState } from 'react'
import ordersApi from '../api/orders.js'
import '../stylesheet.css'

const CreateOrder = (props) => {
  const [Id, setId]=useState('1234')
  const [Name, setName]=useState('John Vinskey')
  const [Address, setAddress]=useState('3/12 Kings Street, Manchester')
  const [Bool, setBool] = useState(null)
  const [Loading, setLoading] = useState(false)
  
  window.order= {
    createdAt: '',
    customerId: Id,
    customerName: Name,
    address: Address,
    pinCode: ''
   }

  const handleId = (event) => {
    event.preventDefault();
    setLoading(false);
    setBool(null);
    setId(event.target.value);
  }
  const handleName = (event) => {
    event.preventDefault();
    setLoading(false);
    setBool(null);
    setName(event.target.value);
  }
  const handleAddress = (event) => {
    event.preventDefault();
    setLoading(false);
    setBool(null);
    setAddress(event.target.value);
  }

  async function handleClick(event) {
    event.preventDefault();
    setLoading(true);
    const json = await ordersApi.postOrder(window.order);
    console.log(json);
    setBool(json);
  }

  return (
    <form>
      <div className='container'>
        <h4 align='center' style={{marginTop:'50px'}}>New Order</h4>
        <p align='center' className='instructions'>{props.instruction}</p>
      </div>
      <div className='container'>
        <table className='new-order'>
          <tbody>
            <tr>
              <td>Customer Id*</td>
              <td><input className='user-info' type='text' value={Id} onChange={handleId}/></td>
            </tr>
            <tr>
              <td>Customer Name*</td>
              <td><input className='user-info' type='text' value={Name} onChange={handleName}/></td>
            </tr>
            <tr>
              <td>Address</td>
              <td><input className='user-info' type='text' value={Address} onChange={handleAddress}/></td>
            </tr>
          </tbody>
        </table> 
      </div>
      <div align='center'>
        <button className='submit' type='submit' onClick={handleClick}>Submit</button>
      </div>
      {(Bool)?(
        <div className='container-fluid' align='center'>
        <p className='after-submit'>Order with below details is created</p>
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
      </div>):
      ((Loading)?(<div align="center"><p className='after-submit'>Uploading details</p></div>):'')}
    </form>
  )
}

export default CreateOrder
