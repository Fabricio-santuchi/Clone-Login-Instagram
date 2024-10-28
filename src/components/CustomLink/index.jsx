/* eslint-disable react/prop-types */
const CustomLink = ({ className = "", href = "#", children }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};
export default CustomLink;
