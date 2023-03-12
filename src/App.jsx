
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar } from "./Components/NavbarPages/Navbar"
import { Home } from "./Components/HomePage/Home";
import { ChoseCountry } from "./Components/ChosePage/ChoseCountry";
import React, { useEffect, useRef, useState } from "react";
import { AllGolbal } from './Components/GlobalVirable/Global';
import { Ditaeld } from './Components/CRUD/View/Ditaeld';
import { NewWeather } from './Components/CRUD/AddNewEvent/NewWeather';
import { UpdateWeather } from './Components/CRUD/UpdateWeather/UpdateWeather';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/chosePage",
          element: <ChoseCountry />
        },
        {
          path: "/WeatherServer",
          element: <Ditaeld />
        },
        {
          path: "/AddWeatherServer",
          element: <NewWeather />
        },
        {
          path: "/UpdateWeather/:id",
          element: <UpdateWeather />
        }
      ]
    },

  ])



  // console.log(dataServer);


  return (
    <>
      <AllGolbal>
        <RouterProvider router={router} />
      </AllGolbal>
    </>
  );
}
export default App

