const $logo = document.querySelectorAll('.logo')[0];
const $navBar = document.querySelectorAll('.nav-bar')[0];
window.addEventListener('scroll',togglenavBar, false);
function togglenavBar(){
    if (window.pageYOffset >= $logo.offsetHeight && $navBar.classList.contains('abs-pos')){
        $navBar.classList.remove('abs-pos');
        $navBar.classList.add('fix-pos');
    } else if (window.pageYOffset < $logo.offsetHeight && $navBar.classList.contains('fix-pos')) {
        $navBar.classList.add('abs-pos');
        $navBar.classList.remove('fix-pos');

    }
}

//const $extLink = document.querySelectorAll ('.ext-link')[0];
//$extLink.addEventListener('click',openLink,false);
//function openLink(){
//    window.open('https://www.blogger.com', '_blank');
//}
//
//const $intLink = document.querySelectorAll('.int-link')[2];
//const $transparenciaSect = document.querySelector('#transparencia')
//$intLink.addEventListener('click',scrollToSect, false);
//function scrollToSect(){
//   // window.scrollTo(0,$transparenciaSect.offsetTop - $navBar.offsetHeight);
//    window.scrollTo({
//        top: $transparenciaSect.offsetTop - $navBar.offsetHeight,
//        left: 0,
//        behavior: 'smooth'
//    });
//}

const $intLinks = document.querySelectorAll('.int-link a');
$intLinks.forEach(function(cur){
    cur.addEventListener('click',function(evt) {
        evt.preventDefault();
    window.scrollTo({
        top: document.querySelector(cur.getAttribute('href')).offsetTop - $navBar.offsetHeight,
        left: 0,
        behavior: 'smooth'
    
    });
    
    },false)
    
})

    

