var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryUrl += '?' + $.param({
 'api-key': "8335fc7b2a3545bcb71046bf50bee79e"
});



//getData();


    

$.ajax({
    url: queryURl,
    method: "GET"
})

   .then(function(response) {
        var myCopyright = (response.copyright);
        console.log(myCopyright);
    });


