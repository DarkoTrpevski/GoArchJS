// Select all header items
const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');
const brandLink = document.querySelector('.brand');
// Select all sections with this class
const sectionsLinks = document.querySelectorAll('.navbar-section-link-select');
// Select the navigation bar list
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-list li');
// Select all anchor links
const anchors = document.querySelectorAll('a[href^="#"]');
// Select the custom carousel items
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#next');
const prevBtn = document.querySelector('#prev');

const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;
// Select the map labels
const mapLabel = document.querySelectorAll('.object-label');
// Select the year span in the footer and modify it
const yearSpan = document.getElementById("year");
yearSpan.innerHTML = new Date().getFullYear();

/*-------------------------------------------------------------------------------
	Window load
-------------------------------------------------------------------------------*/

$(window).load(function(){
    $('.loader').fadeOut(2000);
});


/*-------------------------------------------------------------------------------
    Throttle Script for sticky header
-------------------------------------------------------------------------------*/
/**
 * @license
 * Lodash (Custom Build) lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 * Build: `lodash include="throttle"`
 */
;(function(){function t(){}function e(t){return null==t?t===l?d:y:I&&I in Object(t)?n(t):r(t)}function n(t){var e=$.call(t,I),n=t[I];try{t[I]=l;var r=true}catch(t){}var o=_.call(t);return r&&(e?t[I]=n:delete t[I]),o}function r(t){return _.call(t)}function o(t,e,n){function r(e){var n=d,r=g;return d=g=l,x=e,v=t.apply(r,n)}function o(t){return x=t,O=setTimeout(c,e),T?r(t):v}function i(t){var n=t-h,r=t-x,o=e-n;return w?k(o,j-r):o}function f(t){var n=t-h,r=t-x;return h===l||n>=e||n<0||w&&r>=j}function c(){
var t=D();return f(t)?p(t):(O=setTimeout(c,i(t)),l)}function p(t){return O=l,S&&d?r(t):(d=g=l,v)}function s(){O!==l&&clearTimeout(O),x=0,d=h=g=O=l}function y(){return O===l?v:p(D())}function m(){var t=D(),n=f(t);if(d=arguments,g=this,h=t,n){if(O===l)return o(h);if(w)return O=setTimeout(c,e),r(h)}return O===l&&(O=setTimeout(c,e)),v}var d,g,j,v,O,h,x=0,T=false,w=false,S=true;if(typeof t!="function")throw new TypeError(b);return e=a(e)||0,u(n)&&(T=!!n.leading,w="maxWait"in n,j=w?M(a(n.maxWait)||0,e):j,S="trailing"in n?!!n.trailing:S),
m.cancel=s,m.flush=y,m}function i(t,e,n){var r=true,i=true;if(typeof t!="function")throw new TypeError(b);return u(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),o(t,e,{leading:r,maxWait:e,trailing:i})}function u(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function f(t){return null!=t&&typeof t=="object"}function c(t){return typeof t=="symbol"||f(t)&&e(t)==m}function a(t){if(typeof t=="number")return t;if(c(t))return s;if(u(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;
t=u(e)?e+"":e}if(typeof t!="string")return 0===t?t:+t;t=t.replace(g,"");var n=v.test(t);return n||O.test(t)?h(t.slice(2),n?2:8):j.test(t)?s:+t}var l,p="4.17.5",b="Expected a function",s=NaN,y="[object Null]",m="[object Symbol]",d="[object Undefined]",g=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,O=/^0o[0-7]+$/i,h=parseInt,x=typeof global=="object"&&global&&global.Object===Object&&global,T=typeof self=="object"&&self&&self.Object===Object&&self,w=x||T||Function("return this")(),S=typeof exports=="object"&&exports&&!exports.nodeType&&exports,N=S&&typeof module=="object"&&module&&!module.nodeType&&module,E=Object.prototype,$=E.hasOwnProperty,_=E.toString,W=w.Symbol,I=W?W.toStringTag:l,M=Math.max,k=Math.min,D=function(){
return w.Date.now()};t.debounce=o,t.throttle=i,t.isObject=u,t.isObjectLike=f,t.isSymbol=c,t.now=D,t.toNumber=a,t.VERSION=p,typeof define=="function"&&typeof define.amd=="object"&&define.amd?(w._=t, define(function(){return t})):N?((N.exports=t)._=t,S._=t):w._=t}).call(this);

// This function will run a throttled script every 300 ms
let checkHeader = _.throttle(() => {
    
    // Detect scroll position
    let scrollPosition = Math.round(window.scrollY);

    if (scrollPosition > 100){
        // If we've scrolled 100px, add "sticky" class to the header
        header.classList.add('sticky');
    }
    else {
        // If not, remove "sticky" class from header
        header.classList.remove('sticky');
    }
}, 300);

    
/*-------------------------------------------------------------------------------
    Change Link State
-------------------------------------------------------------------------------*/

const changeLinkState = () => {
    // Get the total amount of sections
    let index = sectionsLinks.length;

    

    while (--index && window.scrollY + 50 < sectionsLinks[index].offsetTop) { }

    // Create a copy of the nav-links(ul) children and loop through them
    [...navList.children].forEach((link) => {
        link.classList.remove('active')
        links[index].classList.add('active');
    });
}

/*-------------------------------------------------------------------------------
    Animate mobile menu
-------------------------------------------------------------------------------*/


const navSlide = () => {
    header.classList.toggle('header-visible');
    brandLink.classList.toggle('brand-visible');
    // Toggle Nav active Class
    nav.classList.toggle('nav-active');
    // Burger Animation
    burger.classList.toggle('toggle');
}


/*-------------------------------------------------------------------------------
    Add scrolling effects
-------------------------------------------------------------------------------*/
let wowScroll = new WOW({
    offset: 150,
    mobile: false
});

wowScroll.init();
/*-------------------------------------------------------------------------------
    Project carousel
-------------------------------------------------------------------------------*/



$(".js-projects-carousel").owlCarousel({
    itemsMobile:[479,1],
    itemsTablet:[768,2],
    itemsDesktopSmall:[1000,2],
    itemsDesktop:[1250,3],
    items:4,
    pagination:false,
    navigation:true,
    slideSpeed:700,
    responsiveRefreshRate:0
});



/*-------------------------------------------------------------------------------
    Gallery
-------------------------------------------------------------------------------*/



$('.js-projects-gallery').each(function(){
    $(this).magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 200,
        tLoading: 'Loading ...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload:[2,2]
        },
        image: {
            tError: 'The image could not be loaded.'
        }

    });
});

/*-------------------------------------------------------------------------------
    Custom Carousel
-------------------------------------------------------------------------------*/
const countEl = $("#count");
let totalItems = $('.slide');

let counter = $('div.current').index() + 1;
let totalItemsLength = totalItems.length;


const nextSlide = () => {    
    counter++;
    if(counter > totalItemsLength) {
        counter = 1;
    }
    countEl.text(counter);
    
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    if(counter === 1) {
        counter = totalItemsLength;
    } else {
        counter--;
    }
    countEl.text(counter);
    
    const current = document.querySelector('.current');
    current.classList.remove('current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// Button events
nextBtn.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prevBtn.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}


/*-------------------------------------------------------------------------------
    Setup the Map labels click listeners
-------------------------------------------------------------------------------*/


const onLabelClick = (e) => {
    for (let item of e.target.children) {
        item.classList.toggle('infoShown')
    }
}

/*-------------------------------------------------------------------------------
    Setup the Form validation
-------------------------------------------------------------------------------*/


if ($('#form').length) {
    $('#form').each(function(){

        $(this).validate({
            submitHandler: function(form){
                $.ajax({
                    type: "POST",
                    url:"sendMail.php",
                    data: $(form).serialize(),
                    success: function(response, status, xhr) {
                        console.log(response);
                        console.log(status);
                        console.log(xhr);
                        // Show the success box
                        $('.form-message, .success-message').show();
                    },
                    error: function(xhr, status, error){
                        console.log(xhr);
                        console.log(status);
                        console.log(error);
                        // Show the error boxs
                        $('.form-message, .error-message').show();
                    }
                });
            }
        });

    });
}

/*-------------------------------------------------------------------------------
    Setup the on anchor link smooth scrolling
-------------------------------------------------------------------------------*/

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*-------------------------------------------------------------------------------
    Setup the JS functions
-------------------------------------------------------------------------------*/


const addListeners = () => {
    // Run the changeLinkState function every time you scroll
    window.addEventListener('scroll', changeLinkState);
    // Run the checkHeader function every time you scroll
    window.addEventListener('scroll', checkHeader);
    burger.addEventListener('click',navSlide);
    
    mapLabel.forEach(label => {
        label.addEventListener('click', onLabelClick)
    });
}


const app = () => {
    addListeners();
}

app();