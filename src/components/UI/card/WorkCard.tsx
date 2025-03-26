import { useState } from "react";

type props = {
  image: string;
  description: string;
};

function WorkCard({ image, description }: props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="w-[90%] relative sm:w-4/5 md:w-3/4 z-10 h-max bg-text-primary rounded-xl">
      <div className="innercontent p-2 w-full">
        <img src={image} alt="" className="rounded-xl w-full" />

        {/* <div className="card-des text-white text-justify">
          <span>{description}</span>
        </div> */}
        <div className="card-des text-white text-justify">
          <span className={isExpanded ? "" : "line-clamp-5"}>
            {description}
          </span>
          <button
            onClick={toggleReadMore}
            className="text-blue-400 hover:underline mt-2 block"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
