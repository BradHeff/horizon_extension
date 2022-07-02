import React from 'react'
import './App.css'

class Options extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedOption: "Students"
    }
  }
  componentDidMount() {
    // var option = ""
    // chrome.storage.sync.get('option', function(data) {
    //   option = data.option;
    // });
    // if (option !== "") {
    //   this.setState({selectedOption: option})
    // }
  }
  handleOptionChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    this.setState({
      selectedOption: e.target.value
    });
    // document.
    // chrome.storage.sync.set({option: e.target.value});
  }

  render() {
    return (
      <form>
        <div className="radio">
          <label>
            <input type="radio" value="Students" checked={this.state.selectedOption === 'Students'} onChange={this.handleOptionChange} />
              Students
          </label>
          <label>
            <input type="radio" value="Teachers" checked={this.state.selectedOption === 'Teachers'} onChange={this.handleOptionChange} />
              Teachers
          </label>
        </div>
      </form>
    );
  }
}

export default Options
