const domain = window.location.origin
let ans,city;
function getcity(e){
    city=e.value
}
document.getElementById('submit').addEventListener("click",()=>{
    document.getElementById('ans').innerHTML=``
    console.log(city)
    if(city==" "){
        document.getElementById('ans').innerHTML=`Enter city name`
    }
    else{
        let url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b0b7cb577f7f8823165ea2f280783887'
        fetch(url)
        .then(response => response.json())
        .then((data)=>{
        console.log(data)
        ans=(data.main.temp-273.15).toFixed(2)
        document.getElementById('ans').innerHTML=`The temperature at ${city} is ${ans} degree Celsius`
        document.getElementById('icon').src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    })
    .catch(
        
    )
    }
})
