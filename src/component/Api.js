import React, {useState, useEffect} from 'react';
import '../App.css';

function InfofromApi (){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getData")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);
  console.log(items);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return Object.keys(items).map((obj, i) =>{
      return (
        <div>
          {items[obj].base_unit}
          <div>
            lowest is : {items[obj].low}
          </div>
          <div>
            highest is : {items[obj].high}
          </div>
          <div>
            latest is : {items[obj].last}
            </div>
        </div>
      );
    })
  }
}

export default InfofromApi;