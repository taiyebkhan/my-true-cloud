import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/layout/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MyCrmPage from "./pages/MyCrmPage";
import MyDocumentsPage from "./pages/MyDocumentsPage";
import MyCrmWebConferencesPage from "./pages/MyCrmWebConferencesPage";
import ErpPage from "./pages/ErpPage";
import ErrorPage from "./pages/ErrorPage";
import EfficientCollaboration from "./pages/EfficientCollaboration";
import HealthcarePage from "./pages/HealthcarePage";
import ManufacturingPage from "./pages/ManufacturingPage";
import IndustryLegalPage from "./pages/IndustryLegalPage";
import ConsultingServicesPage from "./pages/ConsultingServicesPage";
import TrainingServicesPage from "./pages/TrainingServicesPage";
import CareersPage from "./pages/CareersPage";
import PartnerApplicationPage from "./pages/PartnerApplicationPage";
import SecurityPage from "./pages/SecurityPage";
import BankingServicesPage from "./pages/BankingServicesPage";
import PartnerProgramPage from "./pages/PartnerProgramPage";
import EventsPage from "./pages/EventsPage";
import BenefitsPage from "./pages/BenefitsPage";
import PressReleasesPage from "./pages/PressReleasesPage";
import ContactPage from "./pages/ContactPage";
import PharmaceuticalPage from "./pages/PharmaceuticalPage";
import ResourcesPage from "./pages/ResourcesPage";
import EducationPage from "./pages/EducationPage";

const HeaderLayout = () => (
  <>
    <Layout>
      <Outlet />
    </Layout>
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/my-crm",
        element: <MyCrmPage />,
      },
      {
        path: "/my-documents",
        element: <MyDocumentsPage />,
      },
      {
        path: "/my-web-conferences",
        element: <MyCrmWebConferencesPage />,
      },
      {
        path: "/erp",
        element: <ErpPage />,
      },
      {
        path: "/security",
        element: <SecurityPage />,
      },

      // industries
      {
        path: "/efficient-collaboration",
        element: <EfficientCollaboration />,
      },
      {
        path: "/healthcare",
        element: <HealthcarePage />,
      },
      {
        path: "/pharmaceutical",
        element: <PharmaceuticalPage />,
      },
      {
        path: "/manufacturing",
        element: <ManufacturingPage />,
      },
      {
        path: "/education",
        element: <EducationPage />,
      },
      {
        path: "/legal",
        element: <IndustryLegalPage />,
      },
      {
        path: "/consulting-service",
        element: <ConsultingServicesPage />,
      },
      {
        path: "/training-services",
        element: <TrainingServicesPage />,
      },
      {
        path: "/careers",
        element: <CareersPage />,
      },
      {
        path: "/banking-services",
        element: <BankingServicesPage />,
      },
      {
        path: "/resources",
        element: <ResourcesPage />,
      },

      // partner pages
      {
        path: "/partner-program",
        element: <PartnerProgramPage />,
      },

      // company
      {
        path: "/company-events",
        element: <EventsPage />,
      },
      {
        path: "/company-benefits",
        element: <BenefitsPage />,
      },
      {
        path: "/press-releases",
        element: <PressReleasesPage />,
      },

      // forms
      {
        path: "/partner-application-form",
        element: <PartnerApplicationPage />,
      },

      // contact page
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D71AC",
      dark: "#0d6aa0",
    },
    secondary: {
      main: "#f7b566",
      dark: "#f8a346",
    },
    info: {
      main: "#fff",
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    {/* <Layout> */}
    {/* <App /> */}
    <RouterProvider router={router} />
    {/* </Layout> */}
  </ThemeProvider>
);
