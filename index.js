async function getweather(){
    try{

       let city=document.getElementById("city").value;

       let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=274a140a9a2266848e5d078ceea73bfe&units=metric`);

       let data=await res.json();
       console.log(data);

       appendData(data)
    }
     catch(err){
    console.log("err:", err);
    }
}

function appendData(data){

   document.getElementById("info").innerHTML="";
   document.getElementById("map").innerHTML="";

   let name=document.createElement("h3");
   name.innerText="City - "+ data.name;

   let temp=document.createElement("h3");
   temp.innerText="Temperature - "+data.main.temp;

   let min_temp=document.createElement("h3");
   min_temp.innerText="Minimum - "+data.main.temp_min+"C";

   let max_temp=document.createElement("h3");
   max_temp.innerText="Maximum - "+data.main.temp_max+"C";

   let wind=document.createElement("h3");
   wind.innerText="Wind -"+ data.wind.speed+"km/hr";


   let humidity=document.createElement("h3");
   humidity.innerText="Humidity - "+ data.main.humidity;

   let iframe=document.createElement("iframe");
   iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

   document.querySelector("#map").append(iframe)

   document.querySelector("#info").append(name,temp,min_temp,humidity)
}