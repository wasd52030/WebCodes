$(document).ready(function () {

    $("#rb").click(function (e) { 
        let x=$("input[name='abcd']:checked").val();
        $("#radioresult").html(`radio button所選的是：${x}`);
    });

    $("#cb").click(function (e) { 
        let x=$('#ComboBox1 option:selected').val();
        $("#comboresult").html(`combobox所選的是：${x}`);
    });
});