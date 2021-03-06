var database = firebase.database().ref('channels/brain-waves/editorials/e1');
//The callback function defined will happen one time
//"snapshot" is a snapshot of EVERYTHING in the database at the time the function's called
database.once("value", function(snapshot) {
//for each row in the snapshot of the database, do this inner callback function.
	snapshot.forEach(function(childSnapshot) {
	 //get the value of one row of the database
	 var row = childSnapshot.val();
	 //do stuff with that row
	 $("#messageBox1").append("<p>" + row.name + ": " + row.message + "</p>");
 });//end of inner function

});//end of outer function
//////////////////////////////////////////////////////////////////////////////////////
$("#js1").click(function() {  
	var database = firebase.database().ref('channels/brain-waves/editorials/e1');
	var name = $('#name1').val();
	var message = $("#messages1").val();
	database.push({
		'name' : name,
		'message' : message
	});
	database.once("child_added", function(dataRow){
		var row = dataRow.val();
		$("#messageBox1").append("<p>" + row.name + ": " + row.message + "</p>");
	}
	);
	$("#messages1").val("");
	$("#name1").val("");
});
///////////////////////////////////////////////////////////////////////////////////////
$("#").each( function() 
{
   // certain browsers have a bug such that scrollHeight is too small
   // when content does not fill the client area of the element
   var scrollHeight = Math.max(this.scrollHeight, this.clientHeight);
   this.scrollTop = scrollHeight - this.clientHeight;
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var database = firebase.database().ref('channels/brain-waves/editorials/e2');
//The callback function defined will happen one time
//"snapshot" is a snapshot of EVERYTHING in the database at the time the function's called
database.once("value", function(snapshot) {
//for each row in the snapshot of the database, do this inner callback function.
	snapshot.forEach(function(childSnapshot) {
	 //get the value of one row of the database
	 var row = childSnapshot.val();
	 //do stuff with that row
	 $("#messageBox2").append("<p>" + row.name + ": " + row.message + "</p>");
 });//end of inner function

});//end of outer function
