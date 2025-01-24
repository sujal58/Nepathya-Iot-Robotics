import WorkCard from "../UI/workCard/WorkCard";

function Work() {
  return (
    <div className="flex flex-col mt-10 mx-10 h-screen justify-around">
      <div className="title text-text-primary font-bold text-4xl text-center">
        OUR WORK
      </div>
      <div className="flex justify-around overflow-scroll-x gap-10">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
      <div className="explorebtn flex justify-end">
        <button className="bg-bg-nav text-white p-2 rounded-xl">
          <div>Explore Our Works➡️</div>
        </button>
      </div>
    </div>
  );
}

export default Work;
