import { Link } from "react-router-dom"

function Home({setWeather}){
    return (
      <div className="bg-purple-200 h-screen flex justify-center flex-col items-center">
        <p className=" text-3xl pt-4">Welcome to my simple weather app</p>
        <p className="">
          To make this fun for you, you are expected to choose the current
          weather in your country{" "}
        </p>
        <select name="" id="" onChange={(e) => {
            console.log(e.target.value)
            setWeather(e.target.value)
        }}>
          <option value="dry">Dry season</option>
          <option value="raining">Raining season</option>
        </select>
        <button className="py-4 px-6 mt-4 rounded-lg transition-all duration-500 ease-in-out bg-blue-300 border-2 border-blue-300 hover:border-white hover:bg-white text-white hover:text-blue-300">
          <Link to='/view-weather'>See weather</Link>
        </button>
      </div>
    );
}
export default Home