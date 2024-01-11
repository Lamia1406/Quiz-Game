const queries = [
  {
    text: 'What is the capital of Palestine?',
    query: `
      PREFIX dbo: <http://dbpedia.org/ontology/>
      PREFIX dbr: <http://dbpedia.org/resource/>
    
      SELECT ?capital
      WHERE {
        dbr:State_of_Palestine dbo:capital ?capital.
      }
    `,
  },
  {
    text: 'What is the religion of the majority population in Maldives',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    PREFIX dbr: <http://dbpedia.org/resource/>
    SELECT ?religion
    WHERE {
      dbr:Maldives dbo:religion ?religion.
    }
    `,
  },
  {
    text: 'What is the official currency of Brazil?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    PREFIX dbr: <http://dbpedia.org/resource/>
    
    SELECT ?currency
    WHERE {
      dbr:Brazil dbo:currency?currency.
    }
    `,
  },
  {
    text: 'Which river is the longest in the world?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    PREFIX dbr: <http://dbpedia.org/resource/> 
    
    SELECT ?river 
    WHERE {
      ?river rdf:type dbo:River.
      ?river dbo:length ?length.
      FILTER NOT EXISTS { ?river dbo:type dbr:Ocean }
    }
    ORDER BY DESC(?length)
    LIMIT 1
    `,
  },
  {
    text: 'Who is the author of the novel "Pride and Prejudice"?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    PREFIX dbr: <http://dbpedia.org/resource/> 
    
    SELECT ?author 
    WHERE {
      dbr:Pride_and_Prejudice dbo:author ?author.
    }
    `,
  },
  {
    text: 'What is the birthplace of Matthew Perry?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    PREFIX dbr: <http://dbpedia.org/resource/> 
    
    SELECT ?birthPlace 
    WHERE {
      dbr:Matthew_Perry dbo:birthPlace ?birthPlace.
    }
    `,
  },
  {
    text: 'Which country has the countrycode +40?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>

SELECT ?country
WHERE {
  ?country  rdf:type dbo:Country;
           dbo:countryCode "+40".
}
    `,
  },
  {
    text: 'What is the 4rth largest country in the world ?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
PREFIX schema: <http://schema.org/>
PREFIX dbp: <http://dbpedia.org/property/>

SELECT DISTINCT ?country 
WHERE {
  ?country a dbo:Country.
  ?country a schema:Country.
  ?country dbo:capital ?capital.
  ?country dbo:area ?area.
  ?country dbp:leaderName ?leaderName.
}
ORDER BY DESC(?area)
OFFSET 3
LIMIT 1

    `,
  },
  {
    text: 'What traditional Middle Eastern dish is made mainly from mashed chickpeas and tahini?',
    query: `
    PREFIX dbo: <http://dbpedia.org/ontology/>
    SELECT DISTINCT ?dish
    WHERE {
      ?dish dbo:ingredient dbr:Tahini.
      ?dish dbo:ingredient dbr:Chickpea.
      ?dish dbo:country dbr:Middle_East.
    }
    `,
  },
  {
    text: 'What are the potential outcomes of mating between donkeys and horses, considering variations in species and names, including cases where the mating partners are of the same species?',
    query: `
    PREFIX dbp: <http://dbpedia.org/property/>
PREFIX dbo: <http://dbpedia.org/ontology/>

SELECT ?animal 
WHERE
{
  {
    ?animal a dbo:Mammal .
    ?animal dbp:fatherLink "Donkey"@en .
    ?animal dbp:motherLink "Horse"@en .
  }
  UNION
  {
    ?animal a dbo:Mammal .
    ?animal dbp:fatherLink "Horse"@en .
    ?animal dbp:motherLink "Donkey"@en .
  }
  UNION
  {
    
    ?animal dbp:name "Donkey"@en .
 ?animal dbp:species "africanus"@en .
  }
  UNION 
  {
   
    ?animal dbp:name "Horse"@en .
?animal dbp:species "ferus"@en . 

  }
}

    `,
  },
];

export default queries;
