function searchArticle(inputTerm) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + inputTerm + "&api-key=8335fc7b2a3545bcb71046bf50bee79e";
    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (result) {
        console.log(result);
        $("#results").append("<br>Title: " + result.response.docs[0].headline.main + "<br>");
    })
}

$(document).ready(function () {
    $("#submit-button").on("click", function (event) {
        var value = $("#sterm").val().trim();
        searchArticle(value);
    });
});


// $(document).ready(function(){
    
//     var mySearch;
//     var url  = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//     url += '?' + $.param({'api-key': "267cf592692f45e68a43dbbf35e843a4",'q' : mySearch});
//     var myResponse;
    
//     $( ".search" ).click(function() {
//         getData();
        
        
//         $.ajax({
//             url: url,
//             method: 'GET'
//         }).then(function(response) {
//             console.log(JSON.stringify(response));
//             console.log(mySearch);
//         });
    
//         function getData(){
//             alert("THis happend!");
//             mySearch = $("#searchText").val(); 
            
            
//         }   
//     });
// });