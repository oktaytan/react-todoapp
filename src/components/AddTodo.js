import React, { Component } from 'react'

export class AddTodo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: ''
    }
  }

  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: '' })
  }

  render() {
    return (
      <div className='row add-todo'>
        <form className='col s6 offset-s3' onSubmit={this.handleSubmit}>
          <div className="input-field">
            <label>Add new Todo</label>
            <input type="text" value={this.state.content} onChange={this.handleChange} />
          </div>
          <button className='waves-effect waves-light btn' type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

export default AddTodo;
