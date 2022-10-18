import React from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub /> Login with Github
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default RightSideNav;
