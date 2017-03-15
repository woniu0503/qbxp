
    //头部菜单上移出现子菜单
    $(".daohang_li_parentmenu").hover(
      function(){
       $(this).find(".daohang_li_menu").slideDown();
       $(this).addClass("daohang_li_parentmenuhover");
     },
     function(){
       $(this).find(".daohang_li_menu").slideUp(100);
       $(this).removeClass("daohang_li_parentmenuhover");
     });

 

  function clickevent(){
    alert("文档正在更新中...本月上新！")
  };
  
  function afterLoadFooter(){
    var bodyHeight = $('body').height();
    var winHeight = $(window).height();

    if ((winHeight - bodyHeight) > 0) {
        $('body').height(winHeight);
        $('#footer').addClass('f_position')
    }
  };
