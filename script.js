var res= fetch("https://api.tvmaze.com/search/people?q=lauren")
res.then((data)=>{
    return data.json()
}).then((data1)=>foo(data1)).catch((error)=>console.log(error))

var container = document.createElement("div");
container.className ="container";

var row = document.createElement("div");
row.className = "row";
 
function foo(data1){
    console.log(data1);
     for(var i=0;i<data1.length;i++){
    var col = document.createElement("div");
    col.className = "col-lg-4";
    col.innerHTML=`<div class="card-group">
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">Television Sho</h5>
      <img src="${data1[1].person.image.medium}" class="card-img-top" alt="...">      
         <p class="card-text">${data1[1].person.name}</p>
      <p class="card-text">${data1[1].person.country.name}</p>
               <p class="card-text">${data1[1].person.gender}</p>
               <img src="${data1[2].person.image.medium}" class="card-img-top" alt="...">      
         <p class="card-text">${data1[2].person.name}</p>
      <p class="card-text">${data1[2].person.country.name}</p>
               <p class="card-text">${data1[2].person.gender}</p>
          
    </div>
  </div>
`

  
  row.append(col);
  container.append(row);
  document.body.append(container);   
}
}
