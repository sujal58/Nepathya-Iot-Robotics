import { useEffect, useState } from "react";
import Loader from "../components/UI/loader/Loader.tsx";
import Navbar from "../components/Navigation/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [window.onload]);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
}

export default Layout;
