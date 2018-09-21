$(document).ready(function(){

var mySearch = $("#searchText").val();
var url  = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var myResponse;

   $.ajax({
        url: url,
        method: 'GET'
    }).then(function(response) {
        
        myResponse = response;
        console.log(myResponse);

    });
     
    $(".search").click(function(){
        getData();
    });


    function getData(){
        mySearch 
        queryUrl += '?' + $.param({'api-key': "267cf592692f45e68a43dbbf35e843a4",'q' : mySearch})
    }   

});