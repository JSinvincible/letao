$(function () {

    //使用表单校验插件
    $("#form").bootstrapValidator({
        //1. 指定不校验的类型，默认为[':disabled', ':hidden', ':not(:visible)'],可以不设置
        // excluded: [':disabled', ':hidden', ':not(:visible)'],

        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },

        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    callback: {
                        message: '用户名错误'
                    }
                    //长度校验

                    //正则校验
                    //   regexp: {
                    //     regexp: /^[a-zA-Z0-9_\.]+$/,
                    //     message: '用户名由数字字母下划线和.组成'
                    //   }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '用户密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '用户名长度必须在6到30之间'
                    },
                    callback: {
                        message: '密码错误'
                    }
                }
            }
        }
    });
    var validator = $("#form").data("bootstrapValidator");

    $("#form").on("success.form.bv", function (e) {
        e.preventDefault();
        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $("#form").serialize(),
            success: function (data) {
                if (data.success) {
                    location.href = "index.html"
                }
                if (data.error == 1000) {
                    validator.updateStatus("username", "INVALID", "callback");
                }
                if (data.error === 1001) {
                    validator.updateStatus("password", "INVALID", "callback");
                }
            }

        })
    });


    $(".lt_reset").on("click",function(){
        validator.resetForm();
    })

})