import cardimg from "../../../assets/4884273.jpg";

function WorkCard() {
  return (
    <div className="w-1/4 bg-text-primary rounded-xl">
      <div className="innercontent p-3">
        <div className="cardimg w-full">
          <img src={cardimg} alt="" className="rounded-xl" />
        </div>
        <div className="card-des text-white">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            praesentium quas sit incidunt, itaque totam possimus fugiat
            voluptates iusto vitae beatae! Quibusdam blanditiis iure asperiores
          </span>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
