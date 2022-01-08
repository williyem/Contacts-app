import React from "react";
import "./contactList.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ContactList = ({ list, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="contactList-container form">
        <h1>Contact List</h1>
        <p>Click to view</p>
        {list.map((item) => {
          const { name, id } = item;
          return (
            <div className="contact" key={id}>
              <div className="details">
                <span className="name">{name}</span>
                <div className="icons">
                  <button className="button" onClick={() => handleEdit(id)}>
                    <AiOutlineEdit />
                  </button>
                  <button className="button" onClick={() => handleDelete(id)}>
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ContactList;
