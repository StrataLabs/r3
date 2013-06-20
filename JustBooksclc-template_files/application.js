// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
//jCapSlide image overlay plugin for jquery 
// tympanus.net/codrops/2009/11/23/jcapslide-a-jquery-image-caption-plugin/
// customised selectors **changed

$(document).ready(function() {
  if(microsite == 'false'){
    if(signin != ''){
      $(window).scroll(function() {
          if ($('body').height() <= ($(window).height()  + 256 + $(window).scrollTop())) {
            $('.with_banner').css('background-position' ,'0% -80px');
          }
          else{
           $('.with_banner').css('background-position' ,'0% 120px'); 
          }
      });
      $('.clickable_banner').live('click', function(){
        window.open('http://kartikkaruturi.com/','_blank');
        // window.location.href = 'http://kartikkaruturi.com/';
      });
      if($('body').height() > 700){
        $('.clickable_banner').show();
        if(window.location.href.indexOf("/how_it_works") > -1){
        $('.with_banner').css({background: 'url(http://cdn2.justbooksclc.com/kartik/k3.jpg) fixed no-repeat left 120px'});
        }
        else if(window.location.href.indexOf("/membership_plans") > -1){
          $('.with_banner').css({background: 'url(http://cdn2.justbooksclc.com/kartik/k5.jpg) fixed no-repeat left 120px'});
        }
        else if(window.location.href.indexOf("/accounts") > -1 || window.location.href.indexOf("/featured_analytics") > -1){
          $('.with_banner').css({background: 'url(http://cdn2.justbooksclc.com/kartik/k1.jpg) fixed no-repeat left 120px'});
          $('.clickable_banner').hide();
        }
        else{
          $('.with_banner').css({background: 'url(http://cdn2.justbooksclc.com/kartik/k1.jpg) fixed no-repeat left 120px'});
        }
      }
      else{
        $('.clickable_banner').hide();
      }
    }
    else{
      $('.clickable_banner').show();
      $('.clickable_banner').live('click', function(){
        var back_image = $('.with_banner').css('background-image');
        var patt=/\"|\'|\)/g;
        oakridge = back_image.split('/').pop().replace(patt,'');
        if(oakridge.indexOf('website_banner_148x930_PX') > -1){
          window.open('http://www.oakridge.in/yourstory/','_blank');
        }
        else{
          window.open('http://kartikkaruturi.com/','_blank');
        }
        // window.location.href = 'http://kartikkaruturi.com/';
      });
      url = $(location).attr('href');
      if(url == "http://justbooksclc.com/" || url == "http://www.justbooksclc.com/" || url == "www.justbooksclc.com/"){
        $('.with_banner').css({background: 'url(http://cdn2.justbooksclc.com/kartik/k1.jpg) fixed no-repeat left 120px'});
      }
      else{
        $('.with_banner').css({background: 'url(/images/website_banner_148x930_PX.jpg) no-repeat left 130px'});
      }
    }
  }
  else{
    $('.clickable_banner').hide();
  }
});
var Strata = Strata || {};
Strata.Webstore = Strata.Webstore || {};

// $('#home_featured_analytics_box').mouseover(function() {
//   $('#random_bundle').show();
// });

// $('#home_featured_analytics_box').mouseout(function() {
//   $('#random_bundle').hide();
// });
$(document).ready(function() {
  // is_ad_redirect_page = window.location.href.indexOf('ad_redirect')
  // var i = 10;
  // if(is_ad_redirect_page > 0) {
  //   setInterval(function () {
  //       $("#redirect_me").html("You will be redirected in " + i + " seconds");
  //       if(i == 2) {
  //           window.location = 'http://justbooksclc.com';
  //       }
  //       i--;
  //   }, 1000);
  // }
});


$('#advanced_button_image').click(function(){  
  $('.search_content').fadeToggle();
  return false;
});

$(".search-query-custom").bind("keyup input paste", function() {
    $('.adv_search_text').val($(this).val());
});

$('.close_advanced_search').click(function(){  
  $('.search_content').slideToggle();
  return false;
});

$("#change_card_dialog").click(function()
{
  $(".member_card_dialog").dialog( { show: "slide"  , hide: "explode"} );
  $(".member_card_dialog").dialog( { title: "Select your membercard" } );
  var myDialogX = ("#change_card_dialog").position().left - ("#change_card_dialog").outerWidth();
  var myDialogY = ("#change_card_dialog").position().top - ( $(document).scrollTop() + $('.ui-dialog').outerHeight() );
  alert($(this))
  $(".member_card_dialog").dialog
        (   'option', 'position' , [myDialogX, myDialogY]
        );
});

$(".member_card_dialog a").live('click', function(){
  $('.member_card').html('Changing membercard. Please wait..').show();
  $( ".member_card_dialog" ).dialog("close");
});

$("#rent_now_id").live('click',function(){
  $('.loading_rental').show();
});

$("#btn-rent-now").live('click', function(){
  $("#my-modal").modal('show');
  $(".modal-rec-body").html("<h3>Loading. Please wait... </h3>");
});

$(".rentals_cart a").live('click', function(){
  $("#my-modal").modal('show');
  $(".modal-rec-body").html("<h3>Loading. Please wait... </h3>");
});

$(function ()
{
  if (($("#slideshow > div").length) > 1)
  {
    $("#slideshow > div:gt(0)").hide();
    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    },  5000);
  }
});

(function($) {
  $.fn.capslide = function(options) {
    var opts = $.extend({}, $.fn.capslide.defaults, options);
    return this.each(function() {
      $this = $(this);
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      
      if(!o.showcaption)  $this.find('.ic_caption').css('display','none');
      else $this.find('.ic_text').css('display','none');
        
      var _img = $(".jbconnect a .ic_img"); //changed
      var w = _img.width();
      var h = _img.height();
      $('.ic_caption',$this).css({'color':o.caption_color,'background-color':o.caption_bgcolor,'bottom':'0px','width':w});
      $('.overlay',$this).css('background-color',o.overlay_bgcolor);
      $this.css({'width':w , 'height':h, 'border':o.border});
      $this.hover(
        function () {
          if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
          $('.overlay',$(this)).show();
          else
          $('.overlay',$(this)).fadeIn();
          if(!o.showcaption)
            $(this).find('.ic_caption').slideDown(500);
          else
            $('.ic_text',$(this)).slideDown(500); 
        },
        function () {
          if((navigator.appVersion).indexOf('MSIE 7.0') > 0)
          $('.overlay',$(this)).hide();
          else
          $('.overlay',$(this)).fadeOut();
          if(!o.showcaption)
            $(this).find('.ic_caption').slideUp(200);
          else
            $('.ic_text',$(this)).slideUp(200);
        }
      );
    });
  };
  $.fn.capslide.defaults = {
    caption_color : 'white',
    caption_bgcolor : 'black',
    overlay_bgcolor : 'blue',
    border      : '1px solid #fff',
    showcaption     : true
  };
})(jQuery);

//= require gmaps4rails/googlemaps.js 

jQuery.fn.extend({
  /**
   * Returns get parameters.
   *
   * If the desired param does not exist, null will be returned
   *
   * To get the document params:
   * @example value = $(document).getUrlParam("paramName");
   *
   * To get the params of a html-attribut (uses src attribute)
   * @example value = $('#imgLink').getUrlParam("paramName");
   */
  getUrlParam: function (strParamName) {
    strParamName = escape(unescape(strParamName));

    var returnVal = new Array();
    var qString = null;

    if ($(this).attr("nodeName") == "#document") {
      //document-handler
      if (window.location.search.search(strParamName) > -1) {
        qString = window.location.search.substr(1, window.location.search.length).split("&");
      }
    } else if ($(this).attr("src") != "undefined") {
      var strHref = $(this).attr("src")
      if (strHref.indexOf("?") > -1) {
        var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
        qString = strQueryString.split("&");
      }
    } else if ($(this).attr("href") != "undefined") {
      var strHref = $(this).attr("href")
      if (strHref.indexOf("?") > -1) {
        var strQueryString = strHref.substr(strHref.indexOf("?") + 1);
        qString = strQueryString.split("&");
      }
    } else {
      return null;
    }

    if (qString == null) return null;

    for (var i = 0; i < qString.length; i++) {
      if (escape(unescape(qString[i].split("=")[0])) == strParamName) {
        returnVal.push(qString[i].split("=")[1]);
      }
    }

    if (returnVal.length == 0) return null;
    else if (returnVal.length == 1) return returnVal[0];
    else return returnVal;
  }
});

var clientIncludeWithPastLoadAction = function(targetLinkTag, postLoadAction) {
  $(targetLinkTag).each(function(index, element){
    var url = $(element).attr('href');
    var parent = $(element).parent('div');
    $.ajax({
      url: url,
      success: function(data){
        $(parent).html(data);
        if(postLoadAction) postLoadAction();
      },
      error: function(data){
        $(parent).html('<span>Error in loading data</span>');
      }
    });
  });
};

function extractIdFromRestUrl(url, parent){
  var pattern = new RegExp('/' + parent + '/' + '(\\d+)', 'i');
  var r = url.match(pattern);
  if(r && r.length >= 2){
    return r[1];
  }else{
    return null;
  }
}

var prepareModalWindow = function(modalOpenerLinkSelector){
  var $modal = $('#modal'),
      $modal_close = $modal.find('.close'),
      $modal_container = $('#modal-container');

  // This bit can be confusing. Since Rails.js sends an accept header asking for
  // javascript, but we want it to return HTML, we need to override this instead.
  $(modalOpenerLinkSelector).live('ajax:beforeSend', function(e, xhr, settings){
    xhr.setRequestHeader('accept', '*/*;q=0.5, text/html, ' + settings.accepts.html);
  });

  // Handle modal links with the data-remote attribute
  $(modalOpenerLinkSelector).live('ajax:success', function(xhr, data, status){
    $modal
      .html(data)
      .prepend($modal_close)
      .css('top', $(window).scrollTop() + 40)
      .show();
    $modal_container.show();
  });

  // Hide close button click
  $('.close', '#modal').live('click', function(){
    $modal_container.hide();
    $modal.hide();
    return false;
  });
};

$(document).ready(function() {
    prepareModalWindow('a#membership_modal[data-remote]');
    $(".tooltip").tooltip({
        track: true,
        delay: 0,
        showURL: false,
        opacity: 1,
        fixPNG: true,
        showBody: " - ",
        extraClass: "pretty",
        top: -15,
        left: 5
    });

    $('#book_availability .close').live('click', function(){
      $('#book_availability').hide();
    });

    $("[id^='jbconnect']").capslide({
      caption_color : '#222',
      caption_bgcolor : '#dedede',
      overlay_bgcolor : 'blue',
      border      : '2px solid #CCC',
      showcaption     : true
    });

    $('.jbconnect_link').live('click', function(){
      var url = $(this).attr('href');
      var w = $(window).width() - 200;
      newwindow=window.open(url,'name','top=80,left=80,height=600,width='+w);
      if (window.focus) {newwindow.focus()}
      return false;
    });
});

$('#bookshelf_currently_reading').live('click', function(event){
    event.preventDefault();
    var card_no = $(this).attr('card_no');
    var user_id = $(this).attr('user_id');
    var onclick_current = $(this).attr('onclick_current');
    if (onclick_current == "true")  {
      $('#booksathome').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
        $.get('/user_profile/currently_reading?current_member_card_no='+card_no+'&user_id='+user_id, function(data){
        $('#booksathome').html(data).show(400);
        $('#bookshelf_currently_reading').attr('onclick_current', "false");
      });

    }
    return false;
})

$('#books_in_order').live('click', function(event){
    event.preventDefault();
    // alert("hi");
    var card_no = $(this).attr('card_no');
    var user_id = $(this).attr('user_id');
    var onclick_in_order = $(this).attr('onclick_in_order');
    if (onclick_in_order == "true") {
      $('#booksinprocess').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
      $.get('/user_profile/booksinprocess?current_member_card_no='+card_no+'&user_id='+user_id, function(data){
        $('#booksinprocess').html(data).show(400);
        $('#books_in_order').attr('onclick_in_order', "false");
      });
    }
    return false;
})

$('#wish_list_div').live('click', function(event){
    event.preventDefault();
    var card_no = $(this).attr('card_no');
    var user_id = $(this).attr('user_id');
    var onclick_wish_list = $(this).attr('onclick_wish_list');
    if (onclick_wish_list == "true")  {
      $('#booksinqueue').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
      $.get('/user_profile/booksinqueue?current_member_card_no='+card_no+'&user_id='+user_id, function(data){
        $('#booksinqueue').html(data).show(400);
        $('#wish_list_div').attr('onclick_wish_list', "false");
      });
    }
    return false;
})

$('.check_availability').live('click', function(event){
    event.preventDefault();
    var title_id = $(this).attr('title_id');
    var user_id = $(this).attr('user_id');
    var div_id = '#availability_div_' + title_id;
    var onclick_availability = $(this).attr('onclick_availability');
    if (onclick_availability == "true")  {
      $(div_id).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
      $.get('/title_availability?title_id='+title_id+'&user_id='+user_id, function(data){
        $(div_id).html(data).show(400);
        $('#check_availability').attr('onclick_availability', "false");
      });
    }
    return false;
})


$("#register_tooltip").live('hover', function(){
  $("#register_tooltip_data").toggle();
});

$("#user_submit").live('click',function(){
  $('.loading').show();
})

$("#top-search-form , .advanced_search_form").live('submit', function(){
  $('.top-search-loading').show();
});

$("#delivery_order_form").live('submit', function(){
  $('.loading_proceed').show();
});



// Wishlist Ajax request starts here 

$(".rental_q a").live('click', function(){
  Strata.Webstore.showWishList($(this).attr('membercard') , $(this).attr('jbtitle'));
  return false;
});

$(".rental_dialog a").live('click', function(){
  Strata.Webstore.showWishList($(this).attr('membercard') , $(this).attr('jbtitle'));
  $( ".rental_dialog" ).dialog("close");
  return false;
});

$(".add_to_wishlist_div a").live('click', function(event){
  var title_id= $(this).attr('jbtitle');
  var membercard = $(this).attr('membercard')
  var wishlist = '#wishlist_'+title_id;
  $(wishlist).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
  $.get('/add_to_queue?'+'membercard='+membercard+'&title_id='+title_id,
    function(data){
         $(wishlist).html(data).show();
  });
  event.preventDefault();
});

$("#btn-add-to-queue-response").live('click', function(){
  Strata.Webstore.showWishList($(this).attr('membercard') , $(this).attr('jbtitle'));
  return false;
});


$(".move_to_wishlist a").live('click', function(event){
  var title_id= $(this).attr('jbtitle');
  var membercard = $(this).attr('membercard')
  var wishlist = '#move_to_wishlist_'+title_id;
  $(wishlist).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
  $.get('/add_to_queue?'+'membercard='+membercard+'&title_id='+title_id,
    function(data){
         $(wishlist).html(data).show();
  });
  event.preventDefault();
});


Strata.Webstore.showWishList = function (membercard,title_id) {
  $('.wishlist').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
  $.get('/add_to_queue?'+'membercard='+membercard+'&title_id='+title_id,
    function(data){
         $('.wishlist').html(data).show();
  });
}

// Wishlist Ajax request ends here

$("#accounts_member_cards a").live('click', function(){
  $('.accounts-member-cards-loading').show();
});

// hover popup utility starts
// input : parent_id, target_id, data
function hover_popup(tooltip_id, id, data){
  $(tooltip_id).mouseenter(function(){
    $(id).html(data);
    $(id).dialog({ autoOpen: false });
    $(id).dialog({
      open: function(){
        $(this).parents(".ui-dialog:first").find(".ui-widget-header")
          .removeClass("ui-widget-header");
      }
    });
    $(id).dialog('open');    
  }).mouseleave(function() {
    $(id).dialog('close');
  });  
}
// hover popup utility ends

// accounts links loading starts
$(document).ready(function() {
$(".delete_post").live('click', function(){
  var check = $(this).attr('clicked');
  if( check == "false")
  {
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
    $(".delete_post").removeAttr("href");
    $(".delete_post").removeAttr("data-method");
    $(".delete_post").removeAttr("data-remote");
    $(".delete_post").attr('clicked',"true"); 
  }
  else
  {
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('Request In Process.. <br>  Try Later').show();

  }
  });
 
  
 $('.delete_post').bind('ajax:error', function() {  
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('Try Again').show();
  });

 $('.delete_post').bind("ajax:success", function(data, textStatus, jqXHR) {  
       
  });  

 $(".delete_post_wish").live('click', function(){
    var check = $(this).attr('clicked');
    if( check == "false")
    {
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
    $(".delete_post_wish").removeAttr("href");
    $(".delete_post_wish").removeAttr("data-method");
    $(".delete_post_wish").removeAttr("data-remote");
    $(".delete_post_wish").attr('clicked',"true"); 
  }

  else
  {
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('Request In Process..<br>  Try Later').show();

  }
  });
 
  

 $('.delete_post_wish').bind('ajax:error', function() {  
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('Try Again').show();
  });

 $('.delete_post_wish').bind("ajax:success", function(data, textStatus, jqXHR) {  
       
  });

  $(".track_order").live('click', function(event){
    var title_id = $(this).attr('title_id');
    var details = '#delete_details_' + title_id;
    $(details).html('<img src="/images/ajax-loading.gif" alt="loading ... "/>').show();
    var order_id = $(this).attr('order_id')
    // alert($(this).attr('membercard'));
    // alert($(this).attr('order_id'));
    event.preventDefault();
    $.ajax({
      url: '/get_order_details',
      data: {membercard:$(this).attr('membercard'), order_id: order_id},
      success: function(data){
        $(details).hide();
        $("#tracking_details").html(data);
        $("#tracking_details").dialog({
            title: "Order Tracking - Order No : "+order_id,
            width: "800px",
            resizable: false,
            position: ["top", "center"],
            top: "100px",
            modal: true
        });
        return false;
      },
      error: function(data){
        $(details).html('Try Again Later').show();
      }
    });
    return false;
  });
 
  $('#payment_summary').click('ajax:before', function() {  
      $('#content-container').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>');
  });

  $('#memp_info').click('ajax:before', function() {  
      $('#content-container').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>');
  });
   
  $('#personal_information').click('ajax:before', function() {  
      $('#content-container').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>');
  });
  
  $('#change_password').click('ajax:before', function() {  
      $('#content-container').html('<img src="/images/ajax-loading.gif" alt="loading ... "/>');
  });  
});

$('#accounts_make_payment_link').live('click', function(){    
    $('#content-container').empty().append('<img src="/images/ajax-loading.gif" alt="loading ... "/>');
});  
// accounts links loading ends
$('#recommendations_search').live('submit', function(event) {
    event.preventDefault();
    var loading_msg = '<img src="images/ajax-loading.gif" alt="loading ... "/>';
    $('.titles_report_details').html(loading_msg);
    $.get('https://www.googleapis.com/books/v1/volumes?q=' +
        $('#query_text').val()+'&maxResults=10',
            function(response){
                var result = response.items
                var jsonObj = []; //declare array
                for (var i = 0; i < result.length; i++) {
                    if (result[i].volumeInfo.industryIdentifiers)
                    {
                      jsonObj.push({title: result[i].volumeInfo.title, isbn: result[i].volumeInfo.industryIdentifiers, author: result[i].volumeInfo.authors, publisher: result[i].volumeInfo.publisher});
                    }
                }
                $.ajax({
                    url: '/titleSearch?query_text='+$('#query_text').val()+'&member_plan_id='+$('#recommend_member_plan_id').val(),
                    type: 'POST',
                    dataType: 'html',
                    data:JSON.stringify(jsonObj),
                    contentType: 'application/json; charset=utf-8',
                    success: function (data) {
                         $('.titles_report_details').html(data);
                    }
                });
            }, "json");
  });

$(document).ready(function(){
  $('#category-popover-button').popover({
    placement: "bottom",
    title: 'Select a Category', 
    content: function(){
      return $('#category-popover').html();
    },
    trigger: 'manual'
  });

  $('#category-popover-button').live('click', function(){
    $('#category-popover-button').popover('toggle');
  });

  $('.reco-category-link').live('click', function(){
    $('#category-popover-button').popover('toggle');
    $(this).addClass('active');
  });

});
