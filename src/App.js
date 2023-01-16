import "./App.css";
import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";

function App() {
  const [dataSet, setDataSet] = useState([]);

  const getData = async () => {
    const app = new Realm.App({ id: "realm_test-bdcjj" });
    const credentials = Realm.Credentials.anonymous();
    try {
      const user = await app.logIn(credentials);
      const allData = await user.functions.getAllData();
      setDataSet(allData);
    } catch (err) {
      console.error("Failed to log in", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {dataSet.map((data, key) => {
          return (
            <>
              <li>{data.name}</li>
            </>
          );
        })}
      </header>
    </div>
  );
}

export default App;
