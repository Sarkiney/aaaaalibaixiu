$('#userForm').on('submit', function () {
    var formData = $(this).serialize();
    $.ajax({
        type: 'post',
        url: '/users',
        data: formData,
        success: function () {
            location.reload();
        },
        error: function () {
            alert('用户添加失败');
        }
    })
    return false;
})

$('#modifyBox').on('change', '#avatar', function () {
    var formData = new FormData();
    formData.append('avatar', this.files[0]);
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: function (res) {
            $('#preview').attr('src', res[0].avatar);
            $('#hiddenAvatar').val(res[0].avatar);
        }
    })
})

$('#userBox').on('click', '.edit', function () {
    var id = $(this).attr('data-id')
    $.ajax({
        type: 'get',
        url: '/users/' + id,
        success: function (res) {
            var html = template('modifyTpl', res);
            $('#modifyBox').html(html);
        }
    })
})

$('#modifyBox').on('submit', '#modifyForm', function () {
    var data = $(this).serialize();
    var id = $(this).attr('data-id');
    $.ajax({
        type: 'put',
        url: '/users/' + id,
        data,
        success: function () {
            location.reload();
        },
        error: function (res) {
            alert(res.responseText.message);
        }
    })
    return false;
})

$('#userBox').on('click', '.delete', function () {
    var isConfirm = confirm('真删了这个傻蛋吗');
    if (isConfirm) {
        var id = $(this).attr('data-id')
        $.ajax({
            type: 'delete',
            url: '/users/' + id,
            success: function () {
                location.reload();
            }
        })
    }
})

$('#seleteAll').on('change', function () {
    var bool = $(this).prop('checked');
    $('#userBox input[type="checkbox"]').prop('checked', bool);
    if (bool == true) {
        $('#deleteAll').show();
    } else {
        $('#deleteAll').hide();
    }
})
$('#userBox').on('change', 'input[type="checkbox"]', function () {
    if ($('#userBox input:checked').length >= 1) {
        $('#deleteAll').show();
    } else {
        $('#deleteAll').hide();
    }
})
$('#deleteAll').on('click', function () {
    var str = '';
    $('#userBox input:checked').each(function (index, element) {
        var id = $(element).attr('data-id');
        str += '-' + id;
    })
    str = str.substr(1);
    $.ajax({
        type: 'delete',
        url: '/users/' + str,
        success: function () {
            location.reload();
        }
    })
})