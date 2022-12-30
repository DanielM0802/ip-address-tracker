import { MapContainer, useMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import marker from '../assets/icon-location.svg';


const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [46,56],     
});

function ChangeMap({ center }) {
    const map = useMap();
    map.setView(center, 17);
    return null;
  }

function Map({position}) {
    return (
            <MapContainer className='grow -z-0' center={position} zoom={17} scrollWheelZoom={false}>
                <ChangeMap center={position} />
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={myIcon} >
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default Map