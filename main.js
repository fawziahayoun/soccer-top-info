
//linkes section
let linkSection = document.querySelectorAll(".links a");
let otherLinkSection = document.querySelectorAll(".other-links li");
function secrollToSomewhere(elements){
    elements.forEach(el =>{
        el.addEventListener("click", (e) => {
            e.preventDefault();
        
        
                document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior: 'smooth'
                            });
        
            });

    });
};
secrollToSomewhere(linkSection);
secrollToSomewhere(otherLinkSection);
//strattoggle random bagrouncolor
document.querySelector(".toggle-button i").onclick = function() {
    this.classList.toggle("fa-spin");
    document.querySelector(".bullets-Color").classList.toggle("open");
};
localcolor = localStorage.getItem("local_color");
if(localcolor !== null){
    document.documentElement.style.setProperty("--main-color", localcolor);
    document.querySelectorAll(".bullets li").forEach((e) =>{
        e.classList.remove("active");
        if(e.dataset.color == localcolor){
            e.classList.add("active")
        }
    })

};
var bullet = document.querySelectorAll(".bullets li")
bullet.forEach((el)=>{  
    el.addEventListener("click", (e) => {
            document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
            localStorage.setItem("local_color" ,e.target.dataset.color);
            e.target.parentElement.querySelectorAll(".active").forEach(element =>{
                element.classList.remove("active");
            });
            e.target.classList.add("active");
        
    })
});
//reset option
document.querySelector(".reset").onclick = function(){
    localStorage.removeItem("local_color");
    window.location.reload();
};
//open toggle manu
toggle =document.querySelector(".toggle-manu");
links = document.querySelector(".links"); 
linkso = document.querySelectorAll(".links li");
toggle.onclick = function () {
   links.classList.toggle("open");
   othrLinks.classList.remove("open");
   this.classList.toggle("active");
   toggle.classList.remove("deraction");    

     };     
linkso.forEach((li) => {
    li.onclick = function () {
        links.classList.remove("open");
        toggle.classList.remove("active");
         }   
});
other = document.querySelector(".other");
othrLinks = document.querySelector(".other-links");
lo = document.querySelectorAll(".other-links li");
other.onclick = function () {
    othrLinks.classList.toggle("open");
    toggle.classList.add("deraction");    
};

lo.forEach((link) => {
    link.onclick = function () {
        othrLinks.classList.remove("open");
        toggle.classList.remove("deraction");    
    }
});
/**/
 var slideImages = Array.from(document.querySelectorAll
    ('.landing img'));
 sliderCount = slideImages.length;
 currentSlide = 1
 SliderNumber = document.getElementById( 'slaider-number');
 var nextButton = document.getElementById( 'next');
 var prevbutton = document.getElementById( 'prev');
 nextButton.onclick = cheknextbutton;
 prevbutton.onclick = chekprevbutton ;

var ulElemnt = document.createElement('ul');
 ulElemnt.setAttribute('id', 'pagination-ul');

 for( i = 1 ; i <= sliderCount ; i++){
    var liEtem = document.createElement('li');
    liEtem.setAttribute('data-index', i);
    liEtem.appendChild(document.createTextNode(i));
    ulElemnt.appendChild(liEtem);
 }
  document.getElementById("indicators").appendChild(ulElemnt);

 var ulArray = Array.from(document.querySelectorAll
    ('#pagination-ul li'))

 for(var i = 0 ; i < ulArray.length ; i++){
    ulArray[i].onclick = function (){
        currentSlide = parseInt(this.getAttribute('data-index'))
        ckeck();
    }
 }
 function cheknextbutton(){
    if(nextButton.classList.contains('desibled')){
        return false;
    }else{
        currentSlide++;
        ckeck();
    }
 }
 function chekprevbutton(){
    if(prevbutton.classList.contains('desibled')){
        return false;
    }else{
        currentSlide--;
        ckeck();
    }
 }
 function ckeck() {
    SliderNumber.textContent = '#slide' + 
    (currentSlide) + 'of' + (sliderCount);
 removeActive();
    slideImages[ currentSlide -1].classList.add('active')
    ulArray[currentSlide - 1 ].classList.add('active');


    if(currentSlide == 1){
        prevbutton.classList.add('desibled');
    }else{
        prevbutton.classList.remove('desibled');

    }

    if(currentSlide == 8){
        nextButton.classList.add('desibled');
    }else{
        nextButton.classList.remove('desibled');

    }

 }
 function removeActive(){
    slideImages.forEach( function (img) {
        img.classList.remove('active');
    });
   ulArray.forEach(function(li){
    li.classList.remove('active');
   })
 };
 //select gallary
 var swisher = document.querySelectorAll(".swisher li");
 var image = Array.from(document.querySelectorAll(".images-container .box"));
 swisher.forEach((li) => {
    li.addEventListener("click", manageActive)
    li.addEventListener("click", mangeImages)
 });
 function manageActive(){
    swisher.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
 };
 function mangeImages() {
    image.forEach((img) => {
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cut).forEach((el) => {
        el.style.display = "block";
    })
 }


