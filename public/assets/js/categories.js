$.ajax({
    type: 'get',
    url: '/categories',
    success: function (res) {
        var html = template('catagoryListTpl', {
            data: res
        });
        $('tbody').html(html);
    }
})

$('#addCategory').on('submit', function () {
    var data = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/categories',
        data,
        success: function () {
            location.reload();
        }
    })
    return false;
})

$('#categoryBox').on('click', '.edit', function () {
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'get',
        url: '/categories/' + id,
        success: function (res) {
            var html = template('modifyCategoryTpl', res);
            $('#modifyBox').html(html);
        }
    })
})

$('#modifyBox').on('submit', '#modifyCategory', function () {
    var id = $(this).attr('data-id');
    console.log(id) //id没有传进来
    var formData = $(this).serialize();
    $.ajax({
        type: 'put',
        url: '/categories/' + id,
        data: formData,
        success: function () {
            location.reload();
        }
    })
    return false;
})