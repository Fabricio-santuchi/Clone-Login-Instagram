/* eslint-disable react/prop-types */
const SocialLink = ({
  className = " text-customFace text-lg font-semibold cursor-pointer flex items-center gap-2 mb-4",
  children,
}) => {
  return (
    <a className={className} href="#" aria-label="Entrar com o Facebook">
      {children}
    </a>
  );
};

export default SocialLink;
