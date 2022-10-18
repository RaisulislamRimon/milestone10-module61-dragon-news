import React from "react";
import { Button, ButtonGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

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
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroupItem className="mb-2">
            <FaFacebook /> Facebook
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaYoutube />
            Youtube
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaTwitter />
            Twitter
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaWhatsapp />
            Whatsapp
          </ListGroupItem>
          <ListGroupItem className="mb-2">
            <FaDiscord />
            Discord
          </ListGroupItem>
          <ListGroupItem className="mb-2">Privacy Policy</ListGroupItem>
          <ListGroupItem className="mb-2">Terms & Condition</ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightSideNav;
