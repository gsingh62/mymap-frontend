import globalStyle from './globalStyle.module.css';
import React from 'react';
import MapContainer from "./components/MapContainer/MapContainer";

function App() {
  return (
      <div className={globalStyle.mapContainerWrapper}>
        <MapContainer/>
      </div>
  )
}

export default App
