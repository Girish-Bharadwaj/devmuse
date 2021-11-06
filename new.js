let rname,calories,pic
    function getrname(e) {
        rname=e.value
    }
    function getcalories(e) {
        calories=e.value
    }
    function getPicurl(e) {
        pic=e.value
    }
   
    function add(){
        console.log(rname)
        if(rname!=null && calories!=null  && rname!="" && calories!="" ){
            fetch("https://foodcaloriesapi.herokuapp.com/data",{
                method:'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                "name":rname,
                "calaries":calories,
                "pic":pic
                })
            }).
            then((response)=>{console.log(response.json());window.location.href = "/food.html"})

            }
    else{
      alert("Please enter Recipie name and calories")
    }
    }
    document.getElementById('add').addEventListener("click",add);