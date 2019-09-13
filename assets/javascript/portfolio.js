$(document).ready(function () {
    function displayModal(x, y, z) {
        var projName = x;

        var projDeployed = y;

        var projRepo = z;

        $("#dynamic-title").text(projName);

        $("#dynamic-description").html("<strong>Deployed App:</strong> <a href='" + projDeployed + "'>" + projDeployed + "</a><br /><strong>GitHub Repository:</strong> <a href='" + projRepo + "'>" + projRepo + "</a>");

        $("#project-info").modal("show");
    }

    $(".portfolio-picture, .portfolio-title").on("click", function (event) {
        console.log(this);

        displayModal($(this).attr("data-name"), $(this).attr("data-deployed"), $(this).attr("data-repo"));
    });
});