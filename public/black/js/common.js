$(function(){



    // 点击小菜单隐藏左侧
$(".top_menu").on("click",function() {
    console.log(1111);
$(".top_nav").toggleClass('now');
$('.lt_sidebar').toggleClass('now');    

})

// 二级分类
$('.small_categroy').prev().on("click",function(){
$(this).next().slideToggle();
})

$(".top_logout").on("click",function(){
    $("#logoutModal").modal("show");
})



$(".btn_logout").on("click",function() {
    $.ajax({
        type:'get',
        url:"/employee/employeeLogout",
        success:function (data) {
            if(data.success){   
                window.location.href = "logoin.html";
              }
        }
    })



})


})