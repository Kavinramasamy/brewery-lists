var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

async function breweries(){
  var res1=await fetch("https://api.openbrewerydb.org/v1/breweries?per_page=250");
  return res1;
}
var res=breweries();
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="col-md-4 text-center">
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-body text-secondary">
        <h5 class="card-title">${data1[i].name}</h5>
          <p class="card-text"> Brewery type : ${data1[i].brewery_type}</p>
          <p class="card-text" style="text-align:center">Address : ${data1[i].address_1}</p>
          <p class="card-text" style="text-align:center">State : ${data1[i].state_province}</p>
          <p class="card-text" style="text-align:center">Postal_code : ${data1[i].postal_code}</p>
          <p class="card-text" style="text-align:center">country : ${data1[i].country}</p>
          <a href=${data1[i].website_url} class="btn btn-primary">click to 🍺</a>
          <p class="card-text">Phone no:${data1[i].phone}</p>
        </div>
      </div>
      </div>`
        }
        document.body.append(container);
}
