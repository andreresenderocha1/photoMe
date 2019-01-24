var menus = document.querySelectorAll(".menuItem");
    menus.forEach(function(ele){
        ele.addEventListener('mouseover',function(){
            ele.classList.add('menuOver');
        })
        ele.addEventListener('mouseleave',function(){
            ele.classList.remove('menuOver')
        })
    })


var containerLogo = document.getElementById('containerLogo');
containerLogo.addEventListener('click',function(){
    window.location.href = "index.html"
})