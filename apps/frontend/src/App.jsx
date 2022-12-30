import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
// import Content from "../Content/Content";
import useImage from "./hooks/useImage";
// const fs = require("graceful-fs");
import db from "./db/db.js";
const App = () => {
  const Image = ({ fileName, alt, className, ...rest }) => {
    const { loading, error, image } = useImage(fileName);
    if (error) return <p>{alt}</p>;
    return (
      <>
        {loading ? (
          <p>loading</p>
        ) : (
          <img
            className={`Image${className ? className.padStart(className.length + 1) : ""}`}
            src={image}
            alt={alt}
            {...rest}
          />
        )}
      </>
    );
  };

  const galleryBuilder = (artList = db) => {
    return artList.map((art) => (
      <Image key={art.id} fileName={art.fileName} alt={art.name} className={art.name} />
    ));
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        {galleryBuilder()}
      </div>
    </div>
  );
};

export default App;
