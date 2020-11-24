import React from "react";
import PropTypes from "prop-types";
import "./Attendance.scss";
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Attendance = ({}) => {
  return (
    <>
      <div className="attendance">
        <div className="attendance-container">
          <div className="attendance-container-search">
            <input type="date" />
            <input type="text" placeholder="학번"/>
          </div>
          <div className="attendance-container-btn">리스트생성</div>
        </div>
        <div className="attendance-list">
          <div className="attendance-list-content">
            <div className="attendance-list-content-name">학생이름</div>
            <div className="attendance-list-content-area">
              <div className="attendance-list-content-area-value">아침점호 : <span style={{color: '#25822E'}}>출석</span></div>
              <div className="attendance-list-content-area-value">저녁점호 : <span style={{color: '#C41E1E'}}>결석</span></div>
            </div>
          </div>

          <div className="attendance-list-content">
            <div className="attendance-list-content-name">학생이름</div>
            <div className="attendance-list-content-area">
              <div className="attendance-list-content-area-value">아침점호 : <span style={{color: '#25822E'}}>출석</span></div>
              <div className="attendance-list-content-area-value">저녁점호 : <span style={{color: '#C41E1E'}}>결석</span></div>
            </div>
          </div>

          <div className="attendance-list-content">
            <div className="attendance-list-content-name">학생이름</div>
            <div className="attendance-list-content-area">
              <div className="attendance-list-content-area-value">아침점호 : <span style={{color: '#25822E'}}>출석</span></div>
              <div className="attendance-list-content-area-value">저녁점호 : <span style={{color: '#C41E1E'}}>결석</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Attendance.propTypes = {

};

export default Attendance;
