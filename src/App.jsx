import Footer from "./components/Footer";
import PrimaryImage from "./components/PrimaryImage";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-1 md:grid-cols-2 grid-rows-[auto,auto,auto,auto,auto,auto] overflow-x-hidden">
      <PrimaryImage />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
