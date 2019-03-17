$(function () {
    // add burger
    $("#add-burger-button").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-text").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function (res) {
            console.log(res);
            location.reload();
        }).catch(function (err) {
            console.log(err);
        });
    });

    // devour
    $(".devour-btn").on("click", function (event) {
        event.preventDefault();

        var burgerId = $(this).data("id");
        var devourThis = {
            id: burgerId
        };

        $.ajax("/api/burger/" + burgerId, {
            type: "PUT",
            data: devourThis
        }).then(function (res) {
            console.log(res);
            location.reload();
        });

    });
});