import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id))
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
