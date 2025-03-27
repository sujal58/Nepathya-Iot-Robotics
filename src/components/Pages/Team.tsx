import teamData from "../../data/team.json";
import TeamCard from "../ui/card/TeamCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Team() {
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
    <div
      className="flex flex-col space-y-5 min-h-[82vh] relative z-30 border-b border-text-primary pb-5"
      style={{
        backgroundImage: "url(src/assets/team-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      id="teams"
    >
      <div className="bg-white opacity-50 h-full w-full absolute z-10"></div>
      <div className="title text-text-primary font-bold font-playfair text-2xl md:text-3xl mt-3 lg:text-4xl text-center z-30">
        Meet The Creative Team
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
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 2"
        transitionDuration={2000}
        containerClass="carousel-container overflow-hidden"
        removeArrowOnDeviceType={[]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
        className="flex z-50 p-10"
      >
        {/* p-10  */}
        {teamData.map((value, index) => {
          return (
            <div key={index}>
              <TeamCard
                name={value.name}
                image={value.image}
                designation={value.designation}
                info={value.info}
                facebook={value.socialLinks.facebook}
                insta={value.socialLinks.instagram}
                github={value.socialLinks.github}
                twitter={value.socialLinks.twitter}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Team;
