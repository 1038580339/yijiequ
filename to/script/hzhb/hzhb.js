
$(function () {

    var arr=["images/hzhb/1.png","images/hzhb/2.png","images/hzhb/3.jpg","images/hzhb/4.jpg","images/hzhb/5.jpg","images/hzhb/6.jpg","images/hzhb/7.jpg"
        ,"images/hzhb/8.jpg","images/hzhb/9.jpg","images/hzhb/10.jpg","images/hzhb/11.jpg","images/hzhb/12.jpg","images/hzhb/13.jpg","images/hzhb/14.jpg","images/hzhb/15.jpg"
        ,"images/hzhb/5.jpg","images/hzhb/17.jpg","images/hzhb/18.jpg","images/hzhb/19.jpg","images/hzhb/20.jpg","images/hzhb/21.jpg","images/hzhb/22.jpg","images/hzhb/23.jpg"
        ,"images/hzhb/24.jpg","images/hzhb/25.jpg","images/hzhb/18.jpg","images/hzhb/11.jpg"];
    var arr2=["images/hzhb/5.jpg","images/hzhb/25.jpg","images/hzhb/18.jpg","images/hzhb/12.jpg","images/hzhb/7.jpg","images/hzhb/13.jpg","images/hzhb/6.jpg"]
    var arr3=["images/hzhb/2.png","images/hzhb/19.jpg","images/hzhb/24.jpg","images/hzhb/6.jpg","images/hzhb/4.jpg","images/hzhb/15.jpg","images/hzhb/20.jpg"]
    var arr4=["images/hzhb/6.jpg","images/hzhb/19.jpg","images/hzhb/10.jpg","images/hzhb/13.jpg","images/hzhb/17.jpg"]

    function creatDiv(arr) {
        var len = arr.length<25?arr.length:25;
            for(var  i=0;i<len;i++){
                $(".box").append("<a href='hzhb2.html' class='sonDiv'></a>");
                $(".sonDiv").eq(i).append("<img class='image'/>");
                $(".image").eq(i).attr("src",arr[i])
            }
    }
    creatDiv(arr);

    $(".data1").click(function () {
        $(".sonDiv").remove();
        for(var  i=0;i<arr.length;i++){
            $(".box").append("<a href='hzhb2.html' class='sonDiv'></a>");
            $(".sonDiv").eq(i).append("<img class='image'/>");
            $(".image").eq(i).attr("src",arr[i])
        }
        $(this).html("没有数据了");
        $(this).css("backgroundColor","white")
    });
    $(".data2").click(function () {
        $(".sonDiv").remove();
        for(var  i=0;i<arr2.length;i++){
            $(".box").append("<a href='hzhb2.html' class='sonDiv'></a>");
            $(".sonDiv").eq(i).append("<img class='image'/>");
            $(".image").eq(i).attr("src",arr2[i])
        }
        $(this).html("没有数据了");
        $(this).css("backgroundColor","white")
    });
    $(".data3").click(function () {
        $(".sonDiv").remove();
        for(var  i=0;i<arr3.length;i++){
            $(".box").append("<a href='hzhb2.html' class='sonDiv'></a>");
            $(".sonDiv").eq(i).append("<img class='image'/>");
            $(".image").eq(i).attr("src",arr3[i])
        }
        $(this).html("没有数据了");
        $(this).css("backgroundColor","white")
    });

    $(".data4").click(function () {
        $(".sonDiv").remove();
        for(var  i=0;i<arr4.length;i++){
            $(".box").append("<a href='hzhb2.html' class='sonDiv'></a>");
            $(".sonDiv").eq(i).append("<img class='image'/>");
            $(".image").eq(i).attr("src",arr4[i])
        }
        $(this).html("没有数据了");
        $(this).css("backgroundColor","white")
    });


    $(".HeZuoFen>a").click(function () {
        $(".data").hide();
        $($(".data")[$(this).index()]).show();
    });


    $(".title1").click(function () {
        $(".sonDiv").remove();
        creatDiv(arr);
    });

    $(".title2").click(function () {
        $(".sonDiv").remove();
        creatDiv(arr2);

    });
    $(".title3").click(function () {
        $(".sonDiv").remove();
        creatDiv(arr3);
    });
    $(".title4").click(function () {
        $(".sonDiv").remove();
        creatDiv(arr4);
    });


});


