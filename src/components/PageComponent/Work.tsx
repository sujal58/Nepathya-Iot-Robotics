import WorkCard from "../UI/workCard/WorkCard";
import work from "../../data/work.json";

function Work() {
  return (
    <div className="flex flex-col mt-5 gap-8 mx-10 z-30 min-h-[82vh] justify-around bg-white">
      <div className="title text-text-primary font-bold text-4xl text-center">
        OUR WORK
      </div>
      <div className="flex justify-around overflow-scroll-x gap-6">
        {work.map((value, index) => {
          return (
            <div key={index}>
              <WorkCard image={value.image} description={value.description} />
            </div>
          );
        })}
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
