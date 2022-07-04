import React, { Component } from 'react'
import '../styles/Button.css'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button type='button' className={this.props.addClass}>
        {this.props.name}
      </button>
    )
  }
}
