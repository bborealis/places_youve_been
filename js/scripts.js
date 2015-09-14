$(document).ready(function() {
    $("#add-journey").click(function() {
        $("#new-journeys").append('<div class="new-journey">' +
                                        '<div class="form-group">' +
                                            '<label for="new-spot">Spot</label>' +
                                            '<input type="text" class="form-control new-spot">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-landmark">Landmark</label>' +
                                            '<input type="text" class="form-control new-landmark">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-date">Date</label>' +
                                            '<input type="text" class="form-control new-date">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-notes">Notes</label>' +
                                            '<input type="text" class="form-control new-notes">' +
                                        '</div>' +
                                    '</div>');
    });


  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place").val();

    var newDestination = { place: inputtedPlace, journeys: [] };

    $(".new-journey").each(function() {
        var inputtedSpot = $(this).find("input.new-spot").val();
        var inputtedLandmark = $(this).find("input.new-landmark").val();
        var inputtedDate = $(this).find("input.new-date").val();
        var inputtedNotes = $(this).find("input.new-notes").val();

        var newJourney = { spot: inputtedSpot, landmark: inputtedLandmark, date: inputtedDate, notes: inputtedNotes };
    newDestination.journeys.push(newJourney);
    });

    $("ul#destinations").append("<li><span class='destination'>" + newDestination.place + "</span></li>");

    $(".destination").last().click(function() {
        $("#show-destination").show();

        $("#show-destination h2").text(newDestination.place);
        $(".place").text(newDestination.place);

        $("ul#journeys").text("");
        newDestination.journeys.forEach(function(journey) {
            $("ul#journeys").append("<li>" + journey.spot + "</li>" +
                                    "<li>" + journey.landmark + "</li>" +
                                    "<li>" + journey.date + "</li>" +
                                    "<li>" + journey.notes + "</li>");
        });

    });

    $("input#new-place").val("");
    $("input.new-spot").val("");
    $("input.new-landmark").val("");
    $("input.new-date").val("");
    $("input.new-notes").val("");



    });
});
