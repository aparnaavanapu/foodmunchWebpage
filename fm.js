let hamburger=document.getElementById("bar");
let crossMark=document.getElementById("xMark");
let container=document.getElementById("nav-container-sm");

hamburger.addEventListener("click",function(){
    hamburger.style.display="none";
    crossMark.style.display="flex";
    container.classList.toggle("nv-items");

});

crossMark.addEventListener("click",function(){
    crossMark.style.display="none";
    hamburger.style.display="flex";
    container.classList.toggle("nv-items");
});

let bannerOutlineBtn=document.getElementById("banner-section-outline-btn");

bannerOutlineBtn.addEventListener("mouseover",function(event){
    bannerOutlineBtn.style.borderColor="#FFFFFF";
    bannerOutlineBtn.style.transform = "scale(1.05)";
    bannerOutlineBtn.style.color="white";
});

bannerOutlineBtn.addEventListener("mouseout", function(event) {
    bannerOutlineBtn.style.borderColor = ""; 
    bannerOutlineBtn.style.transform = ""; 
    bannerOutlineBtn.style.color="";
});

document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.custom-button');
    buttons.forEach(btn => {
        
        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = "#FFD700";
            btn.style.boxShadow = "0px 4px 15px rgba(0, 0, 0, 0.3)";
            btn.style.transform = "scale(1.05)"; 
        });

        btn.addEventListener('mouseout', () => {
            btn.style.backgroundColor = "";
            btn.style.boxShadow = "";
            btn.style.transform = ""; 
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    
    const cards = document.querySelectorAll('.wcu-card');
    cards.forEach(card => {
        
        card.addEventListener('mouseover', () => {
            card.style.transform = 'scale(1.05)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = '';
        });
    });
});

