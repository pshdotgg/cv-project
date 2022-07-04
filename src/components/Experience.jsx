import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <h3>Experience</h3>
        <form action="#">
          <input type="text" placeholder='Position'/>
          <label htmlFor=""></label>
          
          <input type="text" placeholder='Company'/>
          <label htmlFor=""></label>

          <input type="text" placeholder='City'/>
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
