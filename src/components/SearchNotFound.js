import React from "react";

function SearchNotFound({ displayText = "None found" }) {
  return <div className="not-found-results">{displayText}</div>;
}

export default SearchNotFound;
