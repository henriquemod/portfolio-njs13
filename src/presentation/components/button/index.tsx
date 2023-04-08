interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  disabled?: boolean;
  handleClick: () => void;
  size?: "small" | "medium" | "large";
}

const Button = (props: IProps): JSX.Element => {
  const { disabled, handleClick, label, size, ...rest } = props;
  const classSizes = {
    small: "h-10 px-5 text-base",
    medium: "h-16 px-10 text-xl",
    large: "h-20 px-16 text-2xl",
  };
  const sizeStyle = classSizes[size ?? "small"];

  return (
    <button
      disabled={disabled}
      onClick={handleClick}
      className={`
        ${sizeStyle}
        w-full
        disabled:bg-gray-75
        bg-main-75
        hover:bg-main-100
        text-white
        font-bold
        rounded-md
        px-4`}
      data-testid="component-button"
      {...rest}
    >
      {label.toUpperCase()}
    </button>
  );
};

export default Button;
