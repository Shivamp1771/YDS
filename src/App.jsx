import React, { Component } from 'react'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import Header from './component/Navbar/Header';
import ImageCarousel from './component/carousel/carousel';

class App extends Component {
    
    constructor() {
        
        super()
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            address: '',
            city: '',
            phone: '',
            email: '',
            birthDate: '',
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
    changefirstName(event) {
        this.setState({
            firstName: event.target.value
        })
    }
    changemiddleName(event) {
        this.setState({
            middleName: event.target.value
        })
    }
    changelastName(event) {
        this.setState({
            lastName: event.target.value
        })
    }
    changeaddress(event) {
        this.setState({
            address: event.target.value
        })
    }
    changecity(event) {
        this.setState({
            city: event.target.value
        })
    }
    changephone(event) {
        this.setState({
            phone: event.target.value
        })
    }
    changeemail(event) {
        this.setState({
            email: event.target.value
        })
    }
    changebirthDate(event) {
        this.setState({
            birthDate: event.target.value
        })
    }
    changestatus(event) {
        this.setState({
            staus: event.target.value
        })
    }

    onSubmit(event) {
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
            firstName: '',
            middleName: '',
            lastName: '',
            address: '',
            city: '',
            phone: '',
            email: '',
            birthDate: ''
        })
    }
    render() {
       
        return (
            <div>
                <div>
                    <div> 
                        <Header />
                        <ImageCarousel/><br></br>
                        <br></br>
                        <div className='container'>
                            <h3 className='heading1'>Basic Information</h3>

                            <div className="form-group">
                            <form onSubmit={this.onSubmit}>
                                <br></br><input type='text' placeholder='FirstName'
                                    onChange={this.changefirstName}
                                    value={this.state.firstName}
                                    className='form-control' /><br>
                                </br>

                                <input type='text' placeholder='MiddleName'
                                    onChange={this.changemiddleName}
                                    value={this.state.middleName}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='LastName'
                                    onChange={this.changelastName}
                                    value={this.state.lastName}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Address'
                                    onChange={this.changeaddress}
                                    value={this.state.address}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='City'
                                    onChange={this.changecity}
                                    value={this.state.city}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Phone'
                                    onChange={this.changephone}
                                    value={this.state.phone}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Email'
                                    onChange={this.changeemail}
                                    value={this.state.email}
                                    className='form-control' /><br></br>

                              
                                <input placeholderText='BirthDate' type="date"
                                    onChange={this.changebirthDate}
                                    value={this.state.birthDate}
                                    className='form-control form-group' /><br></br>


                                <h3 className='heading1'>Status In Canada</h3><br></br>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Immigration Status</option>
                                    <option value="Student">Student</option>
                                    <option value="Work Permit">Work Permit</option>
                                    <option value="PR">PR</option>
                                </select><br></br>

                                <h3 className='heading1'>Student Education Details</h3>
                                
                                <input type='text' placeholder='College Name'
                                    onChange={this.qualification}
                                    value={this.state.qualification}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Program'
                                    onChange={this.program}
                                    value={this.state.program}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Campus'
                                    onChange={this.campus}
                                    value={this.state.campus}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Intake'
                                    onChange={this.intake}
                                    value={this.state.intake}
                                    className='form-control' /><br></br>


                                <h3 className='heading1'>India's Contact Details</h3>
                                
                                <input type='text' placeholder='Name'
                                    onChange={this.Name}
                                    value={this.state.Name}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='Address'
                                    onChange={this.Address}
                                    value={this.state.Address}
                                    className='form-control' /><br></br>

                                <input type='text' placeholder='City'
                                    onChange={this.city}
                                    value={this.state.city}
                                    className='form-control' /><br></br>
                                    
                                <input type='text' placeholder='Phone'
                                    onChange={this.Phone}
                                    value={this.state.Phone}
                                    className='form-control' /><br></br>

                                <h3 className='heading1'>Reference Details</h3>

                                <input type='text' placeholder='Name'
                                    onChange={this.Name}
                                    value={this.state.Name}
                                    className='form-control' /><br></br>
                                <input type='text' placeholder='Phone'
                                    onChange={this.Phone}
                                    value={this.state.Phone}
                                    className='form-control' /><br></br>

                                <input type='submit'
                                    className='btn btn-danger btn-block' value='Submit' />

                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;