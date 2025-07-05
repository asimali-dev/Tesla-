let box = document.querySelector(".slider-box");
let slides = document.querySelectorAll(".slides");
let btn = document.querySelectorAll(".btn1")
let slidesIndex = 0;

slides[slidesIndex].classList.add('active');
let frontView = (btnId)=>{
    slides[slidesIndex].classList.remove('active');
    btn[slidesIndex].classList.remove('active1');
    slidesIndex=btnId;
    if(slidesIndex===0){
        slides[slidesIndex].classList.add('active');
        box.style.transform='translateX(-${slidesIndex * 100}%)'; 
        btn[slidesIndex].classList.add('active1');
    }
    else if(slidesIndex===1){
        slides[slidesIndex].classList.add('active');
        box.style.transform='translateX(-${slidesIndex * 100}%)';
        btn[slidesIndex].classList.add('active1');  
    }
    else{
        slides[slidesIndex].classList.add('active');
        box.style.transform='translateX(-${slidesIndex * 100}%)'; 
        btn[slidesIndex].classList.add('active1');   
        
    }
}
btn.forEach(function(btn){
    btn.addEventListener('click',()=>{
        let btnId = btn.getAttribute('id');
        console.log(btnId);
        frontView(btnId-1);
    })
})