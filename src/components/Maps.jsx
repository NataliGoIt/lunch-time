import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [46.754351104307716, 23.595156882382632]; 

const Map = () => {
  return (
    <MapContainer center={position} zoom={15} style={{ height: "200px", width: "80%", margin:"0 auto"}}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={position} style={{color:"red"}} alt='Піцерія тут!'>
        <Popup>
        Піцерія тут! 
        </Popup>
          
        
      </Marker>
    </MapContainer>
  );
}

export default Map;
