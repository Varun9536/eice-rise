import React from 'react'
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HospitalityPage from './Pages/HospitalityPage/HospitalityPage'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error/Error'
import RoomBooking from './Pages/InsidePages/RoomBooking'
import Pos from './Pages/InsidePages/Pos'
import AccountAndFinance from './Pages/InsidePages/AccountAndFinance'
import BanquetAnsBilling from './Pages/InsidePages/BanquetAnsBilling'
import EmployeeSuite from './Pages/InsidePages/EmployeeSuite'
import MemberSuite from './Pages/InsidePages/MemberSuite'
import Payroll from './Pages/InsidePages/Payroll'
import PurchaseAndVendor from './Pages/InsidePages/PurchaseAndVendor'
import UserAndInventry from './Pages/InsidePages/UserAndInventry'
import FoodCost from './Pages/InsidePages/FoodCost'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [



      {
        path : "about-us",

      },

      
      {
        path : "products",

      },

      
      {
        path : "pricing",

      },

      
      {
        path : "blogs",

      },

      {
        path: "",
        element: <HospitalityPage />,
      },

      {
        path: "room-booking",
        element: <RoomBooking />
      },

      

      {
        path: "pos-dining",
        element: <Pos />
      },

      {
        path: "account-finance",
        element: <AccountAndFinance />
      },

      {
        path: "banquet-billing",
        element: <BanquetAnsBilling />
      },

      {
        path: "employee-suite",
        element: <EmployeeSuite />
      },

      {
        path: "member-suite",
        element: <MemberSuite />
      },

      {
        path: "payroll",
        element: <Payroll />
      },

      {
        path: "purchase-vendor",
        element: <PurchaseAndVendor />
      },

      {
        path: "userstore-inventry",
        element: <UserAndInventry />
      },

      {
        path: "food-cost",
        element: <FoodCost />
      },





    ]


  },

  {
    path: "*",
    element: <Error />

  },



],
  {
    future: {
      v7_startTransition: true, // Opt-in early to prevent the warning
    }
  }


)



export default function App() {
  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}
