$(document).ready(function() {
    // Slide down the game options and change button text when the call-to-action button is clicked
    $("#get-started").click(function(e) {
        e.preventDefault();
        $("#game-options").slideToggle();
        
        if ($(this).text() === "Show Games") {
            $(this).text("Hide Games");
        } else {
            $(this).text("Show Games");
        }
    });
});