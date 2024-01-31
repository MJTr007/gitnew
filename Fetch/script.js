var container=document.createElement("div");
container.className="container";
var row = document.createElement("div");
row.classList.add("row","m-3");
container.append(row);


var res= fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json()).then((data1)=>foo(data1)).catch((error)=>console.log(error));

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){

        //displays coungtry names and capitals
        // var div=document.createElement("div");
        // div.innerHTML=`Country name: ${data1[i].name} Capital: ${data1[i].capital}`;
        // document.body.append(div);

        row.innerHTML+=
        //(+)after .innerHTML denotes col's added one after other automatically
        `<div class="col=md-4">
        <div class="card" style="width: 11rem;">
        <img src="${data1[i].flag}" class="card-img-top" alt="...">
        <div class="card-body">
        <p class="card-text ">${data1[i].name}</p>
        <p class="card-text">${data1[i].capital}</p>
        </div>
        </div>
        </div>`
            document.body.append(container);
    }
}