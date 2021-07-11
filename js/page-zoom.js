function zoomOut(){
                var body = document.querySelector("body");
                var currWidth = body.clientWidth;
                if(currWidth == 2736){
                    alert("Maximum zoom-out level reached.");
                } else{
                    body.style.width = (currWidth - 25) + "px";
                }
            }
