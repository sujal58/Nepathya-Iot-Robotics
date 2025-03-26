import LoaderImg from "@/assets/union_png.png";

function Loader() {
  return (
    <div className="loadersec flex h-[100vh] items-center justify-center">
      <div className="imgcontainer flex items-center justify-center relative h-fit w-fit">
        <img
          src={LoaderImg}
          alt="union logo"
          className="loaderimg h-[200px] w-[200px] bg-text-primary shadow-2xl shadow-text-primary rounded-[50%]"
        />
      </div>
    </div>
  );
}

export default Loader;
