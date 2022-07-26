import React, { useState } from 'react'
import '../stylesheet.css'

const GetOrderDetails = (props) => {
  const [Id, setId] = useState('1234');
  const [Name, setName] = useState('John Vensky')
  const [Number, setNumber] = useState('0123456789')

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
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Customer Id:"+Id);
    console.log("Customer Name:"+Name);
    console.log("Address:"+Number);
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
              <td><input className='user-info' type='text' name='Id' value={Id} onChange={handleId}/></td>
            </tr>
            <tr>
              <td>Customer Name*</td>
              <td><input className='user-info' type='text' name='Id' value={Name} onChange={handleName}/></td>
            </tr>
            <tr>
              <td>Order Number*</td>
              <td><input className='user-info' type='text' name='Id' value={Number} onChange={handleNumber}/></td>
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
