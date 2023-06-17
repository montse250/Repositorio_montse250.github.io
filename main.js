let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Desarrollo sitios web y soy orgullosamente studiante de ingeneria en computación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
