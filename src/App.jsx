import { useState, useEffect } from "react";
import Axios from "axios";
import { BACKEND_URL, LOCAL_BACKEND_URL } from "./urls";
function App() {
  // State to store latitude and longitude values
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [ninjas, setNinjas] = useState([]);

  // form submission
  const handleSubmit = () => {
    console.log("Latitude:", latitude, "Longitude:", longitude);

    // API Integration
    Axios.get(
      `${LOCAL_BACKEND_URL}/api/ninjas/?lng=${longitude}&lat=${latitude}`
    )
      .then((response) => {
        setNinjas(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error)); //data is the returned object
  };
  useEffect(() => {
    if (latitude && longitude) {
      handleSubmit();
    }
  }, [latitude, longitude]);

  return (
    <div className="flex flex-col items-center  bg-gray-400 min-h-screen pt-8">
      <div className=" pb-10">
        <h1 className="text-3xl ">Ninjago - a Ninja Rest API</h1>
      </div>

      <div className="pb-10">
        <form action="" onSubmit={handleSubmit}>
          {/* longitude */}
          <div className="py-4">
            <div>
              <label htmlFor="longitude" className="mr-4 text-xl">
                Longitude
              </label>
            </div>
            <div>
              <input
                type="text"
                name="longitude"
                id=""
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="w-96 py-4 px-4"
                placeholder="Enter your longitude"
              />
            </div>
          </div>

          {/* latitude */}
          <div className="pb-4">
            <div>
              <label htmlFor="latitude" className="mr-4 text-xl">
                Latitude
              </label>
            </div>
            <div>
              <input
                type="text"
                name="latitude"
                id=""
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="w-96 py-4 px-4"
                placeholder="Enter your latitude"
              />
            </div>
          </div>

          <button
            type="submit"
            className="border px-2 py-2 rounded bg-black text-white"
          >
            Find Ninjas
          </button>
        </form>
      </div>

      {/* results */}
      <div>
        <h1 className="pb-2">Search results</h1>
        <div className="border w-96 h-64 bg-white">
          {" "}
          <ul>
            {ninjas &&
              ninjas.map((ninja, index) => (
                <li key={index}>
                  <span> {ninja?.available}</span>
                  <span> {ninja?.name}</span>
                  <span> {ninja?.rank}</span>
                  <span>{Math.floor(ninja?.dist / 1000)} km</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
