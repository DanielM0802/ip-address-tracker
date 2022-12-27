import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map() {
    const position = [43.731430, 7.415061]
    return (
            <MapContainer className='grow -z-0' center={position} zoom={20} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
            <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
            </MapContainer>
    )
}

export default Map