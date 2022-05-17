import React, { Component } from 'react'
import ReactToPrint from 'react-to-print'

export default class PdfView extends Component {
  render() {
    return (
        
        <div>
            <ReactToPrint 
                trigger={()=>{
                    return <button>PDF</button>
                }}
                content = {()=> this.componentRef}
                documentTitle = 'Emp Data'
                pageStyle= "print"
                onAfterPrint= {()=>{console.log('document printed')}}
            />
            
        <div ref={el =>(this.componentRef=el)}>
          <table style={{width:"50%", border: '1px solid'}}>
            <thead style={{width:"50%", border: '1px solid'}}>
              <th>Sr</th>
              <th>EmpId</th>
              <th>Emp Name </th>
              <th>Position</th>
              <th>Salary</th>
              <th>Phone</th>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>001</td>
                  <td>Jones</td>
                  <td>Trainer</td>
                  <td>50,000</td>
                  <td>123456789</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>002</td>
                  <td>Jones</td>
                  <td>Trainer</td>
                  <td>50,000</td>
                  <td>123456789</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>003</td>
                  <td>Jones</td>
                  <td>Trainer</td>
                  <td>50,000</td>
                  <td>123456789</td>
              </tr>
          </tbody>
      </table>
      </div>
      </div>
    )
  }
}
