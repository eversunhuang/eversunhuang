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