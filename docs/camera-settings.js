d3.select('h1')
    .style('color', 'black')


Caman("#legoMan", "Lego.JPG", function () {
    //manipulate image here 
    // this.exposure(100).render();
    // this.brightness(1).render();
    this.noise(100).render();

    // d3.select('#ISO').on('click', isoOne)
    //     function isoOne(){
    //     // console.log(this.value)
    //     this.noise(100).render();
// }
  });

  const buttons = d3.selectAll('input');
    buttons.on('change', function(d) {
        console.log('button changed to ' + this.value);
    });    
    