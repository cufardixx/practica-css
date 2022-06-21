const asideSection = document.querySelector("aside");
const mainSection = document.querySelector("main");

const signInBtn = document.getElementById("sign-in-btn");
const signUpBtn = document.getElementById("sign-up-btn");

signInBtn.addEventListener("click", () => {
  mainSection.classList.add("slideRight");
  asideSection.classList.add("slideLeft");
});

signUpBtn.addEventListener("click", () => {
  mainSection.classList.remove("slideRight");
  asideSection.classList.remove("slideLeft");
});


const btnSwicht = document.querySelector('#swicht');

btnSwicht.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwicht.classList.toggle('active');

    //guardamos el modo en local storag
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode','true');
        
    }else{
        localStorage.setItem('dark-mode','false');
    }
});


if(localStorage.getItem('dark-mode')== 'true'){
    document.body.classList.add('dark');  
    btnSwicht.classList.add('active');  
}else{
    document.body.classList.remove('dark');
    btnSwicht.classList.remove('active');
}