var $ = jQuery.noConflict();
(function ($) {


  $(".iismodal-footer").html('<a class="iiyears button iisyearsdyn" href="javascript:void(0)" target="_self">Select Vehicle</a>');


  var checkmodelex = getCookie('mymodel');

  if (checkmodelex.length > 2) {

    $(".iismodal-footer").append('<a class="iiyears button" href="javascript:void(0)" target="_self">' + getCookie('myyear') + '</a>');
    $(".iismodal-footer").append('<a class="yearbuttonv2 button" href="javascript:void(0)" title = "' + getCookie('myyear') + '" target="_self">' + formatPartURL(getCookie('mymake')) + '</a>');
    $(".iismodal-footer").append('<a class="makebuttonv2 button" href="javascript:void(0)" title = "' + getCookie('mymake') + '" target="_self">' + formatPartURL(getCookie('mymodel')) + '</a>');


  }


  $('#iisimagestocksearchbtn').click(function () {
    var frameSrc = "//images.u-r-g.com/images/yard/" + urgid + "/stock/";
    var b = $('#iisimagestocksearch').val();


    $(".iismodal-body").html('<iframe src="" id="stockframe" style="zoom:0.60" width="99.6%" height="750" frameborder="0"></iframe>');

    var frameSrcadd = frameSrc + b;
    $('#stockframe').attr("src", frameSrcadd);
    // $('.stocktitle').html('Images for Stock: '+'<b>'+$('#stockno').val()+'</b>');


    var top = $(this).offset().top;
    console.log(top);
    //$("#iismodal-name").css({top: '50%', position:'absolute'});

    $("#iismodal-name").css("position", "fixed");
    $("#iismodal-name").css("top", ($(window).height() / 2) - ($("#iismodal-name").outerHeight() / 2));

    $(".iismodal-header h6").html('<b>Stock Number: ' + b + '</b>');

    $(".iismodal-footer").html('');


    $(".iismodal").css({
      "display": "block"
    });


  });


  function formatPartURL(u) {
    var xdh = u;

    var pnamer = xdh.toString().replace(/_/gi, " ");

    pnamer = pnamer.replace(/\+/gi, ",");
    pnamer = pnamer.replace(/\./gi, "/");
    pnamer = pnamer.replace(/~/gi, "-");
    pnamer = pnamer.replace(/and_/gi, "&");


    return pnamer;

  }


  var iishistory1 = getCookie('iishistory1');
  var iishistory2 = getCookie('iishistory2');
  var iishistory3 = getCookie('iishistory3');

  var iishistory1splitn = iishistory1.split(":", 1);
  var iishistory2splitn = iishistory2.split(":", 1);
  var iishistory3splitn = iishistory3.split(":", 1);
  var iishistory1splitu = iishistory1.split(":", 2);
  var iishistory2splitu = iishistory2.split(":", 2);
  var iishistory3splitu = iishistory3.split(":", 2);

  $(".breadcrumb").append("<div class='iislastsearches'>Last Searches</div>");
  $(".iislastsearches").append(iishistory1splitn);
  $(".iislastsearches").append(iishistory2splitn);
  $(".iislastsearches").append(iishistory3splitn);


  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  $(function () {


    $('#iislist').click(function (event) {
      event.preventDefault();
      $('.iishidehead').addClass('iishideheadx');
      $('.iisappfil').addClass('iisappfilgrid');
      $('.iisappfil').removeClass('iisappfillist');
    });
    $('#iisgrid').click(function (event) {
      event.preventDefault();
      $('.iisappfil').removeClass('iisappfilgrid');
      $('.iisitem').addClass('grid-group-item');
      $('.iisappfil').addClass('iisappfillist');
    });


    $(".iismodal-trigger").click(function (e) {
      partsearchwindowiis();
      //console.log(window.location.hostname);
      e.preventDefault();
      var dataModal = $(this).attr("iisdata-modal");
      $("#" + dataModal).css({
        "display": "block"
      });
      $(".iismodal").css({
        "display": "block"
      });


    });

    $(".iisclose-modal, .iismodal-sandbox").click(function () {
      $(".iisfitmentlabel").appendTo(".items");

      $(".iisquesgroupcont").appendTo(".items");


      $(".iismodal").css({
        "display": "none"
      });
    });


    $(".iismodalform-trigger").click(function (e) {

      e.preventDefault();
      var dataModal = $(this).attr("iisdataform-modal");
      $("#" + dataModal).css({
        "display": "block"
      });
      $(".iismodalform").css({
        "display": "block"
      });


    });

    $(".iiscloseform-modal, .iismodalform-sandbox").click(function () {
      $(".iismodalform").css({
        "display": "none"
      });
    });


    $('.cartexx').submit(function (event) {
      // Stop the browser from submitting the form.
      event.preventDefault();

      var formData = $('.carte').serialize();
      $.ajax({
          type: 'POST',
          url: $('.carte').attr('action'),
          data: formData
        }).done(function () {

          //document.location.reload(true);


          alert("success");

        })
        .fail(function () {
          alert("error");
        })
        .always(function () {
          alert("complete");
        });

      // TODO
    });


    /*
		
		$("#invcont").prepend('<div class="addthis_inline_share_toolbox"></div>');
		var iissharethis = document.createElement('script');
iissharethis.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5376578f0a15d8c9';
document.getElementsByTagName("head")[0].appendChild(iissharethis);
		*/


    $('#breadcrumbs-onef').prepend("<li class=\"iishome\"><a href=\"javascript:void(0);\" class=\"iishomemenu\"><span class=\"iishomeicon\"></span>Menu</a></li>");
    $('.pbiis').append("<a href=\"//www.autopartsearch.com/\" class=\"pbiisx pull-right\" rel=\"nofollow\"><img src='//www.inventoryinsite.com/iisassets/images/auto-part-search-powered-by-logo-small.jpg' width='200' height='21'/></a></div>");


    $('.orangebutton').click(function () {
      $(".iissmallloading").remove();
      var v = $(this).html();
      var newHTML = v + '<span class="iissmallloading"><img src="//www.inventoryinsite.com/images/loading_bar_small2.gif"/></span>';
      $(this).html(newHTML);
      $(".PartCat .iissmallloading").remove();
      $(".padtopten .iissmallloading").remove();
    });


    //$('.iismainmenu').hide(); //Hide children by default

    $('.iishomemenu').click(function () {
      event.preventDefault();
      $('.iismainmenu').slideToggle('slow');
    });

    if ($('#livetotal').length) {
      $('.iismainmenu').show();
    }


    //$('.wp_cart_checkout_button').click(function(){
    //event.preventDefault();
    //var ssdd = $('#shippingselect').find('option:selected').text();
    //$("#custom").val($("#custom").val()+'&delservice='+ssdd);
    //});

    // dialog


    var urlsplitiis = window.location.href.split("/");
    //var partsdir = urlsplitiis[3];
    var partsdir = iispartdir;


    if (document.cookie.indexOf('mymodel') === -1) {
      $('.idSearch').hide();
    }


    $('.iisappfil').each(function () {
      var ideiisclass = $(this).attr('title');
      //console.log(ideiisclass);
      var numItems = $("." + ideiisclass).length;
      console.log(numItems);
      if (numItems > 0) {
        // Dont select the checkboxes to start
        // $(".iisappfilcbx"+ideiisclass).attr('checked', 'checked'); 

      }

      $(".count" + ideiisclass).html(numItems);

      $(".count" + ideiisclass).closest(".iisquesgroup").addClass('iisoptionsort' + numItems);
      $(".count" + ideiisclass).closest(".iisquesgroup").attr('data-iisoptsort', numItems);

    });


    // console.log(numItems);


    if ($('.iisappfilcbx').hasClass('hollanderleft')) {

      $('.iisfitmentlabel').append("<div class='iis-col-md-6'><input type='checkbox' class='lefthollfilter iislrlabel' checked/> Driver Side (Left)</div>");
    }
    if ($('.iisappfilcbx').hasClass('hollanderright')) {

      $('.iisfitmentlabel').append("<div class='iis-col-md-6'><input type='checkbox' class='righthollfilter iislrlabel' checked/> Passenger Side (Right)</div>");
    }

    //  $('.iisfitmentlabel').append("<a href='javascript: void(0);' class='iissortapp iislrlabel iis-col-md-6'>Sort</a>");

    // $('.iisfitmentlabel').append("<a href='javascript: void(0);' class='iisappinstock iislrlabel iis-col-md-6'>In Stock</a>");


    $(document).on('click', '.iissortapp', function () {
      var itemsx = $('.iisquesgroup');
      itemsx.sort(function (a, b) {
        return +$(b).data('iisoptsort') - +$(a).data('iisoptsort');
      });

      itemsx.appendTo('.iisquesgroupcont');


    });

    $(document).on('click', '.iisappinstock', function () {


      var elem = $('.iisquesgroup');
      // loop through each o fthem to get the data-block value
      $(elem).each(function () {
        if ($(this).data('iisoptsort') === 0) {

          $(this).fadeOut();
        }
        // rest of code

      });
    });


    $(document).on('click', '.righthollfilter', function () {


      //$(".hollanderright:checkbox").attr('checked',true).change();

      //   $(".hollanderleftgroup").fadeOut();
      //$(".hollanderrightgroup").fadeIn(); 
      $(".loorR").removeClass('iisnsoptions');
      if ($(".lefthollfilter").prop('checked') === false && $(".righthollfilter").prop('checked') === false) {
        $(".lrclasstrl").fadeOut();
        $(".lrclasstrr").fadeOut();
      }

      if ($(".lefthollfilter").prop('checked') === true && $(".righthollfilter").prop('checked') === true) {
        $(".lrclasstrl").fadeIn();
        $(".lrclasstrr").fadeIn();
      }

      if ($(".lefthollfilter").prop('checked') === true && $(".righthollfilter").prop('checked') === false) {
        $(".lrclasstrl").fadeIn();
        $(".lrclasstrr").fadeOut();
      }
      if ($(".lefthollfilter").prop('checked') === false && $(".righthollfilter").prop('checked') === true) {
        $(".lrclasstrl").fadeOut();
        $(".lrclasstrr").fadeIn();
      }


      if ($(".righthollfilter").prop('checked') === true) {
        $(".hollanderrightgroup").fadeIn();
      } else {
        $(".hollanderrightgroup").fadeOut();
        $(".hollanderright").removeAttr("selected");
        $(".hollanderright").prop('checked', false);
      }


    });
    $(document).on('click', '.lefthollfilter', function () {


      //  $(".hollanderrightgroup").fadeOut(); 
      // $(".hollanderleftgroup").fadeIn();
      //$(".hollanderleft:checkbox").attr('checked',true).change();
      $(".loorL").removeClass('iisnsoptions');

      if ($(".lefthollfilter").prop('checked') === false && $(".righthollfilter").prop('checked') === false) {
        $(".lrclasstrl").fadeOut();
        $(".lrclasstrr").fadeOut();
      }
      if ($(".lefthollfilter").prop('checked') === true && $(".righthollfilter").prop('checked') === true) {
        $(".lrclasstrl").fadeIn();
        $(".lrclasstrr").fadeIn();
      }

      if ($(".lefthollfilter").prop('checked') === true && $(".righthollfilter").prop('checked') === false) {
        $(".lrclasstrl").fadeIn();
        $(".lrclasstrr").fadeOut();
      }
      if ($(".lefthollfilter").prop('checked') === false && $(".righthollfilter").prop('checked') === true) {
        $(".lrclasstrl").fadeOut();
        $(".lrclasstrr").fadeIn();
      }


      if ($(".lefthollfilter").prop('checked') === true) {
        $(".hollanderleftgroup").fadeIn();


      } else {
        $(".hollanderleftgroup").fadeOut();
        $(".hollanderleft").removeAttr("selected");
        $(".hollanderleft").prop('checked', false);

      }


    });


    //	$(".fitmentx").attr("size", 12);
    //$(".fitmentx").focus();

    $('.fitmentx').change(function () {


      var holltitle = $(this).find("option:selected").attr("title");
      // var holltitle = $(this).find("radio:selected").attr("title");

      //console.log(holltitle);

      $(".iisappfilcbx").attr('checked', false);


      //$("input:checkbox[title='"+holltitle+"']").attr('checked',true);
      $("input:radio[title='" + holltitle + "']").attr('checked', true);


      $(".op" + holltitle).attr('selected', 'selected');
      $(".op" + holltitle).prop('selected', true);

      $('.iisappfil').fadeOut('fast', function () {

        //console.log($(".iisappfil:visible").length);
        iisnopartsmatching();


      });
      var TotalnumItems = 0;


      // iisappfilcbx iisappfilcbx120-05613CL

      $('.iisappfilcbx:checked').each(function () {


        var ideiis = holltitle;
        var numItems = $("." + ideiis).length;
        TotalnumItems = 1;
        $("#count" + ideiis).html(numItems);


        $("." + ideiis).fadeIn('fast', function () {

          console.log($(".iisappfil:visible").length);
          iisnopartsmatching();


        });
        //console.log(ideiis);
      });


      if (TotalnumItems < 1) {
        //	$(".iisappfil").fadeIn();
        $(".iisappfil").fadeIn('fast', function () {
          //console.log($(".iisappfil:visible").length);
          iisnopartsmatching();
        });


      }


    });


    $(document).on('click', '.closeintmodal', function () {
      /////////copy back over to div from modal
      $(".iisfitmentlabel").appendTo(".items");

      $(".iisquesgroupcont").appendTo(".items");
      $(".iismodal").css({
        "display": "none"
      });
    });

    $('.iisappfilcbx').change(function (passthis) {

      ////////clode model if open

      $(".iismodal").css({
        "display": "none"
      });


      /////////copy back over to div from modal
      $(".iisfitmentlabel").appendTo(".items");

      $(".iisquesgroupcont").appendTo(".items");


      if (passthis.currentTarget.classList.contains("hollanderleft") === true) {

        $("#fitmentx option").addClass('iisnsoptions');
        $(".iisfitmentoptionlabel").removeClass('iisnsoptions');
        $(".loorL").removeClass('iisnsoptions');

      }
      if (passthis.currentTarget.classList.contains("hollanderleft") === false) {

        $("#fitmentx option").removeClass('iisnsoptions');
        $(".iisfitmentoptionlabel").addClass('iisnsoptions');
        $(".loorL").addClass('iisnsoptions');

      }


      if (passthis.currentTarget.classList.contains("hollanderright") === true) {

        $("#fitmentx option").addClass('iisnsoptions');
        $(".iisfitmentoptionlabel").removeClass('iisnsoptions');
        $(".loorR").removeClass('iisnsoptions');

      }

      if (passthis.currentTarget.classList.contains("hollanderright") === false) {

        $("#fitmentx option").removeClass('iisnsoptions');
        $(".iisfitmentoptionlabel").addClass('iisnsoptions');
        $(".loorR").addClass('iisnsoptions');

      }


      if ($("#fitmentx option:visible").length < 1) {
        // $("#fitmentx option").removeClass('iisnsoptions');
      }

      var ideiisxxsd = $(this).attr('title');

      if ($('.iisappfilcbx' + ideiisxxsd).prop('checked') === true) {
        $('.' + ideiisxxsd).fadeIn();
      }

      if ($('.iisappfilcbx' + ideiisxxsd).prop('checked') === false) {
        $('.' + ideiisxxsd).fadeOut();
      }


      //console.log(passthis);
      // var holltitle = $(this).attr('title');
      //console.log(holltitle);
      //$("#fitmentx option").prop("disabled", false); 

      //$("#fitmentx option").removeClass('iisnsoptions');
      // $("#fitmentx option").addClass('iisnsoptions');

      $("#fitmentx option").removeAttr("selected");
      $("#fitmentx option").prop("selected", false);
      $("#fitmentx option:selected").attr("selected", false);

      //$('.iisappfil').fadeOut();

      $('.iisappfil').fadeOut(0, function () {

        //console.log($(".iisappfil:visible").length);
        // iisnopartsmatching();   


      });


      var TotalnumItems = 0;
      $('.iisappfilcbx:checked').each(function () {

        //$("#fitmentx option").attr('disabled','disabled');


        var ideiis = $(this).attr('title');
        var numItems = $("." + ideiis).length;
        TotalnumItems = 1;
        $("#count" + ideiis).html(numItems);
        /////// add class for sorting
        // console.log(numItems);


        $("." + ideiis + " .op" + ideiis).attr('selected', 'selected');
        $("." + ideiis + " .op" + ideiis).prop('selected', true);
        $("." + ideiis + " .op" + ideiis).prop("disabled", false);

        $(".op" + ideiis).removeClass('iisnsoptions');


        if (numItems < 1) {
          // $(this).attr('checked',false);
          $(".op" + ideiis).addClass('iisnsoptions');


        }


        // $("."+ideiis).fadeIn();
        $("." + ideiis).fadeIn('fast', function () {

          //  console.log($(".iisappfil:visible").length);
          // iisnopartsmatching();   


        });


        //console.log(ideiis);
      });


      if (TotalnumItems < 1 && $(".lefthollfilter").prop('checked') === true) {
        //	$(".iisappfil").fadeIn();
        $(".lrclasstrl").fadeIn('fast', function () {
          //console.log($(".iisappfil:visible").length);
          iisnopartsmatching();
        });


      }


      if (TotalnumItems < 1 && $(".righthollfilter").prop('checked') === true) {
        //	$(".iisappfil").fadeIn();
        $(".lrclasstrr").fadeIn('fast', function () {
          //console.log($(".iisappfil:visible").length);
          iisnopartsmatching();
        });


      }


      iisnopartsmatching();

      /*										   
	if($('.iisappfilcbx').is(":checked"))  { 
        $("."+ideiis).show();
	}else{
        $("."+ideiis).hide();
}
*/

    });


    function iisnopartsmatching() {
      $(".iisnopartsmatching").hide();
      if ($(".iisappfil:visible").length > 0) {
        $(".iisnopartsmatching").hide();
      } else {
        $(".iisnopartsmatching").show();

      }
    }


    $(document).on('click', '.resetCats', function () {
      //$('.resetCats').click(function(){

      $('.PartCat').show();
      $('.PartCats').hide();
      $('.resetCatsli').hide();


    });


    $('.idBtnSearchx').prop('type', 'button');
    $('.idBtnSearchx').removeAttr("src");
    $('.idBtnSearchx').prop('value', 'Search');
    $('.idBtnSearchx').click(function () {
      var x = $(".idTxtSearchx").val();


      var url = '//' + window.location.hostname + '/' + partsdir + '/search/' + x;
      window.location = url;

    });

    $(document).ready(function () {


      $(".idTxtSearchx").autocomplete({
        source: '//' + window.location.hostname + '/getsearchresultsparts.php',
        minLength: 2,
        delay: 0
      }).keydown(function (e) {


        if (e.keyCode === 13) {
          var x = $(".idTxtSearchx").val();
          var found = $('.ui-autocomplete li').text().search($(x).val());
          if (found < 0) {
            var url = '//' + window.location.hostname + '/' + partsdir + '/search/' + x;
            window.location = url;
          }
        }


      });


    });


    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }


    if (window.location.href.indexOf("/?k=1") > -1 && $(".iisfitmentlabel")[0] && $(".iisdialogpopfitment")[0]) {

      //$(".iismodal-body").html(s);


      $(".iisclose-modal").hide();
      $(".iisappfilcbxlabelreq").hide();


      $(".iisfitmentlabel").appendTo(".iismodal-body");

      $(".iisquesgroupcont").appendTo(".iismodal-body");
      $(".iismodal-header h6").html('Select a Fitment');

      //$(".iismodal-body").load(t);
      //$(".iismodal-header h6").html(u);


      // $(".iismodal-footer").html('<a class="iiyears button iisyearsdyn" href="javascript:void(0)" target="_self">Select Vehicle</a>');


      //$(".iismodal-footer").append('<a class="iiyears button" href="javascript:void(0)" target="_self">'+getCookie('myyear')+'</a>');
      //$(".iismodal-footer").append('<a class="yearbuttonv2 button" href="javascript:void(0)" title = "'+getCookie('myyear')+'" target="_self">'+formatPartURL(getCookie('mymake'))+'</a>');
      $(".iismodal-footer").html('<a class="button closeintmodal" href="javascript:void(0)" target="_self">Pick Later, Show me Results Now</a>');


      $(".iismodal").css({
        "display": "block"
      });


    }


    if (window.location.href.indexOf("makes/?ps=1#tabs-4") > -1) {

      partsearchwindow();


    } else {
      //alert('guess not');
    }
    $('#breadcrumbs-onexxx a:first').click(function (e) {
      //console.log('yes');


      if (document.cookie.indexOf('mymodel') == -1) {
        $('#yearstab').dialog('open');
      } else {
        if (window.location.href.indexOf("makes/?ps=1#tabs-4") > -1) {
          //console.log('yes');
          partsearchwindow();

        } else {
          var url = '//' + window.location.hostname + '/' + partsdir + '/makes/?ps=1#tabs-4';
          window.location = url;
          //console.log('no');

        }
      }


      e.preventDefault();


    });


    $(document).on('keyup', '#filteriiscats', function () {
      $('.PartCats').hide();
      $('.PartCat').show();
      var value = $(this).val().toLowerCase();


      if ($(this).val().length > 2) {
        $(".PartCats").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
          console.log($(this).data("catclass"));
          $('.PartCat').hide();

        });

      }


      /*  
            
       // $('#filteriiscats').keyup(function () { 
            var rex = new RegExp($(this).val(), 'i'); 
            $('.PartCats').hide(); 
            $('.PartCats').filter(function () { 
                return rex.test($(this).text()); 
            }).show(); 
            */


    });


    function partsearchwindow() {

      $("#dialogcats").dialog({
        autoOpen: true,
        title: 'My Vehicle: ' + getCookie('myyear') + ' ' + getCookie('mymake') + ' ' + getCookie('mymodel') + '',
        modal: true,
        height: 'auto',
        position: {
          my: "top",
          at: "center",
          of: window
        },
        width: $(window).width() > 600 ? 600 : 'auto',
        dialogClass: 'metro',
        buttons: {
          'Change Vehicle': function () {
            $(this).dialog('close');
            $('#yearstab').dialog('open');
          },
          'Browse Vehicles': function () {

            $("#dialog").html("<div><img src='//www.inventoryinsite.com/iiscartimages/preload1.gif'/></div>");

            //Open the Modal Popup
            $('#dialog').dialog('open');


            var url = '//' + window.location.hostname + '/' + partsdir + '/makes';
            var myWindow = window.open(url, "_self");
          },

          'close': function () {
            $(this).dialog('close');
          }
        }

      });

    }


    function partsearchwindowiis() {


      $(".iismodal-body").html('Loading Categories');

      $(".iismodal-body").load('//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/searchparts.php?ver=' + iis_part_info_id);


      $(".iismodal").css({
        "display": "block"
      });


    }

    function iispromodel(s, t, u) {

      $(".iismodal-body").html(s);

      $( '.iismodal-body' ).load( t, function() {
          $('.iismodal-body .makefilt ul.menu.iismenu').append('<li class="iis-col-md-4 iis-col-sm-4 iis-col-xs-12 iismakebuttons iismake_VOLVO"><a href="javascript: void(0)" class="makebuttonv2 button iis-center-block">Other</a></li>');
        });
      
      
      $(".iismodal-header h6").html(u);


      $(".iismodal-footer").html('<a class="iiyears button iisyearsdyn" href="javascript:void(0)" target="_self">Select Vehicle</a>');


      $(".iismodal-footer").append('<a class="iiyears button" href="javascript:void(0)" target="_self">' + getCookie('myyear') + '</a>');
      $(".iismodal-footer").append('<a class="yearbuttonv2 button" href="javascript:void(0)" title = "' + getCookie('myyear') + '" target="_self">' + formatPartURL(getCookie('mymake')) + '</a>');
      $(".iismodal-footer").append('<a class="makebuttonv2 button" href="javascript:void(0)" title = "' + getCookie('mymake') + '" target="_self">' + formatPartURL(getCookie('mymodel')) + '</a>');


      $(".iismodal").css({
        "display": "block"
      });
      
      

    }


    // $('.iiyears').click(function(){	
    $(document).on('click', '.iiyears', function () {
      $(window).scrollTop(0);
      iispromodel('Loading Years', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyearsv2.php?ver=' + iisversion, 'Select a Year');

    });

    $('.iimake').click(function () {
      $(window).scrollTop(0);
      iispromodel('Loading Years', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyears.php?ver=' + iisversion);

    });

    $('.iimodel').click(function () {
      $(window).scrollTop(0);
      iispromodel('Loading Years', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyears.php?ver=' + iisversion);

    });


    $('.iisparts').click(function () {
      var checkmodelex = getCookie('mymodel');
      $(window).scrollTop(0);
      if (checkmodelex.length < 2) {
        iispromodel('Loading Years', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyearsv2.php?ver=' + iisversion, 'Select Year');
        return false;
      }

      iispromodel('Loading Categories', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/searchparts.php?ver=' + iis_part_info_id, 'Select a Part Category');

    });


    $('.iissmartsearch').click(function () {


      $(window).scrollTop(0);

      iispromodel('Loading Smart Search', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/smartsearchbox.php?ver=' + iisversion, 'Simple Part Search');
      return false;


    });


    $(document).on('click', '.iissmartpartbutton', function () {
      var x = $(".iissmartparttxt").val();
      if ($(".iissmartparttxt").val() !== "") {
        var url = '//' + window.location.hostname + '/' + partsdir + '/partsearch/' + x;
        window.location = url;
      }
    });


    $('.iisappfilcbxlabelreq').click(function () {
      // $(".iismodal-body").html($(".iishidnform").html());


      //  console.log($(this).parent().find('.iisappfilcbxlabelreq').text());
      console.log($(this).parent().next().html());
      // console.log($(this).parent().attr('for'));


      $(".iisappfilcbxlabel").css("background", "transparent");
      $(this).find('.iisappfilcbxlabel').css("background", "yellow");

      //console.log($('#'+$(this).parent().attr('for')).attr('title'));


      // console.log(document.baseURI);

      $(".iishidnform textarea").val("\n\n////////////////Write Above This Line/////////////////\n");


      $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Saved Vehicle: " + getCookie('myyear') + ' ' + getCookie('mymake') + ' ' + getCookie('mymodel') + "\n");


      $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Ref URL: " + document.baseURI + "\n");

      if ($('#' + $(this).parent().attr('for')).attr('title')) {
        $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Ref IC: " + $('#' + $(this).parent().attr('for')).attr('title') + "\n");
      }

      console.log($(this).parent());
      $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Data 1: " + $(this).parent('input[value=\'altdescription\']') + "\n");


      if ($(this).parent().next().text()) {
        $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Data 2: " + $(this).parent().next().text() + "\n");
        $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Data 3: " + $(this).parent().next().next().text() + "\n");
        $(".iishidnform textarea").val($(".iishidnform textarea").val() + "Data 4: " + $(this).parent().next().next().next().text() + "\n");
      }


      $(".iishidnform").css({
        "display": "block"
      });

      $('html, body').animate({
        scrollTop: $(".iishidnform").offset().top
      }, 2000);

      //$(".iismodal").css({"display":"block"});  
    });


    $('.iismakesmain').click(function () {
      $("#dialog").html("<div><img src='//www.inventoryinsite.com/iiscartimages/preload1.gif'/></div>");

      //Open the Modal Popup
      $('#dialog').dialog('open');
    });

    $("#dialog").dialog({
      autoOpen: false,
      title: 'Vehicle Information',
      modal: true,
      height: 'auto',
      width: $(window).width() > 600 ? 600 : 'auto',
      dialogClass: 'metro',
      buttons: {
        'close': function () {
          $(this).dialog('close');
        }
      }

    });

    //Specify what to do on Button Click
    $('.newsitem').click(function (event) {

      //Execute getJSON to an URL
      //alert('Clicked on the ' + event.target.innerHTML);
      $.getJSON('//' + window.location.hostname + '/getvin.php?vin=' + event.target.innerHTML, function (data) {

        //This is success section
        //Iterate the data and append it to the DIV
        // $.each(data, function (i, field) {
        //    $("#dialog").append(field + "<br> ");
        //  });
        $('#dialog').empty();
        if (data.status == undefined) {
          $("#dialog").append("<div><small>Make:</small> " + data.make.name + "</div>");
          $("#dialog").append("<div><small>Model:</small> " + data.model.name + "</div>");
          $("#dialog").append("<div><small>MPG:</small> " + data.MPG.highway + "/" + data.MPG.city + "</div>");
          $("#dialog").append("<div><small>Vehicle Size:</small> " + data.categories.vehicleSize + "</div>");
          $("#dialog").append("<div><small>Vehicle Style:</small> " + data.categories.vehicleStyle + "</div>");
          $("#dialog").append("<div><small>Vehicle Style:</small> " + data.years[0].styles[0].name + "</div>");
        } else {
          $("#dialog").append("<div>Sorry, unable to retrieve data for this vehicle.</div>");
        }
        //Open the Modal Popup
        $('#dialog').dialog('open');
      }).error(function (data) {
        //Got error - place the error in DIV
        $('#dialog').html('got error ' + data.html);
        //Open the Modal Popup
        $('#dialog').dialog('open');
      });


    });
    // dialog


    $.extend($.tablesorter.themes.jui, {
      // change default jQuery uitheme icons - find the full list of icons here: http://jqueryui.com/themeroller/ (hover over them for their name)
      table: 'ui-widget ui-widget-content ui-corner-all', // table classes
      header: 'ui-widget-header ui-corner-all ui-state-default', // header classes
      footerRow: '',

      footerCells: '',
      icons: 'ui-icon', // icon class added to the <i> in the header
      sortNone: 'ui-icon-carat-2-n-s',
      sortAsc: 'ui-icon-carat-1-n',
      sortDesc: 'ui-icon-carat-1-s',
      active: 'ui-state-active', // applied when column is sorted
      hover: 'ui-state-hover', // hover class
      filterRow: '',
      even: 'ui-state-default', // odd row zebra striping
      odd: 'ui-state-default' // even row zebra striping
    });


    $('#myveh').stop(true, true);


    $('.idBtnSearch').prop('type', 'button');
    $('.idBtnSearch').removeAttr("src");
    $('.idBtnSearch').prop('value', 'Search');
    $('.idBtnSearch').click(function () {
      var x = $(".idTxtSearch").val();
      if ($(".idTxtSearch").val() !== "") {
        var url = '//' + window.location.hostname + '/' + partsdir + '/search/' + x;
        window.location = url;
      }
    });
    $(document).ready(function () {
      //$( ".idTxtSearch" ).autocomplete({source:'//'+window.location.hostname+'/getsearchresults.php', minLength:2}).keydown(function(e){

      $(".idTxtSearch").autocomplete({
          source: '//' + window.location.hostname + '/getsearchresults.php',
          minLength: 2,
          delay: 0,
          search: function () {
            $(this).addClass('working');
          },
          open: function () {
            $(this).removeClass('working');
          }
        }


      ).keydown(function (e) {


        if (e.keyCode === 13) {
          var x = $(".idTxtSearch").val();
          var found = $('.ui-autocomplete li').text().search($(x).val());
          if (found < 0) {
            var url = '//' + window.location.hostname + '/' + partsdir + '/search/' + x;
            window.location = url;
          }
        }


      });


      $(document).on('click', '#iisstocksearchbtn', function () {
        var x = $("#iisstocksearch").val();

        var url = '//' + window.location.hostname + '/' + partsdir + '/search/' + x;
        window.location = url;


      });


      $(document).on('click', '.yearbuttonv2', function () {
        $(window).scrollTop(0);
        /// Replaced as Years are created dynamically
        //$('.yearbutton').click(function(a){
        var b = $(this).attr('title');
        console.log(b);
        
        $('#mymake').html('');
        $('#mymodel').html('');


        $('.myvehlabel').html(b);

        getMakesv2(b);


      });


      function getMakesv2(b) {
        iispromodel('Makes', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmymakev2.php?y=' + b + '&ver=' + iisversion, 'Select A Manufacturer');
        //alert(window.location.hostname);
        
        $('#myyear').html(b);

        setCookie('myyear', b, 30);
        $(".iismodal-footer").html('<a class="iiyears button iisyearsdyn" href="javascript:void(0)" target="_self">Select Vehicle</a>');
        $(".iismodal-footer").append('<a class="iiyears button" href="javascript:void(0)" target="_self">' + b + '</a>');


      }


      $(document).on('click', '.iisymmyear', function () {
        $(window).scrollTop(0);
        $('#iisymmdropdown').hide();
        /// Replaced as Years are created dynamically
        //$('.yearbutton').click(function(a){
        var b = $(this).attr('title');
        console.log(b);

        $('#mymake').html('');
        $('#mymodel').html('');


        $('.myvehlabel').html(b);

        getMakesv2ymm(b);


      });


      function getMakesv2ymm(b) {
        var t = '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmymakev2ymm.php?y=' + b + '&ver=' + iisversion;
        //alert(window.location.hostname);

        $("#iisymmmakedropdown").load(t);
        $('.iisdpyearlabel').html(b);
        $('#myyear').html(b);

        setCookie('myyear', b, 30);

      }


      $(document).on('click', '.makebuttonv2', function () {
          
        $(window).scrollTop(0);
        //$('.makebuttonv2').click(function(){
        var s = $(this).attr('title');

        $('#mymake').html(s);

        getModelsv2(s);

      });


      function getModelsv2(b) {
        $(window).scrollTop(0);
        yearcookie = getCookie('myyear');

        iispromodel('Makes', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmymodelv2.php?m=' + b + '&year=' + yearcookie + '&ver=' + iisversion, 'Select A Model');
        //alert(window.location.hostname);
        $('#myyear').html(b);

        setCookie('mymake', b, 30);


        $(".iismodal-footer").html('<a class="iiyears button iisyearsdyn" href="javascript:void(0)" target="_self">Select Vehicle</a>');
        $(".iismodal-footer").append('<a class="iiyears button" href="javascript:void(0)" target="_self">' + getCookie('myyear') + '</a>');
        $(".iismodal-footer").append('<a class="yearbuttonv2 button" href="javascript:void(0)" title = "' + getCookie('myyear') + '" target="_self">' + formatPartURL(getCookie('mymake')) + '</a>');


      }


      $(document).on('click', '.iisymmmake', function () {
        $(window).scrollTop(0);
        $('#iisymmmakedropdown').hide();

        var s = $(this).attr('title');

        $('#mymake').html(s);

        getModelsv2ymm(s);

      });


      function getModelsv2ymm(b) {
        $(window).scrollTop(0);
        //console.log('models js');
        yearcookie = getCookie('myyear');
        var t = '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmymodelv2ymm.php?m=' + b + '&year=' + yearcookie + '&ver=' + iisversion;


        $("#iisymmmodeldropdown").load(t);
        $('.iisdpmakelabel').html(b);

        $('#myyear').html(b);

        setCookie('mymake', b, 30);


      }

      $(document).on('click', '#input-payment-egn', function (e) {
        $('#wrong-egn').slideUp();
        if ($(this).val().length > 10) {
          e.preventDefault();
          $('#wrong-egn').slideUp();
          getYMMVINparts();
          //console.log('triggered');
        } else {
          $('#wrong-egn').slideDown();
        }

      });


      function getYMMVINparts() {
        $(window).scrollTop(0);

        $("#iisymmpartdropdown").html('');

        var t = '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/searchpartsymmvin.php?ver=' + iisversion;
        $("#iisymmpartdropdown").load(t);


      }


      $(document).on('click', '.iisymmmodel', function () {
        $(window).scrollTop(0);
        $('#iisymmmodeldropdown').hide();
        var s = $(this).attr('title');

        $('#mymodel').html(s);
        setCookie('mymodel', s, 30);
        //getModelsv2(s);


        var t = '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/searchpartsymm.php?ver=' + iisversion;
        $("#iisymmpartdropdown").load(t);
        $('.iisdpmodellabel').html(s);


      });


      $(document).on('click', '.modelbuttonv2', function () {
        $(window).scrollTop(0);
        //$('.modelbuttonv2').click(function(){
        var s = $(this).attr('title');

        $('#mymodel').html(s);
        setCookie('mymodel', s, 30);
        //getModelsv2(s);

        iispromodel('Loading Categories', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/searchparts.php?ver=' + iis_part_info_id, 'Select a Part Category');


      });


      // iispromodel('Loading Categories','//'+window.location.hostname+'/wp-content/plugins/iis-pro-v2/used-parts/includes/searchparts.php?jj=9','Select a Part Category');   


      $(document).on('click', '.partbypassv2', function () {
        $(window).scrollTop(0);
        var checkmodelex = getCookie('mymodel');

        if (checkmodelex.length < 2) {
          iispromodel('Loading Years', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyearsv2.php?ver=' + iisversion, 'Select Year');
          return false;
        }

        iispromodel('Loading Categories', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/used-parts/includes/searchparts.php?ver=' + iis_part_info_id, 'Select a Part Category');


      });


      function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        // document.cookie = cname + "=" + cvalue + "; " + expires;
        document.cookie = cname + "=" + cvalue + "; " + expires + "; " + "Path=/";
      }


      $(".iismodal-body, .iisymmblock").on('click', ".partQuesAdv", function (e) {

        var x = $(this).attr('title');

        if ($('.iisvin').val()) {
          var p = $(this).attr('title');

          $.getJSON('//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getvin.php?vin=' + $('.iisvin').val() + '&part=' + p, function (data) {


            //return;

            if (data === null) {
              $("#wrong-egn").html("<div>Sorry, No Match for this VIN</div>");
              $('#wrong-egn').slideDown();
              return;
            }


            if (typeof data.Vehicles === 'undefined') {
              $("#wrong-egn").html("<div>Sorry, No Match for this VIN</div>");
              $('#wrong-egn').slideDown();
              return;
            } else {
              $('#wrong-egn').slideUp();
              vinyear = data.Vehicles[0].year;
              vinmake = data.Vehicles[0].urg_make;
              vinmodel = data.Vehicles[0].modelnm;
              vinpart = data.Vehicles[0].part_name;
              var x = vinpart;
              setCookie('iispart', vinpart, 30);
              setCookie('myyear', vinyear, 30);
              setCookie('mymake', vinmake, 30);
              setCookie('mymodel', vinmodel, 30);
              setCookie('iisvin', $('.iisvin').val(), 30);
              $(".iisdppartlabel").append(" <span> <img src='//www.inventoryinsite.com/images/loading_bar_small2.gif'/></span>");


              var iiscookhistname = '<i class=\'iishistory1 ui-icon ui-icon-check\' title=\'iishistory1\'></i> ' + getCookie('myyear') + ' ' + formatPartURL(getCookie('mymake')) + ' ' + formatPartURL(getCookie('mymodel')) + ' ' + formatPartURL(x);

              var iisclickurl = '<a href=\'' + url + '\'>' + iiscookhistname + '</a>';


              var iishistory1 = getCookie('iishistory1');
              var iishistory2 = getCookie('iishistory2');
              var iishistory3 = getCookie('iishistory3');

              setCookie('iishistory1', iisclickurl + ':' + url, 30);
              setCookie('iishistory2', iishistory1, 30);
              setCookie('iishistory3', iishistory2, 30);


              var url = '//' + window.location.hostname + '/' + partsdir + '/' + getCookie('mymake') + '/' + getCookie('mymodel') + '/' + x + '/' + getCookie('myyear') + '/?vin=' + $('.iisvin').val();

              window.location = url;


            }

            //$('#wrong-egn').empty();
            if (data.status === undefined) {
              //$("#wrong-egn").append("<div><small>Make:</small> "+data.Vehicles + "</div>");

            } else {
              $("#wrong-egn").append("<div>Sorry, unable to retrieve data for this vehicle.</div>");

              return false;
            }
            //Open the Modal Popup
            //  $('#dialog').dialog('open');
          }).error(function (data) {
            //Got error - place the error in DIV
            // $('#dialog').html('got error ' + data.html);
            //Open the Modal Popup
            //$('#dialog').dialog('open');
          });
          //return;


        } else {


          //$('.partQuesAdv	').click(function(){


          var checkmodelex = getCookie('mymodel');
          //console.log(x+getCookie('mymodel'));
          if (checkmodelex.length < 2) {
            iispromodel('Loading Years', '//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyearsv2.php?ver=' + iisversion, 'Select Year');
            return false;
          }
          $(".iissmallloading").remove();

          var newHTML = '<span class="iissmallloading"><img src="//www.inventoryinsite.com/images/loading_bar_small2.gif"/></span>';
          $(this).append(newHTML);


          var url = '//' + window.location.hostname + '/' + partsdir + '/' + getCookie('mymake') + '/' + getCookie('mymodel') + '/' + x + '/' + getCookie('myyear') + '/?k=1';

          window.location = url;


          var iiscookhistname = '<i class=\'iishistory1 ui-icon ui-icon-check\' title=\'iishistory1\'></i> ' + getCookie('myyear') + ' ' + formatPartURL(getCookie('mymake')) + ' ' + formatPartURL(getCookie('mymodel')) + ' ' + formatPartURL(x);

          var iisclickurl = '<a href=\'' + url + '\'>' + iiscookhistname + '</a>';


          var iishistory1 = getCookie('iishistory1');
          var iishistory2 = getCookie('iishistory2');
          var iishistory3 = getCookie('iishistory3');

          setCookie('iishistory1', iisclickurl + ':' + url, 30);
          setCookie('iishistory2', iishistory1, 30);
          setCookie('iishistory3', iishistory2, 30);

        }

      });


      $('#button .ui-button-text').addClass('ui-widget-header');

      $("#tabs").tabs({
        cache: false,
        spinner: 'Loading...',
        ajaxOptions: {
          cache: false
        },
        itemOptions: [{
          cache: false
        }]
      });

      $("#tabs2").tabs({
        cache: false,
        spinner: 'Loading...',
        ajaxOptions: {
          cache: false
        },
        itemOptions: [{
          cache: false
        }]
      });
      // $('html, body').animate({
      // scrollTop: $("#used-parts-h1").offset().top - 90},100);
      $("#yearstab").dialog({
        autoOpen: false,
        title: 'Select Your Vehicle Year',
        modal: true,

        height: 'auto',

        width: $(window).width() > 600 ? 600 : 'auto',
        dialogClass: 'metro',
        //open: function () {
        // $(this).load('//'+window.location.hostname+'/getyears.php');           
        //  },
        buttons: {
          'Browse Vehicles': function () {
            var url = '//' + window.location.hostname + '/' + partsdir + '/makes';
            var myWindow = window.open(url, "_self");
          },
          'Close': function () {
            $(this).dialog('close');
          }


        }

      });


      $('.myvehbuthold').click(function (e) {
        $('#yearstab').dialog('open');
        e.preventDefault();
        return false;
      });

      $('.myvehtab').click(function (e) {
        $('#yearstab').dialog('open');
        e.preventDefault();
        return false;
      });


      $('.iistatefilter a').click(function () {
        var letter = $(this).attr('title');

        $('.menufilt ul li').show();

        $('.menufilt ul li').each(function () {
          var t = $(this).attr('id');
          if (letter != t.substring(0, 1)) {
            $(this).hide();
          }
        });

        if (letter == "ALL") {
          $('.iistatefilter.ul li').show();
        }

      });


      $('.alphabet a').click(function () {
        var letter = $(this).attr('title');

        $('.menufilt ul li').show();

        $('.menufilt ul li').each(function () {
          var t = $(this).attr('id');
          if (letter != t.substring(0, 1)) {
            $(this).hide();
          }
        });

        if (letter == "ALL") {
          $('.menufilt ul li').show();
        }

      });


      $("#loading_inv").hide();
      $("#invcont").show();

      $('table').tablesorter({
        theme: 'jui', // theme "jui" and "bootstrap" override the uitheme widget option in v2.7+

        headerTemplate: '{content} {icon}', // needed to add icon for jui theme

        // widget code now contained in the jquery.tablesorter.widgets.js file
        widgets: ['uitheme', 'zebra'],
        //widgets        : ['zebra', 'columns'],
        usNumberFormat: false,
        sortReset: true,
        sortRestart: true
      });

    });


    $('.target').change(function () {
      var make = $(this).val();
      if (make == "All Models") {
        $(".odd").show();
        $(".even").show();
      } else {
        $(".odd").hide();
        $(".even").hide();
        $("." + make).show();
      }
    });


  });

  $(document).on('click', '#moreyearsbutton', function () {


    $('.yearbuttonxtras').css('display', 'inline-block');
    $('#moreyearsbutton').css('display', 'none');

  });

  $(document).ready(function () {

    // $('html, body').animate({
    //  scrollTop: $("#iiscont").offset().top
    //  }, 2000);


    $('#yearstab').load('//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getyears.php?ver=' + iisversion, function () {
      if (document.location.href.indexOf('#tabs-3') > -1) {
        $('#yearstab').dialog('open');
      }


      $('.iis-menuveh').click(function () {
        if ($('#mymodel').html() == 'Model') {
          $('#yearstab').dialog('open');
        }
      });


      if ($('#mymodel').html() == 'Model' && document.location.href.indexOf('#tabs-4') > -1) {
        $('#yearstab').dialog('open');
      }
      if ($('#myyear').html() == 'year') {
        //$('#yearstab').dialog('open');
        $('.iismainmenu').show();
      }


      $(document).on('click', '.yearbutton', function () {
        /// Replaced as Years are created dynamically
        //$('.yearbutton').click(function(a){
        var b = $(this).attr('title');
        console.log(b);
        //alert(window.location.hostname);
        $('#mymake').html('');
        $('#mymodel').html('');
        $('#yearstab').show();

        $('.myvehlabel').html(b);
        $('#yearstab').dialog('close');
        getMakes(b);


      });


    });


    function getMakes(b) {

      //alert(window.location.hostname);
      $('#makestab').load('//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmymake.php?y=' + b + '&ver=' + iisversion, function (a) {
        $('#myyear').html(b);
        $('#makestab').show();
        $('#yearstab').hide();
        $('#modelstab').hide();
        setCookie('myyear', b, 30);

        $("#makestab").dialog({
          autoOpen: false,
          title: 'Select Make',
          bgiframe: true,

          modal: true,
          height: 'auto',
          width: $(window).width() > 600 ? 600 : 'auto',
          dialogClass: 'metro',
          buttons: {
            'Back': function () {
              $(this).dialog('close');
              $('#yearstab').dialog('open');
            }
          }

        });

        $('#makestab').dialog('open');


        $('.makebutton').click(function (a) {
          var s = $(this).attr('title');

          $('#mymake').html(s);
          $('#makestab').dialog('close');
          getModels(s);
          //$('.myvehlabel').html($('.myvehlabel').html()+"<br/>"+s);


        });
      });
    }


    function getModels(b) {
      yearcookie = getCookie('myyear');
      $('#modelstab').load('//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmymodel.php?m=' + b + '&year=' + yearcookie + '&ver=' + iisversion, function (a) {


        $('#makestab').hide();
        $('#modelstab').show();
        setCookie('mymake', b, 30);
        $("#modelstab").dialog({
          autoOpen: false,
          position: {
            my: "top",
            at: "center",
            of: window
          },
          title: 'Select Model',
          // bgiframe: true,
          modal: true,
          cache: false,
          height: 'auto',
          width: $(window).width() > 600 ? 600 : 'auto',
          dialogClass: 'metro',
          buttons: {
            'Back': function () {
              $(this).dialog('close');
              $('#makestab').dialog('open');
            }
          }

        });
        $('#modelstab').dialog('open');

        $('.modelbutton').click(function (a) {
          var r = $(this).attr('title');

          $('#mymodel').html(r);

          //$('.myvehlabel').html($('.myvehlabel').html()+"<br/>"+r);
          //$('#modelstab').dialog('close');
          selectModel(r);

        });
      });
    }


    function selectModel(b) {
      var urlsplitiis = window.location.href.split("/");
      //var partsdir = urlsplitiis[3];
      var partsdir = iispartdir;
      $('#modelstab').load('//' + window.location.hostname + '/wp-content/plugins/iis-pro-v2/getmodelfinal.php?m=' + b + '&ver=' + iisversion, function (a) {

        $('#makestab').hide();
        $('#modelstab').show();
        setCookie('mymodel', b, 30);
        //$('#tabs').tabs({ selected: 2 });
        //$( "#tabs" ).tabs( "option", "active", 2 );

        //$("#tabs").tabs('load',1);
        // location.reload();
        //$('#snores').hide();
        //$('#tabs-3').prepend($('#tabs-4').html());
        var url = '//' + window.location.hostname + '/' + partsdir + '/makes/?ps=1#tabs-4';
        //var myWindow = window.open(url, "_self");
        // console.log(url);
        $(this).dialog('close');
        window.location = url;
        location.reload();

        //partsearchwindow2();

      });
    }

    $('.browseinv').click(function () {
      //$('#tabs').tabs({ selected: 0 });
      //$( "#tabs" ).tabs( "option", "active", 0 );
      var urlsplitiis = window.location.href.split("/");
      //var partsdir = urlsplitiis[3];
      var partsdir = iispartdir;
      var url = '//' + window.location.hostname + '/' + partsdir + '/makes#tabs-1';
      window.location = url;
      //location.reload();
    });
    $('.browsepart').click(function () {
      var urlsplitiis = window.location.href.split("/");
      //var partsdir = urlsplitiis[3];
      var partsdir = iispartdir;
      //$('#tabs').tabs({ selected: 3 });
      //$( "#tabs" ).tabs( "option", "active", 3 );
      var url = '//' + window.location.hostname + '/' + partsdir + '/makes#tabs-4';
      window.location = url;
      //location.reload();
    });


    $('.reentveh').click(function () {
      var urlsplitiis = window.location.href.split("/");
      //var partsdir = urlsplitiis[3];	
      var partsdir = iispartdir;
      //$('#tabs').tabs({ selected: 3 });
      //$( "#tabs" ).tabs( "option", "active", 3 );
      var url = '//' + window.location.hostname + '/' + partsdir + '/makes#tabs-3';
      window.location = url;
      //location.reload();
    });

    function partsearchwindow2() {
      //console.log('s');
      $("#dialogcats").dialog({
        autoOpen: true,
        title: 'My Vehicle: ' + getCookie('myyear') + ' ' + getCookie('mymake') + ' ' + getCookie('mymodel') + '',
        modal: true,
        height: 'auto',
        position: {
          my: "center",
          at: "center",
          of: window
        },
        width: $(window).width() > 600 ? 600 : 'auto',
        dialogClass: 'metro',
        buttons: {
          'Change Vehicle': function () {
            $(this).dialog('close');
            $('#yearstab').dialog('open');
          },
          'Browse Vehicles': function () {

            $("#dialog").html("<div><img src='//www.inventoryinsite.com/iiscartimages/preload1.gif'/></div>");

            //Open the Modal Popup
            $('#dialog').dialog('open');

            var urlsplitiis = window.location.href.split("/");
            //var partsdir = urlsplitiis[3];	
            var partsdir = iispartdir;
            var url = '//' + window.location.hostname + '/' + partsdir + '/makes';
            var myWindow = window.open(url, "_self");
          },

          'close': function () {
            $(this).dialog('close');
          }
        }

      });

    }

    function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      // document.cookie = cname + "=" + cvalue + "; " + expires;
      document.cookie = cname + "=" + cvalue + "; " + expires + "; " + "Path=/";
    }


    //$('#myyear').click(function(){			
    //	$('#tabs').tabs({ selected: 2 });
    //$( "#tabs" ).tabs( "option", "active", 2 );
    //$('#yearstab').show();
    //$('#modelstab').hide();
    //$('#makestab').hide();
    //	});					


    $('#viewcart').click(function () {
      $('#tabs').tabs({
        selected: 3
      });
      $("#tabs").tabs("option", "active", 3);

    });
    $('#menubroinv').click(function () {
      //var partsdir = urlsplitiis[3];	
      var partsdir = iispartdir;
      var url = '//' + window.location.hostname + '/' + partsdir + '/makes';
      var winind = $("#tabs ul li.ui-state-active").index();
      //if (winind == 0){
      //alert($("#tabs ul li.ui-state-active").index());
      var url = '//' + window.location.hostname + '/' + partsdir + '/makes';
      //alert(url);
      window.location = url;
      //location.reload(true);
      //}
    });

    $('.PartCatxx').click(function () {

    });


    //$('.PartCat').click(function(){	

    $(".iismodal-body, .iisymmblock").on('click', ".PartCat", function (e) {
      //console.log('ss');
      $(window).scrollTop(0);
      $('.PartCat').hide();


      var r = $(this).attr('id');
      $('.PartCats').hide();
      $('.' + r).css('display', 'inline-block');
      $('.partcatlabel').html('Select the Part');

    });

    //$('.partques').click(function(){	

    $(".iismodal-body, .iisymmblock").on('click', ".partquesxx", function () {


      var r = $(this).attr('title');
      $('#formpart').val(r);
      $('#quesform').submit();
    });


    $('.QuesCat').click(function () {
      var r = $(this).attr('id');
      $('#quespart').val(r);
      $('#quespartform').submit();

    });

    $('.iis-menufit	').click(function () {

      var holldot = "Compatibility Vehicles List";
      if ($("#holldot").length) {
        holldot = "Part From Vehicle Below";
      } else {

      }
      var e = $('#compVeh').html();
      $('#dialogcart').html(e);
      $("#dialogcart").dialog({
        modal: true,
        width: $(window).width() > 600 ? 600 : 'auto',
        dialogClass: 'metro',
        title: holldot,
        buttons: {
          Ok: function () {
            $(this).dialog("close");
          }
        }
      });

    });


    // Ajax add to cart on the product page
    var $warp_fragment_refresh = {
      url: wc_cart_fragments_params.wc_ajax_url.toString().replace('%%endpoint%%', 'get_refreshed_fragments'),
      type: 'POST',
      success: function (data) {
        if (data && data.fragments) {

          $.each(data.fragments, function (key, value) {
            $(key).replaceWith(value);
          });

          $(document.body).trigger('wc_fragments_refreshed');
        }
      }
    };

    $('form.carte').on('submit', function (e) {
      e.preventDefault();
      var formxx = $(this);
      formxx.closest('.entry-summary').find('.ah-button').val("Adding to Cart");


      var product_url = window.location,
        form = $(this);
      console.log(form.serialize() + '&_wp_http_referer=' + product_url);
      $.post(product_url, form.serialize() + '&_wp_http_referer=' + product_url, function (result) {

        // console.log('before cart_dropdown');

        var cart_dropdown = $('.widget_shopping_cart', result);
        //console.log('after cart_dropdown');
        // update dropdown cart
        $('.widget_shopping_cart').replaceWith(cart_dropdown);

        // update fragments
        $.ajax($warp_fragment_refresh);
        //console.log('after  warp_refresh');
        //  formxx.closest('.entry-summary').unblock();


        formxx.closest('.entry-summary').find('.ah-button').val("Added");

        formxx.closest('.entry-summary').find('.ah-button').css('background-color', 'red');
        formxx.closest('.entry-summary').find('.ah-button').attr('disabled', 'disabled');
        formxx.closest('.entry-summary').find('.carte').append('<a href="/cart/" class="button">View Cart</a>');


        //  $('.iisappfil').unblock();


      });
    });


    $('.wp_cart_button').click(function (e) {

      var ef = $('#compVeh').html();
      $('#dialogcart').html(ef);

      if ($("#holldot").length) {
        var holldot = "Part From Vehicle Below";
      } else {
        var holldot = "Compatibility Vehicles List";
      }


      $("#dialogcart").dialog({
        modal: true,
        width: $(window).width() > 600 ? 600 : 'auto',
        dialogClass: 'metro',
        title: holldot,
        buttons: {
          "Yes, I Confirm": function () {
            //$(this).dialog("close");  
            $("#dialogcart").dialog("option", "buttons", {});
            $("#dialogcart").dialog('option', 'title', 'One Moment Please.....');
            $('#dialogcart').html("<img src='//www.inventoryinsite.com/iiscartimages/shopping_cart_car.gif'/><h3>Calculating Shipping & Adding to Cart</h3>");
            $(".wp-cart-button-form").submit();
          },
          "No": function () {
            $(this).dialog("close");
          }
        }
      });

      $("#dialogcart").dialog('open');
      e.preventDefault();
      return false;

    });


    $(".clickable-row").click(function () {
      window.document.location = $(this).data("href");
    });


  });
}(jQuery));