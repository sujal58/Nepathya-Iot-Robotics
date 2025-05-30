import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

type teamProps = {
  name: string;
  image: string;
  designation: string;
  info: string;
  facebook: string;
  insta: string;
  github: string;
  twitter: string;
};

function TeamCard({
  name,
  image,
  designation,
  info,
  facebook,
  insta,
  github,
  twitter,
}: teamProps) {
  return (
    <div
      className={`relative flex flex-col w-3/4 mb-5 min-h-[320px] z-50 ${
        designation == "President" && "border-text-tertiary"
      } border-text-primary  border-[1.5px] rounded-[60px] cursor-pointer transition-all duration-1000 hover:-translate-y-7 hover:scale-x-105  hover:shadow-xl hover:shadow-text-primary hover:border-2`}
    >
      <div className=" w-full flex flex-col justify-around gap-5 p-2">
        <div className="w-full flex justify-center items-center">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="rounded-[50%] h-28 w-28 object-cover object-center"
          />
        </div>
        <div className="text-center text-pretty font-montserrat">
          <div>{name}</div>
          <p
            className={`${
              designation == "President" && "text-bg-button text-xl"
            } ${
              designation == "Vice President" && "text-bg-nav text-lg"
            } font-semibold font-poppins`}
          >
            {designation}
          </p>
          <span>{info}</span>
        </div>

        <div className="flex absolute right-0 left-0 bottom-4 justify-evenly items-end">
          <a href={facebook}>
            <FaFacebook />
          </a>
          <a href={insta}>
            <FaInstagram />
          </a>
          <a href={github}>
            <FaGithub />
          </a>
          <a href={twitter}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
