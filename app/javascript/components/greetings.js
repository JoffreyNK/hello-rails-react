import React, { useState, useEffect } from 'react';

export default function  Quote (){
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/greetings_api")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="border rounded-4 p-4">
          <q className="text-dark fs-2 text-muted  mb-3">{quote.message}</q>
          <p className="text-secondary fs-3">by: <span className="fst-italic">{quote.author}</span> </p>
      </div>
    );
  }
}
