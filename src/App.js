import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../src/Pages/card"
import queries from "./queries/sparqlQueries";
import Background from "./Pages/background";
const App = () => {
  return (
    <div className="question-page">
      <div className="header">
        Knowledge Cards
      </div>
      <div className="content">
        <Background />
        <div className="cards row justify-content-center g-3">
          {queries.map((question) => (
            <Card key={question.id} text={question.text} query={question.query} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
