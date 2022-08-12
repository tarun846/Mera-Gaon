import Footer from "./Components/Footer/Footer";
import LargeComponent from "./Components/LargeCompnent/LargeComponent";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <div className="container">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            corporis at dignissimos consectetur quas veritatis numquam.
          </h1>
        </div>
      </div>
      <LargeComponent />
      <Footer />
    </>
  );
}

export default App;
