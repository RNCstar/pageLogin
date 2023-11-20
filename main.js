$(document).ready(function () {
  $(".page_login").hide();
  $(".rigester_li").addClass("active");
  //   1)
  $(".Login_li").click(() => {
    $(".Login_li").addClass("active");
    $(".rigester_li").removeClass("active");
    $(".page__register").hide(400);
    $(".page_login").show(800);
  });
  //   2)
  $(".rigester_li").click(function () {
    $(this).addClass("active");
    $(".Login_li").removeClass("active");
    $(".page_login").hide(400);
    $(".page__register").show(800);
  });
});
