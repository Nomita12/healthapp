import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './addInfo.css'
class AddInfo extends Component {
    state = {
        name: null,
        password: null,
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addInfo(this.state)
        this.setState({
            name: '',
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
                            <input type="text" id='birth' placeholder='Password' value={this.state.birth} onChange={this.handleChange} />
                        </div>
                        <br></br>
                        <button className='btn btn-primary' data-toggle='tooltip' data-placement='right' title='Click Here To Submit'>Login</button>
                        <br></br>
                        <hr></hr>
                        <button className='btn btn-primary' data-toggle='tooltip' data-placement='right' title='Click Here To Submit'><Link to={"/create"}>Create an account</Link></button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddInfo;