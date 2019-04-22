import React, { Component } from 'react'
// import { NavLink } from 'react-router-dom';
import './addInfo.css'
class create extends Component {
    state = {
        name: null,
        age: null,
        email: null,
        gender: null,
        password: null,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.create(this.state)
        this.setState({
            name: '',
            age: '',
            email: '',
            gender: '',
            password: '',
        })
    }
    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='form-style'>
                    <form onSubmit={this.handleSubmit} >
                        <div className='form-group'>
                            <input type="text" id='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <br></br>
                    
                        <div className='form-group'>
                            <input type="text" id='birth' placeholder='Age' value={this.state.birth} onChange={this.handleChange} />
                        </div>
                        <br></br>

                        <div className='form-group'>
                            <input type="text" id='birth' placeholder='Email' value={this.state.birth} onChange={this.handleChange} />
                        </div>
                        <br></br>
                         
                         <div className='form-group'>
                            <input type="text" id='birth' placeholder='Gender' value={this.state.birth} onChange={this.handleChange} />
                        </div>
                        <br></br>

                        <div className='form-group'>
                            <input type="text" id='birth' placeholder='Password' value={this.state.birth} onChange={this.handleChange} />
                        </div>
                        <br></br>


                        <button className='btn btn-primary' data-toggle='tooltip' data-placement='right' title='Click Here To Submit'><a href="https://www.wikipedia.org/">Sign Up</a></button>
                        <br></br>
                        <hr></hr>
                    </form>
                </div>
            </div>
        )
    }
}
export default create;