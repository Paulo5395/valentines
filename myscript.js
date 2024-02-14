$(document).ready(function() {
	$("#question").click(function(){
		$("#reveal").slideDown("slow");
            $("#responses").slideDown("slow");
                $("#yes").delay(800).slideDown();
                $("#yes2").delay(1000).slideDown();
	});

    $("#yes").click(function(){
        $("#end").slideDown("slow");
        $("img").fadeIn();
    });
    $("#yes2").click(function(){
        $("#end").slideDown("slow");
        $("img").fadeIn();
    });
});