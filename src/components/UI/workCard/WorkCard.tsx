type props = {
  image: string;
  description: string;
};
function WorkCard({ image, description }: props) {
  return (
    <div className="w-[17rem] h-[80vh] bg-text-primary rounded-xl">
      <div className="innercontent p-2">
        <div className="cardimg w-full">
          <img src={image} alt="" className="rounded-xl" />
        </div>
        <div className="card-des text-white text-justify">
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
