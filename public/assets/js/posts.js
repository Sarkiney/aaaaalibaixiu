function dateFormat(date) {
    var date = new Date(date);
    return date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '时';
}
$.ajax({
    type: 'get',
    url: '/posts',
    success: function (res) {
        var html = template('postsTpl', res);
        $('#postsBox').html(html);
        var page = template('pageTpl', res);
        $('#page').html(page);
    }
})

function changePage(page) {
    $.ajax({
        type: 'get',
        url: '/posts',
        data: {
            page: page
        },
        success: function (res) {
            var html = template('postsTpl', res);
            $('#postsBox').html(html);
            var page = template('pageTpl', res);
            $('#page').html(page);
        }
    })
}
$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        var html = template('categoryTpl', {
            data: res
        });
        $('#categoryBox').html(html);
    }
})
$('#filterForm').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'get',
        url: '/posts',
        data: formData,
        success: function (res) {
            console.log(res)
            var html = template('postsTpl', res);
            $('#postsBox').html(html);
            var page = template('pageTpl', res);
            $('#page').html(page);
        }
    })
    return false;
})