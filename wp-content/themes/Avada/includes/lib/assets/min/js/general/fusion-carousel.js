var generateCarousel=function(e){var i=void 0!==e?jQuery('div[data-cid="'+e+'"]').find(".fusion-carousel"):jQuery(".fusion-carousel");jQuery().carouFredSel&&i.each(function(){var e=jQuery(this).attr("data-imagesize")?jQuery(this).data("imagesize"):"fixed",i=!jQuery(this).attr("data-metacontent")||"yes"!==jQuery(this).data("metacontent"),t=!(!jQuery(this).attr("data-autoplay")||"yes"!==jQuery(this).data("autoplay")),s=jQuery(this).parents(".related-posts").length?fusionCarouselVars.related_posts_speed:fusionCarouselVars.carousel_speed,r=jQuery(this).attr("data-scrollfx")?jQuery(this).data("scrollfx"):"scroll",n=jQuery(this).attr("data-scrollitems")?parseInt(jQuery(this).data("scrollitems")):null,a=!(!jQuery(this).attr("data-touchscroll")||"yes"!==jQuery(this).data("touchscroll")),u=a?" fusion-carousel-swipe":"",o=jQuery(this).attr("data-columns")?jQuery(this).data("columns"):6,l=jQuery(this).attr("data-itemmargin")?parseInt(jQuery(this).data("itemmargin"),10):44,c=jQuery(this).attr("data-itemwidth")?parseInt(jQuery(this).data("itemwidth"),10)+l:180+l,f=jQuery(this).parent().hasClass("fusion-image-carousel")&&"fixed"===e?"115px":"variable";jQuery(this).find(".fusion-carousel-positioner").css("margin-left","-"+l+"px"),jQuery(this).find(".fusion-carousel-item").css("margin-left",l+"px"),jQuery(this).find(".fusion-nav-prev").css("margin-left",l+"px"),jQuery(this).find("ul").carouFredSel({circular:!0,infinite:!0,responsive:!0,centerVertically:i,height:f,width:"100%",auto:{play:t,timeoutDuration:parseInt(s,10)},items:{height:f,width:c,visible:{min:1,max:parseInt(o,10)}},scroll:{pauseOnHover:!0,items:n,fx:r},swipe:{onTouch:a,onMouse:a,options:{excludedElements:"button, input, select, textarea, a, .noSwipe"}},prev:jQuery(this).find(".fusion-nav-prev"),next:jQuery(this).find(".fusion-nav-next"),onCreate:function(){jQuery(this).find(".fusion-carousel-item-wrapper").css("visibility","inherit"),jQuery(this).parents(".fusion-carousel").find(".fusion-carousel-nav").css("visibility","inherit"),jQuery(this).parents(".fusion-woo-featured-products-slider").length&&jQuery(this).parent().css("overflow",""),i&&jQuery(this).css("line-height",jQuery(this).parent().height()+"px"),jQuery(this).css("top","auto"),jQuery(this).parents(".fusion-carousel").find(".fusion-nav-next").each(function(){jQuery(this).css("left",jQuery(this).parents(".fusion-carousel").find(".fusion-carousel-wrapper").width()-jQuery(this).width())}),jQuery(window).trigger("resize")},currentVisible:function(e){return e}},{wrapper:{classname:"fusion-carousel-wrapper"+u}})})};!function(e){"use strict";e.fn.fusion_recalculate_carousel=function(){e(this).not(".fusion-woo-featured-products-slider").each(function(){var i,t,s=e(this),r=e(this).data("imagesize");setTimeout(function(){s.find(".fusion-nav-next").each(function(){e(this).css("left",s.find(".fusion-carousel-wrapper").width()-e(this).width())}),"fixed"===r&&(i=s.find(".fusion-carousel-item").map(function(){return e(this).find("img").height()}).get(),t=Math.max.apply(null,i),s.find(".fusion-placeholder-image").each(function(){e(this).css("height",t)}),1<=e(s).parents(".fusion-image-carousel").length&&s.find(".fusion-image-wrapper").each(function(){e(this).css("height",t),e(this).css("width","100%"),e(this).find("> a").css("line-height",t-2+"px")}))},5)})}}(jQuery),jQuery(window).on("load fusion-reinit-related-posts-carousel fusion-reinit-carousels fusion-element-render-fusion_images fusion-element-render-fusion_featured_products_slider fusion-element-render-fusion_products_slider fusion-element-render-fusion_portfolio fusion-element-render-fusion_tb_related fusion-element-render-fusion_tb_woo_related fusion-element-render-fusion_tb_woo_upsells fusion-column-resized",function(e,i){generateCarousel(i)}),jQuery(window).on("fusion-element-render-fusion_images",function(e,i){var t=!!jQuery('li[data-parent-cid="'+i+'"]').parents(".fusion-carousel").data("itemmargin")&&parseFloat(jQuery('li[data-parent-cid="'+i+'"]').parents(".fusion-carousel").data("itemmargin"));!1!==t&&jQuery('li[data-parent-cid="'+i+'"]').css("margin-left",t+"px"),jQuery('li[data-parent-cid="'+i+'"], li[data-parent-cid="'+i+'"] .fusion-carousel-item-wrapper').css("visibility","inherit")}),jQuery(window).on("fusion-dynamic-content-render",function(e,i){0<jQuery(i).find(".fusion-carousel").length&&generateCarousel()}),jQuery(document).ready(function(){jQuery(window).on("fusion-resize-horizontal",function(){jQuery(".fusion-carousel").fusion_recalculate_carousel()})});