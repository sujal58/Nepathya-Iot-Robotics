import WorkCard from "../ui/workCard/WorkCard";
import work from "../../data/work.json";
import Carousel from "react-multi-carousel";

function Work() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
    },
    medium: {
      breakpoint: { max: 700, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="flex flex-col mt-5 gap-8 mx-10 z-30 min-h-[82vh] justify-around bg-white">
      <div className="title text-text-primary font-bold text-4xl text-center">
        OUR WORK
      </div>

      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={2000}
        containerClass="carousel-container overflow-hidden"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="flex pt-12 pb-10 z-50 h-full"
      >
        {/* p-10  */}
        {work.map((value, index) => {
          return (
            <div key={index}>
              <WorkCard image={value.image} description={value.description} />
            </div>
          );
        })}
      </Carousel>

      <div className="explorebtn flex justify-end">
        <button className="bg-bg-nav text-white p-2 rounded-xl">
          <div>Explore Our Works➡️</div>
        </button>
      </div>
    </div>
  );
}

export default Work;
