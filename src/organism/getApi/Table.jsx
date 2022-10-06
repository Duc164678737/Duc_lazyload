import React, { useEffect, useState } from "react";
import { AiFillEye, AiOutlineSearch } from "react-icons/ai";
import { BsFillArchiveFill, BsPencilFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { getuser } from "../../api/table";
import "../getApi/Table.scss";
import Test from "../search/Test";

// import { CountPage } from "./ApiTable";

const Table = ({
  data,
  columns,
  handlePre,
  totalPage,
  arrayPage,
  setUsers,
  handleChange,
  id,
  dataID
}) => {

  

  // useEffect(() => {
  //   ApiTable();
    
    // CountPage();
    // const add = async () =>{
    //     const {data} = await creat({name:"dsadsa"})
    //     console.log(data)
    // }
    // add();
    
  // }, []);
  

  
  return (
    
    <>
      <h2>List User</h2>
      <div className="table">
        <div className="searchTable">
          <div className="searchTable-item">
            <input
              //  onChange={search}
              // onChange={e=>handleChange(e)}
              type="text"
              placeholder="Search by Name..."
            />
            <AiOutlineSearch className="searchIcon" />
          </div>
          <div className="searchTable-sort">
            <span>Sort by </span>
            <select name="" id="" onChange={handleChange}>
            <option value='Default'>Default</option>
              {
                columns.map((col,index)=>(
                  <option key={index} value={col.field}>{col.Header}</option>
                ))
              }
              
            </select>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              {columns.map((head,index) => (
                <th key={index}>{head.Header}</th>
              ))}
              
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                {columns.map((col,index)=> (
                    <th key={index}>
                      {col.customFuntion 
                      ? (col.customFuntion(row)) 
                      : <span>{row[col.field]}</span>
                    }
                    </th>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className="pagination">

        <Link to={`/table/${id-1}`} >
          <button className="paginationBtn" disabled={id==1} onClick={() =>handlePre(id-1)}>
            Previous
          </button>
          </Link>

          {arrayPage.map((total,index)=>(
            <Link to={`/table/${index+1}`} key={index}>
            <button key={index} onClick={() =>handlePre(total)} className="paginationBtn">
            {total}
          </button>
          </Link>
          ))}

          <Link to={`/table/${dataID+1}`} >
          <button className="paginationBtn" disabled={dataID==totalPage} onClick={() =>handlePre(dataID+1)}>
            Next
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Table;
