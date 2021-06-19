import React from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import oac from "../../assets/images/oac.png";
import outlook from "../../assets/images/outlook.png";
import canvas from "../../assets/images/icon-16.png";
import pcs from "../../assets/images/pcschool.png";
import edupage from "../../assets/images/edupage.png";
import gcal from "../../assets/images/calendar.png";
import csinschool from "../../assets/images/csinschool.png";

const PLinks = (props) => {
  return (
        <div className="col-6 pl-0">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Student">
                    <Student />
                </Tab>
                <Tab eventKey="teacher" title="Teachers">
                    <Teacher />       
                </Tab>
                <Tab eventKey="security" title="Security">
                    <Security />
                </Tab>
            </Tabs>
        </div>
  );
}
export class Security extends React.Component {
    constructor() {
        super();
        this.state = {
            strength: '',
            value: ''
        }
    }
    generate = () => {
        switch (this.state.strength) {
            case 'strong':
                var length = 8,
                charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*.?!",
                retVal = "";
                for (var i = 0, n = charset.length; i < length; ++i) {
                    retVal += charset.charAt(Math.floor(Math.random() * n));
                }
                this.setState({value: retVal})
                break;
            case 'medium':
                var length2 = 8,
                charset2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                retVal2 = "";
                for (var i2 = 0, n2 = charset2.length; i2 < length2; ++i2) {
                    retVal2 += charset2.charAt(Math.floor(Math.random() * n2));
                }
                console.log(this.state.strength + " | " + retVal2)
                this.setState({value: retVal2})
                break;
            case 'weak':
                var length3 = 8,
                charset3 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                retVal3 = "";
                for (var i3 = 0, n3 = charset3.length; i3 < length3; ++i3) {
                    retVal3 += charset3.charAt(Math.floor(Math.random() * n3));
                }
                this.setState({value: retVal3})
                break;
        
            default:
                break;
        }
    }
    render() {
        // console.log(this.state.strength)
        return (
            <div className="position-relative p-2">
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" name="password" value={this.state.value} />
                </div>
                <div className="form-group d-flex justify-content-between w-100">
                    <div class="form-check form-check-inline">
                        <input name="group1" type="radio" id="inline-radio-1" className="form-check-input" onChange={(e) => e.currentTarget.checked?this.setState({strength: 'strong'}):null}/>
                        <label title="" for="inline-radio-1" class="form-check-label">Strong</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name="group1" type="radio" id="inline-radio-1" className="form-check-input" onChange={(e) => e.currentTarget.checked?this.setState({strength: 'medium'}):null}/>
                        <label title="" for="inline-radio-1" class="form-check-label">Medium</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input name="group1" type="radio" id="inline-radio-1" className="form-check-input" onChange={(e) => e.currentTarget.checked?this.setState({strength: 'weak'}):null}/>
                        <label title="" for="inline-radio-1" class="form-check-label">Weak</label>
                    </div>
                </div>
                <div className="form-group text-center">
                    <button className="btn btn-info" onClick={this.generate}>Generate Password</button>
                </div>
            </div>
        );
    }
}

const Student = () => {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
                <img className="mr-2" src={canvas} alt="HCS" /><a href="https://horizon-sa.instructure.com" rel="noreferrer" target="_blank">Canvas</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={outlook} alt="HCS" height="16px" width="16px" /><a href="https://outlook.com" rel="noreferrer" target="_blank">Outlook</a>
            </li>
            
            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={oac} alt="HCS" height="16px" width="16px" /><a href="https://www.openaccess.edu.au/students/student-links" rel="noreferrer" target="_blank">Open Access</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={csinschool} alt="HCS" height="16px" width="16px" /><a href="https://year7.io/classroom/" rel="noreferrer" target="_blank">Year7 Coding</a>
            </li>
            
        </ul>
    );
}


const Teacher = () => {
    return (
        <ul className="list-group list-group-flush" >
            <li className="list-group-item d-flex align-items-center">
                <img className="mr-2" src={canvas} alt="HCS" /><a href="https://horizon-sa.instructure.com" rel="noreferrer" target="_blank">Canvas</a>
            </li>
    
            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={edupage} alt="HCS" height="16px" width="16px" /><a href="https://horizoncs.edupage.org/" rel="noreferrer" target="_blank">Edupage</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={pcs} alt="HCS" height="16px" width="16px" /><a href="https://spider.horizon.sa.edu.au/" rel="noreferrer" target="_blank">Spider</a>
            </li>

            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={outlook} alt="HCS" height="16px" width="16px" /><a href="https://outlook.com" rel="noreferrer" target="_blank">Outlook</a>
            </li>
            <li className="list-group-item d-flex align-items-center">
            <img className="mr-2" src={gcal} alt="HCS" height="16px" width="16px" /><a href="https://calendar.google.com/" rel="noreferrer" target="_blank">Calendar</a>
            </li>
        </ul>
    );
}

export default PLinks;