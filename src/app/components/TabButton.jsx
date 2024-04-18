import React from "react";

const TabButton = ({ active, selecctTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selecctTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
