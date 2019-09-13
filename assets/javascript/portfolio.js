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

    $(".fa-home").mouseover(function() {
        $(".fa-home").addClass("d-none");

        $(".aboutFont").removeClass("d-none").addClass("d-inline");
    });

    $(".aboutFont").mouseout(function() {
        $(".aboutFont").removeClass("d-inline").addClass("d-none");

        $(".fa-home").removeClass("d-none");
    });

    $(".fa-folder-open").mouseover(function() {
        $(".fa-folder-open").addClass("d-none");

        $(".portfolioFont").removeClass("d-none").addClass("d-inline");
    });

    $(".portfolioFont").mouseout(function() {
        $(".portfolioFont").removeClass("d-inline").addClass("d-none");

        $(".fa-folder-open").removeClass("d-none");
    });

    $(".fa-phone").mouseover(function() {
        $(".fa-phone").addClass("d-none");

        $(".contactFont").removeClass("d-none").addClass("d-inline");
    });

    $(".contactFont").mouseout(function() {
        $(".contactFont").removeClass("d-inline").addClass("d-none");

        $(".fa-phone").removeClass("d-none");
    });

    $(".fa-file").mouseover(function() {
        $(".fa-file").addClass("d-none");

        $(".resumeFont").removeClass("d-none");
    });

    $(".resumeFont").mouseout(function() {
        $(".resumeFont").addClass("d-none");

        $(".fa-file").removeClass("d-none");
    });
});