import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getUsers } from '../actions/userActions'

 class users extends Component {
    componentDidMount(){
        this.props.getUsers()
        
    }
    render() {
        const {users} = this.props.users
        console.log(users)
  
        return (
            <div>
            <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'> Name</th>
                <th scope='col'>User Name</th>
                <th scope='col'>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map((item, i) => (
                <tr key={i}>
                    <td>{item.id} </td>
                    <td>{item.name} </td>
                    <td>{item.username} </td>
                    <td>{item.email} </td>
                </tr>
            ))}
        </tbody>
    </table>
    

            </div>
        )
    }}


const mapStateToProps  = (state) => ({users:state.users})

export default connect(mapStateToProps, {getUsers})(users)