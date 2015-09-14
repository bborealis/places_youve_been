$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();
    var inputtedLocation = $("input.new-location").val();
    var inputtedLandmarks = $("input.new-landmarks").val();
    var inputtedTimeOfYear = $("input.new-time-of-year").val();
    var inputtedNotes = $("input.new-notes").val();
    var newDestination = { place: inputtedPlace, location: inputtedLocation, landmarks: inputtedLandmarks, timeOfYear: inputtedTimeOfYear, notes: inputtedNotes }:

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.place "</span></li>");

    $("input#new-place").val("");
    $("input.new-location").val("");
    $("input.new-landmarks").val("");
    $("input.new-time-of-year").val("");
    $("input.new-notes").val("");

    });
});
