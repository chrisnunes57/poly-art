let images = document.getElementsByTagName("image");
let wrapper = document.getElementsByClassName("wrapper")[0];

for(let i = 0; i < images.length; i++){
  let shape = images[i];
  shape.classList.add("piece");
  shape.xVal = images[i].getAttribute("x");
  shape.yVal = images[i].getAttribute("y");
}

function scatter(){
  for(let i = 0; i < images.length; i++){
      let shape = images[i];
      shape.classList.add("scattered");
      shape.setAttribute("x", -2 * wrapper.offsetLeft + 50 + window.innerWidth * 2.1 * Math.random());
      shape.setAttribute("y", -1 * wrapper.offsetTop + 100 + window.innerHeight * 2 * Math.random());

  }
}

function reset(){
  if(images[0].classList.contains("scattered")){
      for(let i = 0; i < images.length; i++){
          images[i].classList.remove("scattered");
          setTimeout(() =>{move(images[i], images[i].x, images[i].y);}, 10 * i);
      }
  }
}

function move(shape, newX, newY){
  shape.setAttribute("x", shape.xVal);
  shape.setAttribute("y", shape.yVal);
}