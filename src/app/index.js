import React from "react";
import "./App.css";

const App = () => (
  <>
    <header>
      <div className="container flow centered">
        <h1 className="title">The Holy Albatross</h1>
      </div>
    </header>
    <main class="main-content">
      <div className="container">
        <div className="columns">
          <div className="card flow">
            <h3 className="card__title">Card 1</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              sed, ratione provident veniam eius enim reiciendis, alias rerum
              animi distinctio molestiae perspiciatis? Ducimus soluta totam
              sapiente in! Perferendis vero ratione inventore reiciendis sunt
              quis labore animi sint error fuga!
            </p>
          </div>
          <div className="card flow">
            <h3 className="card__title">Card 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              molestiae!
            </p>
          </div>
          <div className="card flow">
            <h3 className="card__title">Card 3</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              provident fugit quod recusandae molestias est consequatur sed,
              laudantium commodi temporibus.
            </p>
          </div>
        </div>
      </div>
      <div className="width-indicator">
        <p>
          The width of <code>.columns</code> is:
        </p>
      </div>
    </main>
  </>
);

export default App;
