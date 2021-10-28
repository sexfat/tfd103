import $ from 'jquery';
import { gsap } from "gsap";

$('body').css('background-color' , '#eee');
gsap.to('.box' ,{
   duration : 2,
   x: 600,
   y : 600
})



console.log('webpack 打包');

