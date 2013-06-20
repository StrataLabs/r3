$(document).ready(function(){
  $("a#check_availability_link").live('click', function(){
    var title_id = $(this).attr('title_id');
    alert("#book_availability_details_" + title_id);
    $("#book_availability_details_" + title_id).toggle();
  });
  
  $(".check_availability_div a").live('click', function(){
    var title_id = $(this).attr('title_id');
    var details = '#check_availability_details_' + title_id;
    $(details).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
    $.ajax({
      url: '/title_availability',
      data: {title_id:title_id},
      success: function(data){
        $(details).html(data).show();
        return false;
      },
      error: function(data){
        $(details).html('Sign in to Check Availability').show();
      }
    });
  });
  $('a[href=#top]').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
  });

  $('#help_desk a').click(function() {
    scroll_to_id($(this).attr('href'));
  });
  var param_id = get_id();
  if(param_id) {     
    scroll_to_id(param_id)    
  }
  $(function () {
    $('#backtotop').fadeOut();
    $(window).scroll(function () {
      if($(window).scrollTop() + $(window).height() == $(document).height()) {
       $('#backtotop').css("margin-bottom" , $(window).height() / 2);
      }
      else {
        $('#backtotop').css("margin-bottom" , '50px');
      }
      if ($(this).scrollTop() > 100) {
        $('#backtotop').fadeIn();
      } else {
        $('#backtotop').fadeOut();
      }
    });
  });
});

var loadRecommendedTitles = function(memberid){
  if(memberid) {
    $.ajax({
      url: '/home_recommended_titles/' + memberid,
      success: function(data){
        $("#home_recommended_titles").html(data);
      }
    });
  }
};

function scroll_to_id(id) {
  $('html,body').animate({scrollTop: $(id).offset().top-100},'slow');
  $(id).effect('highlight', {}, 3000);
}

function get_id()
{
  var loc = window.location.href;
  if(loc.indexOf("_help") != -1) {  
    return ('#'+loc.split('#')[1]);  
  }
  return false;
}

