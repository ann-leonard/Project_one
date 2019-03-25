
function getResponse(queryURL){
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        
        
          for (i=0;i++;i<response.meals.length){
           category = response.meals[i].strCategory
         }

        
      });
}

$(document.body).on("click", ".submitBtn", function(){
    var allCategories = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    var allAreas = "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    var userInput = $(".userMealName").val().trim()
    var queryURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + userInput 
    if (!userInput){
      userInput = $(".userIngredient").val().trim()
      queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + userInput 
    }
    //getResponse(allCategories)
    //getResponse(allAreas)
    getResponse(queryURL)
    $(".userMealName").val("")
    $(".userIngredient").val("")

})
