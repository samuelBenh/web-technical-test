interface ButtonProps {
  title: string;
  isSelected?: boolean;
}

const Button = ({ title, isSelected = false }: ButtonProps) => {
  return (
    <button
      className={`h-full w-[104px] rounded-full px-4 ${
        isSelected
          ? "bg-primary text-white"
          : "bg-bg_secondary text-text-primary"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
