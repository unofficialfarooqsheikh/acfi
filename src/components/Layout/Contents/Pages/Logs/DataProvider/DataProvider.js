import React, {Component} from 'react';
import InputSwitch from '../../../../../UI/Input/InputSwitch';
import classes from './DataProvider.module.css';
// import InputSwitch from '../../../../../UI/Input/InputSwitch';

class DataProvider extends Component {
    state = {
        checked: true
      };
      
    
    checkboxHandler=(e)=> {
        console.log(e.target.checked,this.state.checked)
      this.setState({
        checked: !(this.state.checked)
      });
    }
    componentWillUpdate(){
        console.log(this.state)
    }
    render() {
      return (
          <div className={classes.DataProvider}>
            <div className={classes.Child1}>
                <input type='month' />
            </div>
            <div className={classes.Child2}>
                <p className={classes.Child2Child1} >November-2019</p>
                <div>
                    <InputSwitch
                     id='1'
                        type="checkbox"
                    checkedState={this.state.checked }
                        change={(e)=>this.checkboxHandler(e) } 
                        />
                        <p className={classes.Child2Child1} >October-2019</p>
                <InputSwitch id='gr12' change={(e)=>this.checkboxHandler(e)} checkedState={this.state.checked}/>
                <p className={classes.Child2Child1} >September-2019</p>
                <InputSwitch id='gr13' change={(e)=>this.checkboxHandler(e)} checkedState={this.state.checked}/>
                <p className={classes.Child2Child1} >August-2019</p>
                <InputSwitch id='gr14' change={(e)=>this.checkboxHandler(e)} checkedState={this.state.checked}/>
                <p className={classes.Child2Child1} >July-2019</p>
                <InputSwitch id='gr15' change={(e)=>this.checkboxHandler(e)} checkedState={this.state.checked}/>
                <p className={classes.Child2Child1} >June-2019</p>
                <InputSwitch id='gr16' change={(e)=>this.checkboxHandler(e)} checkedState={this.state.checked}/>
                </div>
            </div>
       </div>
      );
    }
  }
  

export default DataProvider;