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
import AboutUs from './Pages/NavigationBarPages/AboutUs'
import Products from './Pages/NavigationBarPages/Products'
import Pricing from './Pages/NavigationBarPages/Pricing'
import Blogs from './Pages/NavigationBarPages/Blogs'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [

      {
        path: "*",
        element: <Error />

      },

      {
        path: "",
        element: <HospitalityPage />,
      },

      {
        path: "about-us",
        element: <AboutUs />
      },


      {
        path: "products",
        element: <Products />
      },


      {
        path: "pricing",
        element: <Pricing />
      },


      {
        path: "blogs",
        element: <Blogs />
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


  }





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


)



export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
