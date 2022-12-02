const BUTTON_TYPE_CLASSES = {
  primary: "bg-[#0B0037] text-white",
  secondary: "bg-[#EFA632] text-white",
  white: "bg-white text-[#0B0037]",
};

const BUTTON_WIDTH = {
  full: "w-full",
};

const AppButton = ({
  buttonType,
  children,
  width,
  handleButton,
  ...otherProps
}) => {
  return (
    <button
      {...otherProps}
      className={`px-4 py-2 rounded-md font-light whitespace-nowrap uppercase ${BUTTON_TYPE_CLASSES[buttonType]} ${BUTTON_WIDTH[width]}`}
      onClick={handleButton}
    >
      {children}
    </button>
  );
};

export default AppButton;
