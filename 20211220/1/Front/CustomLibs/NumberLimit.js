export function NumberLimitById(id) {
    $(`#${id}`).bind('input', function (e) {
        let idData = $(`#${id}`).val();
        idData = idData.replace(/[^\d]/g, '');
        $(`#${id}`).val(idData);
    });
}