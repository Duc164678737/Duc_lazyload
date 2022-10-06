import React, { useState, useContext, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Data from '../../Data'
import { DetailId } from '../home/Home'
import { DataContext } from '../home/Home'
import './index.scss'

const Datail = () => {

  // const datas = useContext(DataContext);
  // console.log(datas.id);

  let location = useLocation();
  const { id } = useParams();
  const dataID = Number.parseInt(id);

  // const dataID = location.pathname.slice(8);

  const [dataFill, setDataFill] = useState({});

  useEffect(() => {
    setDataFill(Data.find(data => (data.id == dataID)))
  }, [dataID]);


  console.log(dataFill);

  return (
    <>
      {dataFill
        ? dataFill
        && <div className="page">
          <div className="pageHome">
            <img src={require('../../image/img3.png')} />
            <div className="pageHomeContent">
              <h2> {dataFill?.title}</h2>
              <p>{dataFill?.body}</p>
              <div className="pageBtn">
            <Link className='pageBtnLink' to={`/`} >
              <span>Back</span>
              <i></i>
            </Link>
          </div>
            </div>
            
          </div>
          
        </div>
        : <h2> Address not Found</h2>
      }
    </>
  )
}

export default Datail