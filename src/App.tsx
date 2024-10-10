import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '@/pages/home';
import DetailPage from '@/pages/detail';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/detail/:name",
      element: <DetailPage />,
    },
  ]);

  return (
    <div className="bg-[url('/images/black-370118_1280.png')] bg-cover	min-h-[100vh]">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
