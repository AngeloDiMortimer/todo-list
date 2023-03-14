(()=>{"use strict";let t;class e{constructor(t,e,n,a){this.title=t,this.details=e,this.date=n,this.priority=a}}const n=()=>{t=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"))};function a(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t){a(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===i(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function d(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var u=864e5;function s(t){a(1,arguments);var e=o(t),n=e.getUTCDay(),r=(n<1?7:0)+n-1;return e.setUTCDate(e.getUTCDate()-r),e.setUTCHours(0,0,0,0),e}function l(t){a(1,arguments);var e=o(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var i=s(r),d=new Date(0);d.setUTCFullYear(n,0,4),d.setUTCHours(0,0,0,0);var u=s(d);return e.getTime()>=i.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}var c=6048e5;var m={};function h(){return m}function f(t,e){var n,r,i,u,s,l,c,m;a(1,arguments);var f=h(),g=d(null!==(n=null!==(r=null!==(i=null!==(u=null==e?void 0:e.weekStartsOn)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.weekStartsOn)&&void 0!==i?i:f.weekStartsOn)&&void 0!==r?r:null===(c=f.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=o(t),p=v.getUTCDay(),w=(p<g?7:0)+p-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function g(t,e){var n,r,i,u,s,l,c,m;a(1,arguments);var g=o(t),v=g.getUTCFullYear(),p=h(),w=d(null!==(n=null!==(r=null!==(i=null!==(u=null==e?void 0:e.firstWeekContainsDate)&&void 0!==u?u:null==e||null===(s=e.locale)||void 0===s||null===(l=s.options)||void 0===l?void 0:l.firstWeekContainsDate)&&void 0!==i?i:p.firstWeekContainsDate)&&void 0!==r?r:null===(c=p.locale)||void 0===c||null===(m=c.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==n?n:1);if(!(w>=1&&w<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,w),y.setUTCHours(0,0,0,0);var b=f(y,e),C=new Date(0);C.setUTCFullYear(v,0,w),C.setUTCHours(0,0,0,0);var T=f(C,e);return g.getTime()>=b.getTime()?v+1:g.getTime()>=T.getTime()?v:v-1}var v=6048e5;function p(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const w=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return p("yy"===e?a%100:a,e.length)},y=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):p(n+1,2)},b=function(t,e){return p(t.getUTCDate(),e.length)},C=function(t,e){return p(t.getUTCHours()%12||12,e.length)},T=function(t,e){return p(t.getUTCHours(),e.length)},E=function(t,e){return p(t.getUTCMinutes(),e.length)},M=function(t,e){return p(t.getUTCSeconds(),e.length)},S=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return p(Math.floor(a*Math.pow(10,n-3)),e.length)};var x={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return w(t,e)},Y:function(t,e,n,a){var r=g(t,a),i=r>0?r:1-r;return"YY"===e?p(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):p(i,e.length)},R:function(t,e){return p(l(t),e.length)},u:function(t,e){return p(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return p(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return p(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return y(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return p(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var i=function(t,e){a(1,arguments);var n=o(t),r=f(n,e).getTime()-function(t,e){var n,r,i,o,u,s,l,c;a(1,arguments);var m=h(),v=d(null!==(n=null!==(r=null!==(i=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(u=e.locale)||void 0===u||null===(s=u.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==i?i:m.firstWeekContainsDate)&&void 0!==r?r:null===(l=m.locale)||void 0===l||null===(c=l.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),p=g(t,e),w=new Date(0);return w.setUTCFullYear(p,0,v),w.setUTCHours(0,0,0,0),f(w,e)}(n,e).getTime();return Math.round(r/v)+1}(t,r);return"wo"===e?n.ordinalNumber(i,{unit:"week"}):p(i,e.length)},I:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=s(e).getTime()-function(t){a(1,arguments);var e=l(t),n=new Date(0);return n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0),s(n)}(e).getTime();return Math.round(n/c)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):p(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):b(t,e)},D:function(t,e,n){var r=function(t){a(1,arguments);var e=o(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=n-e.getTime();return Math.floor(r/u)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):p(r,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return p(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return p(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return p(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return C(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):T(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):p(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):p(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):E(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):M(t,e)},S:function(t,e){return S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return k(r);case"XXXX":case"XX":return L(r);default:return L(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return k(r);case"xxxx":case"xx":return L(r);default:return L(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+D(r,":");default:return"GMT"+L(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+D(r,":");default:return"GMT"+L(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return p(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return p((a._originalDate||t).getTime(),e.length)}};function D(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=e||"";return n+String(r)+o+p(i,2)}function k(t,e){return t%60==0?(t>0?"-":"+")+p(Math.abs(t)/60,2):L(t,e)}function L(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+p(Math.floor(r/60),2)+n+p(r%60,2)}const P=x;var U=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},W=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},Y={p:W,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],i=a[2];if(!i)return U(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",U(r,e)).replace("{{time}}",W(i,e))}};const N=Y;var O=["D","DD"],q=["YY","YYYY"];function I(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var B={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function F(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}var H,A={date:F({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:F({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:F({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},j={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function z(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,i=null!=n&&n.width?String(n.width):r;a=t.formattingValues[i]||t.formattingValues[r]}else{var o=t.defaultWidth,d=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[d]||t.values[o]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function Q(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;var o,d=i[0],u=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],s=Array.isArray(u)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(d))return n}(u):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(d))return n}(u);return o=t.valueCallback?t.valueCallback(s):s,{value:o=n.valueCallback?n.valueCallback(o):o,rest:e.slice(d.length)}}}const G={code:"en-US",formatDistance:function(t,e,n){var a,r=B[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:A,formatRelative:function(t,e,n,a){return j[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:z({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:z({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:z({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:z({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:z({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(H={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(H.matchPattern);if(!n)return null;var a=n[0],r=t.match(H.parsePattern);if(!r)return null;var i=H.valueCallback?H.valueCallback(r[0]):r[0];return{value:i=e.valueCallback?e.valueCallback(i):i,rest:t.slice(a.length)}}),era:Q({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Q({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Q({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Q({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Q({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var X=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,J=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,R=/^'([^]*?)'?$/,$=/''/g,_=/[a-zA-Z]/;function V(t,e,n){var i,u,s,l,c,m,f,g,v,p,w,y,b,C,T,E,M,S;a(2,arguments);var x=String(e),D=h(),k=null!==(i=null!==(u=null==n?void 0:n.locale)&&void 0!==u?u:D.locale)&&void 0!==i?i:G,L=d(null!==(s=null!==(l=null!==(c=null!==(m=null==n?void 0:n.firstWeekContainsDate)&&void 0!==m?m:null==n||null===(f=n.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==c?c:D.firstWeekContainsDate)&&void 0!==l?l:null===(v=D.locale)||void 0===v||null===(p=v.options)||void 0===p?void 0:p.firstWeekContainsDate)&&void 0!==s?s:1);if(!(L>=1&&L<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=d(null!==(w=null!==(y=null!==(b=null!==(C=null==n?void 0:n.weekStartsOn)&&void 0!==C?C:null==n||null===(T=n.locale)||void 0===T||null===(E=T.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:D.weekStartsOn)&&void 0!==y?y:null===(M=D.locale)||void 0===M||null===(S=M.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==w?w:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!k.localize)throw new RangeError("locale must contain localize property");if(!k.formatLong)throw new RangeError("locale must contain formatLong property");var W=o(t);if(!function(t){if(a(1,arguments),!function(t){return a(1,arguments),t instanceof Date||"object"===r(t)&&"[object Date]"===Object.prototype.toString.call(t)}(t)&&"number"!=typeof t)return!1;var e=o(t);return!isNaN(Number(e))}(W))throw new RangeError("Invalid time value");var Y=function(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}(W),B=function(t,e){return a(2,arguments),function(t,e){a(2,arguments);var n=o(t).getTime(),r=d(e);return new Date(n+r)}(t,-d(e))}(W,Y),F={firstWeekContainsDate:L,weekStartsOn:U,locale:k,_originalDate:W};return x.match(J).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,N[e])(t,k.formatLong):t})).join("").match(X).map((function(a){if("''"===a)return"'";var r,i,o=a[0];if("'"===o)return(i=(r=a).match(R))?i[1].replace($,"'"):r;var d,u=P[o];if(u)return null!=n&&n.useAdditionalWeekYearTokens||(d=a,-1===q.indexOf(d))||I(a,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!function(t){return-1!==O.indexOf(t)}(a)||I(a,e,String(t)),u(B,a,k.localize,F);if(o.match(_))throw new RangeError("Format string contains an unescaped latin alphabet character `"+o+"`");return a})).join("")}const K=document.getElementById("main"),Z=document.getElementById("new-todo"),tt=document.getElementById("overlay-add"),et=document.getElementById("overlay-bg"),nt=document.getElementById("todo-form"),at=document.getElementById("close-modal"),rt=document.querySelectorAll(".create-new-priority"),it=document.getElementById("todo-submit"),ot=document.getElementById("overlay-details"),dt=document.getElementById("close-details"),ut=document.getElementById("overlay-edit"),st=document.getElementById("close-edit"),lt=e=>{const a=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("button"),d=document.createElement("div"),u=document.createElement("div"),s=document.createElement("div"),l=document.createElement("img"),c=document.createElement("img");a.classList.add("item-todo"),r.classList.add("todo-complete"),i.classList.add("todo-title"),o.classList.add("details-btn"),d.classList.add("todo-date"),u.classList.add("todo-edit"),u.classList.add("icon"),s.classList.add("todo-del"),s.classList.add("icon"),i.textContent=e.title,o.textContent="DETAILS";const m=new Date(e.date),h=`${V(m,"MMM")} ${V(m,"do")}`;d.textContent=h,l.src="images/note-edit.svg",l.alt="edit icon",c.src="images/trash-can.svg",c.alt="delete icon",s.appendChild(c),u.appendChild(l),a.appendChild(r),a.appendChild(i),a.appendChild(o),a.appendChild(d),a.appendChild(u),a.appendChild(s),K.appendChild(a),o.addEventListener("click",(t=>{ht(ot,et),mt(e)})),u.addEventListener("click",(t=>{ht(ut,et),ct(e)})),s.addEventListener("click",(()=>{(e=>{n();let a=t.findIndex((t=>t.title==e));t.splice(a,1),console.log(a),localStorage.setItem("todos",JSON.stringify(t))})(e.title),a.remove()}))},ct=a=>{const r=document.getElementById("edit-content");r.innerHTML="";const i=document.createElement("form"),o=document.createElement("div"),d=document.createElement("textarea"),u=document.createElement("textarea"),s=document.createElement("div"),l=document.createElement("div"),c=document.createElement("input"),m=document.createElement("div"),h=document.createElement("div"),f=document.createElement("div"),g=document.createElement("input"),v=document.createElement("label"),p=document.createElement("input"),w=document.createElement("label"),y=document.createElement("input"),b=document.createElement("label"),C=document.createElement("input");i.classList.add("edit-form"),o.classList.add("edit-entry"),d.classList.add("create-edit-input"),d.placeholder="Title: Pay the rent",d.id="edit-todo-title",d.name="edit-todo",d.maxLength="40",d.setAttribute("required",""),u.classList.add("create-edit-input"),u.placeholder="Details: e.g internet, phone, rent.",u.id="edit-todo-details",u.name="edit-todo",u.maxLength="40",s.classList.add("create-edit-date"),l.classList.add("edit-date-title"),l.textContent="Due Date:",c.classList.add("create-edit-date-input"),c.type="date",c.id="edit-todo-date",c.name="edit-todo",c.setAttribute("required",""),m.classList.add("edit-priority-wrapper"),h.classList.add("edit-priority"),f.classList.add("priority-title"),f.textContent="Priority:",g.type="radio",g.id="create-edit low",g.name="create-edit-priority",g.value="low",g.setAttribute("required",""),v.classList.add("create-edit-priority"),v.classList.add("low"),v.htmlFor="create-edit-low",v.textContent="Low",p.type="radio",p.id="create-edit medium",p.name="create-edit-priority",p.value="medium",p.setAttribute("required",""),w.classList.add("create-edit-priority"),w.classList.add("medium"),w.htmlFor="create-edit-medium",w.textContent="Medium",y.type="radio",y.id="create-edit high",y.name="create-edit-priority",y.value="high",y.setAttribute("required",""),b.classList.add("create-edit-priority"),b.classList.add("high"),b.htmlFor="create-edit-high",b.textContent="High",C.classList.add("create-edit-todo-submit"),C.type="button",C.id="edit-submit",C.value="CONFIRM EDIT",h.appendChild(f),h.appendChild(g),h.appendChild(v),h.appendChild(p),h.appendChild(w),h.appendChild(y),h.appendChild(b),m.appendChild(h),m.appendChild(C),s.appendChild(l),s.appendChild(c),o.appendChild(d),o.appendChild(u),o.appendChild(s),o.appendChild(m),i.appendChild(o),r.appendChild(i),C.addEventListener("click",(r=>{(a=>{let r=(()=>{const t=document.getElementById("edit-todo-title").value,n=document.getElementById("edit-todo-details").value,a=document.getElementById("edit-todo-date").value,r=document.querySelector('input[name="create-edit-priority"]:checked').value;return new e(t,n,a,r)})();n();let i=t.findIndex((t=>t.title==a));t[i]=r,localStorage.setItem("todos",JSON.stringify(t))})(a.title),K.innerHTML="";let i=JSON.parse(localStorage.getItem("todos"));for(let t in i)lt(i[t]);ft(ut,et)}))},mt=t=>{const e=document.getElementById("details-cont");e.innerHTML="";const n=document.createElement("div");n.classList.add("details-title"),n.textContent=t.title;const a=document.createElement("div");a.classList.add("details-priority");const r=document.createElement("span");r.textContent="Priority: ",r.classList.add("span-det");const i=document.createElement("span"),o=t.priority,d=o.charAt(0).toUpperCase()+o.slice(1);i.textContent=d;const u=document.createElement("div");u.classList.add("details-date");const s=document.createElement("span");s.classList.add("span-det"),s.textContent="Due Date: ";const l=new Date(t.date),c=`${V(l,"MMMM")} ${V(l,"do")}, ${V(l,"y")}`,m=document.createElement("span");m.textContent=c;const h=document.createElement("div");h.classList.add("details-text");const f=document.createElement("span");f.textContent="Details: ",f.classList.add("span-det");const g=document.createElement("span");g.textContent=t.details,a.appendChild(r),a.appendChild(i),u.appendChild(s),u.appendChild(m),h.appendChild(f),h.appendChild(g),e.appendChild(n),e.appendChild(a),e.appendChild(u),e.appendChild(h)},ht=(t,e)=>{t.classList.add("active"),e.classList.add("active")},ft=(t,e)=>{t.classList.remove("active"),e.classList.remove("active")},gt=()=>{Z.addEventListener("click",(t=>{nt.reset(),ht(tt,et)})),et.addEventListener("click",(t=>{ft(tt,et),ft(ot,et),ft(ut,et)})),at.addEventListener("click",(t=>{ft(tt,et)})),dt.addEventListener("click",(t=>{ft(ot,et)})),st.addEventListener("click",(t=>{ft(ut,et)})),rt.forEach((t=>{t.addEventListener("click",(t=>{(t=>{rt.forEach((t=>{t.classList.remove("active")})),t.target.textContent.toLowerCase(),t.target.classList.add("active")})(t)}))})),it.addEventListener("click",(a=>{var r;r=(()=>{let a=(()=>{const t=document.getElementById("new-todo-title").value,n=document.getElementById("new-todo-details").value,a=document.getElementById("new-todo-date").value,r=document.querySelector('input[name="create-new-priority"]:checked').value;return new e(t,n,a,r)})();return n(),t.push(a),localStorage.setItem("todos",JSON.stringify(t)),t})(),lt(r[r.length-1]),ft(tt,et)}))};(()=>{let t=JSON.parse(localStorage.getItem("todos"));for(let e in t)lt(t[e]);gt()})()})();