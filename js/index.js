$(function(){
  //mouseover后获取焦点，并全选文本框内容
  $("#please_text").mouseover(function(){
    // $("#please_text").val("aaaa")
    $("#please_text").focus()
    $("#please_text").select()
    //如果input的value值为默认值则清空
    if ($("#please_text").val()=="说点什么？"){
      $("#please_text").val("") 
    }
  })

  //mouseleave后失去焦点
  $("#please_text").mouseleave(function(){
    $("#please_text").blur()
    if ($("#please_text").val()=="") {
      $("#please_text").val("说点什么？")
    }
  })

  $(".text-button").each(function(){
    //点击发射按钮
    $("#send").click(function(){
      //创建弹幕飞过的区域
      $(".show-box").append("<div class='danmu'></div>")
      //将文本框输入内容追加到弹幕框中
      $(".danmu:last-child").append($("#please_text").val())
    })
  })
  
  //点击清屏按钮
  $("#clean").click(function(){
    $(".danmu").html("")
  })
});


