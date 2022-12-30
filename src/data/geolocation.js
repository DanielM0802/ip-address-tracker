export async function getAddressLocations(ipAddress){

    const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipAddress}`;
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    return resultado;
}