import React, { useEffect, useState } from "react";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/news-categories`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <h4>All Category</h4>
    </div>
  );
};

export default LeftSideNav;
