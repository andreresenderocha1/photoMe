(function(){
    var mainContainer = document.querySelector(".mainContainer");
   
     mainContainer.addEventListener("mouseenter",function(){               
         document.querySelector(".inputContainer").classList.add("visible");
     })
    

      mainContainer.addEventListener("mouseleave",function(){
          document.querySelector(".inputContainer").classList.remove("visible");
        
        
      })

   
})()