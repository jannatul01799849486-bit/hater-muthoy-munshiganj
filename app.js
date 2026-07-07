console.log("হাতের মুঠোয় মুন্সিগঞ্জ শুরু হয়েছে")
document.querySelector("button").addEventListener("click", function () {
    alert("🔍 সার্চ ফিচার খুব শীঘ্রই আসছে!");
});// Slider

let slides=document.querySelectorAll(".slide");

let current=0;

setInterval(()=>{

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

},4000);


// Clock

function updateClock(){

const now=new Date();

document.getElementById("clock").innerHTML=now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();


// Dark Mode

document.getElementById("darkMode").onclick=function(){

document.body.classList.toggle("dark");

}