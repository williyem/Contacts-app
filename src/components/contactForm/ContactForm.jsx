import React, { useState } from "react";
import ContactList from "../contactList/ContactList";
import "./contactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) {
    } else if (isEditing && name && phone) {
      setList(
        list.map((item) => {
          if (editId === item.id) {
            return { ...list, name: name, phone: phone };
          }
          return item;
        })
      );
      setName("");
      setPhone("");
      setEditId(null);

      setIsEditing(false);

      console.log("Is Editing in peace");
    } else {
      // add to list
      const newItem = {
        name: name,
        phone: phone,
        id: new Date().getTime().toString(),
      };
      setList([...list, newItem]);
      setName("");
      setPhone("");
      console.log("else executed!");
    }
  };

  const handleDelete = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handleEdit = (id) => {
    const listItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setName(listItem.name);
    setPhone(listItem.phone);
    setEditId(listItem.id);
  };
  return (
    <>
      <form action="submit" className="form" onSubmit={handleSubmit}>
        <h1 className="heading">Add Contact</h1>
        <div className="input-container">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone</label>
          <input
            type="number"
            name="phone"
            placeholder="000-000-000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className="save btn">
          {isEditing ? "Edit" : "Save"}
        </button>
      </form>
      <ContactList
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default ContactForm;
