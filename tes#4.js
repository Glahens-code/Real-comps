var toyPromise = d3.json("toydesigns.json");

var successFCN = function (toy)
{
    console.log("toys",toys);
    drawTable(toys);
   
}

var getPartsnumber = function(parts){
    return parts.number
}
var getPartscost = function(parts)
{
   return parts.cost}

var failureFCN = function(Error)
{
    console.log("try again",Error)
}


var drawTable=function(toys)
{
    var rows= d3.select("#myTable")
        .selectAll("tr")
        .data(toydesigns)
        .enter()
        .append("tr")
    
    rows.append("td")
        .text(function(toy){
        Return toy.name})
    
    
    rows.append("td")
        .text(function(toy){
        var partsNumber             
        =toy.parts.map(getPartsnumber) 
        
        var partsTotal = d3.sum(partsNumber)
        
        return partsTotal});
     rows.append("td")
        .text(function(toy){
         var partsCost= toy.parts.map(getPartscost)
         //hilghlighting price for cost for each toy
        var PartsPrices= partsCost * partsnumber;
        //finding total cost
        var costTotal= d3.sum(PartsPrices)
        
        return costTotal
         
     });
}
    toyPromise.then(successFCN,failureFCN);