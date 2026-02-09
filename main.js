/*
things to include:
- movable candy hearts stickers
- spotify playlist
- digi camera animation
- light up cat lamp
- spinning gears

sections:
- home
- where i'm from
    - nyc: subway scroll animation
    - china: open fortune cookies
    - wa: rising moon over rainier

- projects
    - robots
    

- gallery
    - digi camera


*/
const moon = document.querySelector("#moon");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.classList.add('moonRise');
    }
  });
});
observer.observe(moon);

const cookie1 = document.querySelector("#cookie1");
const cookie2 = document.querySelector("#cookie2");
const cookie3 = document.querySelector("#cookie3");
const cookie4 = document.querySelector("#cookie4");
const cookie5 = document.querySelector("#cookie5");
const cookie6 = document.querySelector("#cookie6");
const msgDiv = document.querySelector(".luckyMsg");
const close = document.querySelector("#close");
const msg = document.querySelector("#msgTxt");

cookie1.addEventListener("mouseover", function() {
  cookie1.style.cursor = 'pointer';
})
cookie2.addEventListener("mouseover", function() {
  cookie2.style.cursor = 'pointer';
})
cookie3.addEventListener("mouseover", function() {
  cookie3.style.cursor = 'pointer';
})
cookie4.addEventListener("mouseover", function() {
  cookie4.style.cursor = 'pointer';
})
cookie5.addEventListener("mouseover", function() {
  cookie5.style.cursor = 'pointer';
})
cookie6.addEventListener("mouseover", function() {
  cookie6.style.cursor = 'pointer';
})

cookie1.addEventListener("click", function() {
  msgDiv.style.visibility = "visible";
  msg.textContent = "#1: being on the same bus route as the girl who is now my best friend since middle school";
})
cookie2.addEventListener("click", function() {
  msgDiv.style.visibility = "visible";
  msg.textContent = "#2: wandering in downtown seattle stressfully and finding a hidden gem matcha spot after taking the sat";
})
cookie3.addEventListener("click", function() {
  msgDiv.style.visibility = "visible";
  msg.textContent = "#3: seeing an ad by a breeder for a retired mama cat with an eye infection and ending up adopting our first pet";
})
cookie4.addEventListener("click", function() {
  msgDiv.style.visibility = "visible";
  msg.textContent = "#4: missing the last train while travelling in japan but then seeing the most beautiful sunset over the sea";
})
cookie5.addEventListener("click", function() {
  msgDiv.style.visibility = "visible";
  msg.textContent = "#5: getting my first grand piano after my piano teacher sadly moved away and buying his old one at a lower price";
})
cookie6.addEventListener("click", function() {
  msgDiv.style.visibility = "visible";
  msg.textContent = "#6: being here, finding love, chasing my passions, and feeling thankful for how lucky i am."
})

close.addEventListener("click", function() {
  msgDiv.style.visibility = "hidden";
  msg.textContent = "";
})