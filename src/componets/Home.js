import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const Home = () => {
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Contact deleted successfully");
  };
  return (
    <HomeStyle className="container py-5">
      <div className="button-wrapper">
        <Link to="/add" className="btn btn-outline-dark  mb-5 ">
          Add Contact
        </Link>
      </div>

      <div className="row">
        <div className="col-md-10 mx-auto">
          <table className="table table-hover ">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Number</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.number}</td>
                  <td>
                    <Link
                      to={`edit/${id}`}
                      className="btn btn-small btn-primary me-2  "
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-small btn-danger"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </HomeStyle>
  );
};

export default Home;

const HomeStyle = styled.div`
  .button-wrapper {
    display: flex;
    justify-content: flex-end;
  }
`;
