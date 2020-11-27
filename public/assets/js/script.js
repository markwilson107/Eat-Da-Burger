$(function () {
    $(".devour-btn").on("click", function (event) {
        const id = $(this).data("id");

        const newDevourState = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devoured to ", true);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})