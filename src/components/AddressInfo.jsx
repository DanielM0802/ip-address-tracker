function AddressInfo({data}) {
    const {ip, location, isp} = data

    const {city, region, postalCode, timezone} = location

  return (
    <div className="bg-white rounded-lg border-2 sm:flex sm:justify-between w-11/12 sm:w-10/12 mx-auto space-y-3 sm:space-y-0 sm:space-x-3 py-8 sm:px-3 absolute top-52 z-10 font-rubik">
        <div className="lg:w-1/4">
            <h3 className="uppercase text-sm text-darkGray font-semibold text-center sm:text-left mb-3">Ip address</h3>
            <p className="font-medium text-center sm:text-left lg:text-lg text-veryDarkGray">{ip}</p>
        </div>
        <div className="w-px bg-darkGray m-0"></div>
        <div className="lg:w-1/4">
            <h3 className="uppercase text-sm text-darkGray font-semibold text-center sm:text-left mb-3">Location</h3>
            <p className="font-medium text-center sm:text-left lg:text-lg text-veryDarkGray">{`${city}, ${region} ${postalCode}`}</p>
        </div>
        <div className="w-px bg-darkGray m-0"></div>
        <div className="lg:w-1/4">
            <h3 className="uppercase text-sm text-darkGray font-semibold text-center sm:text-left mb-3">Timezone</h3>
            <p className="font-medium text-center sm:text-left lg:text-lg text-veryDarkGray">{`UTC${timezone}`}</p>
        </div>
        <div className="w-px bg-darkGray m-0"></div>
        <div className="lg:w-1/4">
            <h3 className="uppercase text-sm text-darkGray font-semibold text-center sm:text-left mb-3">Isp</h3>
            <p className="font-medium text-center sm:text-left lg:text-lg text-veryDarkGray">{isp}</p>
        </div>


    </div>
  )
}

export default AddressInfo