import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Popup/assets/fonts/poppins.css';
import { tabOptions } from '../Reducer/Action';

import { connect } from 'react-redux';

const mapStateToProps = state => {
   return {
      option: state.OptionSelect.option
   }
}

const mapDispatchToProps = (dispatch) => {
   return { 
      onTabOption: (link) => dispatch(tabOptions(link))
   }
}

class Options extends React.Component {
  
  handleOptionChange = (e) => {
    this.props.onTabOption(e.target.value);
    localStorage.setItem('option', e.target.value)
  }

  render() {    
    return (
      <form style={{paddingTop:'40px', paddingBottom: '40px', height:'60px', width:'100%'}}>
        <div className="d-flex align-tiems-center justify-content-even">
          <div>
          <label>
            <input type="radio" value="Students" name="options" checked={this.props.option === "Students"} onChange={this.handleOptionChange} />
              Students
          </label>
          </div>
          <div>
          <label>
            <input type="radio" value="Teachers" name="options" checked={this.props.option === "Teachers"} onChange={this.handleOptionChange} />
              Teachers
          </label>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Options)
