import { useEffect, useState } from "react";
import Loader from "../components/ui/loader/Loader.tsx";
import Navbar from "../components/Navigation/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer.tsx";

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
          <Footer />
        </>
      )}
    </>
  );
}

export default Layout;
