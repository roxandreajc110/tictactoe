triqui_positions = [null,null,null,null,null,null,null,null,null];
brands = ["X","O","X","O","X","O","X","O","X"]

var triqui = {
  make_move: function(button,i){
    return function(){
    if(triqui_positions[i]===null){
      var brand = brands.pop();
      button.textContent = brand;
      button.style.color="white";
      button.style.background="grey";
      // button.style.background-color="black";
      triqui_positions[i] = brand;
    }
    else {
      alert("Esta posición ya esta ocupada");
    }
    console.log(triqui_positions[i]);

    //Winning first define horizontal row
    if(triqui_positions[0] === "X" && triqui_positions[1] === "X" && triqui_positions[2] === "X" ){
    alert("Ganasteee X, en primera fila vertical!!!");
    }
    if(triqui_positions[0] === "O" && triqui_positions[1] === "O" && triqui_positions[2] === "O" ){
      alert("Ganasteee O, en primera fila vertical!!!");
    }
    //Winning second define horizontal row
    if(triqui_positions[3] === "X" && triqui_positions[4] === "X" && triqui_positions[5] === "X" ){
    alert("Ganasteee X, en segunda fila vertical!!!");
    }
    if(triqui_positions[3] === "O" && triqui_positions[4] === "O" && triqui_positions[5] === "O" ){
    alert("Ganasteee O, en segunda fila vertical!!!");
    }
    //Winning third define horizontal row
    if(triqui_positions[6] === "X" && triqui_positions[7] === "X" && triqui_positions[8] === "X" ){
    alert("Ganasteee X, en tercera fila vertical!!!");
    }
    if(triqui_positions[6] === "O" && triqui_positions[7] === "O" && triqui_positions[8] === "O" ){
    alert("Ganasteee O, en tercera fila vertical!!!");
    }
    //Winning first define diagonal
    if(triqui_positions[0] === "X" && triqui_positions[4] === "X" && triqui_positions[8] === "X" ){
    alert("Ganasteee X, en diagonal!!!");
    }
    if(triqui_positions[0] === "O" && triqui_positions[4] === "O" && triqui_positions[8] === "O" ){
    alert("Ganasteee O, en diagonal!!!");
    }
    //Winning second define diagonal
    if(triqui_positions[2] === "X" && triqui_positions[4] === "X" && triqui_positions[6] === "X" ){
    alert("Ganasteee X, en diagonal!!!");
    }
    if(triqui_positions[2] === "O" && triqui_positions[4] === "O" && triqui_positions[6] === "O" ){
    alert("Ganasteee O, en diagonal!!!");
    }
    //Winning first define column
    if(triqui_positions[0] === "X" && triqui_positions[3] === "X" && triqui_positions[6] === "X" ){
    alert("Ganasteee X, en primera columna!!!");
    }
    if(triqui_positions[0] === "O" && triqui_positions[3] === "O" && triqui_positions[6] === "O" ){
    alert("Ganasteee O, en primera columna!!!");
    }
    //Winning second define column
    if(triqui_positions[1] === "X" && triqui_positions[4] === "X" && triqui_positions[7] === "X" ){
    alert("Ganasteee X, en segunda columna!!!");
    }
    if(triqui_positions[1] === "O" && triqui_positions[4] === "O" && triqui_positions[7] === "O" ){
    alert("Ganasteee O, en segunda columna!!!");
    }
    //Winning third define column
    if(triqui_positions[2] === "X" && triqui_positions[5] === "X" && triqui_positions[8] === "X" ){
    alert("Ganasteee X, en tercera columna!!!");
    }
    if(triqui_positions[2] === "O" && triqui_positions[5] === "O" && triqui_positions[8] === "O" ){
    alert("Ganasteee O, en tercera columna!!!");
    }
  };
  },
};

document.addEventListener("DOMContentLoaded",function(event){
  var board_triqui = document.getElementById("board-triqui");
  var buttons_triqui = board_triqui.querySelectorAll("ul li button");
  for (var i = 0; i < buttons_triqui.length; i++) {
    buttons_triqui[i].addEventListener("click",triqui.make_move(buttons_triqui[i],i));
  }

});
