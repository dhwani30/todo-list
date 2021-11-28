localstorage.clear()
console.log("inside script.js")

console.log(localstorage);

if(localStorage.cards){
    $('.cards').children().remove()
    $('.cards').append(json.parse(localstorage.getitem('cards')))
}

const setstorage = () => {
    localStorage.removeitem('cards')
localStorage.setitem('cards', json.stringfy($('.cards')))
}

$("form").on("submit", (event) =>  {
    event.preventDefault();
    console.log("add clicked!")
    const title =$("input").val();
    const card= '
    <div class='card my-2'>
    <div class="card-block ml-3">
          <button id="delete" type="button" class="btn btn-danger float-right my-2">delete</button>
          <button id="done" type="button" class="btn btn-success float-right my-2 mr-2">Done</button>
          <p class="card-title lead  my-2">${title}
          </p>
     
  </div>
   </div>
    ';
$(".cards").append(card);

//reset input
$("form").trigger("reset");
setstorage();
});