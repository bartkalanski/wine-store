import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import Store from "./routes/Store";
import Basket from "./routes/Basket";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Store} />
          <Route path="/basket" exact component={Basket} />
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
