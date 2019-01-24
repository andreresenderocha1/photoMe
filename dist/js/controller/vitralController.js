(function(){
    var squares = document.querySelectorAll(".card");
    squares.forEach(function(el){
        el.addEventListener("mouseover",function(){
            el.classList.add('spin');
        })
        el.addEventListener("mouseleave",function(){
             el.classList.remove('spin');
         })
    })

    var btnCadastrar = document.getElementById("btnCadastrar");
    btnCadastrar.addEventListener("click",function(){
        var pic1 = document.getElementById('pic1');
        var pic2 = document.getElementById('pic2');
        var pic3 = document.getElementById('pic3');
        var pic4 = document.getElementById('pic4');
        var pic5 = document.getElementById('pic5');
        var pic6 = document.getElementById('pic6');
        var pic7 = document.getElementById('pic7');
        pic1.classList.add('goneUpRight');
        pic2.classList.add('goneDownLeft');
        pic3.classList.add('goneUpLeft');
        pic4.classList.add('goneDownRight');
        pic5.classList.add('goneUpLeft');
        pic6.classList.add('goneDownLeft');
        pic7.classList.add('goneUpRight');

        pic7.addEventListener('transitionend',function(){
            var pics = document.querySelectorAll(".card");
            pics.forEach(function(el){
                el.classList.add('vanish');
                window.location.href = "registrer.html"                                
            })    
        })        
    })

    var btnPhotos = document.getElementById('btnPhotos');
    btnPhotos.addEventListener('click',function(){
        
        document.getElementById('pic1').classList.add("baselinePic1");
        document.getElementById('pic4').classList.add("baselinePic4");
        document.getElementById('pic3').classList.add("baselinePic3");
        document.getElementById('pic2').classList.add("baselinePic2");
        document.getElementById('pic7').classList.add("baselinePic7");
        document.getElementById('pic6').classList.add("baselinePic6");
        document.getElementById('pic5').classList.add("baselinePic5");
        document.getElementById('transparent').classList.add("vanish");
    })

}())