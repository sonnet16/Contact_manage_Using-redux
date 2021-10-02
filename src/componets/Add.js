import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Add = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkMail = contacts.find(
      (contact) => contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) => contact.number === parseInt(number) && number
    );

    if (!email || !number || !name) {
      return toast.warning("Please input all the information");
    }

    if (checkMail) {
      return toast.error("This email is already exist");
    }
    if (checkNumber) {
      return toast.error("This number is already exist");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Contact added successfully");
    history.push("/");
  };

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-3 text-center">Add Contact</h1>
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group pb-2">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className="form-control"
              />
            </div>
            <div className="form-group pb-2">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="form-control "
              />
            </div>
            <div className="form-group pb-2">
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Phone"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Add people"
                className="btn w-100 btn-dark"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
