type buttonprops = {
  text: string;
  icon?: string;
  alternate?: string;
  style?: string;
};

function Button({ text, icon, alternate, style }: buttonprops) {
  return (
    <a
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
    </a>
  );
}

export default Button;
