$('#logout').on('click', function () {
    var isConfirm = confirm('真的要退出吗');
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function () {
                location.href = 'login.html';
            },
            error: function () {
                alert('哈哈哈，退出失败了');
            }
        })
    }
})