import React, { useEffect, useState } from 'react'
import Table from './Table'
import * as ApiTables  from './ApiTable'
import { getuser } from '../../api/table';
import { useParams } from 'react-router-dom';
import { AiFillEye, AiOutlineSearch } from "react-icons/ai";
import { BsFillArchiveFill, BsPencilFill } from "react-icons/bs";



const Comlums = () => {
  
    const [users, setUsers] = useState([]);
    const [totalPage, setTotalPage] = useState([])
    const [count, setCount] = useState(1);

    const {id} = useParams();
    const dataID = Number.parseInt(id);

    let arrayPage = [];
    let arrayKey = [];
    // let arrayName = ['ID','Avatar','First Name','Last Name','Email'];
    
    for (let i = 1; i<=totalPage; i++){
        arrayPage.push(i)
    }

    
    useEffect(() => {
        // ApiTable();
        const ApiTable = async () => {
            const data = await ApiTables.ApiTable(id);
            setUsers(data.data);
            setTotalPage(data.total_pages);
        }
        ApiTable();
    }, []);

    // const ApiTable = async () => {
    //     try {
    //       const {data} = await getuser(id);
    //       setUsers(data.data);
    //       setTotalPage(data.total_pages);
    //       return data.data;
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };

      for (const key in users[0]){
          arrayKey.push(key);
      }
    
      
    const handlePre = async (index) => {
        setCount(index)
        const {data} = await getuser(index);
        setUsers(data.data);
    }

    const handleChange = async (e) => {
        const value = e.target.value;
        
        if(value=="Default"){
            const {data} = await getuser(id);
            setUsers(data.data);
        }
        else if(value=="id"){
            const {data} = await getuser(id);
            setUsers(data.data.reverse());
        }
        else {
            const sorted = [...users].sort(
                (a,b)=>a[value].toLowerCase() > b[value].toLowerCase() ? 1:-1)
                setUsers(sorted)
        }
      }

    const columns = [
        { field: arrayKey[0], Header: "ID" },
        { field: arrayKey[1], Header: "Email" },
        { field: arrayKey[2], Header: "First Name" },
        { field: arrayKey[3], Header: "Last Name" },
        { field: 'avatar', 
          Header: "Avatar",
          customFuntion: (rowData) =>  <img src={rowData.avatar} className="userImg" />
        },
        { field: "action", 
          Header: "Action",
          customFuntion: (rowData) => 
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
          
        }
    ]

  return (
  
    <Table totalPage={totalPage} 
        arrayPage={arrayPage} 
        handlePre={handlePre} 
        data={users} 
        columns={columns} 
        setUsers={setUsers}
        handleChange={handleChange}
        id={id}
        dataID={dataID}
        />
  )
}

export default Comlums