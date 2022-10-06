import logo from './logo.svg';
import './App.css';
import Home from './organism/home/Home'
import Datail from './organism/detail/Datail';
import {
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

const Homes = React.lazy(() => import('./organism/home/Home'));
const Datails = React.lazy(() => import('./organism/detail/Datail'));
const NotFound = React.lazy(() => import('./organism/notFound/NotFound'));
const Table = React.lazy(() => import('./organism/getApi/Table'))
const Comlums = React.lazy(() => import('./organism/getApi/Colums'))
const UserTable = React.lazy(() => import('./organism/home/template/UserTable'))



function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<>Loading...</>}>
      <Routes>
          <Route path="/" element={<Homes />}/>
          <Route path="/Datail/:id" element={<Datails />}/>
          {/* <Route path="/table/:id" element={<Table />}/> */}
          <Route path="/table/:id" element={<UserTable />}/>
          
          <Route path="*" element={<NotFound />}/>
      </Routes>
      </React.Suspense>
      
    </div>
  );
}

export default App;
