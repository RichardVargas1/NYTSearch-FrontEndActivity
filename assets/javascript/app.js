$(document).ready(function(){
    $( ".search" ).click(function() {
        getData();
        console.log("SHOW ME");
        var mySearch;
        var url  = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({'api-key': "267cf592692f45e68a43dbbf35e843a4",'q' : mySearch});
        var myResponse;
        
        $.ajax({
            url: url,
            method: 'GET'
        }).then(function(response) {
            myResponse = response;    
        });
    
        function getData(){
            alert("THis happend!");
            mySearch = $("#searchText").val(); 
            
            console.log(myResponse);   
        }   
    });
});