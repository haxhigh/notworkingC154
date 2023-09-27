//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation < 0.1) {
          this.data.speedOfRotation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation > -0.1) {
          this.data.speedOfRotation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRotation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

AFRAME.registerComponent('planemove', {
  schema: {
    rotation:{type:"number",default:0},
    ascent:{type:"number", default:0}
  },

  init: function () {
    window.addEventListener("keydown",(e)=>{
      this.data.rotation = this.el.getAttribute("rotation")
      this.data.ascent = this.el.getAttribute("position")

      var planeRotation = this.data.rotation
      var planeAscent = this.data.ascent

      if (e.key ==="ArrowRight") {
        if(planeRotation.x < 10){
          planeRotation.x +=0.5;
          this.el.setAttribute("rotation",planeRotation);
        }
      }

      if (e.key ==="ArrowLeft"){
        if(planeRotation.x > -10){
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }

      if (e.key ==="ArrowUp"){
        if (planeRotation.z < 20){
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planeAscent.y <2){
          planeAscent.y += 0.01;
          this.el.setAttribute("position",planeAscent);
        }
      }

      if (e.key === "ArrowDown"){
        if(planeRotation.z > -10){
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation",planeRotation)
        }
        if (planeAscent.y > -2){
          planeAscent.y -= 0.01;
          this.el.setAttribute("position",planeAscent)
        }
      }
    })
  },
});





