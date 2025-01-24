import { useEffect, useState } from "react";
import Loader from "../components/UI/loader/Loader.tsx";
import Navbar from "../components/Navigation/Navbar";
import Body from "../components/PageComponent/Main";
import Work from "../components/PageComponent/Work.tsx";

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
          {/* <Work /> */}
        </>
      )}
    </>
  );
}

export default Layout;
