d3.select('h1')
    .style('color', 'darkseagreen')

Caman("#legoMan", "Lego.JPG", function () {
    // manipulate image here
    this.exposure(90).render();
    this.brightness(50).render();
    this.noise(50).render();
  });

  // Make some buttons for each of the settings and then have them as the presets. 
  // So now maybe make it seem like the brightness is doubling

  //ISO will have to be the noise/ gain of an image. There will have to be a make up for it. 

  // Shutter speed will have to be different. I will try to make it seem like the brightness isn't 
  //the same as the aperature... but at the same time it will me 