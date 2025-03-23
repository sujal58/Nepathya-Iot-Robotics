import teamData from "../../data/team.json";
import TeamCard from "../UI/teamCard/TeamCard";
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
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div
      className="flex z-30 flex-col min-h-[82vh] justify-evenly relative"
      style={{
        backgroundImage: "url(src/assets/team-bg.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
    >
      <div className="bg-white opacity-50 h-full w-full absolute z-30"></div>
      <div className="title text-text-primary font-bold text-4xl text-center z-50">
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
        className="flex p-10 pb-10 z-50"
      >
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
