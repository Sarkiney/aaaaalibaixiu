$('#logout').on('click', function () {
    var isConfirm = confirm('真的要退出啊？')
    if (isConfirm) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function (res) {
                location.href = 'login.html'
            },
            error: function (res) {
                alert('哈哈哈，退出失败了')
            }
        })
    }
})