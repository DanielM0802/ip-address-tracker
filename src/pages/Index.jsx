import { Form } from "react-router-dom"
import { getAddressLocations } from "../data/geolocation";
import AddressInfo from "../components/AddressInfo";
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
            backgroundImage: `url(${background})` 
        }}>
            <h1 className="text-2xl font-bold text-center">IP Address Tracker</h1>
            <Form
                className="flex justify-center"
                method="post"
            >
                <div className="w-4/5 sm:w-2/5">
                    <input 
                        className="bg-red-600 w-11/12 rounded-l-lg"
                        type="text" 
                        name="ip_address"
                    />
                    <input 
                        className="bg-red-600 w-1/12 rounded-r-lg"
                        type="submit" 
                        value=">" 
                    
                    />
                </div>
            </Form>
        </div>
        <AddressInfo/>
    </>
  )
}

export default Index