import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import InputSwitch from '../../../../../UI/Input/InputSwitch';
import classes from './DataProvider.module.css';
// import InputSwitch from '../../../../../UI/Input/InputSwitch';

class DataProvider extends Component {
    state = {
        checked: true,
        data: [],
        date: '2019-12'
    };
    UNSAFE_componentWillMount() {
        this.onLoadHandler()
    }
    checkboxHandler = (e,id) => {
        // console.log(e.target.checked, this.state.checked)
            console.log(this.state.data[id])
            const temp = [...this.state.data];
            console.log(temp)
                temp[id][3]= e.target.checked;
        this.setState({data: temp});
        
    }
    convertMonthAndYearInput = (InputYear,InputMonth) =>{
        var Months=[];
        for (let Y = InputYear; Y >= 1995; Y--) {
            if(Months.length < 6 && Months.length !== 0){
                for (let i = 12; i > 0; i--) {
                    Months = Months.concat((Y.toString() + '-' + i.toString()))
                    console.log(Months)
                    if (Months.length === 6) {
                        break;
                    }
                }
            }
            else if(Months.length === 0){
            for (let M = InputMonth; M > 0; M--) {
                // console.log(M)
                Months = Months.concat((Y.toString() + '-' + M.toString()))
                // console.log(Months)
                if (Months.length === 6) {
                    break;
                }
            }}
            if (Months.length === 6) {
                break;
            }
        }
        // console.log(Months)        
        var Year=[],Month=[]
        var Data = Months.map((data,index) =>{
            [Year[index],Month[index]] =data.split('-');

            switch(Month[index]){case"1":case"01":Month[index]="January";break;case"2":case"02":Month[index]="February";break;case"3":case"03":Month[index]="March";break;case"4":case"04":Month[index]="April";break;case"5":case"05":Month[index]="May";break;case"6":case"06":Month[index]="June";break;case"7":case"07":Month[index]="July";break;case"8":case"08":Month[index]="August";break;case"9":case"09":Month[index]="September";break;case"10":Month[index]="October";break;case"11":Month[index]="November";break;case"12":Month[index]="December";break;default:Month[index]="Null"}
            // console.log(Month[index])
            return [Year[index],Month[index],Month[index]+Year[index],false]
        })
        return Data;
    }
    CalenderHandler = (e) => {
        this.setState({date: e.target.value})
        const [InputYear,
            InputMonth] = e.target.value.split('-');
        var Data = this.convertMonthAndYearInput(InputYear,InputMonth);
        console.log(Data)
        this.setState({data: Data});
    }
    onLoadHandler=()=>{
        if(this.state.data.length === 0){
            var date = new Date();
        // console.log(date.getFullYear(),date.getMonth()+1);
        var Data = this.convertMonthAndYearInput(date.getFullYear(),date.getMonth()+1);
        this.setState({data: Data});
        }
        
    }
    componentDidUpdate() {
        // console.log(this.state)
    }
    render() {
        
        const RenderedData = this.state.data.map((data,index)=>{
               return(
                <div key={this.props.keys+data[2]} className={classes.Child2Child1} >
                        <p style={{cursor: 'pointer'}}>{data[0] +'-'+ data[1]}</p>
                        <InputSwitch
                        id={this.props.keys+data[0]+data[1]}
                        type="checkbox"
                        checkedState={data[3]}
                        change={(e) => this.checkboxHandler(e,index)} key={this.props.keys}/>
                </div>
               ) 
        })
        // console.log("=========Props",this.props)
        return (

            <div className={classes.DataProvider} key={this.props.keys}>
                <h5 style={{textAlign:'center',paddingTop:'15px'}}>{this.props.heading}</h5>
                <img style={{margin:'auto'}} src={this.props.icon} alt={this.props.heading}/>
                <div className={classes.Child1}>
                <p style={{textAlign:'center'}}>Select Date <span style={{color:'#e85050fc'}}>&#129083;</span></p>
                    <input type='month' onChange={(e) => this.CalenderHandler(e)} value={this.state.date}/>
                <br/>
                </div>
                <div className={classes.Child2}>
                {RenderedData}
                <input type='button' value='Download'></input>
                </div>
                
            </div>

        );
    }
}

export default withRouter(DataProvider);