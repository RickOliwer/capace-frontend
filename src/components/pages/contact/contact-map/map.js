//import { useMemo } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api"
import { getGeocode, getLatLng } from "use-places-autocomplete"
import { useState, useMemo } from 'react'


const Map = () => {
    const center = useMemo(() => ({ lat: 55.614540329799034, lng: 13.030106227730691 }), [])
    // let LatLngLiteral = google.maps.LatLngLiteral

    // const [office, setOffice] = useState(LatLngLiteral)
    // const handleSelect = async (val) => {
    //     const results = await getGeocode({address: val})
    //     const {lat, lng} = await getLatLng(results[0])
    //     setOffice({lat, lng})
    // }
    // handleSelect('Capace Media Group AB, Västkustvägen, Malmö')

    return (
        <GoogleMap
            zoom={13.4}
            center={center}
            mapContainerClassName="h-[600px] w-full"
        >
            <Marker position={center} />
        </GoogleMap>
    )
}
 
export default Map;