/* eslint-disable react/prop-types */
const ImageComponent = ({ src, alt }) => {
  return <img className="h-14 max-w-full cursor-pointer" src={src} alt={alt} />;
};

export default ImageComponent;
