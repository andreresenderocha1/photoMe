(function(){

    var waypoint = new Waypoint({
        element: document.getElementById('way'),
        handler: function() {
          document.getElementById('way').classList.add('rollLeft')
        },
        offset: 600
      })
      var waypoint = new Waypoint({
        element: document.getElementById('way2'),
        handler: function() {
          document.getElementById('way2').classList.add('rollLeft')
        },
        offset: 600
      })
      var waypoint = new Waypoint({
        element: document.getElementById('way3'),
        handler: function() {
          document.getElementById('way3').classList.add('rollLeft')
        },
        offset: 600
      })

    var waypoint2 = new Waypoint({
        element: document.getElementById('picMiddle'),
        handler: function(){            
            document.getElementById('picMiddle').classList.add('rollRight')           
        },
        offset: 600
    })

    var waypoint2 = new Waypoint({
        element: document.getElementById('pic2Middle'),
        handler: function(){            
            document.getElementById('pic2Middle').classList.add('rollRight')           
        },
        offset: 600
    })
    var waypoint2 = new Waypoint({
        element: document.getElementById('pic3Middle'),
        handler: function(){            
            document.getElementById('pic3Middle').classList.add('rollRight')           
        },
        offset: 600
    })

}())