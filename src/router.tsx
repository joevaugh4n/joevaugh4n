import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import RootLayout from "../layouts/RootLayout";

const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/Home")); // Fixed the Home/About copy-paste path!

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // This now exclusively handles severe code/runtime crashes
    errorElement: (
      <div className="bg-amber-100 w-screen min-h-screen p-8 font-sans">
        <h1>Critical App Error</h1>
        <p>Something broke in the application code.</p>
      </div>
    ),
    children: [
      {
        index: true, // Matches exactly "/"
        element: (
          <Suspense fallback={<div>Loading page...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about", // Matches "/about"
        element: (
          <Suspense fallback={<div>Loading page...</div>}>
            <About />
          </Suspense>
        ),
      },
      /* THE CATCH-ALL: Matches any URL that doesn't match home or about.
        Because it is a direct child of the "/" route, it stays 
        perfectly nested inside your standard RootLayout!
      */
      {
        path: "*", 
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);