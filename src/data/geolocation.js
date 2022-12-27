export async function getAddressLocations(ipAddress){
    // const url = `https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${ipAddress}`;
    // const respuesta = await fetch(url)
    // const resultado = await respuesta.json()

    const resultado = {"ip":"192.212.174.101","location":{"country":"US","region":"California","city":"South San Gabriel","lat":34.04915,"lng":-118.09462,"postalCode":"","timezone":"-08:00","geonameId":5397771},"as":{"asn":7127,"name":"SCE","route":"192.212.0.0\/15","domain":"","type":""},"isp":"Southern California Edison"}


    return resultado;
}