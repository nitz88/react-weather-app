import { useState } from "react";

function Location() {
    const [location, setLocation] = useState('');

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
           alert("Geolocation is not supported by this browser.");
        }
    }

    const showPosition = (position: GeolocationPosition) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }

    return (
        <>
            <form className="w-full max-w-md mx-auto">
                <div className="flex items-center justify-center border-b border-teal-500 py-2">
                    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Location.."
                        aria-label="Location.."
                        value={location}
                        onChange={e => setLocation(e.target.value)} />
                    { location.length === 0 && 
                        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={getCurrentLocation}>
                            Use my current location
                        </button>
                    }
                    {/* { location.length !== 0 && 
                        <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={getCurrentLocation}>
                            Fetch Data
                        </button>
                    } */}
                </div>
            </form>
        </>
    )
}

export default Location;