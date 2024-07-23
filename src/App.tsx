import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MyCrmPage from "./pages/MyCrmPage";
import SecurityPage from "./pages/SecurityPage";
import MyDocumentsPage from "./pages/MyDocumentsPage";
import MyCrmWebConferencesPage from "./pages/MyCrmWebConferencesPage";
import ErpPage from "./pages/ErpPage";
import { Outlet, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

// partner application form


function App() {
  return (
    <>
      {/* <Routes>
        <Route
          element={
            <>
              <Layout>
                <Outlet />
              </Layout>
            </>
          }
        >
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h2>About</h2>} />
        </Route>{" "}
      </Routes> */}

      {/* <HomePage /> */}
      {/* <AboutPage /> */}
      {/* <MyCrmPage /> */}
      {/* <SecurityPage /> */}
      {/* <MyDocumentsPage /> */}
      {/* <MyCrmWebConferencesPage /> */}
      {/* <ErpPage /> */}
    </>
  );
}

export default App;
