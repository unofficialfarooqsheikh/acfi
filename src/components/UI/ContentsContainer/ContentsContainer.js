import React, {Component} from 'react';
import classes from './ContentsContainer.module.css';
import scrollclass from './ScrollBarCCS.css'

class ContentsContainer extends Component{

    render(){
        return(
            <div id="style6" className={[classes.ContentsContainer,scrollclass].join(' ')} style={this.props.margin}>
                {this.props.children}
            </div>
        );
    };

}
export default ContentsContainer;
