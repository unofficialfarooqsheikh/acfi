import React , {Component} from 'react';
import SheetParser from './SheetParser';
import Uploader from './Uploader';
class Migrator extends Component {
    render(){

            return (
              <React.Fragment>
                <Uploader/>
              </React.Fragment>
            )
    }
}
export default Migrator;