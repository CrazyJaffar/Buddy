/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,function(){"use strict";return function(o,s){var a,u,c,p,t,d,m,l,r,f,n,i,h,w,g,b,_,v,C=this,e=!1,T=!0,I=!0,E={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return o.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return o.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},F=function(e){if(b)return!0;e=e||window.event,g.timeToIdle&&g.mouseUsed&&!r&&R();for(var t,n,o=(e.target||e.srcElement).getAttribute("class")||"",l=0;l<M.length;l++)(t=M[l]).onTap&&-1<o.indexOf("pswp__"+t.name)&&(t.onTap(),n=!0);n&&(e.stopPropagation&&e.stopPropagation(),b=!0,e=s.features.isOldAndroid?600:30,setTimeout(function(){b=!1},e))},x=function(e,t,n){s[(n?"add":"remove")+"Class"](e,"pswp__"+t)},S=function(){var e=1===g.getNumItemsFn();e!==w&&(x(u,"ui--one-slide",e),w=e)},k=function(){x(m,"share-modal--hidden",I)},K=function(){if((I=!I)?(s.removeClass(m,"pswp__share-modal--fade-in"),setTimeout(function(){I&&k()},300)):(k(),setTimeout(function(){I||s.addClass(m,"pswp__share-modal--fade-in")},30)),!I){for(var e,t,n,o,l="",r=0;r<g.shareButtons.length;r++){e=g.shareButtons[r];t=g.getImageURLForShare(e);n=g.getPageURLForShare(e);o=g.getTextForShare(e);n=e.url.replace("{{url}}",encodeURIComponent(n)).replace("{{image_url}}",encodeURIComponent(t)).replace("{{raw_image_url}}",t).replace("{{text}}",encodeURIComponent(o));l+='<a href="'+n+'" target="_blank" '+'class="pswp__share--'+e.id+'"'+(e.download?"download":"")+">"+e.label+"</a>";if(g.parseShareButtonOut)l=g.parseShareButtonOut(e,l)}m.children[0].innerHTML=l,m.children[0].onclick=D}return!1},D=function(e){var t=(e=e||window.event).target||e.srcElement;if(o.shout("shareLinkClick",e,t),t.href){if(t.hasAttribute("download"))return!0;window.open(t.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),I||K()}return!1},L=function(e){for(var t=0;t<g.closeElClasses.length;t++)if(s.hasClass(e,"pswp__"+g.closeElClasses[t]))return!0},O=0,R=function(){clearTimeout(v),O=0,r&&C.setIdle(!1)},y=function(e){e=(e=e||window.event).relatedTarget||e.toElement;e&&"HTML"!==e.nodeName||(clearTimeout(v),v=setTimeout(function(){C.setIdle(!0)},g.timeToIdleOutside))},z=function(e){i!==e&&(x(n,"preloader--active",!e),i=e)},A=function(e){var t,n=e.vGap;!o.likelyTouchDevice||g.mouseUsed||screen.width>g.fitControlsWidth?(t=g.barsSize,g.captionEl&&"auto"===t.bottom?(p||((p=s.createEl("pswp__caption pswp__caption--fake")).appendChild(s.createEl("pswp__caption__center")),u.insertBefore(p,c),s.addClass(u,"pswp__ui--fit")),g.addCaptionHTMLFn(e,p,!0)?(e=p.clientHeight,n.bottom=parseInt(e,10)||44):n.bottom=t.top):n.bottom="auto"===t.bottom?0:t.bottom,n.top=t.top):n.top=n.bottom=0},M=[{name:"caption",option:"captionEl",onInit:function(e){c=e}},{name:"share-modal",option:"shareEl",onInit:function(e){m=e},onTap:function(){K()}},{name:"button--share",option:"shareEl",onInit:function(e){d=e},onTap:function(){K()}},{name:"button--zoom",option:"zoomEl",onTap:o.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){t=e}},{name:"button--close",option:"closeEl",onTap:o.close},{name:"button--arrow--left",option:"arrowEl",onTap:o.prev},{name:"button--arrow--right",option:"arrowEl",onTap:o.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){a.isFullscreen()?a.exit():a.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){n=e}}];C.init=function(){var t,l,r,i,e,n;s.extend(o.options,E,!0),g=o.options,u=s.getChildByClass(o.scrollWrap,"pswp__ui"),(f=o.listen)("onVerticalDrag",function(e){T&&e<.95?C.hideControls():!T&&.95<=e&&C.showControls()}),f("onPinchClose",function(e){T&&e<.9?(C.hideControls(),t=!0):t&&!T&&.9<e&&C.showControls()}),f("zoomGestureEnded",function(){(t=!1)&&!T&&C.showControls()}),f("beforeChange",C.update),f("doubleTap",function(e){var t=o.currItem.initialZoomLevel;o.getZoomLevel()!==t?o.zoomTo(t,e,333):o.zoomTo(g.getDoubleTapZoom(!1,o.currItem),e,333)}),f("preventDragEvent",function(e,t,n){var o=e.target||e.srcElement;o&&o.getAttribute("class")&&-1<e.type.indexOf("mouse")&&(0<o.getAttribute("class").indexOf("__caption")||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)}),f("bindEvents",function(){s.bind(u,"pswpTap click",F),s.bind(o.scrollWrap,"pswpTap",C.onGlobalTap),o.likelyTouchDevice||s.bind(o.scrollWrap,"mouseover",C.onMouseOver)}),f("unbindEvents",function(){I||K(),_&&clearInterval(_),s.unbind(document,"mouseout",y),s.unbind(document,"mousemove",R),s.unbind(u,"pswpTap click",F),s.unbind(o.scrollWrap,"pswpTap",C.onGlobalTap),s.unbind(o.scrollWrap,"mouseover",C.onMouseOver),a&&(s.unbind(document,a.eventK,C.updateFullscreen),a.isFullscreen()&&(g.hideAnimationDuration=0,a.exit()),a=null)}),f("destroy",function(){g.captionEl&&(p&&u.removeChild(p),s.removeClass(c,"pswp__caption--empty")),m&&(m.children[0].onclick=null),s.removeClass(u,"pswp__ui--over-close"),s.addClass(u,"pswp__ui--hidden"),C.setIdle(!1)}),g.showAnimationDuration||s.removeClass(u,"pswp__ui--hidden"),f("initialZoomIn",function(){g.showAnimationDuration&&s.removeClass(u,"pswp__ui--hidden")}),f("initialZoomOut",function(){s.addClass(u,"pswp__ui--hidden")}),f("parseVerticalMargin",A),(e=function(e){if(e)for(var t=e.length,n=0;n<t;n++){l=e[n],r=l.className;for(var o=0;o<M.length;o++)i=M[o],-1<r.indexOf("pswp__"+i.name)&&(g[i.option]?(s.removeClass(l,"pswp__element--disabled"),i.onInit&&i.onInit(l)):s.addClass(l,"pswp__element--disabled"))}})(u.children),(n=s.getChildByClass(u,"pswp__top-bar"))&&e(n.children),g.shareEl&&d&&m&&(I=!0),S(),g.timeToIdle&&f("mouseUsed",function(){s.bind(document,"mousemove",R),s.bind(document,"mouseout",y),_=setInterval(function(){2===++O&&C.setIdle(!0)},g.timeToIdle/2)}),g.fullscreenEl&&!s.features.isOldAndroid&&((a=a||C.getFullscreenAPI())?(s.bind(document,a.eventK,C.updateFullscreen),C.updateFullscreen(),s.addClass(o.template,"pswp--supports-fs")):s.removeClass(o.template,"pswp--supports-fs")),g.preloaderEl&&(z(!0),f("beforeChange",function(){clearTimeout(h),h=setTimeout(function(){o.currItem&&o.currItem.loading?o.allowProgressiveImg()&&(!o.currItem.img||o.currItem.img.naturalWidth)||z(!1):z(!0)},g.loadingIndicatorDelay)}),f("imageLoadComplete",function(e,t){o.currItem===t&&z(!0)}))},C.setIdle=function(e){x(u,"ui--idle",r=e)},C.update=function(){e=!(!T||!o.currItem)&&(C.updateIndexIndicator(),g.captionEl&&(g.addCaptionHTMLFn(o.currItem,c),x(c,"caption--empty",!o.currItem.title)),!0),I||K(),S()},C.updateFullscreen=function(e){e&&setTimeout(function(){o.setScrollOffset(0,s.getScrollY())},50),s[(a.isFullscreen()?"add":"remove")+"Class"](o.template,"pswp--fs")},C.updateIndexIndicator=function(){g.counterEl&&(t.innerHTML=o.getCurrentIndex()+1+g.indexIndicatorSep+g.getNumItemsFn())},C.onGlobalTap=function(e){var t=(e=e||window.event).target||e.srcElement;b||(e.detail&&"mouse"===e.detail.pointerType?L(t)?o.close():s.hasClass(t,"pswp__img")&&(1===o.getZoomLevel()&&o.getZoomLevel()<=o.currItem.fitRatio?g.clickToCloseNonZoomable&&o.close():o.toggleDesktopZoom(e.detail.releasePoint)):(g.tapToToggleControls&&(T?C.hideControls():C.showControls()),g.tapToClose&&(s.hasClass(t,"pswp__img")||L(t))&&o.close()))},C.onMouseOver=function(e){e=(e=e||window.event).target||e.srcElement;x(u,"ui--over-close",L(e))},C.hideControls=function(){s.addClass(u,"pswp__ui--hidden"),T=!1},C.showControls=function(){T=!0,e||C.update(),s.removeClass(u,"pswp__ui--hidden")},C.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},C.getFullscreenAPI=function(){var e,t=document.documentElement,n="fullscreenchange";return t.requestFullscreen?e={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:n}:t.mozRequestFullScreen?e={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+n}:t.webkitRequestFullscreen?e={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+n}:t.msRequestFullscreen&&(e={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),e&&(e.enter=function(){if(l=g.closeOnScroll,g.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK)return o.template[this.enterK]();o.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},e.exit=function(){return g.closeOnScroll=l,document[this.exitK]()},e.isFullscreen=function(){return document[this.elementK]}),e}}});
;