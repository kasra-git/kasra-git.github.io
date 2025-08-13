
const API = "https://apa-resume.liara.run/";

async function getData() {
    try {
      const response = await fetch(API);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    document.getElementById("about-text").innerHTML = `
    <p>${data.about}</p>
    `;
    document.getElementById("first-skill").innerHTML = `
    <p>${data.skills[0].name}</p>
    `;
    document.getElementById("second-skill").innerHTML = `
    <p>${data.skills[1].name}</p>
    `;
    document.getElementById("third-skill").innerHTML = `
    <p>${data.skills[2].name}</p>
    `;
    document.getElementById("forth-skill").innerHTML = `
    <p>${data.skills[3].name}</p>
    `;
    document.getElementById("fifth-skill").innerHTML = `
    <p>${data.skills[4].name}</p>
    `;
    document.getElementById("six-skill").innerHTML = `
    <p>${data.skills[5].name}</p>
    `;

    document.getElementById("address").innerHTML = `
    <p>${data.contact[0].address}</p>
    `;
    document.getElementById("email").innerHTML = `
    <p>${data.contact[0].email}</p>
    `;

    document.getElementById("first-project-title").innerHTML = `
    <p>${data.projects[0].title}</p>
    `;
    document.getElementById("first-project-link").setAttribute("href",data.projects[0].link);

     document.getElementById("second-project-title").innerHTML = `
    <p>${data.projects[1].title}</p>
    `;
    document.getElementById("second-project-link").setAttribute("href",data.projects[1].link);

     document.getElementById("third-project-title").innerHTML = `
    <p>${data.projects[2].title}</p>
    `;
    document.getElementById("third-project-link").setAttribute("href",data.projects[2].link);
  } 
  catch (error) {
    document.getElementById("output").textContent = "Error fetching data: " + error;
  }
}
getData();

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programmer","Hacker"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programmer","Hacker"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                iproject: 1,
                nav: false
            },
            600:{
                iproject: 2,
                nav: false
            },
            1000:{
                iproject: 3,
                nav: false
            }
        }
    });
});