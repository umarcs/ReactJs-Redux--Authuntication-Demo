import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSingleUser } from '../../actions/Users-Actions';

class SingleUserData extends Component {
    render() {

            if(this.props.UserReducers.users.length==0)
            {
               return null
            }
            else{
            if(this.props.UserReducers.activeUser.length==0){
               return  <h1>Please Select A User </h1>
            }
            else{ 
               return <ul>
                            <li>{this.props.UserReducers.activeUser.firstName}</li>
                            <li>{this.props.UserReducers.activeUser.lastName}</li>
                            <li>{this.props.UserReducers.activeUser.email}</li>
                            <li>{this.props.UserReducers.activeUser.password}</li>
                      </ul>
            }
        }
            
     }
                    
            // <div>
            // {/* <p>active user : {this.props.UserReducers.activeUser.length}</p> */}
            // {this.props.UserReducers.activeUser== 0 ?
            
            //     <button onClick = {()=>this.props.getSingleUser('5a4364d95e648b239e01fdf0')}>Get User By ID </button>
        
            // :
            // <ul>
            //     <li>{this.props.UserReducers.activeUser._id}</li>
            //     <li>{this.props.UserReducers.activeUser.firstName}</li>
            //     <li>{this.props.UserReducers.activeUser.lastName}</li>
            //     <li>{this.props.UserReducers.activeUser.email}</li>
            //     <li>{this.props.UserReducers.activeUser.password}</li>

            // </ul>
           
            // } 
            // </div>  
    
}

function mapStateToProps(state) {
     return {
        UserReducers: state.UserReducers,
    };
}
// function mapDispathToProps(dispatch){
//     return bindActionCreators({ getSingleUser }, dispatch)
// }


export default connect(mapStateToProps)(SingleUserData);
