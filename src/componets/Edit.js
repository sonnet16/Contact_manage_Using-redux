import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkMail = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.email === email && email
    );

    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) &&
        contact.number === parseInt(number) &&
        number
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
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact updated successfully");
    history.push("/");
  };

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  return (
    <div className="container">
      {currentContact ? (
        <div className="row">
          <h1 className="display-3 text-center">
            Update Contact # {parseInt(id) + 1}
          </h1>
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
                <input type="submit" value="Update" className="btn  btn-dark" />
                <Link to="/" className="btn  btn-danger ms-3">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <h1 className="display-2 text-center">
          Person doesn't exist in #{parseInt(id) + 1}
        </h1>
      )}
    </div>
  );
};

export default Edit;
