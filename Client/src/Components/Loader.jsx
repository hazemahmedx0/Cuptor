import React from "react";

const Loader = () => (
  <div role="status">
    <svg
      className="animate-spin "
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17.5" cy="17.5" r="16" stroke="#30006C" stroke-width="3" />
      <circle cx="17.5" cy="11.5" r="4.5" fill="#7000FF" />
    </svg>
  </div>
);

export default Loader;
