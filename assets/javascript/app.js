$(document).ready(function(){
    
    var mySearch;
    var url  = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({'api-key': "267cf592692f45e68a43dbbf35e843a4",'q' : mySearch});
    var myResponse;
    
    $( ".search" ).click(function() {
        getData();
        
        
        $.ajax({
            url: url,
            method: 'GET'
        }).then(function(response) {
            console.log(JSON.stringify(response));
            console.log(mySearch);
        });
    
        function getData(){
            alert("THis happend!");
            mySearch = $("#searchText").val(); 
            
            
        }   
    });
});