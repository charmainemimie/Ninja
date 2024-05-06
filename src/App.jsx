function App() {
  return (
    <div className="flex flex-col items-center  bg-gray-400 min-h-screen pt-8">
      <div className=" pb-10">
        <h1 className="text-3xl ">Ninjago - a Ninja Rest API</h1>
      </div>

      <div>
        <form action="">
          {/* latitude */}
          <div>
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
                className="w-96 py-4 px-4"
                placeholder="Enter your latitude"
              />
            </div>
          </div>

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
                className="w-96 py-4 px-4"
                placeholder="Enter your longitude"
              />
            </div>
          </div>

          <button type="submit" className="border px-2 py-2 rounded bg-black text-white">Find Ninjas</button>
        </form>
      </div>

      {/* results */}
      <div>
        <ul></ul>
      </div>
    </div>
  );
}

export default App;
