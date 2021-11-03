import $ from 'jquery';
import { gsap } from "gsap";

$('body').css('background-color' , '#eee');


gsap.to('.box' ,{
   duration : 2,
   x: 300,
   y : 300,
   rotation : 360,
   repeat : 3
})



console.log('webpack 打包');

