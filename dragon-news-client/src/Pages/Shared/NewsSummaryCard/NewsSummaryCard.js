import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  console.log(news);
  const { _id, title, total_views, author, details, image_url } = news;
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>
            {details.length > 200 ? (
              <p>
                {details.slice(0, 200) + "..."}{" "}
                <Link to={`/news/${_id}`}>Read more</Link>
              </p>
            ) : (
              <p>{details}</p>
            )}
          </Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
