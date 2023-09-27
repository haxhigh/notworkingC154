AFRAME.registerComponent('flying-birds', {
    schema: {
        
    },

    init: function () {
      for(var i =1;i <= 20;i++){
        var id = `hurdle${i}`;

        var posX = Math.floor(Math.random()*3000 + -1000);
        var posY = Math.floor(Math.random() * 2 + -1);
        var posZ = Math.floor(Math.random() * 3000 + -1000);

        var position = {x: posX,y:posY,z:posZ};

        this.flyingBirds(id,position);
      }
    },
    flyingBirds: function (id,position) {
        var terrainEl = document.querySelector("#terrain");
        var birdEl = document.createElement("a-entity");
        birdEl.setAttribute("id",id);
        birdEl.setAttribute("position",position);
        birdEl.setAttribute("gltf-model","./assets/flying_bird/scene.gltf");
        birdEl.setAttribute("animation-mixer",{});
        birdEl.setAttribute("scale",{x:500,y:500,z:500})
        birdEl.setAttribute("static-body",{
          shape:"sphere",
          sphereRadius:2
        })
        terrainEl.appendChild(birdEl);
    }
});
