

function getResponse(queryURL){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        console.log(queryURL)
      });
}

$(document.body).on("click", ".submitBtn", function(){
    var queryURL = queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput
    var userInput = $(".userMealName").val().trim()
    if (userInput === "")
        userInput = $(".userIngredient").val().trim()
        queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + userInput
    getResponse(queryURL)
})

