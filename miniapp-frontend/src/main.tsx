import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./components/App/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { JobOverviewPage } from "./pages/JobOverview/JobOverviewPage.tsx";
import { JobFormPage } from "./pages/JobForm/JobFormPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<JobOverviewPage />} />
          <Route path="job-form" element={<JobFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
