$(document).ready(function () {
    var template = '<div class="showContainer" ><div class="row"><div class="col-md-6"><form><div class="form-group"><label></label><input type="file" class="form-control" /></div></form></div><div class="col-md-6 m-t-30"><button type="button" class="btn btn-primary">Upload</button><button type="button" class="btn btn-primary">Download</button><button type="button" class="btn btn-primary input-close">Close</button></div></div></div>';
    //for contianer hide and show
    $('.dataContainer').on("click", function () {
        $('.dataContainer').removeClass("clicked");
        $(this).addClass("clicked");

        $(".input-container").empty();
        $(this).parents(".data-wrapper").eq(0).find(".input-container").html(template);
        // for container hide nad show when clicked on close button
        $('.input-close').on("click", function () {
            $('.dataContainer').removeClass("clicked");
            $(".input-container").empty();
        });
    });
});