import { useEffect, useState } from "react";
import Loader from "../components/PageComponent/loader/Loader";
import Navbar from "../components/Navigation/Navbar";
import Body from "../components/PageComponent/body/Body";

function Layout() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Body />
        </>
      )}
    </>
  );
}

export default Layout;
