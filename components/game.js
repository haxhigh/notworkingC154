AFRAME.registerComponent('game', {
    schema: {
        elementId:{type:"string",default:"#ring1"}
    },
    update: function () {
      this.isCollided(this.data.elementId)
    },
    isCollided: function(elementId){
        const element = document.querySelector(elementId)
        console.log(elementId)
        element.addEventListener("collide",(e)=>{
            if(elementId.includes("#ring")){
                console.log("collison with "+elementId)
            }
            else if(elementId.includes("#hurdle")){
                console.log("collisong with" +elementId)
            }
        })
    },
    }
);
