function deleteWish() {
    $('.monitor').hide();
    $('#monitorModal').modal("hide")
}

$('#monitorButton').click(function() {
    $("#monitorModal").modal("show")
});
$('#keyboardButton').click(function() {
    $("#keyboardModal").modal("show")
});
$('#controllerButton').click(function() {
    $("#controllerModal").modal("show")
});