import {useState, useEffect} from 'react';
import { getAddressLocations } from "../data/geolocation";
import AddressInfo from "../components/AddressInfo";
import Map from "../components/Map";
import background from "../assets/pattern-bg.png";
import iconArrow from "../assets/icon-arrow.svg";



function Index() {

    const [ip, setIp] = useState('');
    const [addressData, setAddressData] = useState(null);

    useEffect( () => {
        loadData('0');
    }, []);

    const loadData = async (ip) => {
        if (ip.trim()=='') {
            ip = 0
        }
        const data = await getAddressLocations(ip);
        if (!Object.keys(data).includes('location')) {
            console.log('Error!!!')
            return;
        }
        setAddressData(data);
    };

    const handleSubmit = e => {
        e.preventDefault();
        loadData(ip);
    }


  return (
    <>
        <div 
        className="h-72"
        style={{ 
            background: `url(${background}) no-repeat`, 
            backgroundSize: 'cover'
        }}>
            <h1 className="font-rubik text-xl text-white font-semibold text-center my-9">IP Address Tracker</h1>
            <form
                className="flex flex-col items-center"
                onSubmit={handleSubmit}
            >
                <div className="w-11/12 sm:w-2/5">
                    <input 
                        className="font-rubik font-normal text-base h-10 w-11/12 rounded-l-lg outline-none px-4 cursor-pointer"
                        type="text" 
                        name="ip_address"
                        onChange= {e => setIp(e.target.value)}
                        value = {ip}
                    />
                    <input

                        className="h-10 w-1/12 rounded-r-lg bg-veryDarkGray cursor-pointer"
                        style={{ 
                            backgroundImage: `url(${iconArrow})`, 
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center'
                        }} 
                        type="submit" 
                        value=" " 
                    
                    />
                </div>    
                {addressData ? <AddressInfo data={addressData} /> : null}

            </form>
        </div>
        {addressData ? <Map position={[addressData.location.lat, addressData.location.lng ]} /> : null}

    </>
  )
}

export default Index