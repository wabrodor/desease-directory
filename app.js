

const menu = document.querySelector("ul")
const toggle = document.querySelector(".toggle")
const credit = document.querySelector(".copyright")
const diseases = document.querySelectorAll(".diseases")
const redirect = document.querySelector(".popup");
const date = new Date().getFullYear();
const menuItem = document.querySelectorAll("#menu-item")


// copyright dynamic
credit.innerHTML = `<p class ="credits"> ©  copyright  ${date} skribfy all right reserved</p>`

// closing menu

menuItem.forEach(menuLink =>{
  menuLink.addEventListener("click", () =>{
if(menu.classList.contains("menu")){
  menu.classList.remove("menu")
}
  })
})

// redirecting popup


if(window.location.href !== "http://127.0.0.1:5500/index.html")

{

  diseases.forEach( disease =>{
console.log("hi")
    disease.addEventListener("click", (e)=>{
      e.preventDefault()  
      let link = disease.href;
      console.log(link)
      redirect.classList.toggle("modal-popup")
      setTimeout(
      
        function myfunction(){
          window.location.href = link
           }
          ,1500)
       myfunction()

    })
            
  })

}


// toggle menu
toggle.addEventListener("click", (e) =>{

  menu.classList.toggle("menu")
})



 
 


 