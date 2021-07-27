$(document).ready(function () {
	$.ajax('get_current_date.php', 
	{
	    dataType: 'text', 
		timeout: 50000,     
		success: function (result) {   
		    $("#date").html(result);
        },
        error: function(data){
            alert("error");
        }
	}
    );
    

    $(".playlist").hide();

    $("#start").click(function(){
        $.ajax('music_list.php', 
        {
            dataType: 'JSON', 
            timeout: 50000,     
            success: function (data) {   
                insert(data);
            },
            error: function(data){
                alert(data);
            }
        });
    });
    
    $("#start").hide();
    $(".playlist").show();


    function insert(listOfSong){
        $("#artist1").html(listOfSong[0].artist_name);
        $("#artist2").html(listOfSong[1].artist_name);
        $("#artist3").html(listOfSong[2].artist_name);
        $("#songname1").html(listOfSong[0].name);
        $("#songname2").html(listOfSong[1].name);
        $("#songname3").html(listOfSong[2].name);
        $("#playbtn1").click(function () {
            $("#yt")[0].src+=listOfSong[0].id;
            $("#yt")[0].src += "?autoplay=1";
            $("#yt").show();
        });
        $("#playbtn2").click(function () {
            $("#yt")[0].src+=listOfSong[1].id;
            $("#yt")[0].src += "?autoplay=1";
            $("#yt").show();
        });
        $("#playbtn3").click(function () {
            $("#yt")[0].src+=listOfSong[3].id;
            $("#yt")[0].src += "?autoplay=1";
            $("#yt").show();
        });
        
    }

});
