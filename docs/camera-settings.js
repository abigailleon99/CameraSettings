d3.select('h1')
    .style('color', 'black')

Caman("#legoMan", "Lego.JPG", function () {
//manipulate image here 

//ISO BUTTON
  const isoButton = d3.selectAll('input[name=ISO]');

//ISO FUNCTION
  isoButton.on('change', function(d) {
        console.log('ISO changed to ' + this.value);

        Caman("#legoMan", "Lego.JPG", function () {
            this.noise(10).render();

        });

    })

//APERTURE BUTTON
    const apertureButton = d3.selectAll('input[name=F-Stop]');

//APERTURE FUNCTION
    apertureButton.on('change', function(d) {
        console.log('Aperture changed to ' + this.value);

        Caman("#legoMan", "Lego.JPG", function () {
            this.brightness(10).render();

        });

    })

//SHUTTER SPEED BUTTON
    const shuttterButton = d3.selectAll('input[name=shutterSpeed]');

//SHUTTER FUNCTION
    shuttterButton.on('change', function(d) {
        console.log('Shutter Speed changed to ' + this.value);

        Caman("#legoMan", "Lego.JPG", function () {
            this.exposure(-20).render();

        });

    })

//Reset BUTTON
    const resetButton = d3.selectAll('input[name=reset]');

//RESET FUNCTION
    resetButton.on('click', function(d){
        console.log(this.value); //should log 'RESET'
    //CLEARING THE IMAGE OF ANY MANIPUTATION
        Caman("#legoMan", "Lego.JPG", function () {
                this.revert(false);
                this.render();
            });
        //CLEARING THE RADIO BUTTON CHOICES            
        var clearISO= document.getElementsByName('ISO');
        var clearFS= document.getElementsByName('F-Stop');
        var clearSS= document.getElementsByName('shutterSpeed');
        //ISO CLEARED
        for(var i=0; i<clearISO.length; i++)
            clearISO[i].checked = false;
        //APERTURE CLEARED
        for(var i=0; i<clearFS.length; i++)
            clearFS[i].checked = false;
        //SHUTTER SPEED CLEARED
        for(var i=0; i<clearSS.length; i++)
            clearSS[i].checked = false;
    })



});