import ImageComponent from "/src/components/ImageComponent";
import Gplay from "/src/assets/google.png";
import Msoft from "/src/assets/microsoft.png";

const AvailableApps = () => {
  return (
    <section className="text-center mb-10">
      <p className="mb-4 text-lg">Obtenha o aplicativo.</p>
      <div className="flex gap-2 flex-wrap justify-center items-center">
        <ImageComponent src={Gplay} alt="Baixar na Google Play" />
        <ImageComponent src={Msoft} alt="Baixar na microsoft Store" />
      </div>
    </section>
  );
};

export default AvailableApps;
