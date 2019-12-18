import React , {Component} from 'react';
import XLSX from 'xlsx';
import xlthumb from '../../../../../assets/excelThumb.png';
import classes from './Migrator.module.css';
class SheetParser extends Component {
    constructor(props) {
		super(props);
		this.state = {
            tableKey: Date.now(),
            filePresent: false,
			data: [], /* Array of Arrays e.g. [["a","b"],[1,2]] */
            cols: [],  /* Array of column objects e.g. { name: "C", K: 2 } */
            dataBreakUp: [],
            colsBreakUp: [],
            colsB: []
		};
		this.handleFile = this.handleFile.bind(this);
		// this.exportFile = this.exportFile.bind(this);
	};
	handleFile(file/*:File*/) {
        /* Boilerplate to set up FileReader */
        this.setState({filePresent: true});
		const reader = new FileReader();
        // console.log(reader);
        const rABS = !!reader.readAsBinaryString;
        // console.log(rABS);
		reader.onload = (e) => {
			/* Parse data */
            const bstr = e.target.result;
			const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            // console.log(ws,"Worksheet")
			/* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws, {header:1});
            // console.log(data);
			/* Update state */
            this.setState({ data: data, cols: make_cols(ws['!ref']) });
            //Doing the alterations 
            const alterData ={
                ...data
            }
            // const data1= alterData.map((a,i,j) =>{
            //     console.log(a,i,j)
            // })
            // console.log(alterData,datalen);
            var i;
            for(i=0; i<data.length ; i++){        
                // console.log("hey",alterData);
                if(i === 0){
                    var ColData=[];
                    var Data=[];
                    ColData = [
                    ...alterData[0],
                    "Basic(40% on Gross)",
                    "HRA(25% on Gross)",
                    'Medical Allowance',
                    'Travel Allowance',
                    'LTA',
                    'PF Employer Contribution',
                    'Special Allowance',
                    'Actual CTC',
                    'Bonus',
                    'Total CTC'
                    ]
                }
                else{
                var basic= ((alterData[i][2])*(40/100));
                var HRA = ((alterData[i][2])*(25/100));
                var MedicalAllowance = 15000/12;
                var TravelAllowance = 19200/12;
                var LTA = 0;
                var PFEmployerContribution;
                        if(basic >= 15000){
                            PFEmployerContribution = 3600;
                        }
                        else{
                            PFEmployerContribution = ((basic)*(24/100));
                        }
                        var specialAllowance = (alterData[i][2])-(basic+HRA+MedicalAllowance+TravelAllowance+PFEmployerContribution);
                        var ActualCtc = alterData[i][2];
                        var Bonus = 0;
                        var TotalCtc = basic + HRA + MedicalAllowance + TravelAllowance +PFEmployerContribution + specialAllowance ;
                           Data[i-1] = [
                                ...alterData[i],
                                basic,
                                HRA,
                                MedicalAllowance,
                                TravelAllowance,
                                LTA,
                                PFEmployerContribution,
                                specialAllowance,
                                ActualCtc,
                                Bonus,
                                TotalCtc
                            ] 
                }
                const UpdateData =[
                    ...Data
                ];
                    this.setState({
                        dataBreakUp: UpdateData,
                        colsBreakUp: ColData
                    })  
                    }
            var columns=[]; this.state.colsBreakUp.forEach((element,i) => {
                columns[i]= {name: element, key: i};
            });
            this.setState({colsBreakUp: columns})
            this.state.colsBreakUp.forEach(element => {
                // console.log(element.key);
            });
            // console.log(this.state.colsBreakUp,this.state.dataBreakUp)
        };
		if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
	};
	// exportFile() {
	// 	/* convert state to workbook */
	// 	const ws = XLSX.utils.aoa_to_sheet(this.state.data);
	// 	const wb = XLSX.utils.book_new();
	// 	XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
	// 	/* generate XLSX file and send to client */
	// 	XLSX.writeFile(wb, "sheetjs.xlsx")
    // };
    fileClearHandler = () =>{
        this.setState({tableKey: Date.now(), filePresent:false})
    }
    render()
     { 
        var RenderTable = null;
        var excelInputThumb = null;
        if(this.state.filePresent)
        {
            RenderTable =(<div>
                                <OutTable data={this.state.dataBreakUp} cols={this.state.colsBreakUp}  />
                                <div className={classes.UploadButtonContainer}>
                                    <div className={classes.UploadButtoninnerdiv} >
                                        <button  className={classes.UploadButton}>
                                            <span role="img" aria-label="Logs" style={{fontSize:'25px'}} >🡅 Upload</span>
                                        </button>
                                    </div>
                                </div>
                            </div>);
            excelInputThumb = <div ><img src={xlthumb} alt='ExcelfileLogo' className={classes.excelthumbContainer} onClick={this.fileClearHandler}/></div>;
        } 
        return (
        <DragDropFile handleFile={this.handleFile} >
            <div className={classes.Dropzone} ><div className={classes.fileDropArea}>
                <DataInput handleFile={this.handleFile} keys={this.state.tableKey}/>
                {excelInputThumb}
            </div ></div>
            <div>  </div >
            <div> 
            {/* <OutTable data={this.state.data} cols={this.state.cols} /> 
                // this is for seeing the input excel data
            */}
            
            {RenderTable}
        </div >
        <div ><div >
            {/* <button disabled={
                (this.state.dataBreakUp === undefined || !this.state.dataBreakup.length)
            } className="btn btn-secondary" onClick={this.exportFile}>Export</button> */}
        </div></div>
        <div></div>
        <br/>
        <br/>
        <br/>
    </DragDropFile>
); };
};

// if(typeof module !== 'undefined') module.exports = SheetJSApp

/* -------------------------------------------------------------------------- */

/*
  Simple HTML5 file drag-and-drop wrapper
  usage: <DragDropFile handleFile={handleFile}>...</DragDropFile>
    handleFile(file:File):void;
*/
class DragDropFile extends React.Component {
	constructor(props) {
		super(props);
		this.onDrop = this.onDrop.bind(this);
	};
	suppress(evt) { evt.stopPropagation(); evt.preventDefault(); };
	onDrop(evt) { evt.stopPropagation(); evt.preventDefault();
		const files = evt.dataTransfer.files;
		if(files && files[0]) this.props.handleFile(files[0]);
	};
	render() { return (
<div onDrop={this.onDrop} onDragEnter={this.suppress} onDragOver={this.suppress}>
	{this.props.children}
</div>
	); };
};

/*
  Simple HTML5 file input wrapper
  usage: <DataInput handleFile={callback} />
    handleFile(file:File):void;
*/
class DataInput extends Component{
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	};
	handleChange(e) {
		const files = e.target.files;
		if(files && files[0]) this.props.handleFile(files[0]);
	};
	render() { return (

	<div >
		<label htmlFor="file" className={classes.fileMsg}>Drag 'n' drop or choose an excel file</label>
		<input type="file"  id="file" className={classes.dropBtn} accept={SheetJSFT} onChange={this.handleChange} key={this.props.keys}/>
	</div>

	); };
}

/*
  Simple HTML Table
  usage: <OutTable data={data} cols={cols} />
    data:Array<Array<any> >;
    cols:Array<{name:string, key:number|string}>;
*/
class OutTable extends Component {
	render() {
       
        return (
    <div style={{margin:'10px'}}>
	<table className={classes.table}>
		<thead>
            <tr key='0'>{this.props.cols.map((c) => {
                            if(c.key === undefined ) {return null}
                            else{return (<th key={c.key} >{c.name}</th>)}
                        })
                        }</tr>
		</thead>
		<tbody>
			{this.props.data.map((r,i) => 
            <tr key={i.toString()}>
                {this.props.cols.map(c =>{ 
                    
                    
                    if(c.key === undefined ) {return null}
                    else{return(<td key={[i,c.key].join("")}>{ r[c.key] }</td>)}
                    } )}
            </tr>
            )}
		</tbody>
	</table>
</div>
	); };
};



/* list of supported file types */
const SheetJSFT = [
    "xlsx", "xlsb", "xlsm", "xls", "xml", "csv", 
    // "txt", "ods", "fods", "uos", "sylk", "dif", "dbf", "prn", "qpw", "123", "wb*", "wq*", "html", "htm"
].map(function(x) { return "." + x; }).join(",");

/* generate an array of column objects */
const make_cols = refstr => {
	let o = [], C = XLSX.utils.decode_range(refstr).e.c + 1;
	for(var i = 0; i < C; ++i) o[i] = {name:XLSX.utils.encode_col(i), key:i}
	return o;
};

export default SheetParser;