import imgPri from "/src/assets/insta-img.png";

const PrimaryImage = () => {
  return (
    <section className="row-span-5 md:flex justify-end items-center mt-8 hidden w-full">
      <img
        className="w-[410px] max-w-full"
        src={imgPri}
        alt="Imagem principal do Instagram"
      />
    </section>
  );
};

export default PrimaryImage;
