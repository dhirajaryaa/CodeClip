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
import { setUser, transformData } from "./redux/slices/authSlice";
import { ProtectedRoute } from "./components/custom";

function App() {
  const [user, setUserState] = useState(null);
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
          element: (
            <ProtectedRoute>
              <Dashboard />,
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  useEffect(() => {
    const handleUserAuth = (user) => {
      if (user) {
        // setUserState(transformData(user)); // Update local state

        dispatch(setUser(transformData(user))); // Dispatch action to set user in Redux store
      } else {
        setUser(null); // Clear local user state
      }
    };

    const unsubscribe = authServices.authObserver(handleUserAuth); // Subscribe to auth changes

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
}

export default App;
