

    
        
    function getData(){
        var mySearch = $("#searchText").val();
        var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryUrl += '?' + $.param({
            'api-key': "8335fc7b2a3545bcb71046bf50bee79e",
            'q' : mySearch

        });


   $.ajax({
        url: queryUrl,
        method: "GET"
    })
     
        .then(function(response) {
            var myResponse = (response.docs.snippet);
            console.log(myResponse);
        });
     
}