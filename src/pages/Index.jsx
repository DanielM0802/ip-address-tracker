import { Form } from "react-router-dom"
import { getAddressLocations } from "../data/geolocation";
import AddressInfo from "../components/AddressInfo";
import Map from "../components/Map";
import background from "../assets/pattern-bg.png";


export async function loader(){
    const data = await getAddressLocations('8.8.8.8');
    console.log(data)
    return ''
}

export async function action({request}){
    console.log('form enviado')
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    console.log(datos)
    return ''
}

function Index() {
  return (
    <>
        <div 
        className="h-72"
        style={{ 
            background: `url(${background}) no-repeat`, 
            backgroundSize: 'cover'
        }}>
            <h1 className="font-rubik text-3xl text-white font-semibold text-center my-9">IP Address Tracker</h1>
            <Form
                className="flex flex-col items-center"
                method="post"
            >
                <div className="w-11/12 sm:w-2/5">
                    <input 
                        className="font-rubik h-10 w-11/12 rounded-l-lg outline-none px-4"
                        type="text" 
                        name="ip_address"
                    />
                    <input 
                        className="bg-gray-600 h-10 w-1/12 rounded-r-lg"
                        type="submit" 
                        value=">" 
                    
                    />
                </div>    
                    <AddressInfo/>

            </Form>
        </div>
        <Map/>

    </>
  )
}

export default Index