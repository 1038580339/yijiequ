/**
 * Created by REN on 2016/10/12.
 */

// (function () {
//     if (sessionStorage.login != "true") {
//         window.stop();
//         top.location = "index.html";
//     }
// })();


function postData(url,dataObj,callback) {
    $.ajax({
        url:url,
        type:'POST',
        dataType:'json',
        contentType:"application/json",
        data:JSON.stringify(dataObj),
        success:function (data) {
            callback && callback(data);
        },
        error:function (err) {
            alert("连接失败，请重试！");
            console.warn(err);
        }
    })
}

function requestData(url, callback) {
    $.ajax({
        url:url,
        type:'POST',
        dataType:'json',
        timeout:5000,
        contentType:"application/json",
        success:function (data) {
            callback && callback(data);
        },
        error:function (err) {
            alert("加载失败，请重试！");
            console.warn(err);
        }
    })
}

function addBlock(data) {
    var table = $("#list-table");
    $("#none").remove();

    for (var i = 0, j = data.length; i < j; i++) {

        var title = data[i]["title"], sortnumber = data[i]["sortnumber"], url = data[i]["url"], id = data[i]["id"];

        table.append($("<tr></tr>")
            .append($("<td align='center' style='background-color: rgb(255, 255, 255);'></td>").append($("<input  type='checkbox' name='cb'/>").val(id)))
            .append($("<td align='center' style='background-color: rgb(255, 255, 255);'></td>").text(title))
            .append($("<td align='center' style='background-color: rgb(255, 255, 255);'></td>").append($("<a href='#'></a>").text(url)))
            .append($("<td align='center' style='background-color: rgb(255, 255, 255);'></td>").text(sortnumber)))
    }
    table.append($("<tr></tr>")
        .append($("<td align='center' style='background-color: rgb(255, 255, 255);'><span id='getAll' style='cursor: pointer'>全选</span></td>"))
        .append($("<td ></td>"))
        .append($("<td ></td>"))
        .append($("<td align='center' style='background-color: rgb(255, 255, 255);'></td>").append($("<input type='button' id='btndel' value='删除'/>")))
    )

}

function addGetAllListener(url) {
    var getAll = $("#getAll");
    var btndel = $("#btndel");
    var checkBox = $("input:checkbox");
    getAll.on("click",function () {
        for(var i=0,j=checkBox.length;i<j;i++) {
            checkBox[i].checked = true;
        }
    });
    btndel.on("click",function () {
        var checked,ids = "";
        if ($("input:checked").length == 0) {
            return;
        }
        checked = $("input:checked");
        for (var i=0,j=checked.length;i<j;i++) {
            ids = ids + checked[i].value +",";
        }
        postData(
            url,
            {id:ids.slice(0,-1)},
            function (data) {
                if (data.result == 0) {
                    alert("删除成功！");
                    location.href = location.href;
                }
            }
        )
    })
}

