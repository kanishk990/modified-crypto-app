import React from 'react';

const infofromApi = ()=>{
    const apiurl = 'http://localhost:5000/getData';
    fetch(apiurl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
}
export default infofromApi;