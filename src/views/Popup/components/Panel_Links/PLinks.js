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
        <div className="col-5 pl-0">
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Student">
                    <Student />
                </Tab>
                <Tab eventKey="teacher" title="Teachers">
                    <Teacher />       
                </Tab>
            </Tabs>
        </div>
  );
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