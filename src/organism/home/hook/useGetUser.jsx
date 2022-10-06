import React, { useEffect, useState } from "react";
import * as ApiTables from "../Api/GetApiUser";
import { getuser } from "../../../api/table";
import { useParams } from "react-router-dom";
import { AiFillEye, AiOutlineSearch } from "react-icons/ai";
import { BsFillArchiveFill, BsPencilFill } from "react-icons/bs";

const useGetUser = () => {
  const [users, setUsers] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const dataID = Number.parseInt(id);

  let arrayPage = [];
  

  for (let i = 1; i <= totalPage; i++) {
    arrayPage.push(i);
  }
  
  useEffect(() => {
    ApiTable();
    // handleChange();
    // handlePre();
}, [id]);

const ApiTable = async () => {
    try {
      const {data} = await getuser(id);
      setUsers(data.data);
      setTotalPage(data.total_pages);
      return data.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePre = async (index) => {
    setCount(index);
    const {data} = await getuser(index);
    setUsers(data.data);
  };

 
  const handleChange = async (e) => {
    const value = e.target.value;

    if (value == "Default") {
      const { data } = await getuser(id);
      setUsers(data.data);
    } else if (value == "id") {
      const { data } = await getuser(id);
      setUsers(data.data.reverse());
    } else {
      const sorted = [...users].sort((a, b) =>
        a[value].toLowerCase() > b[value].toLowerCase() ? 1 : -1
      );
      setUsers(sorted);
    }
  };
  // console.log(users);
  
  const columns = [
    { field: "id", Header: "ID" },
    { field: "email", Header: "Email" },
    { field: "first_name", Header: "First Name" },
    { field: "last_name", Header: "Last Name" },
    {
      field: "avatar",
      Header: "Avatar",
      customFuntion: (rowData) => (
        <img src={rowData.avatar} className="userImg" />
      ),
    },
    {
      field: "action",
      Header: "Action",
      customFuntion: (rowData) => (
        <div className="action">
          <button className="action-Eye">
            <AiFillEye />
          </button>
          <button className="action-Edit">
            <BsPencilFill />
          </button>
          <button className="action-Delete">
            <BsFillArchiveFill />
          </button>
        </div>
      ),
    },
  ];
  
  return {
    totalPage,
    arrayPage,
    handlePre,
    columns,
    setUsers,
    handleChange,
    id,
    dataID,
    users,
  };
};

export default useGetUser;
