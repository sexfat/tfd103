import { gsap } from "gsap";
import '../css/style.css';

gsap.to('.box' ,{
   duration : 2,
   x: 300,
   y : 300,
   rotation : 360,
   repeat : 3
})



console.log('webpack app1');

