import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react'
import Data from '../../Data'
import './index.scss'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import  Test  from '../search/Test'

export const DataContext = createContext();

const Loading = () => (
    <div className="post loading">
        <h5>Loading...</h5>
        <div className="lds-spinner"></div>
        {/* <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> */}
    </div>
)

export const DetailId = (id) => {
    const datas = Data.filter(data => data.id === id)
    return datas;
}


const Home = (props) => {

    // const {indexs} = props
    // console.log("Home",indexs)

    const [searchText, setSearchText] = useState('');
    const [dataSearch, setDataSearch] = useState([]);
    // const debounce = useDebounce(searchText,3000);
    
    const handleChange = (e) => {
        setSearchText(e.target.value)
    }

    
    const deb = Test(handleChange,3000);
    console.log(searchText);
    
    useEffect(()=>{
        if(!searchText) {
            setDataSearch(Data)
        }
        setDataSearch(Data.filter(data => (data.title.includes(searchText))));
    },[searchText])



    
    
    return (
        <div>
            <div className="header">
                <a href="/" className="logo">
                    <img src={require('../../image/logo.png')} />
                </a>
                <ul>
                    <li>
                        <a className="subnav" href="">Home</a>
                    </li>
                    <li>
                        <a href="list">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <Link to={`/table/1`} >Table</Link>
                    </li>
                </ul>
            </div>
            <div className="content">
                
                <div className="contentBox">
                    <h2> It's not just Coffee
                        <br />It's
                        <span> Starbucks</span>
                    </h2>
                    <p>delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incidunt ut animi commodi</p>
                    <a href="">Buy now</a>
                </div>
                <div className="background">
                <div className="imgBox">
                        <img src={require('../../image/img1.png')} />
                        <ul className='thumb'>
                        <li>
                            <img src={require('../../image/thumb1.png')} />
                        </li>
                        <li>
                            <img src={require('../../image/thumb2.png')} />
                        </li>
                        <li>
                            <img src={require('../../image/thumb3.png')} />
                        </li>
                    </ul>
                    </div>
                    
                </div>
            </div>

            <div className='home'>
                <div className="homeList">List Starbucks</div>
                <div className="search">
                     <input
                    //  value={searchText}
                     onChange={deb}
                     type='text'
                     placeholder="Search..."
            
                       />
                    <AiOutlineSearch className='searchIcon'/>
                </div>
                
                <div className='main'>
                    <ul className='homeLazy'>
                        { dataSearch.map(data => (
                            <LazyLoad
                                key={data.id}
                                height={500}
                                offset={[-80, 500]}
                                placeholder={<Loading />}
                            >
                                <li className='homeLazy__title' key={data.id}>
                                <img src={require('../../image/img2.png')} />
                                    {data.title}
                                    <button className='btnDetail'>
                                        <Link className='btnLink' to={`/Datail/${data.id}`} state={data}>Detail</Link>
                                    </button>
                                    
                                </li>
                            </LazyLoad>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
       
    )
}

export default Home