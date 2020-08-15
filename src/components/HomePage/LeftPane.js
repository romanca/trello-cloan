import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LeftPane.css";

class LeftPane extends Component {
  render() {
    return (
      <div className='leftpane3'>
        <nav className='leftpane4'>
          <Link className='leftpane5' to='./boards'>
            <span className='leftpane6 fa fa-trello'>
              <span className='leftpane7'>Boards</span>
            </span>
          </Link>
          <Link className='leftpane5' to='/mainpage'>
            <span className='leftpane6 fa fa-folder'>
              <span className='leftpane8'>Templates</span>
            </span>
          </Link>
          <Link className='leftpane5' to='/'>
            <span className='leftpane6  fa fa-home'>
              <span className='leftpane9'>Home</span>
            </span>
          </Link>
        </nav>
        <div className='leftpane10'>
          <div className='leftpane11'>
            <div className='leftpane12'>TEAMS</div>
            <button className='leftpane29 fa fa-plus'></button>
          </div>
        </div>
      </div>
    );
  }
}
export default LeftPane;
