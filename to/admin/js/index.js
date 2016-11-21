/**
 * Created by REN on 2016/10/14.
 */

var nu;
function setCheckNum() {
    var str = "";
    for (var i = 0; i < 4; i++) {
        str += Math.floor(Math.random() * 10);
    }
    nu = str;
    $("#checkCode").text(str);
}

setCheckNum();

$("#checkCode").on("click", function () {
    setCheckNum();
});

$(".button").on("click", function (e) {
    e.preventDefault();

    var id = $("#username").val();
    var pw = $("#password").val();
    var num = $("#verify").val();

    if (!id) {
        alert("���������Ա������");
        return;
    }
    if (!pw) {
        alert("���������Ա���룡");
        return;
    }
    if (!num || num != nu) {
        alert("����д��ȷ����֤�룡");
        return;
    }

    var info = {
        'username': id,
        'password': pw
    };

    $.ajax({
        url:"http://nbptznjj.iego.cn/mybatisForSpring3/LoginUserController.do",
        type:'POST',
        dataType:'json',
        contentType:"application/json",
        data:JSON.stringify(info),
        success:function (data) {
            if (data.length !=0) {
                sessionStorage.login = "true";
                sessionStorage.username = data[0]["username"];
                sessionStorage.power = data[0]["power"];
                top.location = "admin_index.html";
            }else {
                alert("�û������벻ƥ�䣡");
                setCheckNum();
            }
        },
        error:function (err) {
            alert("����ʧ�ܣ������ԣ�");
            console.warn(err);
        }
    })

})