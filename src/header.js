import React from "react";
import "./header.css";

const Header = ({ openDialog }) => {
  return (
    <div className='class1'>
      <button className='class2'>
        <span className='fa fa-bars class3'></span>
      </button>
      <button className='class2'>
        <span className='fa fa-home class3'></span>
      </button>
      <button className='class5'>
        <span className='fa fa-trello class6'></span>
        <span className='class4'>Boards</span>
      </button>
      <input type='text' className='class7' />
      <div className='class10'>
        <button className='class2' onClick={openDialog}>
          <span className='fa fa-plus class3'></span>
        </button>
        <button className='class2'>
          <span className='fa fa-exclamation-circle class3'></span>
        </button>
        <button className='class9'>
          <span className='fa fa-bell-o class3'></span>
        </button>
        <button className='class11'>
          <span
            style={{
              height: "32px",
              width: "32px",
              lineHeight: "32px",
              fontSize: "14px",
            }}>
            RJ
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
