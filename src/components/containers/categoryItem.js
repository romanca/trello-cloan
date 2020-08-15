import React, { Component, useState } from "react";
import "./categoryItem.css";

const Ticket = ({ ticket }) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        borderRadius: "3px",
        padding: 5,
        marginBottom: 5,
      }}>
      {ticket.title}
    </div>
  );
};

const CategoryItem = ({ category, onNewTicketCreated, tickets }) => {
  const [editing, setEditing] = useState();
  const [value, setValue] = useState("");

  const onSubmit = () => {
    const newTicket = {
      title: value,
      categoryId: category.id,
    };
    onNewTicketCreated(newTicket);
    setValue("");
    setEditing(false);
  };

  return (
    <div className='categoryItemClass1'>
      <div className='categoryItemClass2'>{category.title}</div>
      <div
        className='categoryItemClass3'
        onClick={() => {
          setEditing(true);
        }}>
        {tickets.map((i) => (
          <Ticket ticket={i} key={i.id} />
        ))}
        {editing ? (
          <div className='categoryItemClass7'>
            <div className='categoryItemClass3'>
              <textarea
                value={value}
                onChange={(event) => {
                  setValue(event.target.value);
                }}
                type='text'
                placeholder='Enter a title for this style...'
                className='categoryItemClass6'
              />
            </div>
            <div className='categoryItemClass11'>
              <button className='categoryItemClass8' onClick={onSubmit}>
                Add card
              </button>
              <button
                className=' categoryItemClass12  '
                onClick={() => {
                  setEditing(false);
                }}>
                <span className='icon-hamburger-menu-close categoryClass13'></span>
              </button>
            </div>
          </div>
        ) : (
          <div className=' icon-plus categoryItemClass5'>
            <span className='categoryItemClass4'>Add a card</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryItem;
