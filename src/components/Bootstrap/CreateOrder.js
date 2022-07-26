import React, { useState } from 'react'
import '../stylesheet.css'

const CreateOrder = (props) => {
  const [Id, setId]=useState('1234')
  const [Name, setName]=useState('John Vinskey')
  const [Address, setAddress]=useState('3/12 Kings Street, Manchester')

  const handleId = (event) => {
    event.preventDefault();
    setId(event.target.value);
  }
  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  const handleAddress = (event) => {
    event.preventDefault();
    setAddress(event.target.value);
  }
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Customer Id:"+Id);
    console.log("Customer Name:"+Name);
    console.log("Address:"+Address);
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
    </form>
  )
}

export default CreateOrder
