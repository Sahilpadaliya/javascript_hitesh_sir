let search = document.getElementById('search-city')
let cityname = document.getElementById('city-name')

let city=document.getElementById('city')
let time=document.getElementById('time')
let temp=document.getElementById('temp')

// const getdata = async (cityname)=>{
//   let data= await fetch(`http://api.weatherapi.com/v1/current.json?key=167e78dc8e1947afa0451037250604&q=${cityname}&aqi=yes`)
//   return await data.json();
// }


search.addEventListener("click", async()=>{
    // alert("ok");
    let value = cityname.value
    // console.log(value)
    let result= await getdata(value)
    // console.log(result)
    city.innerText=`${result.location.name},${result.location.country}`
    time.innerText= result.location.localtime
    temp.innerText=result.current.temp_c

})


// ---------------------------------------

// function can also be written as 
// async function getdata(cityname){
//     let result= await fetch(`http://api.weatherapi.com/v1/current.json?key=167e78dc8e1947afa0451037250604&q=${cityname}&aqi=yes`)
//     return await result.json();
// }
 

