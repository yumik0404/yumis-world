import React from 'react'

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active 
    ? "text-[#507A45] border-b border-[#F2DCDF]"
    : "text-[#393031]";

  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-[#507A45] ${buttonClasses}`}>
        {children}
        </p>
    </button>
  );
};

export default TabButton;