function fetchData(){
  fetch("https://foodcaloriesapi.herokuapp.com/data",{
    method:'get',
    mode:'cors',
    headers: {
        'Content-type':'application/json',
        'Allow-cross-origin-header':'*'
    }
}).
then(response=>response.json()).
then(data=>display(data))
}
fetchData();
function display(data){
  let array=data
  while (document.querySelector(".list").firstChild) {
    document.querySelector(".list").removeChild(document.querySelector(".list").firstChild);
  }
  array.forEach((item)=>{
    document.querySelector(".list").insertAdjacentHTML("beforeend",
        `<div class="card" id=${item._id} style="width: 18rem;">
        <img class="card-img-top" src=${(item.pic==""?"./food.jpg":item.pic)} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Calories: ${item.calaries}</p>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo" onclick="getId(this)">Update</button>
          <button class="btn btn-danger" onclick="deleteele(this)">Delete</button>
        </div>
      </div>`
    )
})
}
var eleId,rname,calories,pic;
function getId(e){
    eleId=e.parentNode.parentNode.getAttribute("id")
    console.log(eleId)
}
function getName(e){
  rname=e.value;
}
function getCalories(e){
  calories=e.value;
}
function getPic(e){
  pic=e.value;
}
function update(e){
    if(rname!=null && calories!=null  && rname!="" && calories!="" ){
      fetch("https://foodcaloriesapi.herokuapp.com/update",{
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body:JSON.stringify({
          "id":eleId,
          "name":rname,
          "calaries":calories,
          "pic":pic
        })
    }).
    then((response)=>{console.log(response.json()); fetchData()})
    document.querySelector("#update-form").setAttribute("data-dismiss","modal")
    }
    else{
      alert("Please enter Recipie name and calories")
    }
}
function deleteele(e){
  fetch("https://foodcaloriesapi.herokuapp.com/delete",{
        method:'POST',
        headers: {
            'Content-type':'application/json'
        },
        body:JSON.stringify({
          "id": e.parentNode.parentNode.getAttribute("id")
        })
    }).
    then((response)=>{console.log(response.json()); fetchData()})
}