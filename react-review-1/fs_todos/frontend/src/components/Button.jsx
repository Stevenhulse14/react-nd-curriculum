import React from "react";

export default function Button({ type }) {
  let style = "";
  function chooseColor(option) {
    switch (option) {
      case "submit":
        style = "bg-primary text-white hover:bg-primary-dark";
        break;
      case "cancel":
        style = "bg-neutral-medium text-white hover:bg-neutral-dark";
        break;
      case "delete":
        style = "bg-red-600 text-white hover:bg-red-700";
        break;
      case "save":
        style = "bg-secondary text-black hover:bg-secondary-dark";
        break;
      default:
        style = "bg-neutral-light text-black hover:bg-neutral-medium";
        break;
    }
  }

  chooseColor(type);

  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-ed text-sm font-semibold transition duration-200 ${style}`}
    >
      {type.toUpperCase()}
    </button>
  );
}
