import React from "react";
// Components and Pages
import Home from "./pages/Home";
// Router
import { Route } from "react-router-dom";
// Styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;
