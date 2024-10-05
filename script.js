const=form=document.querySelector("form"),
      nextBtn=form.querySelector(".nextBt"),
      backBtnt=form.querySelector(".backBtnt"),
      allinput=form.querySelectorAll(".first input");

       
nextBtn.addEventListener("click", ()=>{
    allinput.forEach(input => {
       if(input.value != ""){
        form.classList.add('secActive');
       } 
    })else{
        form.classList.remove('secActive');
        alert("input is empty")
    }
})