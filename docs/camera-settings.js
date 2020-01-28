d3.select('h1')
    .style('color', 'black')

//CANVAS //IMAGE MANIPULATIONS BEGIN HERE 
 

Caman("#legoMan", "Lego.JPG", function () {


//     //ISO BUTTON
//     const isoButton = d3.selectAll('input[name=ISO]');
//     //APERTURE BUTTON
//     const apertureButton = d3.selectAll('input[name=F-Stop]');
//     //SHUTTER SPEED BUTTON
//     const shuttterButton = d3.selectAll('input[name=shutterSpeed]');




// //ISO FUNCTION
//   isoButton.on('change', function(d) {
//         console.log('ISO changed to ' + this.value);

//         Caman("#legoMan", "Lego.JPG", function () {
//             this.noise(10)
//             this.exposure(10)
//             .render();

//         });

//     })
// //APERTURE FUNCTION
//     apertureButton.on('change', function(d) {
//         console.log('Aperture changed to ' + this.value);

//         //This is where the user will choose the aperture and that will correspond to a specific thing. 
//         Caman("#legoMan", "Lego.JPG", function () {
//             //using the brightness() method -- it's on a 0-100 scaled
//             this.brightness(20).render()
//         });

//     })


// //SHUTTER FUNCTION
//     shuttterButton.on('change', function(d) {
//         console.log('Shutter Speed changed to ' + this.value);

//         Caman("#legoMan", "Lego.JPG", function () {
            // this.exposure(20).render();
//         });

//     })


// BUTTONS!!

//RESET BUTTON
    const resetButton = d3.selectAll('input[name=reset]');
//RESET FUNCTION
    resetButton.on('click', function(d){
        console.log(this.value); //should log 'RESET'
    //CLEARING THE IMAGE OF ANY MANIPUTATION
        Caman("#legoMan", "Lego.JPG", function () {
                this.revert(false);
                this.render();
            });
//         //Clearing RADIO BUTTON choices            
//         var clearISO= document.getElementsByName('ISO');
//         var clearFS= document.getElementsByName('F-Stop');
//         var clearSS= document.getElementsByName('shutterSpeed');
//         //ISO CLEARED
//         for(var i=0; i<clearISO.length; i++)
//             clearISO[i].checked = false;
//         //APERTURE CLEARED
//         for(var i=0; i<clearFS.length; i++)
//             clearFS[i].checked = false;
//         //SHUTTER SPEED CLEARED
//         for(var i=0; i<clearSS.length; i++)
//             clearSS[i].checked = false;
    })


//Aperture INCREASE button
const apertureIncBtn = d3.selectAll('#brightness-inc');
apertureIncBtn.on("click", function(e) {
    console.log('Aperature increase detected');
    Caman("#legoMan", "Lego.JPG", function () {
        this.brightness(10).render();
    });
  });

//Aperture DECREASE button
const apertureDecBtn = d3.selectAll('#brightness-dec');
apertureDecBtn.on("click", function(e) {
    console.log('Aperature decrease detected');
    Caman("#legoMan", "Lego.JPG", function () {
        this.brightness(-10).render();
    });
  });

//ISO INCREASE button
const isoIncBtn = d3.selectAll('#noise-inc');
isoIncBtn.on("click", function(e) {
    console.log('ISO increase detected');
    Caman("#legoMan", "Lego.JPG", function () {
        this.noise(10).brightness(5).render();
    });
  });

//ISO DECREASE button
const isoDecBtn = d3.selectAll('#noise-dec');
isoDecBtn.on("click", function(e) {
    console.log('ISO decrease detected');
    Caman("#legoMan", "Lego.JPG", function () {
        this.noise(-10).brightness(-5).render();
    });
  });

//Shutter INCREASE button
const ssIncBtn = d3.selectAll('#exposure-inc');
ssIncBtn.on("click", function(e) {
    console.log('Shutter Speed increase detected');
    Caman("#legoMan", "Lego.JPG", function () {
        this.exposure(10).render();
    });
  });

//Shutter DECREASE button
const ssDecBtn = d3.selectAll('#exposure-dec');
ssDecBtn.on("click", function(e) {
    console.log('Shutter Speed decrease detected');
    Caman("#legoMan", "Lego.JPG", function () {
        this.exposure(-10).render();
    });
  });



});