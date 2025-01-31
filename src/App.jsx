// import React from 'react'
// import "./App.css"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'



// import HospitalityPage from './Pages/HospitalityPage/HospitalityPage'
// import Layout from './Components/Layout/Layout'
// import Error from './Components/Error/Error'
// import RoomBooking from './Pages/InsidePages/RoomBooking'
// import Pos from './Pages/InsidePages/Pos'
// import AccountAndFinance from './Pages/InsidePages/AccountAndFinance'
// import BanquetAnsBilling from './Pages/InsidePages/BanquetAnsBilling'
// import EmployeeSuite from './Pages/InsidePages/EmployeeSuite'
// import MemberSuite from './Pages/InsidePages/MemberSuite'
// import Payroll from './Pages/InsidePages/Payroll'
// import PurchaseAndVendor from './Pages/InsidePages/PurchaseAndVendor'
// import UserAndInventry from './Pages/InsidePages/UserAndInventry'
// import FoodCost from './Pages/InsidePages/FoodCost'

// import RequestForm from './Pages/RequestForm/RequestForm'


// import Android from './Pages/CaseStudy/Android/Android'
// import Durgabari from './Pages/CaseStudy/Durgabari/Durgabari'
// import IIC from './Pages/CaseStudy/IIC/IIC'
// import Vanilla from './Pages/PricePages/Vanilla'
// import Banquet from './Pages/PricePages/Banquet'
// import FrontDesk from './Pages/PricePages/FrontDesk'
// import PosSuite from './Pages/PricePages/PosSuite'
// import Inventary from './Pages/PricePages/Inventary'
// import Enterprise from './Pages/PricePages/Enterprise'
// import Club from './Pages/PricePages/Club'




// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,

//     children: [

//       {
//         path: "*",
//         element: <Error />

//       },

//       {
//         path: "",
//         element: <HospitalityPage />,
//       },

//       {
//         path: "room-booking",
//         element: <RoomBooking />
//       },


//       {
//         path: "pos-dining",
//         element: <Pos />
//       },

//       {
//         path: "account-finance",
//         element: <AccountAndFinance />
//       },

//       {
//         path: "banquet-billing",
//         element: <BanquetAnsBilling />
//       },

//       {
//         path: "employee-suite",
//         element: <EmployeeSuite />
//       },

//       {
//         path: "member-suite",
//         element: <MemberSuite />
//       },

//       {
//         path: "payroll",
//         element: <Payroll />
//       },

//       {
//         path: "purchase-vendor",
//         element: <PurchaseAndVendor />
//       },

//       {
//         path: "userstore-inventry",
//         element: <UserAndInventry />
//       },

//       {
//         path: "food-cost",
//         element: <FoodCost />
//       },


//       {
//         path: "form",
//         element: <RequestForm />
//       },

//       {
//         path: "android",
//         element: <Android />
//       },

//       {
//         path: "durgabari",
//         element: <Durgabari />
//       },

//       {
//         path: "iic",
//         element: <IIC />
//       },

//       {
//         path: "club-suite",
//         element: <Club />
//       },

//       {
//         path: "enterprise-suite",
//         element: <Enterprise />
//       },

//       {
//         path: "inventary-suite",
//         element: <Inventary />
//       },

//       {
//         path: "pos-suite",
//         element: <PosSuite />
//       },


//       {
//         path: "frontdesk-suite",
//         element: <FrontDesk />
//       }

//       ,
//       {
//         path: "banquet-suite",
//         element: <Banquet />
//       },

//       {
//         path: "vanilla-suite",
//         element: <Vanilla />
//       }

//     ]


//   }
// ],

//   {
//     future: {

//       v7_fetcherPersist: true,
//       v7_normalizeFormMethod: true,
//       v7_partialHydration: true,
//       v7_skipActionErrorRevalidation: true,
//       v7_relativeSplatPath: true,
//       v7_startTransition: true,
//     },
//   }


// )



// export default function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }



import React, { Suspense, lazy } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Error from "./Components/Error/Error";

// Lazy load all pages
const HospitalityPage = lazy(() => import("./Pages/HospitalityPage/HospitalityPage"));
const RoomBooking = lazy(() => import("./Pages/InsidePages/RoomBooking"));
const Pos = lazy(() => import("./Pages/InsidePages/Pos"));
const AccountAndFinance = lazy(() => import("./Pages/InsidePages/AccountAndFinance"));
const BanquetAnsBilling = lazy(() => import("./Pages/InsidePages/BanquetAnsBilling"));
const EmployeeSuite = lazy(() => import("./Pages/InsidePages/EmployeeSuite"));
const MemberSuite = lazy(() => import("./Pages/InsidePages/MemberSuite"));
const Payroll = lazy(() => import("./Pages/InsidePages/Payroll"));
const PurchaseAndVendor = lazy(() => import("./Pages/InsidePages/PurchaseAndVendor"));
const UserAndInventry = lazy(() => import("./Pages/InsidePages/UserAndInventry"));
const FoodCost = lazy(() => import("./Pages/InsidePages/FoodCost"));

const RequestForm = lazy(() => import("./Pages/RequestForm/RequestForm"));

const Android = lazy(() => import("./Pages/CaseStudy/Android/Android"));
const Durgabari = lazy(() => import("./Pages/CaseStudy/Durgabari/Durgabari"));
const IIC = lazy(() => import("./Pages/CaseStudy/IIC/IIC"));

const Vanilla = lazy(() => import("./Pages/PricePages/Vanilla"));
const Banquet = lazy(() => import("./Pages/PricePages/Banquet"));
const FrontDesk = lazy(() => import("./Pages/PricePages/FrontDesk"));
const PosSuite = lazy(() => import("./Pages/PricePages/PosSuite"));
const Inventary = lazy(() => import("./Pages/PricePages/Inventary"));
const Enterprise = lazy(() => import("./Pages/PricePages/Enterprise"));
const Club = lazy(() => import("./Pages/PricePages/Club"));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "*", element: <Error /> },
        { path: "", element: <HospitalityPage /> },
        { path: "room-booking", element: <RoomBooking /> },
        { path: "pos-dining", element: <Pos /> },
        { path: "account-finance", element: <AccountAndFinance /> },
        { path: "banquet-billing", element: <BanquetAnsBilling /> },
        { path: "employee-suite", element: <EmployeeSuite /> },
        { path: "member-suite", element: <MemberSuite /> },
        { path: "payroll", element: <Payroll /> },
        { path: "purchase-vendor", element: <PurchaseAndVendor /> },
        { path: "userstore-inventry", element: <UserAndInventry /> },
        { path: "food-cost", element: <FoodCost /> },
        { path: "form", element: <RequestForm /> },
        { path: "android", element: <Android /> },
        { path: "durgabari", element: <Durgabari /> },
        { path: "iic", element: <IIC /> },
        { path: "club-suite", element: <Club /> },
        { path: "enterprise-suite", element: <Enterprise /> },
        { path: "inventary-suite", element: <Inventary /> },
        { path: "pos-suite", element: <PosSuite /> },
        { path: "frontdesk-suite", element: <FrontDesk /> },
        { path: "banquet-suite", element: <Banquet /> },
        { path: "vanilla-suite", element: <Vanilla /> },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    },
  }
);

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
