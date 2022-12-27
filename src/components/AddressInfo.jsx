function AddressInfo() {
  return (
    <div className="bg-white rounded-lg border-2 sm:flex sm:justify-between w-11/12 sm:w-10/12 mx-auto space-y-3 sm:space-y-0 sm:space-x-3 py-8 sm:px-3 absolute top-52 z-10">
        <div className="lg:w-1/4">
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Ip address</h3>
            <p className="font-semibold text-center sm:text-left lg:text-3xl">122.253.326.463</p>
        </div>
        <div className="w-0.5 bg-black m-0"></div>
        <div className="lg:w-1/4">
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Location</h3>
            <p className="font-semibold text-center sm:text-left lg:text-3xl">Brooklyn, NY 10001</p>
        </div>
        <div className="w-0.5 bg-black m-0"></div>
        <div className="lg:w-1/4">
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Timezone</h3>
            <p className="font-semibold text-center sm:text-left lg:text-3xl">UTC-05:00</p>
        </div>
        <div className="w-0.5 bg-black m-0"></div>
        <div className="lg:w-1/4">
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Isp</h3>
            <p className="font-semibold text-center sm:text-left lg:text-3xl">SpaceX Starlink</p>
        </div>


    </div>
  )
}

export default AddressInfo