import React from "react";
import { useState,useEffect } from "react";

function App() {
  const [search, setsearch] = useState('');
  const [arry, setarry] = useState({}); 
  const [imgsrc, setimgsrc] = useState('');
  const [src, setsrc] = useState();

  async function api(city) {
    try{ const apikey = "3de7cfd2abfa84ffb664a8e007f5f570";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    const data = await response.json();
    setarry(data);
    setimgsrc(data.weather[0].main)}
    catch(err){
      alert('Invalid Input')
    }
   
  }
  useEffect(() => {
    if (imgsrc === 'Clouds') {
      setsrc('./public/icons/clouds.png');
    } else if (imgsrc === 'Clear') {
      setsrc('./public/icons/clear.png');
    } else if (imgsrc === 'Rain') {
      setsrc('./public/icons/rain.png');
    } else if (imgsrc === 'Snow') {
      setsrc('./public/icons/snow.png');
    } 
    else if (imgsrc === 'Drizzle') {
      setsrc('./public/icons/drizzle.png');
    } else if (imgsrc === 'Mist') {
      setsrc('./public/icons/mist.png');
    }else if (imgsrc === 'Thunderstorm') {
      setsrc('./public/icons/thunderstorm.png');
    }


  }, [imgsrc]); 


  
  
  return (
    <>
      <div className="flex flex-column min-h-screen justify-center items-center ">
      <div className='bg-blue-500 h-11 w-80 rounded-lg relative bottom-64'>
          <input 
            type="text"
            onChange={(e) => setsearch(e.target.value)}
            className='mx-2 my-2 h-7 px-3 w-64 rounded-lg font-bold outline-0'
            placeholder='Search'
          />
          <button
            onClick={() => api(search)}
            className='bg-white h-7 w-10 relative top-1.5 rounded-lg'>
            <img 
              src="./public/icons/search.png" 
              alt=""
              className='h-6 mx-2' 
            />
          </button>
        </div>
      
      {/* Main div */}
     
      {arry.main && (
      
        <div className='bg-blue-500 h-96 w-80 rounded-lg absolute'>
          <div className='flex justify-center'>
            <img src={src} alt="" className='h-40'/>
          </div>
          {/*The temperature if arry.main exists */}
          
            
              <h3 className='text-white text-3xl font-bold text-center'>
                {`${Math.round(arry.main.temp)}°C`}
              </h3>
              <h3 className='text-white text-xl py-2 text-center'>
                {arry.name}
              </h3>
              <div className="justify-around flex my-7">
                <div className="">
                  <div className='flex justify-center items-center'>
                    <img className="h-7" src="./public/icons/humidity.png" alt=""/>
                  </div>
                  <h3 className="text-white text-lg text-center">
                    {`${Math.round(arry.main.humidity)}%`}
                  </h3>
                  <h3 className="text-white text-lg">Humidity</h3>
                </div>
                <div className="">
                  <div className='flex justify-center items-center'>
                    <img className="h-7" src="./public/icons/wind.png" alt=""/>
                  </div>
                  <h3 className="text-white text-lg text-center">
                    {`${Math.round(arry.wind.speed)}km/h`}
                  </h3>
                  <h3 className="text-white text-lg">Wind Speed</h3>
                </div>
              </div>            
          
        </div>
        
      )}
     </div>
    </>
  );
}

export default App;
