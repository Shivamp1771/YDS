import React, { Component } from 'react'
import logo from './logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstName:'',
            middleName:'',
            lastName:'',
            address:'',
            city:'',
            phone:'',
            email:'',
            birthDate:'',
        }
        this.changefirstName = this.changefirstName.bind(this)
        this.changelastName = this.changelastName.bind(this)
        this.changemiddleName = this.changemiddleName.bind(this)
        this.changeaddress = this.changeaddress.bind(this)
        this.changecity = this.changecity.bind(this)
        this.changephone = this.changephone.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changebirthDate = this.changebirthDate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        // this.onSubmit = this.onChange.status(this.status)
    }
    // state = {} 
    changefirstName(event){
        this.setState({
            firstName:event.target.value 
        })
    }
    changemiddleName(event){
        this.setState({
            middleName:event.target.value 
        })
    }
    changelastName(event){
        this.setState({
            lastName:event.target.value 
        })
    }
    changeaddress(event){
        this.setState({
            address:event.target.value 
        })
    }
    changecity(event){
        this.setState({
            city:event.target.value 
        })
    }
    changephone(event){
        this.setState({
            phone:event.target.value 
        })
    }
    changeemail(event){
        this.setState({
            email:event.target.value 
        })
    }
    changebirthDate(event){
        this.setState({
            birthDate:event.target.value 
        })
    }
    changestatus(event){
        this.setState({
            staus:event.target.value 
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            phone: this.state.phone,
            email: this.state.email,
            birthDate: this.state.birthDate,
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            firstName:'',
            middleName:'',
            lastName:'',
            address:'',
            city:'',
            phone:'',
            email:'',
            birthDate:''
        })
    }
    render() { 
        return (
            <div>
                <div className='container'>
                    <div className='form-div'>
                    <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className='title'> YDS YOUTHS KITCHENER </h1>
                        {/* <img src={logo} className="App-logo-2" alt="logo" /> */}
                    </header><br></br>
                    <h3 className='heading1'>Basic Information</h3>
                    </div>
                        <form onSubmit={this.onSubmit}>
                            <br></br><input type = 'text' placeholder='FirstName' 
                            onChange={this.changefirstName}
                            value={this.state.firstName}
                            className='form-control form-group'/><br>
                            </br>

                            <input type = 'text' placeholder='MiddleName' 
                            onChange={this.changemiddleName}
                            value={this.state.middleName}
                            className='form-control form-group'/><br></br>
                            
                            <input type = 'text' placeholder='LastName' 
                            onChange={this.changelastName}
                            value={this.state.lastName}
                            className='form-control form-group'/><br></br>
                            
                            <input type = 'text' placeholder='Address' 
                            onChange={this.changeaddress}
                            value={this.state.address}
                            className='form-control form-group'/><br></br>
                            
                            <input type = 'text' placeholder='City' 
                            onChange={this.changecity}
                            value={this.state.city}
                            className='form-control form-group'/><br></br>
                            
                            <input type = 'text' placeholder='Phone' 
                            onChange={this.changephone}
                            value={this.state.phone}
                            className='form-control form-group'/><br></br>
                            
                            <input type = 'text' placeholder='Email' 
                            onChange={this.changeemail}
                            value={this.state.email}
                            className='form-control form-group'/><br></br>
                            
                            <input type = 'date' placeholder='BirthDate' 
                            onChange={this.changebirthDate}
                            value={this.state.birthDate}
                            className='form-control form-group'/><br></br>

                            <input type='text' placeholder=''
                            onChange={this.status}
                            value={this.state.status}
                            className='form-control'/>

                            <input type='text' placeholder=''
                            onChange={this.qualification}
                            value={this.state.qualification}
                            className='form-control'/>

                            
                            <h3 className='heading1'>Status In Canada</h3>
                            
                            
                            <input type = 'submit'
                            className='btn btn-danger btn-block' value='Submit'/>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default App;