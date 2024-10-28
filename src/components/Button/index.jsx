/* eslint-disable react/prop-types */
const Button = ({ type, children }) => {
  return (
    <button
      className="bg-customBlue text-lg font-bold w-full rounded-xl p-2 text-slate-50 hover:bg-colorBtnHover mt-3 mb-6"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
