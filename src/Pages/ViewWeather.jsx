import { Link } from "react-router-dom"

export function ViewWeather({currentWeather}){
    return (
      <div
        className={`${
          currentWeather === "dry" ? "bg-dryWeather" : "bg-wetWeather"
        } h-screen w-full bg-no-repeat bg-cover`}
      >
        <button className="px-4 py-2 bg-blue-300 text-white">
          <Link to="/">Back</Link>
        </button>
      </div>
    );
}
