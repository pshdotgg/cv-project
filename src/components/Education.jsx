import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <div>
        <h3>Education</h3>
        <form action="#">
          <input type="text" placeholder='University'/>
          <label htmlFor=""></label>
          
          <input type="text" placeholder='City'/>
          <label htmlFor=""></label>

          <input type="text" placeholder='Degree'/>
          <label htmlFor=""></label>
          
          <input type="text" placeholder='Subject'/>
          <label htmlFor=""></label>

          <input type="text" placeholder='From'/>
          <label htmlFor=""></label>
      
          <input type="text" placeholder='To'/>
          <label htmlFor=""></label>
        </form>
      </div>
    )
  }
}
