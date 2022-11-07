import React from "react";
import { Link } from "react-router-dom";
import AnotherMenu from "../AnotherMenu/AnotherMenu";
import "./UserExists.css";

const UserExists = () => {
  return (
    <div>
        <AnotherMenu/>
      <div className="existingUser">
        <h1>User alredy exists with this email</h1>
        <br />
        <br />
        <Link style={{ textDecoration: "none" }} to="/login">
          <h4>Try to login</h4>
        </Link>
        <br />
        <Link style={{ textDecoration: "none" }} to="/signup">
          <h4>Create new user</h4>
        </Link>
      </div>
    </div>
  );
};

export default UserExists;
