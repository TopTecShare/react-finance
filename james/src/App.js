import React, {Component} from 'react';
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { NumericTextBox } from "@progress/kendo-react-inputs";
import { Button } from "@progress/kendo-react-buttons";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import './App.css';

import products from "./products.json";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: products,
      companyId: 0,
      companyName: '',
      companyIteration: 0,
      companies: [],
      companyOptions: [
        "NIKE",
        "APPLE",
        "MICROSOFT",
        "TESLA",
        "ADIDAS",
        "YETI",
        "VICTORINOX"
      ]
    }
  };

  handleNameChange = (event) => {
    this.setState({ companyName: event.target.value })
  }

  handleIterationChange = (event) => {
    this.setState({ companyIteration: event.target.value })
  }

  handleAddCompany = (event) => {
    this.setState({ 
      companies: this.state.companies.concat([{
        key: this.state.companyId,
        name: this.state.companyName,
        iterations: this.state.companyIteration
      }]),
      companyId: this.state.companyId + 1
    })
  }

  render() {
    return (
      <div className="App">
        <h1>STOCKS & COMPANIES</h1>
        <div className="products"> 
          <ul>
            {this.state.companies.map((company) => [
              <li key={company.companyId}>
                <h3>{company.name}</h3>
                <div className='iterations-area'>
                  {[...Array(company.iterations)].map((iteration, index) => {
                  return 
                    <input key={index} type='radio' />
                  })}
                </div>
              </li>
            ])}
          </ul>
        </div>
        <div className="add-products">
          <DropDownList
            data={this.state.companyOptions} 
            value= {this.state.companyOptions}
            onChange={this.handleNameChange} />
            <NumericTextBox 
              format='0'
              min={0}
              max={22}
              value={this.state.companyIteration}
              onChange={this.handleIterationChange}
            />
            <Button primary={true} onClick={this.handleAddCompany}>
              Follow Company Stock</Button>
        </div>
        <div className="stock-grid">
          <Grid
            data={this.state.data}>
              <Column field="ProductName" title="Food" />
              <Column field="UnitPrice" title="Price (U$D)" />
              <Column field="UnitsInStock" title="Inventory" />
              <Column field="Discontinued" title="Sold Out?" />
          </Grid>
        </div>
      </div>
    )
  }
}

  

export default App;