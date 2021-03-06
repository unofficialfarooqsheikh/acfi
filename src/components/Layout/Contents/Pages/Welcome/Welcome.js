import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';


class Welcome extends Component {
    state = {
      date: new Date(),
    }
    
    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), (1000*30));
      var session_url = 'http://127.0.0.1:9010/';
      var username = 'Farooq';
      var password = 'password';

      axios.post(session_url, {
      },{
        auth: {
          username: username,
          password: password
      }}).then(function(response) {
        console.log('Authenticated',response);
      }).catch(function(error) {
        console.log('Error on Authentication');
      });
    

      // axios.get('http://127.0.0.1:9010/',{username:'Farooq'},{password:'password'})
    }
  
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
      
    tick() {
      // this.state.date = new Date(); - wrong way
      this.setState({date: new Date()});
    }
  
    render() {
        let time= '';
        let day = this.state.date.getHours();
        // console.log(day);
        switch( true ){
            case( day >= 0 && day <= 3):
            time = "Mid-Night";
            // console.log(time);
            break;
            case( day >= 4 && day < 12):
            time = "MORNING";
            // console.log(time);
            break;
            case( day >= 12 && day < 16):
            time = "AFTERNOON";
            // console.log(time);
            break;
            case( day >= 16 && day < 24):
            time = "Evening";
            // console.log(time);
            break;
            default:
            time="Day";

        }
        // console.log( this.props);
        var UserName;
        if(this.props.location.state === "undefined" || this.props.location.state==null)
        {
         UserName= "User";
        }
        else{
         UserName= this.props.location.state.names;
        }
        
       return (
            <div>
            <h1>Welcome 
            {" "+UserName}
             </h1>
            <p>Good {time}</p>
            </div>
        );
    }
  }

export default withRouter(Welcome);