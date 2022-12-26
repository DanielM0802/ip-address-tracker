function AddressInfo() {
  return (
    <div className="bg-white rounded-lg border-2 sm:flex sm:justify-between w-11/12 sm:w-10/12 mx-auto space-y-3 sm:space-y-0 sm:space-x-3 py-3 sm:px-3 relative">
        <div>
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Ip address</h3>
            <p className="font-semibold text-center sm:text-left">122.253.326.463</p>
        </div>
        <div>
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Location</h3>
            <p className="font-semibold text-center sm:text-left">Brooklyn, NY 10001</p>
        </div>
        <div>
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Timezone</h3>
            <p className="font-semibold text-center sm:text-left">UTC-05:00</p>
        </div>
        <div>
            <h3 className="uppercase text-gray-700 text-xs font-bold text-center sm:text-left">Isp</h3>
            <p className="font-semibold text-center sm:text-left">SpaceX Starlink</p>
        </div>


    </div>
  )
}

export default AddressInfo