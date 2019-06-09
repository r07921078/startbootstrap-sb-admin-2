jQuery(document).ready(function($)
{
	alert("window load occurred!");
	
	var db = firebase.firestore();
	db.collection("GoogleTrend").doc("Top 1").onSnapshot(function(doc) {
    	json_data = doc.data()
		console.log("Top 1 data: ", json_data)
		$('#top1').text(json_data.name);
    });


	db.collection("GoogleTrend").doc("Top 2").onSnapshot(function(doc) {
        json_data = doc.data()
        console.log("Top 2 data: ", json_data)
        $('#top2').text(json_data.name);
    });

	
	db.collection("GoogleTrend").doc("Top 3").onSnapshot(function(doc) {
        json_data = doc.data()
        console.log("Top 3 data: ", json_data)
        $('#top3').text(json_data.name);
	});
});


