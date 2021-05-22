let n = '';
$(document).ready(function () {
    $(".n").click(function (e) {
        n = n == '' ? $(this).attr("value") : n += $(this).attr("value");
        $("#d").val(n);
    });

    $("#eq").click(function (e) {
        $("#d").val(eval(n));
    });

    $("#C").click(function (e) {
        n = '';
        $("#d").val(n);
    });
});