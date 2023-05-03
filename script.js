const body= document.getElementsByTagName("body")
const div= document.createElement("div")
document.body.append(div)
div.setAttribute("class","container")
const h=document.createElement("h1")
div.append(h)
h.innerHTML="Weather"
h.setAttribute("class","text-center")
h.setAttribute("id","title")
const row=document.createElement("div")
div.append(row)
row.setAttribute("class","row")
const countries =async()=>{
try{
await fetch("https://restcountries.com/v3.1/all").
then(res => res.json())
.then((val) =>{ 
for (i of val){

//console.log(i.latlng)

const col1=document.createElement("div")
row.append(col1)
col1.setAttribute("class","col-sm-6 col-md-4 col-lg-4 col-xl-4 column1")
const card1=document.createElement("div")
col1.append(card1)
card1.setAttribute("class","card h-100")
const cardhead1=document.createElement("div")
card1.append(cardhead1)
cardhead1.setAttribute("class","card-header ch")
const h1=document.createElement("h5")
cardhead1.append(h1)
cardhead1.setAttribute("cname",i.name.common)
h1.innerText=i.name.common;
const cardbody1=document.createElement("div")
card1.append(cardbody1)
card1.setAttribute("lat",i.latlng[0])
card1.setAttribute("lon",i.latlng[1])
//console.log(i.latlng[0])
cardbody1.setAttribute("class","card-body cb")
const img= document.createElement("img")
cardbody1.append(img)
img.setAttribute("src",i.flags.png)
img.setAttribute("height","300px")
img.setAttribute("class", "card-img-top")

const cardtext1=document.createElement("div")
cardbody1.append(cardtext1)
cardtext1.setAttribute("class","card-text")
cardtext1.innerHTML=`<p><label>Capital : </label> ${i.capital} <br> <label>Region : </label> ${i.region} <br> <label>Latitude : </label> ${i.latlng[0]}<br>
<label>Longitude :</label> ${i.latlng[1]}<br> <label>Population : </label> ${i.population} <br></p>`
const btndiv= document.createElement("div")
card1.append(btndiv)
btndiv.setAttribute("class","btndiv")
const button=document.createElement("button");
btndiv.append(button)
button.setAttribute("class","btn btn-primary")
button.innerHTML="Click For Weather"

button.addEventListener("click",async()=>{
    btndiv.innerHTML="";
const cname=cardhead1.getAttribute("cname")
 const cardlat=card1.getAttribute("lat")
 const cardlon=card1.getAttribute("lon")   
 console.log(cardlat)
 try{
      await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cardlat}&lon=${cardlon}&appid=24d7df24b594d5c510df675d6f9bef3a`)
.then((res)=>res.json())   
.then((data)=>{
    console.log(data)
    const weather=data.weather
    for(j of weather)
    //console.log(j)

cardtext1.innerHTML+=`<span>Weather</span><br><p><label>Main : </label> ${j.main}<br><label>Description : </label> ${j.description}<br>
<label>Wind Speed : </label> ${data.wind.speed}<br></p>`  
  
})
}
catch(error)  {
      cardtext1.innerHTML+=`Error! ${cname} weather is not available`
}    
})


}
})

}

catch(err){
     const text =document.createElement("div")
     div.append(text)
     text.setAttribute("class","text")
    text.innerHTML=`<p>😟<p>Error!  Details is not available`
    
}
}
countries()