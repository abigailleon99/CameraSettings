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

//   d3.select("#f1").on('click', fstopOne)

//     function fstopOne(){
//         Caman('#legoMan', 'Lego.JPG', function(){
//             this.brightness(100).render();
//         }
//     }