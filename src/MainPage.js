import React, { Component } from "react";
import "./MainPage.css";
import Header from "./header";
import SubHeader from "./subHeader";
import Content from "./components/containers/categoryContent";
import Submit from "./input";
import CategoryItem from "./components/containers/categoryItem";
import CategoryContainer from "./components/containers/categoryContainer";
import {
  getCategories,
  createCategory,
  createTicket,
  getTickets,
} from "./utils/LocalDB";

class MainPage extends Component {
  state = {
    isDialogOpen: false,
    term: "",
    categories: [],
    tickets: [],
    mainStyle: true,
  };

  componentDidMount() {
    this.getCategories();
    this.getTickets();
  }

  getCategories = () => {
    getCategories().then((categories) => {
      this.setState({ categories });
    });
  };
  getTickets = () => {
    getTickets().then((tickets) => {
      this.setState({ tickets });
    });
  };

  handleFirstStyle = () => {
    this.setState({
      mainStyle: true,
    });
  };
  handleSecondStyle = () => {
    this.setState({
      mainStyle: false,
    });
  };
  onChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    createCategory({ title: this.state.term }).then((newCat) => {
      this.setState({
        term: "",
        categories: [...this.state.categories, newCat],
      });
    });
  };

  handleNewTicket = (ticket) => {
    createTicket(ticket).then((data) => {
      this.setState({ tickets: [...this.state.tickets, data] });
    });
  };

  getTicketsForCategory = (id) => {
    return this.state.tickets.filter((i) => i.categoryId === id);
  };

  render() {
    const firstStyle = {};
    const secondStyle = {};

    if (this.state.mainStyle) {
      firstStyle.display = "none";
    } else {
      secondStyle.display = "none";
    }
    return (
      <div className='App'>
        <Header />
        <SubHeader />
        <div className='content'>
          <div className='content1'>
            {this.state.categories.map((category) => (
              <CategoryItem
                tickets={this.getTicketsForCategory(category.id)}
                category={category}
                key={category.id}
                onNewTicketCreated={this.handleNewTicket}
              />
            ))}
          </div>
          <div>
            <div
              className='categoryClass5'
              style={secondStyle}
              onClick={this.handleSecondStyle}>
              <div>
                <span className='categoryClass6'>
                  <span className='icon-plus categoryClass7'></span>
                  Add a list
                </span>
              </div>
            </div>
            <div className='categoryClass2' style={firstStyle}>
              <div className='categoryClass1'>
                <div className='categoryClass4'>
                  <div>
                    <input
                      type='text'
                      placeholder='Enter list title...'
                      className='categoryClass9'
                      value={this.state.term}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='categoryClass11'>
                    <form onSubmit={this.onSubmit}>
                      <button
                        className='categoryClass8'
                        disabled={!this.state.term}>
                        Add List
                      </button>
                    </form>
                    <button
                      className=' categoryClass12  '
                      onClick={this.handleFirstStyle}>
                      <span className='icon-hamburger-menu-close categoryClass13'></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
