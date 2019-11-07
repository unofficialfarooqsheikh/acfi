import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';



class Welcome extends Component {
    state = {
      date: new Date()
    }
    
    componentDidMount() {
      this.timerId = setInterval(() => this.tick(), 1000);
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
        console.log(this.props);
      return (
            <div>
            <h1>Welcome </h1>
            <p>Good {time}</p>
            </div>
        );
    }
  }

export default withRouter(Welcome);