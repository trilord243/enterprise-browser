import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


function App() {




  /* 
    EB.Barcode.upca = true;
    EB.Barcode.code128 = false;
    //EB.Barcode.code128 = false;
    */
  /*   EB.Barcode.allDecoders = false;
    EB.Barcode.upca = true;
    EB.Barcode.ean13 = true; */

  const myCallback = (params) => {
    console.log("Auto autoTab? " + EB.Barcode.autoTab)


    console.log("Scanned data:", params.data);


    console.log("Type:", params.type);


  }
  const propertyMap = {
    "simbologies": ["code_128"],


  };

  EB.Barcode.enable({}, myCallback)



  return (
    <>
      <Navbar />
      <Hero />




    </>
  )
}

export default App