import React from "react";
import "./contactList.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const ContactList = ({ list, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="contactList-container form">
        <h1>Contact List</h1>

        {list.map((item) => {
          const { name, id, phone } = item;
          return (
            <div className="contact" key={id}>
              <div className="details">
                <span className="name">{name}</span>
                <span>{phone}</span>
                <div className="icons">
                  <button
                    className="button edit"
                    onClick={() => handleEdit(id)}
                  >
                    <AiOutlineEdit />
                  </button>
                  <button
                    className="button delete"
                    onClick={() => handleDelete(id)}
                  >
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
