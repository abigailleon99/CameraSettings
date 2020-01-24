d3.select('h1')
    .style('color', 'black')


Caman("#legoMan", "Lego.JPG", function () {
    //manipulate image here 
    // this.exposure(100).render();
    // this.brightness(1).render();
    // this.noise(100).render();


  //ISO BUTTON
  const isoButton = d3.selectAll('input[name=ISO]');
  isoButton.on('change', function(d) {
        console.log('ISO changed to ' + this.value);

        Caman("#legoMan", "Lego.JPG", function () {
            this.brightness(-10).render();

        });

    })

    //APERTURE BUTTON
    const apertureButton = d3.selectAll('input[name=F-Stop]');
    apertureButton.on('change', function(d) {
        console.log('Aperture changed to ' + this.value);

        Caman("#legoMan", "Lego.JPG", function () {
            this.noise(10).render();

        });

    })

    //SHUTTER SPEED BUTTON
    const shuttterButton = d3.selectAll('input[name=shutterSpeed]');
    shuttterButton.on('change', function(d) {
        console.log('Shutter Speed changed to ' + this.value);

        Caman("#legoMan", "Lego.JPG", function () {
            this.exposure(-20).render();

        });

    })


    //Reset BUTTON
    const resetButton = d3.selectAll('input[name=reset]');
    resetButton.on('click', function(d){
        console.log(this.value);

        Caman("#legoMan", "Lego.JPG", function () {
                this.revert(false);
                this.render();
            });
    })

  });
 
    