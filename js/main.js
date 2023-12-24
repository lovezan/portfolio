

// Function to toggle the text between "Software developer" and "Web developer"
const developerElement = document.querySelector('.developer'); // Select the <h4> element with the "developer" class
const developerTitles = ['Software developer', 'Web developer', 'app developer', 'Front-end developer', 'Back-end developer','ux|ui designer'];
let currentIndex = 0;

function toggleDeveloperText() {
  developerElement.textContent = developerTitles[currentIndex];
  currentIndex = (currentIndex + 1) % developerTitles.length;
}

// for about click
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('about-link');
    const aboutSection = document.getElementById('about-section');
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of following the link
  
      // Scroll to the "About" section smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
      // Show the "About" section with the image
      aboutSection.style.display = "block";
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('services-link');
    const aboutSection = document.getElementById('services-section');
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of following the link
  
      // Scroll to the "About" section smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
      // Show the "About" section with the image
      aboutSection.style.display = "block";
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('experience-link');
    const aboutSection = document.getElementById('experience-section');
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of following the link
  
      // Scroll to the "About" section smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
      // Show the "About" section with the image
      aboutSection.style.display = "block";
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('media-link');
    const aboutSection = document.getElementById('media-section');
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of following the link
  
      // Scroll to the "About" section smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
      // Show the "About" section with the image
      aboutSection.style.display = "block";
    });
  });
  
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('subs-link');
    const aboutSection = document.getElementById('subs-section');
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of following the link
  
      // Scroll to the "About" section smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
      // Show the "About" section with the image
      aboutSection.style.display = "block";
    });
  });
  
  
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById('project-link');
    const aboutSection = document.getElementById('project-section');
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of following the link
  
      // Scroll to the "About" section smoothly
      aboutSection.scrollIntoView({ behavior: "smooth" });
  
      // Show the "About" section with the image
      aboutSection.style.display = "block";
    });
  });
  


// Call the toggleDeveloperText function every 2 seconds (2000 milliseconds)
setInterval(toggleDeveloperText, 2000);
const nameElement = document.getElementById('name');
const gradientColors = ['#FF5733', '#33FF57', '#5733FF', '#FF33DD'];
let currentIndex2 = 0;

function changeColor() {
  nameElement.style.color = gradientColors[currentIndex2];
  currentIndex2 = (currentIndex2 + 1) % gradientColors.length;
}

setInterval(changeColor, 1000); 

$(document).ready(function () {
  let $btns = $(".project-area .button-group button");

  $btns.click(function (e) {
    $(".project-area .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
      filter: selector,
    });

    return false;
  });

  $(".project-area .button-group #btn1").trigger("click");

  $(".project-area .grid .test-popup-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  //slide for skills owlcarosenl
  $(".site-main .services-area .services .skills .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
        0: {
            items: 1,
          },
          560: {
            items: 1,
          },
    },
  });

  // Owl-carousel

  $(".site-main .about-area .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });


  function showAlertAndForm() {
    // Show the overlay
    document.getElementById('overlay').style.display = 'flex';
  }

  function closeOverlay() {
    // Close the overlay
    document.getElementById('overlay').style.display = 'none';
  }

  function submitForm() {
    // Perform actions on form submission
    alert('Form submitted!'); // You can replace this with your custom logic
    // Close the overlay
    document.getElementById('overlay').style.display = 'none';
  }
  // sticky navigation menu

  let nav_offset_top = $(".header_area").height() + 50;

  function navbarFixed() {
    if ($(".header_area").length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area .main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area .main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});
