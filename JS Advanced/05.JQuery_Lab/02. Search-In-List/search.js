function search() {
   $(`#towns li`).css("font-weight", "normal");
   let searchedText = $("#searchText").val();
   
   let towns = $(`#towns li:contains(${searchedText})`).css("font-weight", "bold");
   $("#result").text(`${towns.length} matches found`);   
}