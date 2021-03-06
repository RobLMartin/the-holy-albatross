import React from "react";
import "./App.css";
import useCurrentWidth from "./useCurrentWidth";

const App = () => {
  const width = useCurrentWidth("column");

  return (
    <>
      <header>
        <div className="container flow centered">
          <h1 className="title">The Holy Albatross</h1>
        </div>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="columns" id="column">
            <div className="columns">
              <div className="card flow">
                <h3 className="card__title">Card 1</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, molestiae!
                </p>
              </div>
              <div className="card flow">
                <h3 className="card__title">Card 2</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, molestiae! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Ratione libero error, porro corrupti maxime
                  accusantium. Dolor exercitationem libero sapiente iste.
                </p>
              </div>
              <div className="card flow">
                <h3 className="card__title">Card 3</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere, molestiae!
                </p>
              </div>
            </div>
            <div className="another-section">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit assumenda consectetur, mollitia perferendis
                perspiciatis facere praesentium ipsam voluptate dolore corrupti?
              </p>
            </div>
          </div>
        </div>
        <div className="width-indicator">
          <p>
            The width of <code>.columns</code> is: {width}
          </p>
        </div>
      </main>
    </>
  );
};

export default App;
