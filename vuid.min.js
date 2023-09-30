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

(function(t){var e=false,n,o,i,r=typeof t.navigator.sendBeacon==="function",u="https://web.archive.org/web/20220820045515/https://vimeo.com/ablincoln/vuid",a;function f(){return 2147483647}function c(t,e){if(arguments.length===0){e=0;t=f()}return Math.floor(Math.random()*(t-e+1))+e}function d(t){var e=(new Date).getTime()/1e3,n=parseInt(e,10);return t?e:Math.round((e-n)*1e3)/1e3+" "+n}function v(t,e,n){var o,i,r,u;e|=0;o=Math.pow(10,e);t*=o;u=t>0|-(t<0);r=t%1===.5*u;i=Math.floor(t);if(r){t=i+(u>0)}return(r?t:Math.round(t))/o}function h(t){var e=t+"",n=e.charCodeAt(0),o,i;if(55296<=n&&n<=56319){o=n;if(e.length===1){return n}i=e.charCodeAt(1);return(o-55296)*1024+(i-56320)+65536}if(56320<=n&&n<=57343){return n}return n}function g(){return v(c()/f()*2147483647)}function l(t){var e=t.toString(),n=1,o,i,r;if(typeof e!=="undefined"&&e!==""){n=0;o=e.length-1;for(o;o>=0;o--){i=h(e.charAt(o));n=(n<<6&268435455)+i+(i<<14);r=n&266338304;if(r){n^=r>>21}}}return n}function s(t,e,n,o,i,r,u){var a,f;if(arguments.length>1){if(n){a=new Date;a.setDate(a.getDate()+n)}document.cookie=t+"="+encodeURIComponent(e)+(a?"; expires="+a.toGMTString():"")+(o?"; path="+o:"")+(i?"; domain="+i:"")+(r?"; secure":"")+(u?"; samesite="+u:"");return true}return decodeURIComponent((("; "+document.cookie).split("; "+t+"=")[1]||"").split(";")[0])}n={cookie:s("vuid")};if(!n.cookie){n.cookie="pl"+((g()^l(d()))&2147483647).toString()+"."+((g()^l(t.navigator.userAgent)).toString()&2147483647);e=true}o=t.location.hostname.split(".");if(o.length>2){o.shift()}s("vuid",n.cookie,365*2,"/","."+o.join("."),true,"None");if(e&&s("vuid")){if(typeof t._vuid==="object"&&t._vuid.length){for(a=0;a<t._vuid.length;a++){if(typeof t._vuid[a]==="object"&&t._vuid[a].length){u+=(a===0?"?":"&")+t._vuid[a][0]+(t._vuid[a][1]?"="+t._vuid[a][1]:"")}}}if(r){t.navigator.sendBeacon(u)}else{i=new Image;i.src=u}}})(window);
//# sourceMappingURL= 

}
/*
     FILE ARCHIVED ON 04:55:15 Aug 20, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:08:57 Mar 10, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.105
  cdx.remote: 0.179
  esindex: 0.016
  LoadShardBlock: 380.185 (6)
  PetaboxLoader3.resolve: 388.467 (3)
  PetaboxLoader3.datanode: 114.989 (7)
  load_resource: 182.994
*/