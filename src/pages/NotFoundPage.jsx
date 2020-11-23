import React from "react";

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <h1>404 NOT FOUND</h1>
      <h2>Path: {location.pathname}</h2>
    </div>
  );
};

export default NotFoundPage;