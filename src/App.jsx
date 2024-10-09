import React from "react";
import { ThemeProvider } from "./components/theme-provider";
import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import { LandingPage, SignInPage, SignUpPage, Dashboard } from "./pages";
import { RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import authServices from "./services/authServices";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slices/authSlice";

function App() {
  const [user,setUserState] = useState(null);
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/signin",
          element: <SignInPage />,
        },
        {
          path: "/signup",
          element: <SignUpPage />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  useEffect(()=>{
    const handleUserAuth = (user) => {
      if (user) {
        setUserState(user); // Update local state
        dispatch(setUser(user)); // Dispatch action to set user in Redux store
      } else {
        setUser(null); // Clear local user state
        dispatch(clearUser()); // Dispatch action to clear user in Redux store
      }
    };

    const unsubscribe = authServices.authObserver(handleUserAuth); // Subscribe to auth changes

    // Clean up the subscription on unmount
    return () => unsubscribe();
  },[dispatch])


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
