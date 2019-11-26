import React, {Component} from 'react';
import classes from './ContentsContainer.module.css';

class ContentsContainer extends Component{

    render(){
        return(
            <div id="style6" className={classes.ContentsContainer} style={this.props.margin}>
                {this.props.children}
            </div>
        );
    };

}
export default ContentsContainer;
