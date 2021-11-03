import { gsap } from "gsap";
import '../sass/style.scss';

gsap.to('.box' ,{
   duration : 2,
   x: 700,
   y : 300,
   rotation : 360,
   repeat : 3
})
$('body').css('background-color' , 'red');


console.log('webpack app1');

