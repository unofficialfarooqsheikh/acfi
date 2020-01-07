import React , {Component} from 'react';
import xlthumb from '../../../../../assets/excelThumb.png';
import classes from './Migrator.module.css';
import axios from 'axios';
class SheetParser extends Component {
    constructor(props) {
		super(props);
		this.state = {
            tableKey: Date.now(),
            file : null,
            filename : null,
            filePresent : false,
		};
		this.handleFile = this.handleFile.bind(this);
		// this.exportFile = this.exportFile.bind(this);
    };
    componentWillMount(){
        console.log(this.state);
    }
	handleFile(e) {
        /* Boilerplate to set up FileReader */
      this.setState({
        file : e.target.files[0],
        filename : e.target.files[0].name,
        filePresent : true
      })
	};
    fileClearHandler = () =>{
        this.setState({tableKey: Date.now(), filePresent:false})
    }
    exportFile = () => {
        const formData = new FormData();
        formData.append('file', this.state.file);

            //   console.log(text)
            var url= "http://127.0.0.1:5000/upload";
            axios.post(url,formData,{
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Access-Control-Allow-Origin': '*',
                        }
            })
              .then((response) => {
                  console.log("Response",response);
            })
    }
    render()
     { 
        
        var RenderTable = null;
        var excelInputThumb = null;
        if(this.state.filePresent)
        {
            excelInputThumb = <div ><img src={xlthumb} alt='ExcelfileLogo' className={classes.excelthumbContainer} onClick={this.fileClearHandler}/></div>;
        } 
        return (
            <div className={classes.Dropzone} >
                
                <div className={classes.fileDropArea}>
                <label htmlFor="file" className={classes.fileMsg}>Drag 'n' drop or choose an excel file</label>
                <input type="file"  id="file" className={classes.dropBtn} accept={SheetJSFT} onChange={this.handleFile} key={this.state.tableKey}/>
                {excelInputThumb}
        
            <br/>
            <br/>
            <br/>
            <button disabled={
                (this.state.file === null)
            } className="btn btn-secondary" onClick={this.exportFile}>Export</button>
            </div>
            </div>
); };
};

 
/* list of supported file types */
const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", 
    // "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");


export default SheetParser;