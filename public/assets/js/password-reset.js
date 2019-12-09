$('#modifyForm').on('submit', function () {
    var dataForm = $(this).serialize();
    $.ajax({
        type: 'put',
        url: '/users/password',
        data: dataForm,
        success: function () {
            location.href = 'login.html';
        }
    })
    return false;
})