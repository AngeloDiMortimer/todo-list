(()=>{"use strict";let t;class e{constructor(t,e,n,a){this.title=t,this.details=e,this.date=n,this.priority=a}}function n(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t){n(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===r(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function i(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var u=864e5;function d(t){n(1,arguments);var e=o(t),a=e.getUTCDay(),r=(a<1?7:0)+a-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function s(t){n(1,arguments);var e=o(t),a=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(a+1,0,4),r.setUTCHours(0,0,0,0);var i=d(r),u=new Date(0);u.setUTCFullYear(a,0,4),u.setUTCHours(0,0,0,0);var s=d(u);return e.getTime()>=i.getTime()?a+1:e.getTime()>=s.getTime()?a:a-1}var l=6048e5;var c={};function m(){return c}function h(t,e){var a,r,u,d,s,l,c,h;n(1,arguments);var f=m(),g=i(null!==(a=null!==(r=null!==(u=null!==(d=null==e?void 0:e.weekStartsOn)&&void 0!==d?d:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(h=c.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==a?a:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function f(t,e){var a,r,u,d,s,l,c,f;n(1,arguments);var g=o(t),v=g.getUTCFullYear(),w=m(),b=i(null!==(a=null!==(r=null!==(u=null!==(d=null==e?void 0:e.firstWeekContainsDate)&&void 0!==d?d:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==r?r:null===(c=w.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,b),y.setUTCHours(0,0,0,0);var p=h(y,e),C=new Date(0);C.setUTCFullYear(v,0,b),C.setUTCHours(0,0,0,0);var T=h(C,e);return g.getTime()>=p.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}var g=6048e5;function v(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const w=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return v("yy"===e?a%100:a,e.length)},b=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):v(n+1,2)},y=function(t,e){return v(t.getUTCDate(),e.length)},p=function(t,e){return v(t.getUTCHours()%12||12,e.length)},C=function(t,e){return v(t.getUTCHours(),e.length)},T=function(t,e){return v(t.getUTCMinutes(),e.length)},M=function(t,e){return v(t.getUTCSeconds(),e.length)},S=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return v(Math.floor(a*Math.pow(10,n-3)),e.length)};var E={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return w(t,e)},Y:function(t,e,n,a){var r=f(t,a),o=r>0?r:1-r;return"YY"===e?v(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):v(o,e.length)},R:function(t,e){return v(s(t),e.length)},u:function(t,e){return v(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return v(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return v(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return b(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return v(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,a,r){var u=function(t,e){n(1,arguments);var a=o(t),r=h(a,e).getTime()-function(t,e){var a,r,o,u,d,s,l,c;n(1,arguments);var g=m(),v=i(null!==(a=null!==(r=null!==(o=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(d=e.locale)||void 0===d||null===(s=d.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==r?r:null===(l=g.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==a?a:1),w=f(t,e),b=new Date(0);return b.setUTCFullYear(w,0,v),b.setUTCHours(0,0,0,0),h(b,e)}(a,e).getTime();return Math.round(r/g)+1}(t,r);return"wo"===e?a.ordinalNumber(u,{unit:"week"}):v(u,e.length)},I:function(t,e,a){var r=function(t){n(1,arguments);var e=o(t),a=d(e).getTime()-function(t){n(1,arguments);var e=s(t),a=new Date(0);return a.setUTCFullYear(e,0,4),a.setUTCHours(0,0,0,0),d(a)}(e).getTime();return Math.round(a/l)+1}(t);return"Io"===e?a.ordinalNumber(r,{unit:"week"}):v(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):y(t,e)},D:function(t,e,a){var r=function(t){n(1,arguments);var e=o(t),a=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=a-e.getTime();return Math.floor(r/u)+1}(t);return"Do"===e?a.ordinalNumber(r,{unit:"dayOfYear"}):v(r,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return v(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return v(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return v(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return p(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):C(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):v(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):v(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):T(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M(t,e)},S:function(t,e){return S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return D(r);case"XXXX":case"XX":return x(r);default:return x(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return D(r);case"xxxx":case"xx":return x(r);default:return x(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+k(r,":");default:return"GMT"+x(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+k(r,":");default:return"GMT"+x(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return v(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return v((a._originalDate||t).getTime(),e.length)}};function k(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+v(o,2)}function D(t,e){return t%60==0?(t>0?"-":"+")+v(Math.abs(t)/60,2):x(t,e)}function x(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+v(Math.floor(r/60),2)+n+v(r%60,2)}const P=E;var U=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},W=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},L={p:W,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return U(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(r,e)).replace("{{time}}",W(o,e))}};const Y=L;var N=["D","DD"],O=["YY","YYYY"];function q(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function I(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var j,F={date:I({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:I({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:I({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},H={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function z(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function A(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,u=o[0],d=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(d)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(u))return n}(d):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(u))return n}(d);return i=t.valueCallback?t.valueCallback(s):s,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(u.length)}}}const Q={code:"en-US",formatDistance:function(t,e,n){var a,r=B[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:F,formatRelative:function(t,e,n,a){return H[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(j={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(j.matchPattern);if(!n)return null;var a=n[0],r=t.match(j.parsePattern);if(!r)return null;var o=j.valueCallback?j.valueCallback(r[0]):r[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(a.length)}}),era:A({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:A({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:A({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:A({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:A({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var G=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,X=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,J=/^'([^]*?)'?$/,R=/''/g,$=/[a-zA-Z]/;function _(t,e,r){var u,d,s,l,c,h,f,g,v,w,b,y,p,C,T,M,S,E;n(2,arguments);var k=String(e),D=m(),x=null!==(u=null!==(d=null==r?void 0:r.locale)&&void 0!==d?d:D.locale)&&void 0!==u?u:Q,U=i(null!==(s=null!==(l=null!==(c=null!==(h=null==r?void 0:r.firstWeekContainsDate)&&void 0!==h?h:null==r||null===(f=r.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==c?c:D.firstWeekContainsDate)&&void 0!==l?l:null===(v=D.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==s?s:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=i(null!==(b=null!==(y=null!==(p=null!==(C=null==r?void 0:r.weekStartsOn)&&void 0!==C?C:null==r||null===(T=r.locale)||void 0===T||null===(M=T.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==p?p:D.weekStartsOn)&&void 0!==y?y:null===(S=D.locale)||void 0===S||null===(E=S.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!x.localize)throw new RangeError("locale must contain localize property");if(!x.formatLong)throw new RangeError("locale must contain formatLong property");var L=o(t);if(!function(t){if(n(1,arguments),!function(t){return n(1,arguments),t instanceof Date||"object"===a(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}(L))throw new RangeError("Invalid time value");var B=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(L),I=function(t,e){return n(2,arguments),function(t,e){n(2,arguments);var a=o(t).getTime(),r=i(e);return new Date(a+r)}(t,-i(e))}(L,B),j={firstWeekContainsDate:U,weekStartsOn:W,locale:x,_originalDate:L};return k.match(X).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,Y[e])(t,x.formatLong):t})).join("").match(G).map((function(n){if("''"===n)return"'";var a,o,i=n[0];if("'"===i)return(o=(a=n).match(J))?o[1].replace(R,"'"):a;var u,d=P[i];if(d)return null!=r&&r.useAdditionalWeekYearTokens||(u=n,-1===O.indexOf(u))||q(n,e,String(t)),null!=r&&r.useAdditionalDayOfYearTokens||!function(t){return-1!==N.indexOf(t)}(n)||q(n,e,String(t)),d(I,n,x.localize,j);if(i.match($))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return n})).join("")}const V=document.getElementById("main"),K=document.getElementById("new-todo"),Z=document.getElementById("overlay-add"),tt=document.getElementById("overlay-bg"),et=document.getElementById("todo-form"),nt=document.getElementById("close-modal"),at=document.getElementById("todo-submit"),rt=document.getElementById("overlay-details"),ot=document.getElementById("close-details"),it=e=>{const n=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),o=document.createElement("button"),i=document.createElement("div"),u=document.createElement("div"),d=document.createElement("div"),s=document.createElement("img"),l=document.createElement("img");n.classList.add("item-todo"),a.classList.add("todo-complete"),r.classList.add("todo-title"),o.classList.add("details-btn"),i.classList.add("todo-date"),u.classList.add("todo-edit"),u.classList.add("icon"),d.classList.add("todo-del"),d.classList.add("icon"),r.textContent=e.title,o.textContent="DETAILS";const c=new Date(e.date),m=`${_(c,"MMM")} ${_(c,"do")}`;i.textContent=m,s.src="images/note-edit.svg",s.alt="edit icon",l.src="images/trash-can.svg",l.alt="delete icon",d.appendChild(l),u.appendChild(s),n.appendChild(a),n.appendChild(r),n.appendChild(o),n.appendChild(i),n.appendChild(u),n.appendChild(d),V.appendChild(n),o.addEventListener("click",(t=>{dt(rt,tt),ut(e,m)})),tt.addEventListener("click",(()=>{st(rt,tt)})),d.addEventListener("click",(()=>{(e=>{t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));let n=t.findIndex((t=>t.title==e));t.splice(n,1),localStorage.setItem("todos",JSON.stringify(t))})(e.title),n.remove()}))},ut=t=>{const e=document.getElementById("details-cont");e.innerHTML="";const n=document.createElement("div");n.classList.add("details-title"),n.textContent=t.title;const a=document.createElement("div");a.classList.add("details-project");const r=document.createElement("span");r.textContent="Project: ",document.createElement("span");const o=document.createElement("div");o.classList.add("details-priority");const i=document.createElement("span");i.textContent="Priority: ";const u=document.createElement("span"),d=t.priority,s=d.charAt(0).toUpperCase()+d.slice(1);u.textContent=s;const l=document.createElement("div");l.classList.add("details-date");const c=document.createElement("span"),m=new Date(t.date),h=`${_(m,"MMMM")} ${_(m,"do")}, ${_(m,"y")}`,f=document.createElement("span");f.textContent=h;const g=document.createElement("div");g.classList.add("details-text");const v=document.createElement("span");v.textContent="Details: ";const w=document.createElement("span");w.textContent=t.details,a.appendChild(r),o.appendChild(i),o.appendChild(u),l.appendChild(c),l.appendChild(f),g.appendChild(v),g.appendChild(w),e.appendChild(n),e.appendChild(a),e.appendChild(o),e.appendChild(l),e.appendChild(g)},dt=(t,e)=>{t.classList.add("active"),e.classList.add("active")},st=(t,e)=>{t.classList.remove("active"),e.classList.remove("active")};(()=>{let n=JSON.parse(localStorage.getItem("todos"));for(let t in n)it(n[t]);K.addEventListener("click",(t=>{et.reset(),dt(Z,tt)})),tt.addEventListener("click",(t=>{st(Z,tt)})),nt.addEventListener("click",(t=>{st(Z,tt)})),ot.addEventListener("click",(t=>{st(rt,tt)})),at.addEventListener("click",(n=>{var a;a=(()=>{let n=(()=>{const t=document.getElementById("new-todo-title").value,n=document.getElementById("new-todo-details").value,a=document.getElementById("new-todo-date").value,r=document.querySelector('input[name="create-new-priority"]:checked').value;return new e(t,n,a,r)})();return t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos")),t.push(n),localStorage.setItem("todos",JSON.stringify(t)),t})(),it(a[a.length-1]),st(Z,tt)}))})()})();