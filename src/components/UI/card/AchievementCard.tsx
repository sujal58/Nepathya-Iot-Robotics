type WorkCardProps = {
  image: string;
  title: string;
  description: string;
  onReadMoreClick: () => void; // Callback for the Read More button
};

const AchievementCard = ({ image, title, onReadMoreClick }: WorkCardProps) => {
  return (
    <div className="h-max bg-text-primary rounded-xl mb-4">
      <div className="innercontent p-2 w-full h-full">
        <img
          src={image}
          alt={title}
          className="rounded-xl w-full h-56 object-cover object-center"
        />
        <h3 className="text-white text-xl font-semibold text-center mt-3">
          {title}
        </h3>

        <div className="card-des text-white text-justify flex justify-center mt-3">
          {/* <span className="line-clamp-3">{description}</span> */}
          <button
            onClick={onReadMoreClick}
            className="text-blue-400 hover:underline mt-2 block"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
