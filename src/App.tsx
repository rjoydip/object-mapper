import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

interface Source {
  [x: string]: string | number | boolean;
}

interface Destination {
  [x: string]: string | number | boolean;
}

interface Mapper {
  [x: string]: string;
}

function mappingObject(
  source: Source,
  destination: Destination,
  mapper: Mapper
) {
  const obj: Source = {};
  for (const key in source) {
    const destinationKey = mapper[key];
    obj[key] = destination[destinationKey];
  }
  return obj;
}

function App() {
  const source = {
    first_name: 'Joy',
    last_name: 'Roy',
    mobile: '1111',
  };

  const destination = {
    name: 'John',
    surname: 'Doe',
    phone: '5678',
  };

  const mapper = {
    first_name: 'name',
    last_name: 'surname',
    mobile: 'phone',
  };

  const mapperObject = mappingObject(source, destination, mapper);

  // console.log(mapperObject);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ul>
          {Object.entries(source).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {Object.entries(destination).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
        <hr />
        <ul>
          {Object.entries(mapperObject).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
