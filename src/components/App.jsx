import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import AppRouter from "./router/AppRouter.jsx";
import "../global.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Layout>
          <main className="app-main">
            <AppRouter />
          </main>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;
