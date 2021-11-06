fetch("https://foodcaloriesapi.herokuapp.com/data",{
    method:'get',
    mode:'cors',
    headers: {
        'Content-type':'application/json',
        'Access-Control-Allow-Origin':'*'
    }
}).
then(response=>response.json()).
then(data=>console.log(data))
let array=[
    {
      "_id": "617d211bc877c47e2b448703",
      "name": "Low fat (2%) milk",
      "pic": "https://static.dairypure.com/sites/default/files/branded/dairy_pure_1lf_gal.png",
      "calaries": "121",
      "__v": 0
    },
    {
      "_id": "617d212fc877c47e2b448705",
      "name": "Pudding (any flavor) (1/2 cup)",
      "pic": "",
      "calaries": "161",
      "__v": 0
    },
    {
      "_id": "617d2142c877c47e2b448707",
      "name": "Skim milk (1 cup)",
      "pic": "",
      "calaries": "86",
      "__v": 0
    },
    {
      "_id": "617d2157c877c47e2b448709",
      "name": "Yogurt (fruit-flavored, low fat) (1 cup)",
      "pic": "http://s3.amazonaws.com/img.mynetdiary.com/blog/yogurt-sugar.jpg",
      "calaries": "225",
      "__v": 0
    },
    {
      "_id": "617d2224c877c47e2b448714",
      "name": "Yogurt (frozen, low fat) (1 cup)",
      "pic": "",
      "calaries": "220",
      "__v": 0
    },
    {
      "_id": "617d22fbc877c47e2b44871e",
      "name": "Black eye peas (1/2 cup)",
      "pic": "",
      "calaries": "134",
      "__v": 0
    },
    {
      "_id": "617d2316c877c47e2b448720",
      "name": "Apple (1 medium)",
      "pic": "https://media.istockphoto.com/photos/red-apple-picture-id495878092?b=1&k=20&m=495878092&s=170667a&w=0&h=bJgILGFxOka0ymPlgilH8qaRxFhKole_M6IiYs6RyGM=",
      "calaries": "87",
      "__v": 0
    },
    {
      "_id": "617d2503d4850a85c0cc2852",
      "name": "Apple juice (1 cup)",
      "pic": "https://www.drmitraray.com/wp-content/uploads/2011/11/cider.jpg",
      "calaries": "111",
      "__v": 0
    },
    {
      "_id": "617d251ad4850a85c0cc2854",
      "name": "Applesauce (1 cup)",
      "pic": "",
      "calaries": "232",
      "__v": 0
    },
    {
      "_id": "617d2533d4850a85c0cc2856",
      "name": "Banana (1)",
      "pic": "",
      "calaries": "105",
      "__v": 0
    },
    {
      "_id": "617d2548d4850a85c0cc2858",
      "name": "Cantaloupe (1 cup)",
      "pic": "",
      "calaries": "57",
      "__v": 0
    },
    {
      "_id": "617d2718d4850a85c0cc2860",
      "name": "Carrot (1 medium)",
      "pic": "http://cdn.shopify.com/s/files/1/1380/2059/products/Carrot-Orange_grande.jpg?v=1598079671",
      "calaries": "31",
      "__v": 0
    },
    {
      "_id": "617d27e0d4850a85c0cc2865",
      "name": "Biscuit (1)",
      "pic": "",
      "calaries": "103",
      "__v": 0
    },
    {
      "_id": "617d27f5d4850a85c0cc2867",
      "name": "Peas, green (1/2 cup)",
      "pic": "",
      "calaries": "63",
      "__v": 0
    },
    {
      "_id": "617d2806d4850a85c0cc2869",
      "name": "Corn (1/2 cup)",
      "pic": "",
      "calaries": "89",
      "__v": 0
    },
    {
      "_id": "617d281cd4850a85c0cc286b",
      "name": "Beans, Lima (1/2 cup cooked)",
      "pic": "",
      "calaries": "108",
      "__v": 0
    },
    {
      "_id": "617d282fd4850a85c0cc286d",
      "name": "Potato (1 large, baked, plain)",
      "pic": "",
      "calaries": "220",
      "__v": 0
    },
    {
      "_id": "617d2856d4850a85c0cc2870",
      "name": "Sweet Potato (1 large)",
      "pic": "",
      "calaries": "118",
      "__v": 0
    },
    {
      "_id": "617d2869d4850a85c0cc2872",
      "name": "Three-bean salad (1/2 cup)",
      "pic": "",
      "calaries": "90",
      "__v": 0
    },
    {
      "_id": "617d28abd4850a85c0cc2875",
      "name": "Bread (whole wheat)(1 slice)",
      "pic": "",
      "calaries": "55",
      "__v": 0
    },
    {
      "_id": "617d290ed4850a85c0cc2878",
      "name": "Cereal, ready to eat (1 cup)",
      "pic": "",
      "calaries": "110",
      "__v": 0
    },
    {
      "_id": "617d29b5d4850a85c0cc287c",
      "name": "Rice, brown (1 cup)",
      "pic": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2009%2F03%2F18%2Fbrown-basmati-rice.jpg",
      "calaries": "232",
      "__v": 0
    },
    {
      "_id": "61862617a390645d6a91c4b8",
      "name": "Low fat (4%) milk",
      "pic": "https://static.dairypure.com/sites/default/files/branded/dairy_pure_1lf_gal.png",
      "calaries": "125",
      "__v": 0
    }
  ]
array.forEach((item)=>{
    document.querySelector(".list").insertAdjacentHTML("beforeend",
        `<div class="card" id=${item.id} style="width: 18rem;">
        <img class="card-img-top" src=${(item.pic==""?"./food.jpg":item.pic)} alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">Calories: ${item.calaries}</p>
          <button  class="btn btn-primary" onclick="update(this)">Update</button>
          <button class="btn btn-danger" onclick="deleteele(this)">Delete</button>
        </div>
      </div>`
    )
})
function update(e){
    console.log(e.parentNode.parentNode.getAttribute("id"))
}
function deleteele(e){
    console.log(e.parentNode.parentNode.getAttribute("id"))
}