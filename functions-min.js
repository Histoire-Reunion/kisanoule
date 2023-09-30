var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function(){function e(){$(".nav-toggle").click(function(){$(".nav").toggleClass("open")})}function s(){$('a[href^="#"]').click(function(e){var s=$($(this).attr("href"));s.length&&(e.preventDefault(),$("html, body").animate({scrollTop:s.offset().top-15},300)),$(".nav").toggleClass("open")})}function r(){$("#full-slide .prev, #full-slide .next").click(function(){var e=$(this),s=$(".banner").find(".active"),r=$(".banner").children().index(s),a=$(".banner").children().length;e.hasClass("next")?a-1>r?$(".active").removeClass("active").next().addClass("active"):$(".banner li").removeClass("active").first().addClass("active"):0===r?$(".banner li").removeClass("active").last().addClass("active"):$(".active").removeClass("active").prev().addClass("active")})}function a(){$("#three-slide .prev, #three-slide .next").click(function(){var e=$(this),s=$(".slider").find(".back"),r=$(".slider").children().index(s),a=$(".slider").find(".current"),l=$(".slider").children().index(a),n=$(".slider").find(".front"),t=$(".slider").children().index(n),d=$(".slider").children().length;$(".slider").addClass("swap"),setTimeout(function(){e.hasClass("next")?d-1>t&&d-1>l&&d-1>r?($(".back").removeClass("back").next().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".front").removeClass("front").next().addClass("front")):t===d-1?($(".back").removeClass("back").next().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".slider li").removeClass("front").first().addClass("front")):l===d-1?($(".back").removeClass("back").next().addClass("back"),$(".slider li").removeClass("current").first().addClass("current"),$(".front").removeClass("front").next().addClass("front")):($(".slider li").removeClass("back").first().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".front").removeClass("front").next().addClass("front")):0!==r&&0!==l&&0!==t?($(".back").removeClass("back").prev().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):0===r?($(".slider li").removeClass("back").last().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):0===l?($(".back").removeClass("back").prev().addClass("back"),$(".slider li").removeClass("current").last().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):($(".back").removeClass("back").prev().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".slider li").removeClass("front").last().addClass("front")),$(".slider").removeClass("swap")},300)})}e(),s(),r(),a()});

}
/*
     FILE ARCHIVED ON 04:53:48 Aug 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:08:52 Mar 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 111.052
  exclusion.robots: 0.092
  exclusion.robots.policy: 0.082
  cdx.remote: 0.064
  esindex: 0.009
  LoadShardBlock: 76.884 (3)
  PetaboxLoader3.datanode: 82.716 (5)
  load_resource: 146.231
  PetaboxLoader3.resolve: 106.252
  loaddict: 33.48
*/