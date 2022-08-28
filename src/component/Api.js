import React, { useState, useEffect, } from 'react';
import  ReactDOM  from 'react-dom';


function Tabledata (){

  const [objects, setObjects] = useState([]);

  const fetchData = ()=>{

    const apiurl = 'http://localhost:5000/getData';
      fetch(apiurl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
  }

  useEffect( ()=>{
    fetchData();
  },[]);

}
export default Tabledata;