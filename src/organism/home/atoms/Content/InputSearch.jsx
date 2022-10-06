import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const InputSearch = () => {
  return (
    
        <div className="searchTable-item">
          <input
            //  onChange={search}
            // onChange={e=>handleChange(e)}
            type="text"
            placeholder="Search by Name..."
          />
          <AiOutlineSearch className="searchIcon" />
        </div>
      
  );
};

export default InputSearch;
