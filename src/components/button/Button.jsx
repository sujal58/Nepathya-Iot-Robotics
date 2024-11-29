import React from "react";

function Button({ text, icon, alternate, style }) {
  return (
    <a className={`bg-bg-button text-white text-center ${style}`}>
      {icon ? (
        <button className="flex gap-2 w-full">
          <div>
            <img src={icon} alt={alternate} />
          </div>
          <span>{text}</span>
        </button>
      ) : (
        <button>{text}</button>
      )}
    </a>
  );
}

export default Button;
