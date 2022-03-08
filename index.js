const searchInput = document.querySelector("#search");
const divs = document.querySelectorAll(".dance");

searchInput.addEventListener("keyup", function (event){
const word = event.target.value.toLowerCase();

 
 

divs.forEach(item =>{   
        item.querySelector("p").textContent.toLowerCase().includes(word)? (item.style.display ="block") : (item.style.display ="none");
})

})

// animation//
particlesJS("space", {
        "particles": {
          "number": {
            "value": 150,
            "density": {
              "enable": true,
              "value_area": 1200,
           
             
            }
          },
          "color": {
            "value": "#fff"
          },
          "opacity": {
            "value": 2,
            "anim": {
              "enable": true,
              "speed": 8,
              "opacity_min": 0.4,
              "sync": false
            }
          },
      "shape": {
        "type": "star",
        "stroke": {
           "width": 3,
           "color": "white"
        },
        "polygon": {
           "nb_sides": 5
        }
      },
          "size": {
        "value": 1, 
        "random": true,
        "anim": {
          "enable": true,
          "speed": 20,
          "size_min": 10,
          "sync": false
        }
      },
          "line_linked": {
            "enable": false
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "top",
            
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": false
            },
            "onclick": {
              "enable": false
            }
          }
        }
      });