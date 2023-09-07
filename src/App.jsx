import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [data, setData] = useState("Esperando data ...")




  const myCallback = (params) => {
    console.log("Scanned data:", params.data);
    console.log("Source:", params.source);
    console.log("Type:", params.type);
    setData(params.data)
  }
  var propertyMap = {

  };



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://techdocs.zebra.com/enterprise-browser/samples/barcode/eb_barcode_api" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{data} </h1>
      <div className="card">
        <button onClick={() => { EB.Barcode.enable(propertyMap, myCallback) }} >
          habilitar { }
        </button>

        <button onClick={() => { EB.Barcode.disable() }} >
          deshabilitar
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <input type="text" />
      </div>
      <p className="read-the-docs">

      </p>
    </>
  )
}

export default App