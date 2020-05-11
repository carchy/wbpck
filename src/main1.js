import  main2 from  './main2'
import  main3  from'./main3'
import  './asset/style.css'
import  jQuery from  'jquery'
const $=jQuery
document.write('<h1>bundle1/h1>');
main2()
main3()

$('body').addClass('my=class')
import('./js/main4.js').then(
    (module)=>module()
);
