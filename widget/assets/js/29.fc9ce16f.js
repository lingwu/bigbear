webpackJsonp([29],{1:function(e,t,n){"use strict";function r(e,t,n,r){return"function"==typeof t&&(r=n,n=t,t=void 0),"function"!=typeof n&&(r=n,n=void 0),{url:e,data:t,fnSuc:n,dataType:r}}var a=n(0),o=n.n(a),i=n(17),s=n.n(i),u=n(3),l=n.n(u),p=n(8),m=(n.n(p),n(9)),d=n.n(m),c=n(18),f=(n.n(c),n(19)),h=n.n(f),g=n(4),v=n.n(g),b=n(16),w=n.n(b),y={},E=/android/gi.test(navigator.appVersion),x=function(){var e=window.localStorage;return E&&(e=window.os.localStorage()),e};y.trim=function(e){return String.prototype.trim?null===e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},y.trimAll=function(e){return e.replace(/\s*/g,"")},y.isElement=function(e){return!(!e||1!==e.nodeType)},y.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},y.isEmptyObject=function(e){return"{}"===w()(e)},y.addEvt=function(e,t,n,r){if(!y.isElement(e))return void console.warn("$api.addEvt Function need el param, el param must be DOM Element");r=r||!1,e.addEventListener&&e.addEventListener(t,n,r)},y.rmEvt=function(e,t,n,r){if(!y.isElement(e))return void console.warn("$api.rmEvt Function need el param, el param must be DOM Element");r=r||!1,e.removeEventListener&&e.removeEventListener(t,n,r)},y.one=function(e,t,n,r){if(!y.isElement(e))return void console.warn("$api.one Function need el param, el param must be DOM Element");r=r||!1;var a=this,o=function o(){n&&n(),a.rmEvt(e,t,o,r)};a.addEvt(e,t,o,r)},y.dom=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(t)},y.domAll=function(e,t){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(t)},y.byId=function(e){return document.getElementById(e)},y.first=function(e,t){return 1===arguments.length?y.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,t+":first-child"):void 0},y.last=function(e,t){if(1===arguments.length){if(!y.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var n=e.children;return n[n.length-1]}if(2===arguments.length)return this.dom(e,t+":last-child")},y.eq=function(e,t){return this.dom(e,":nth-child("+t+")")},y.not=function(e,t){return this.domAll(e,":not("+t+")")},y.prev=function(e){if(!y.isElement(e))return void console.warn("$api.prev Function need el param, el param must be DOM Element");var t=e.previousSibling;return t.nodeType&&3===t.nodeType?t=t.previousSibling:void 0},y.next=function(e){if(!y.isElement(e))return void console.warn("$api.next Function need el param, el param must be DOM Element");var t=e.nextSibling;return t.nodeType&&3===t.nodeType?t=t.nextSibling:void 0},y.closest=function(e,t){if(!y.isElement(e))return void console.warn("$api.closest Function need el param, el param must be DOM Element");var n,r,a=function(e,t){var n=0,r=e.length;for(n;n<r;n++)if(e[n].isSameNode(t))return e[n];return!1};return function e(t,o){for(n=y.domAll(t.parentNode,o),r=a(n,t);!r;){if(null!==(t=t.parentNode)&&t.nodeType===t.DOCUMENT_NODE)return!1;r=e(t,o)}return r}(e,t)},y.contains=function(e,t){var n=!1;if(t===e)return n=!0;do{if((t=t.parentNode)===e)return n=!0}while(t===document.body||t===document.documentElement);return n},y.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},y.attr=function(e,t,n){return y.isElement(e)?2===arguments.length?e.getAttribute(t):3===arguments.length?(e.setAttribute(t,n),e):void 0:void console.warn("$api.attr Function need el param, el param must be DOM Element")},y.removeAttr=function(e,t){if(!y.isElement(e))return void console.warn("$api.removeAttr Function need el param, el param must be DOM Element");2===arguments.length&&e.removeAttribute(t)},y.hasCls=function(e,t){return y.isElement(e)?e.className.indexOf(t)>-1:void console.warn("$api.hasCls Function need el param, el param must be DOM Element")},y.addCls=function(e,t){if(!y.isElement(e))return void console.warn("$api.addCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.add(t);else{var n=e.className,r=n+" "+t;e.className=r}return e},y.removeCls=function(e,t){if(!y.isElement(e))return void console.warn("$api.removeCls Function need el param, el param must be DOM Element");if("classList"in e)e.classList.remove(t);else{var n=e.className,r=n.replace(t,"");e.className=r}return e},y.toggleCls=function(e,t){return y.isElement(e)?("classList"in e?e.classList.toggle(t):y.hasCls(e,t)?y.removeCls(e,t):y.addCls(e,t),e):void console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},y.val=function(e,t){if(!y.isElement(e))return void console.warn("$api.val Function need el param, el param must be DOM Element");if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=t,e;case"INPUT":case"TEXTAREA":return e.value=t,e}},y.prepend=function(e,t){return y.isElement(e)?(e.insertAdjacentHTML("afterbegin",t),e):void console.warn("$api.prepend Function need el param, el param must be DOM Element")},y.append=function(e,t){return y.isElement(e)?(e.insertAdjacentHTML("beforeend",t),e):void console.warn("$api.append Function need el param, el param must be DOM Element")},y.before=function(e,t){return y.isElement(e)?(e.insertAdjacentHTML("beforebegin",t),e):void console.warn("$api.before Function need el param, el param must be DOM Element")},y.after=function(e,t){return y.isElement(e)?(e.insertAdjacentHTML("afterend",t),e):void console.warn("$api.after Function need el param, el param must be DOM Element")},y.html=function(e,t){return y.isElement(e)?1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=t,e):void 0:void console.warn("$api.html Function need el param, el param must be DOM Element")},y.text=function(e,t){return y.isElement(e)?1===arguments.length?e.textContent:2===arguments.length?(e.textContent=t,e):void 0:void console.warn("$api.text Function need el param, el param must be DOM Element")},y.offset=function(e){if(!y.isElement(e))return void console.warn("$api.offset Function need el param, el param must be DOM Element");var t=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),n=Math.max(document.documentElement.scrollTop,document.body.scrollTop),r=e.getBoundingClientRect();return{l:r.left+t,t:r.top+n,w:e.offsetWidth,h:e.offsetHeight}},y.css=function(e,t){if(!y.isElement(e))return void console.warn("$api.css Function need el param, el param must be DOM Element");"string"==typeof t&&t.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+t)},y.cssVal=function(e,t){if(!y.isElement(e))return void console.warn("$api.cssVal Function need el param, el param must be DOM Element");if(2===arguments.length){return window.getComputedStyle(e,null).getPropertyValue(t)}},y.jsonToStr=function(e){if("object"===(void 0===e?"undefined":v()(e)))return JSON&&w()(e)},y.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},y.setStorage=function(e,t){if(2===arguments.length){var n=t;"object"===(void 0===n?"undefined":v()(n))?(n=w()(n),n="obj-"+n):n="str-"+n;var r=x();r&&r.setItem(e,n)}},y.getStorage=function(e){var t=x();if(t){var n=t.getItem(e);if(!n)return;if(0===n.indexOf("obj-"))return n=n.slice(4),JSON.parse(n);if(0===n.indexOf("str-"))return n.slice(4)}},y.rmStorage=function(e){var t=x();t&&e&&t.removeItem(e)},y.clearStorage=function(){var e=x();e&&e.clear()},y.fixIos7Bar=function(e){return y.fixStatusBar(e)},y.fixStatusBar=function(e){return y.isElement(e)?(e.style.paddingTop=window.api.safeArea.top+"px",e.style.height=window.api.safeArea.top+e.offsetHeight+"px",e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},y.fixTabBar=function(e){return y.isElement(e)?(e.style.paddingBottom=window.api.safeArea.bottom+"px",e.offsetHeight):(console.warn("$api.fixTabBar Function need el param, el param must be DOM Element"),0)},y.showProgress=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";window.api?window.api.showProgress({title:"",text:e}):h.a.open({text:e,spinnerType:"fading-circle"})},y.hideProgress=function(){window.api?window.api.hideProgress():h.a.close()},y.toast=function(e){var t=e.message,n=void 0===t?"":t,r=e.position,a=void 0===r?"top":r,o=e.duration,i=void 0===o?2e3:o;window.api?window.api.toast({msg:n,location:a,duration:i}):d()({message:n,position:a,duration:i})},y.post=function(){var e=r.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.data&&(t.data=e.data),e.dataType){var a=e.dataType.toLowerCase();"text"!==a&&"json"!==a||(t.dataType=a)}else t.dataType="json";t.method="post",window.ajax(t,function(e,t){e&&n&&n(e)})},y.get=function(){var e=r.apply(null,arguments),t={},n=e.fnSuc;if(e.url&&(t.url=e.url),e.dataType){var a=e.dataType.toLowerCase();"text"!==a&&"json"!==a||(t.dataType=a)}else t.dataType="text";t.method="get",window.api.ajax(t,function(e,t){e&&n&&n(e)})},y.sleep=function(e){return new l.a(function(t,n){setTimeout(function(){t("ok")},e)})},y.openWin=function(e){var t=e.LCB,n=e.name,r=e.url,a=e.title,i=void 0===a?"":a,u=e.fname,l=e.furl,p=e.hasLeft,m=void 0!==p&&p,d=e.hasRight,c=void 0!==d&&d,f=e.jumpTime,h=void 0===f?100:f,g=e.data,v=void 0===g?{}:g,b=s()(e,["LCB","name","url","title","fname","furl","hasLeft","hasRight","jumpTime","data"]);if(window.api){var w={name:n,url:r,bounces:!1,slidBackEnabled:!1,pageParam:o()({},b)};if("function"==typeof t){var E="LCB"+Date.now().valueOf()+Math.random();y.addEventListener({name:E},t),w.pageParam.LCBName=E}if("function"==typeof v.callback){var x="EVENT"+Date.now().valueOf()+Math.random();y.addEventListener({name:x},v.callback),v.eventName=x,delete v.callback}void 0!==u&&(w.pageParam.wtitle=i,w.pageParam.fname=u,w.pageParam.furl=l,w.pageParam.hasLeft=m,w.pageParam.hasRight=c,w.pageParam.data=v),setTimeout(function(){window.api.openWin(w)},h)}else l&&(window.location.href=l.replace("./","/"))},y.addEventListener=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};window.api&&window.api.addEventListener(e,function(n,r){t(o()({},n,{value:"string"==typeof n.value?JSON.parse(n.value):n.value}),r),!1!==e.delEvent&&window.api.removeEventListener({name:e.name})})},y.sendEvent=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};window.api&&window.api.sendEvent({name:e,extra:"object"===(void 0===t?"undefined":v()(t))?w()(t):t})},y.closeWin=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};window.api&&(window.api.pageParam.eventName&&""!==window.api.pageParam.eventName&&y.sendEvent(window.api.pageParam.eventName,e),window.api.closeWin())},y.back=function(){window.api&&(window.api.pageParam.LCBName&&""!==window.api.pageParam.LCBName&&y.sendEvent(window.api.pageParam.LCBName),window.api.closeWin())},y.confirm=function(e){var t=e.title,n=void 0===t?"":t,r=e.content,a=void 0===r?"":r,o=e.callback,i=void 0===o?function(){}:o;window.api?api.confirm({title:n,msg:a,buttons:["确定","取消"]},function(e,t){switch(e.buttonIndex){case 1:i(e,t)}}):!0===confirm(a)&&i()},y.urlParse=function(e){var t=e.split("?"),n=t[0],r=t[1].split("&"),a={};return r.foreach(function(e){a[e.split("=")[0]]=unescape(e.split("=")[1])}),{base:n,params:a}},y.openWebPage=function(e){if(window.api)switch(window.api.systemType){case"android":window.api.openApp({androidPkg:"android.intent.action.VIEW",mimeType:"text/html",uri:e},function(e,t){});break;case"ios":var t=y.urlParse(e),n=t.base,r=t.params;window.api.openApp({iosUrl:n,appParam:{appParam:r}})}else window.open(e)},y.getPicUrl=function(e,t){var n=e.split("/");if("test.mangotmall.com"!==n[2])return e;var r=t?t+"_":"";return n[n.length-1]=r+n[n.length-1],n.join("/")},y.backCloseW=function(){var e=0;window.api.addEventListener({name:"keyback"},function(t,n){e?1==e&&window.api.closeWidget():(e=1,y.toast({position:"top",message:"再点一次退出应用"}),setTimeout(function(){e=0},2e3))})},t.a=y},157:function(e,t,n){"use strict";t.a={IdCard:/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/,plate:/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/,bdV9:/^\d+$/,positiveInteger:/^[1-9]*[1-9][0-9]*$/,companyCode:/^[0-9a-zA-Z\-_]+$/,fax:/^[+]{0,1}(\d){1,3}?([-]?(\d){1,12})+$/,qq:/^[1-9]\d{4,10}$/,bankNo:/^(([0-9]{1,100}-[0-9]{1,100}|[0-9]{1,100}))$/,bdName:/^[0-9a-zA-Z\u0391-\uFFE5]+$/,number:/^\d+$/,unEmpty:/^\S+$/,username:/^[a-z_0-9]{2,16}$/,password:/^[a-zA-Z_0-9]{6,32}$/,mobPhone:/^0?(13|14|15|16|17|18|19)\d{9}$/,captcha:/^\d{4}$/,smsVerify:/^\d{4}$/,telPhone:/^(\d{3,4}-?\d{7,8})$/,phone:/^(\d{3,4}-?\d{7,8})$|^0?(13|15|18|14|17|19)\d{9}$/,phoneCode:/^(\d{4,6})$/,personCode:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,bankCard:/^(\d{16}|\d{19})$/,integer:/^[0-9][0-9]*$/,email:/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,url:/^([a-z]+:\/\/)?([a-z]([a-z0-9-]*\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-z][a-z0-9_]*)?$/,httpUrl:/^(http|https):\/\/([a-z]([a-z0-9-]*\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-z][a-z0-9_]*)?$/}},383:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),a=n(843),o=n.n(a),i=n(14),s=(n.n(i),n(15)),u=(n.n(s),n(13));n.n(u);window.apiready=function(){document.body.addEventListener("touchstart",function(){}),new r.default({el:"#app",render:function(e){return e(o.a)}})}},479:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=n.n(r),o=n(21),i=n.n(o),s=n(20),u=n.n(s),l=n(169),p=n.n(l),m=n(200),d=n.n(m),c=n(154),f=n.n(c),h=n(27),g=n.n(h),v=n(6),b=n(153),w=(n.n(b),n(157)),y=n(1);t.default={data:function(){var e=this;return{id:window.api.pageParam.id||null,form:{name:window.api.pageParam.baseInfo.name||"",sex:window.api.pageParam.baseInfo.sex||0===window.api.pageParam.baseInfo.sex?window.api.pageParam.baseInfo.sex:1,birthday:window.api.pageParam.baseInfo.birthday||Date.parse(new Date),houseHold:window.api.pageParam.baseInfo.houseHold||[],address:window.api.pageParam.baseInfo.address||[],street:window.api.pageParam.baseInfo.street||"",phone:window.api.pageParam.baseInfo.phone||"",email:window.api.pageParam.baseInfo.email||"",introduction:window.api.pageParam.introduction},nameRules:[{validate:function(e){return!!e},message:"必须填写姓名"}],birthdayRules:[{validate:function(e){return e},message:"必须填写出生年月"}],houseHoldRules:[{validate:function(t){return e.houseHoldText.length>0},message:"必须填写籍贯"}],addressRules:[{validate:function(t){return e.addressText.length>0},message:"必须填写地址信息"}],streetRules:[{validate:function(t){return e.form.street.length>0},message:"必须填写街道信息"}],phoneRules:[{validate:function(t){return w.a.mobPhone.test(e.form.phone)},message:"请填写正确的手机号码"}],emailRules:[{validate:function(t){return w.a.email.test(e.form.email)},message:"请填写正确的电子邮箱"}]}},computed:{birthdayText:function(){return new Date(this.form.birthday)},houseHoldText:function(){return this.form.houseHold.map(function(e){return e.label}).join(" / ")},addressText:function(){return this.form.address.map(function(e){return e.label}).join(" / ")}},components:{Button:g.a,Form:b.Form,FormItem:b.FormItem,TextField:f.a,Radio:d.a,DateInput:p.a},methods:{create:function(){var e=this;return u()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return y.a.showProgress(),t.next=3,v.a.createUserBaesInfo(e.form);case 3:n=t.sent,y.a.hideProgress(),t.t0=n.code,t.next=0===t.t0?8:10;break;case 8:return y.a.closeWin(n.result.resumeInfo),t.abrupt("break",12);case 10:return y.a.toast({position:"top",message:"基本信息创建失败，请稍后重试！！"}),t.abrupt("break",12);case 12:case"end":return t.stop()}},t,e)}))()},edit:function(){var e=this;return u()(i.a.mark(function t(){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return y.a.showProgress(),t.next=3,v.a.updateUserBaesInfo(a()({},e.form,{resumeId:e.id}));case 3:n=t.sent,y.a.hideProgress(),t.t0=n.code,t.next=0===t.t0?8:10;break;case 8:return y.a.closeWin(),t.abrupt("break",12);case 10:return y.a.toast({position:"top",message:"基本信息编辑失败，请稍后重试！！"}),t.abrupt("break",12);case 12:case"end":return t.stop()}},t,e)}))()},changeBirthday:function(e){this.form.birthday=e.valueOf()},houseHoldHandle:function(){var e=this;y.a.openWin({name:"areaSelector",url:"../win.html",title:"选择户籍",fname:"areaSelector_f",furl:"./common/areaSelector.html",hasLeft:1,data:{nameSpace:"areaSelector",area:this.form.houseHold,level:2,callback:function(t,n){e.form.houseHold=t.value}}})},addressHandle:function(){var e=this;y.a.openWin({name:"areaSelector",url:"../win.html",title:"选择现居地",fname:"areaSelector_f",furl:"./common/areaSelector.html",hasLeft:1,data:{nameSpace:"areaSelector",area:this.form.address,level:3,callback:function(t,n){e.form.address=t.value}}})},submit:function(){var e=this;this.$refs.form.validate().then(function(t){!0===t&&(e.id?e.edit():e.create())})}},mounted:function(){}}},5:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return g});var r=n(12),a=n.n(r),o=n(0),i=n.n(o),s=n(26),u=n.n(s),l=n(25),p=n.n(l),m=n(7),d={code:0,message:"成功",result:{}},c={default:"",test:"test.mangotmall.com",pro:"www.mangotmall.com"},f={"id|+1":1,companyname:"mock GET @CTITLE(2,20)",post:"mock GET @CTITLE(2,10)",starttime:1537146097,endtime:1537146097,jobcontent:"mock GET @CTITLE(20,100)",uid:0},h=a()({},c.test,[{isMock:!0,method:"GET",router:"/api/Internshipexp/internshipexpBy",result:function(e){return i()({},d,{result:{"internshipExpInfo|1-10":[i()({},f)]}})}},{method:"POST",router:"/api/index/get_city",result:function(e){return i()({},d,{result:{demo:e.demo}})}},{method:"GET",router:"/api/Area",result:function(e){return i()({},d,{result:{areaList:m.a}})}},{method:"GET",router:"/api/school",result:function(e){return i()({},d,{result:{list:[{label:"111",value:1111},{label:"222",value:222}]}})}}]),g=function(e){var t=e.url,n=e.method,r=e.params,a=void 0===r?{}:r,o=e.host,s=void 0===o?"":o,l=e.version,m=void 0===l?"":l,d={isMock:!1};return void 0!==h[s]&&h[s].forEach(function(e){if(e.method.toUpperCase()===n.toUpperCase()&&!0===e.isMock){var r=""!==m?"/"+m+"url":t;null!==u()(e.router).exec(r)&&(d=i()({},e),d.mock=p.a.mock(e.result(a)))}}),d}},6:function(e,t,n){"use strict";function r(e){var t={};if(e&&"object"===(void 0===e?"undefined":d()(e))&&!Array.isArray(e)){var n=p()({},e);u()(e).forEach(function(t){(""===e[t]||null===e[t]||void 0===e[t]||Array.isArray(e[t])&&0===e[t].length||"object"===d()(e[t])&&void 0===e[t].length)&&delete n[t]}),t=n}return t}function a(e){var t=e.host,a=void 0===t?"":t,o=e.version,s=void 0===o?"":o,u=e.url,l=e.params,p=e.method,m=void 0===p?"post":p,d=n.i(v.b)({host:a,version:s,url:u,params:l,method:m});if("development"===w&&!0===d.isMock)return new f.a(function(e){e(d.mock)});var c=(new Date).getTime();return new f.a(function(e,t){var n=l;"get"===m?n={params:i()({},r(l),{_:c})}:u+="?_="+c,g.a[m](""===a?u:"http://"+a+u,n).then(function(t){e(t.data)}).catch(function(e){return f.a.reject(e)})})}var o=n(0),i=n.n(o),s=n(23),u=n.n(s),l=n(22),p=n.n(l),m=n(4),d=n.n(m),c=n(3),f=n.n(c),h=n(24),g=n.n(h),v=n(5),b=n(1),w="production",y="";switch(w){case"development":y=v.a.test;break;case"production":y=v.a.pro;break;default:y=v.a.test}g.a.defaults.baseURL=y,g.a.defaults.timeout=3e4,g.a.interceptors.request.use(function(e){return e.headers["X-Requested-With"]="XMLHttpRequest",e.headers.MG_code="5uwPulFblsIANI7BIP#a%bBo582#wOud3v%f0c1JgJRskqUTN7y4&TPUTgjkmhOjZI#oVc4Ph4Ar^ApQFy$ZlGl3T9MaIskgGWTVjqHxsP^8S^%gY#nAj9X4DV9x&b7O",e.headers.MG_key="5b10fed636fcf",e.headers.MG_token="development"===w?"6f8bade35ef87e5a6aa623519ef973582dc25205":b.a.getStorage("token")||"",e},function(e){return f.a.reject(e)}),g.a.interceptors.response.use(function(e){return e},function(e){return b.a.toast({position:"top",message:"网络错误，请稍后重试！！"}),b.a.hideProgress(),f.a.reject(e)}),t.a={demo:function(e){return a({host:y,url:"/api/index/ceshi",params:e,method:"post"})},login:function(e){return a({host:y,url:"/api/User/login",params:e})},otherlogin:function(e){return a({host:y,url:"/api/User/otherLogin",params:e})},bund:function(e){return a({host:y,url:"/api/User/bund",params:e})},logout:function(){return a({host:y,url:"/api/User/logout"})},getUserInfo:function(){return a({host:y,url:"/api/User/getUserByToken",method:"get"})},registered:function(e){return a({host:y,url:"/api/User/create",params:e})},getVerificationCode:function(e){return a({host:y,url:"/api/sms/send_code",params:e})},checkStudent:function(e){return a({host:y,url:"/api/student",params:e,method:"get"})},createStudent:function(e){return a({host:y,url:"/api/Student/create",params:e})},getStudentInfo:function(){return a({host:y,url:"/api/Student/info",method:"get"})},getAreaByAreaId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return a({host:y,url:"/api/Area",params:{areaId:e},method:"get"})},getSchoolList:function(e){return a({host:y,url:"/api/School/getSchoolBy",params:e,method:"get"})},getSessionList:function(e){return a({host:y,url:"/api/School/getYear",params:e,method:"get"})},getDepartmentList:function(e){return a({host:y,url:"/api/College/collegeBySchoolAndYear",params:e,method:"get"})},getDisciplineList:function(e){return a({host:y,url:"/api/Major/majorBy",params:e,method:"get"})},getClassListBy:function(e){return a({host:y,url:"/api/Classes/classBy",params:e,method:"get"})},addToCollection:function(e){return a({host:y,url:"/api/Collection",params:e,method:"get"})},postJob:function(e){return a({host:y,url:"/api/postJob",params:e,method:"get"})},createUserBaesInfo:function(e){return a({host:y,url:"/api/Resume/create",params:e})},deleteUserBaesInfo:function(e){return a({host:y,url:"/api/Resume/update",params:e})},updateUserBaesInfo:function(e){return a({host:y,url:"/api/Resume/update",params:e})},getUserBaseInfo:function(e){return a({host:y,url:"/api/Resume/resumeBy",params:e,method:"get"})},searchBoxValue:function(e){return a({host:y,url:"/api/job/search",params:e,method:"get"})},searchChipValue:function(e){return a({host:y,url:"/api/Hr/searchChipValue",params:e,method:"get"})},createUserEducation:function(e){return a({host:y,url:"/api/Educationexp/create",params:e})},updateUserEducation:function(e){return a({host:y,url:"/api/Educationexp/update",params:e})},getUserEducation:function(e){return a({host:y,url:"/api/Educationexp/educationexpBy",params:e,method:"get"})},createUserInternship:function(e){return a({host:y,url:"/api/Internshipexp/create",params:e})},updateUserInternship:function(e){return a({host:y,url:"/api/Internshipexp/update",params:e})},getUserInternship:function(e){return a({host:y,url:"/api/Internshipexp/internshipexpBy",params:e,method:"get"})},createUserProject:function(e){return a({host:y,url:"/api/Projectexp/create",params:e})},updateUserProject:function(e){return a({host:y,url:"/api/Projectexp/update",params:e})},getUserProject:function(e){return a({host:y,url:"/api/Projectexp/projectexpBy",params:e,method:"get"})},createUserJob:function(e){return a({host:y,url:"/api/Jobexp/create",params:e})},updateUserJob:function(e){return a({host:y,url:"/api/Jobexp/update",params:e})},getUserJob:function(e){return a({host:y,url:"/api/Jobexp/jobexpBy",params:e,method:"get"})},createUserSkill:function(e){return a({host:y,url:"/api/Skills/create",params:e})},updateUserSkill:function(e){return a({host:y,url:"/api/Skills/update",params:e})},getUserSkill:function(e){return a({host:y,url:"/api/Skills/skillsBy",params:e,method:"get"})},createUserOpus:function(e){return a({host:y,url:"/api/Opus/create",params:e})},updateUserOpus:function(e){return a({host:y,url:"/api/Opus/update",params:e})},getUserOpus:function(e){return a({host:y,url:"/api/Opus/opusBy",params:e,method:"get"})},createUserHonor:function(e){return a({host:y,url:"/api/Honor/create",params:e})},updateUserHonor:function(e){return a({host:y,url:"/api/Honor/update",params:e})},getUserHonor:function(e){return a({host:y,url:"/api/Honor/honorBy",params:e,method:"get"})},getAllPosition:function(e){return a({host:y,url:"/api/job/fuzzysearchtitle",params:e,method:"get"})},getDetailsData:function(e){return a({host:y,url:"/api/job/info",params:e,method:"get"})},pushDelivery:function(e){return a({host:y,url:"/api/Job/deliveryreresume",params:e})},getCompanyInfo:function(e){return a({host:y,url:"/api/Enterprise/info",params:e,method:"get"})},getCompanyJob:function(e){return a({host:y,url:"/api/Job/seljobsbyenterpriseid",params:e,method:"get"})},getrRaidersList:function(e){return a({host:y,url:"/api/Content/lists",params:e,method:"get"})},getRaidersArticleData:function(e){return a({host:y,url:"/api/Content/info",params:e,method:"get"})},companyRecommendList:function(e){return a({host:y,url:"/api/Enterprise/searchenteprie",params:e,method:"get"})},internshipCompany:function(e){return a({host:y,url:"/api/Internship/interviewoks",params:e,method:"get"})},carouselImgs:function(e){return a({host:y,url:"/api/Content/slides",params:e,method:"get"})},hotJobsData:function(e){return a({host:y,url:"/api/Job/recommendjobs",params:e,method:"get"})},suitablePosition:function(e){return a({host:y,url:"/api/Resume/create",params:e,method:"get"})},getAdv:function(e){return a({host:y,url:"/api/Content/seladvs",params:e,method:"get"})},userSetting:function(e){return a({host:y,url:"/api/User/update",params:e})},getEmailVerificationCode:function(e){return a({host:y,url:"/api/Email/send_code",params:e})},getMessageList:function(e){return a({host:y,url:"/api/Message/lists",params:i()({pageSize:10,page:1},e),method:"get"})},messageDoRead:function(e){return a({host:y,url:"/api/message/orderBy",params:{id:e},method:"get"})},getDeliveryList:function(e){return a({host:y,url:"/api/Job/deliveredresume",params:i()({status:"",pageSize:10,page:1},e),method:"get"})},getDeliveryDetail:function(e){return a({host:y,url:"/api/Job/deliveredresumeinfo",params:{delivertId:e},method:"get"})},getDeliveryChoice:function(e){return a({host:y,url:"/api/Job/setresumedelivertstatus",params:e})},chipsData:function(e){return a({host:y,url:"/api/Job/guesssearch",params:e,method:"get"})},planData:function(e){return a({host:y,url:"/api/Internship/plans",params:e,method:"get"})},forgetPassword:function(e){return a({host:y,url:"/api/User/forgetpassword",params:e,method:"get"})},internshipAssessmentStatus:function(e){return a({host:y,url:"/api/Internship/getinternshipstatus",params:e,method:"get"})},submitApplyForm:function(e){return a({host:y,url:"/api/Internship/selfevaluationcomment",params:e,method:"get"})},getInternshipAssessmentDetail:function(e){return a({host:y,url:"/api/Internship/getinternshipcomment",params:e,method:"get"})},getAgreementPic:function(e){return a({host:y,url:"/api/Internship/selagreement",params:e,method:"get"})},updateAgreementPic:function(e){return a({host:y,url:"/api/Internship/createagreement",params:e})},getReleaseLofList:function(e){return a({host:y,url:"/api/Internship/seljournals",params:i()({pageSize:10,page:1},e),method:"get"})},getEnterpriseInfo:function(e){return a({host:y,url:"/api/Internship/getenterpriseinfo",params:{companyId:e},method:"get"})},InternshipReportStatus:function(e){return a({host:y,url:"/api/Internship/getreportstatus",params:e,method:"get"})},createReport:function(e){return a({host:y,url:"/api/Internship/createreport",params:e,method:"post"})},getInternshipReportDetail:function(e){return a({host:y,url:"/api/Internship/reportinfo",params:e,method:"get"})},InternshipSummaryStatuss:function(e){return a({host:y,url:"/api/Internship/getsummarystatus",params:e,method:"get"})},createSummary:function(e){return a({host:y,url:"/api/Internship/createsummary",params:e,method:"post"})},getInternshipSummaryDetail:function(e){return a({host:y,url:"/api/Internship/summaryinfo",params:e,method:"get"})},createReleaseLog:function(e){return a({host:y,url:"/api/Internship/createjournal",params:e,method:"post"})}}},644:function(e,t){},7:function(e,t,n){"use strict";t.a=[]},843:function(e,t,n){function r(e){n(644)}var a=n(10)(n(479),n(907),r,"data-v-535b4e94",null);e.exports=a.exports},907:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"bodyer"},[n("div",{staticStyle:{padding:"15px"}},[n("Form",{ref:"form",attrs:{model:e.form}},[n("FormItem",{attrs:{label:"姓名",prop:"name",rules:e.nameRules}},[n("TextField",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),n("FormItem",{attrs:{label:"性别",prop:"sex"}},[n("Radio",{attrs:{value:1,label:"男"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}}),e._v(" "),n("Radio",{attrs:{value:0,label:"女"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}})],1),e._v(" "),n("FormItem",{attrs:{label:"出生年月",prop:"birthday"}},[n("DateInput",{attrs:{value:e.birthdayText,"max-date":new Date,format:"YYYY年MM月DD日","no-display":"","view-type":"list",container:"bottomSheet"},on:{change:e.changeBirthday}})],1),e._v(" "),n("FormItem",{attrs:{label:"户籍",prop:"houseHoldText",rules:e.houseHoldRules}},[n("TextField",{attrs:{readonly:""},on:{click:e.houseHoldHandle},model:{value:e.houseHoldText,callback:function(t){e.houseHoldText=t},expression:"houseHoldText"}})],1),e._v(" "),n("FormItem",{attrs:{label:"现居地",prop:"addressText",rules:e.addressRules}},[n("TextField",{attrs:{readonly:""},on:{click:e.addressHandle},model:{value:e.addressText,callback:function(t){e.addressText=t},expression:"addressText"}})],1),e._v(" "),n("FormItem",{attrs:{label:"街道",prop:"street",rules:e.streetRules}},[n("TextField",{model:{value:e.form.street,callback:function(t){e.$set(e.form,"street",t)},expression:"form.street"}})],1),e._v(" "),n("FormItem",{attrs:{label:"手机号码",prop:"phone",rules:e.phoneRules}},[n("TextField",{model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),n("FormItem",{attrs:{label:"电子邮箱",prop:"email",rules:e.emailRules}},[n("TextField",{model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1)],1)]),e._v(" "),n("div",{staticClass:"footer"},[n("Button",{style:{boxShadow:"0 0 0"},attrs:{color:"#009688",textColor:"#ffffff","full-width":!0,large:""},on:{click:e.submit}},[e._v(e._s(e.id?"保存":"下一步"))])],1)])},staticRenderFns:[]}},994:function(e,t,n){e.exports=n(383)}},[994]);