import WorkCard from "../ui/card/WorkCard";
import work from "../../data/work.json";
import Carousel from "react-multi-carousel";

function Work() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 700, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div
      className="flex flex-col relative z-30 mt-5 space-y-3 pb-3 min-h-[82vh] bg-white border-b border-text-primary"
      id="works"
    >
      <div className="title text-text-primary font-playfair font-bold xs:text-xl sm:text-2xl md:text-4xl text-center relative z-20">
        OUR WORK
      </div>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        arrows={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={2000}
        containerClass="carousel-container overflow-hidden relative"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="flex p-5 mx-10 pb-10 md:p-10 h-full relative"
      >
        {/* p-10  */}
        {work.map((value, index) => {
          return (
            <div key={index} className="relative">
              <WorkCard image={value.image} description={value.description} />
            </div>
          );
        })}
      </Carousel>

      <div className="explorebtn flex justify-end mr-10">
        <button className="bg-bg-nav text-white p-2 rounded-xl">
          <div>Explore Our Works➡️</div>
        </button>
      </div>
    </div>
  );
}

export default Work;
