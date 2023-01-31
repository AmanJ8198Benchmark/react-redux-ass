import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Users from './component/users'
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { DataLoader } from './interfaces/dataloader';
import { useState, useEffect } from 'react'
import axios from 'axios'
import users from './component/users';
import Pagination from './component/pagination';

function App() {
  /*
  const [data, setData] = React.useState({
    data: [],
    total: 77
  });
  const [dataState, setDataState] = React.useState({
    take: 10,
    skip: 0
  });
  const dataStateChange = e => {
    setDataState(e.dataState);
  };
  const dataReceived = data => {
    setData(data);
  };*/
  /*
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [StudentsPerPage] = useState(3);


  useEffect(() => {
      axios.get('https://gorest.co.in/public/v1/users')
          .then(res => {
                  setData(res.data.data); 
                  setLoading(false);
              })
              .catch(() => {
                  alert('There was an error while retrieving the data')
              })
  }, [])*/
  
   

  return (
    
    <div>
   
   <h1>Redux Tutorial</h1>
         <Users/>
  </div>
  );
}
export default App;
