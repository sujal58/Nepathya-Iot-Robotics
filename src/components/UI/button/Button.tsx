import { Link } from "react-router-dom";

type buttonprops = {
  text: string;
  icon?: string;
  alternate?: string;
  style?: string;
  path: string;
};

function Button({ text, icon, alternate, style, path }: buttonprops) {
  return (
    <Link
      to={path}
      className={`bg-bg-button text-white text-center cursor-pointer hover:bg-text-primary ${style}`}
    >
      {icon ? (
        <button className="flex gap-2 w-full">
          <div>
            <img src={icon} alt={alternate} />
          </div>
          <span>{text}</span>
        </button>
      ) : (
        <button>{text}</button>
      )}
    </Link>
  );
}

export default Button;
