d3.select('h1')
    .style('color', 'black')


d3.select('#ISO').on('click', isoOne)
function isoOne(){
    console.log(this.value)
    // this.noise(100).render();
}
    
Caman("#legoMan", "Lego.JPG", function () {
    // manipulate image here
    this.exposure(100).render();
    // this.brightness(1).render();
    this.noise(100).render();

  });

  // Make some buttons for each of the settings and then have them as the presets. 
  // So now maybe make it seem like the brightness is doubling

  //ISO will have to be the noise/ gain of an image. There will have to be a make up for it. 

  // Shutter speed will have to be different. I will try to make it seem like the brightness isn't 
  //the same as the aperature... but at the same time it will me 


  // buttons to change things START HERE

//   d3.select("#f1").on('click', fstopOne)

//     function fstopOne(){
//         Caman('#legoMan', 'Lego.JPG', function(){
//             this.brightness(100).render();
//         }
//     }