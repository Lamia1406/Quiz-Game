import React, { useState, useEffect } from "react";
import axios from "axios";
const Card = ({ text, query }) => {
  const [answer, setAnswer] = useState("");
  const handleQueryExecution = async (query) => {
    try {
      const response = await axios.get("http://dbpedia.org/sparql", {
        params: {
          query: query,
          format: 'json',
        },
      });
      const results = response.data.results.bindings.map(binding => {
        return Object.values(binding).map(prop => {
          const uriParts = prop.value.split('/');
          return uriParts[uriParts.length - 1].replace(/_/g, ' ');;
        });
      });

      setAnswer(results);
    } catch (error) {
      console.error(`Error executing query ID ${query.id}:`, error.message);
    }

  };


  useEffect(() => {

    handleQueryExecution(query);
  }, [query]);

  return (
    <div className="card-container col-3">
      <div className="front">
        <div> {text} </div>
      </div>
      <div className="back">
        {answer && (
          <ul>
            {answer.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}

      </div>
    </div>
  );
};
export default Card;
