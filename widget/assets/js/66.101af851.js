webpackJsonp([66],{157:function(e,s,t){"use strict";s.a={IdCard:/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/,plate:/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/,bdV9:/^\d+$/,positiveInteger:/^[1-9]*[1-9][0-9]*$/,companyCode:/^[0-9a-zA-Z\-_]+$/,fax:/^[+]{0,1}(\d){1,3}?([-]?(\d){1,12})+$/,qq:/^[1-9]\d{4,10}$/,bankNo:/^(([0-9]{1,100}-[0-9]{1,100}|[0-9]{1,100}))$/,bdName:/^[0-9a-zA-Z\u0391-\uFFE5]+$/,number:/^\d+$/,unEmpty:/^\S+$/,username:/^[a-z_0-9]{2,16}$/,password:/^[a-zA-Z_0-9]{6,32}$/,mobPhone:/^0?(13|14|15|16|17|18|19)\d{9}$/,captcha:/^\d{4}$/,smsVerify:/^\d{4}$/,telPhone:/^(\d{3,4}-?\d{7,8})$/,phone:/^(\d{3,4}-?\d{7,8})$|^0?(13|15|18|14|17|19)\d{9}$/,phoneCode:/^(\d{4,6})$/,personCode:/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,bankCard:/^(\d{16}|\d{19})$/,integer:/^[0-9][0-9]*$/,email:/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,url:/^([a-z]+:\/\/)?([a-z]([a-z0-9-]*\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-z][a-z0-9_]*)?$/,httpUrl:/^(http|https):\/\/([a-z]([a-z0-9-]*\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}[0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(:[0-9]{1,5})?(\/[a-z0-9_\-.~]+)*(\/([a-z0-9_\-.]*)(\?[a-z0-9+_\-.%=&amp;]*)?)?(#[a-z][a-z0-9_]*)?$/}},158:function(e,s,t){function a(e){return t(n(e))}function n(e){var s=r[e];if(!(s+1))throw new Error("Cannot find module '"+e+"'.");return s}var r={"./af":28,"./af.js":28,"./ar":35,"./ar-dz":29,"./ar-dz.js":29,"./ar-kw":30,"./ar-kw.js":30,"./ar-ly":31,"./ar-ly.js":31,"./ar-ma":32,"./ar-ma.js":32,"./ar-sa":33,"./ar-sa.js":33,"./ar-tn":34,"./ar-tn.js":34,"./ar.js":35,"./az":36,"./az.js":36,"./be":37,"./be.js":37,"./bg":38,"./bg.js":38,"./bm":39,"./bm.js":39,"./bn":40,"./bn.js":40,"./bo":41,"./bo.js":41,"./br":42,"./br.js":42,"./bs":43,"./bs.js":43,"./ca":44,"./ca.js":44,"./cs":45,"./cs.js":45,"./cv":46,"./cv.js":46,"./cy":47,"./cy.js":47,"./da":48,"./da.js":48,"./de":51,"./de-at":49,"./de-at.js":49,"./de-ch":50,"./de-ch.js":50,"./de.js":51,"./dv":52,"./dv.js":52,"./el":53,"./el.js":53,"./en-au":54,"./en-au.js":54,"./en-ca":55,"./en-ca.js":55,"./en-gb":56,"./en-gb.js":56,"./en-ie":57,"./en-ie.js":57,"./en-il":58,"./en-il.js":58,"./en-nz":59,"./en-nz.js":59,"./eo":60,"./eo.js":60,"./es":63,"./es-do":61,"./es-do.js":61,"./es-us":62,"./es-us.js":62,"./es.js":63,"./et":64,"./et.js":64,"./eu":65,"./eu.js":65,"./fa":66,"./fa.js":66,"./fi":67,"./fi.js":67,"./fo":68,"./fo.js":68,"./fr":71,"./fr-ca":69,"./fr-ca.js":69,"./fr-ch":70,"./fr-ch.js":70,"./fr.js":71,"./fy":72,"./fy.js":72,"./gd":73,"./gd.js":73,"./gl":74,"./gl.js":74,"./gom-latn":75,"./gom-latn.js":75,"./gu":76,"./gu.js":76,"./he":77,"./he.js":77,"./hi":78,"./hi.js":78,"./hr":79,"./hr.js":79,"./hu":80,"./hu.js":80,"./hy-am":81,"./hy-am.js":81,"./id":82,"./id.js":82,"./is":83,"./is.js":83,"./it":84,"./it.js":84,"./ja":85,"./ja.js":85,"./jv":86,"./jv.js":86,"./ka":87,"./ka.js":87,"./kk":88,"./kk.js":88,"./km":89,"./km.js":89,"./kn":90,"./kn.js":90,"./ko":91,"./ko.js":91,"./ky":92,"./ky.js":92,"./lb":93,"./lb.js":93,"./lo":94,"./lo.js":94,"./lt":95,"./lt.js":95,"./lv":96,"./lv.js":96,"./me":97,"./me.js":97,"./mi":98,"./mi.js":98,"./mk":99,"./mk.js":99,"./ml":100,"./ml.js":100,"./mn":101,"./mn.js":101,"./mr":102,"./mr.js":102,"./ms":104,"./ms-my":103,"./ms-my.js":103,"./ms.js":104,"./mt":105,"./mt.js":105,"./my":106,"./my.js":106,"./nb":107,"./nb.js":107,"./ne":108,"./ne.js":108,"./nl":110,"./nl-be":109,"./nl-be.js":109,"./nl.js":110,"./nn":111,"./nn.js":111,"./pa-in":112,"./pa-in.js":112,"./pl":113,"./pl.js":113,"./pt":115,"./pt-br":114,"./pt-br.js":114,"./pt.js":115,"./ro":116,"./ro.js":116,"./ru":117,"./ru.js":117,"./sd":118,"./sd.js":118,"./se":119,"./se.js":119,"./si":120,"./si.js":120,"./sk":121,"./sk.js":121,"./sl":122,"./sl.js":122,"./sq":123,"./sq.js":123,"./sr":125,"./sr-cyrl":124,"./sr-cyrl.js":124,"./sr.js":125,"./ss":126,"./ss.js":126,"./sv":127,"./sv.js":127,"./sw":128,"./sw.js":128,"./ta":129,"./ta.js":129,"./te":130,"./te.js":130,"./tet":131,"./tet.js":131,"./tg":132,"./tg.js":132,"./th":133,"./th.js":133,"./tl-ph":134,"./tl-ph.js":134,"./tlh":135,"./tlh.js":135,"./tr":136,"./tr.js":136,"./tzl":137,"./tzl.js":137,"./tzm":139,"./tzm-latn":138,"./tzm-latn.js":138,"./tzm.js":139,"./ug-cn":140,"./ug-cn.js":140,"./uk":141,"./uk.js":141,"./ur":142,"./ur.js":142,"./uz":144,"./uz-latn":143,"./uz-latn.js":143,"./uz.js":144,"./vi":145,"./vi.js":145,"./x-pseudo":146,"./x-pseudo.js":146,"./yo":147,"./yo.js":147,"./zh-cn":148,"./zh-cn.js":148,"./zh-hk":149,"./zh-hk.js":149,"./zh-tw":150,"./zh-tw.js":150};a.keys=function(){return Object.keys(r)},a.resolve=n,e.exports=a,a.id=158},351:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(11),n=t(811),r=t.n(n),o=t(14),i=(t.n(o),t(15)),m=(t.n(i),t(13));t.n(m);window.apiready=function(){document.body.addEventListener("touchstart",function(){}),new a.default({el:"#app",render:function(e){return e(r.a)}})}},447:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=t(21),n=t.n(a),r=t(20),o=t.n(r),i=t(559),m=(t.n(i),t(687)),j=t.n(m),l=t(200),d=t.n(l),u=t(154),c=t.n(u),p=t(27),f=t.n(p),v=t(2),b=t.n(v),h=t(153),z=(t.n(h),t(157));s.default={data:function(){return{step:1,startDateTimeText:b()().format("YYYY年MM月DD日"),startDateTime:new Date,step1Form:{name:"",sex:0,personId:"",startDateTime:(new Date).valueOf()},nameRules:[{validate:function(e){return!!e},message:"必须填写姓名"}],personIdRules:[{validate:function(e){return z.a.IdCard.test(e)},message:"填写正确的身份证信息"}]}},components:{Button:f.a,Form:h.Form,FormItem:h.FormItem,TextField:c.a,Radio:d.a,DatetimePicker:j.a},methods:{checkUser:function(){var e=this;return o()(n.a.mark(function s(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},s,e)}))()},step1Submit:function(){var e=this;this.$refs.step1Form.validate().then(function(s){!0===s&&(e.step=2)})},openStartDateTime:function(){this.$refs.startDateTime.open()},changeStartDateTime:function(e){this.startDateTimeText=b()(e).format("YYYY年MM月DD日"),this.step1Form.startDateTime=this.startDateTime.valueOf()}},mounted:function(){}}},676:function(e,s){},811:function(e,s,t){function a(e){t(676)}var n=t(10)(t(447),t(935),a,"data-v-b0ccc7c6",null);e.exports=n.exports},935:function(e,s){e.exports={render:function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("div",{staticClass:"formCon"},[1===e.step?t("div",[t("Form",{ref:"step1Form",attrs:{model:e.step1Form}},[t("FormItem",{attrs:{label:"姓名",prop:"name",rules:e.nameRules}},[t("TextField",{model:{value:e.step1Form.name,callback:function(s){e.$set(e.step1Form,"name",s)},expression:"step1Form.name"}})],1),e._v(" "),t("FormItem",{attrs:{label:"性别",prop:"sex"}},[t("Radio",{attrs:{value:0,label:"男"},model:{value:e.step1Form.sex,callback:function(s){e.$set(e.step1Form,"sex",s)},expression:"step1Form.sex"}}),e._v(" "),t("Radio",{attrs:{value:1,label:"女"},model:{value:e.step1Form.sex,callback:function(s){e.$set(e.step1Form,"sex",s)},expression:"step1Form.sex"}})],1),e._v(" "),t("FormItem",{attrs:{label:"身份证",prop:"personId",rules:e.personIdRules}},[t("TextField",{model:{value:e.step1Form.personId,callback:function(s){e.$set(e.step1Form,"personId",s)},expression:"step1Form.personId"}})],1),e._v(" "),t("FormItem",{attrs:{label:"入学时间",prop:"startDateTime"}},[t("TextField",{attrs:{readonly:"readonly"},on:{focus:e.openStartDateTime},model:{value:e.startDateTimeText,callback:function(s){e.startDateTimeText=s},expression:"startDateTimeText"}})],1)],1),e._v(" "),t("Button",{attrs:{color:"#19AD17",textColor:"#ffffff","full-width":!0,large:""},on:{click:e.step1Submit}},[e._v("下一步")])],1):e._e(),e._v(" "),2===e.step?t("div",[e._v("2")]):e._e(),e._v(" "),3===e.step?t("div",[e._v("3")]):e._e(),e._v(" "),4===e.step?t("div",[e._v("4")]):e._e()]),e._v(" "),t("div",{attrs:{slot:"modalCon"},slot:"modalCon"},[t("DatetimePicker",{ref:"startDateTime",staticClass:"startDateTime",attrs:{type:"date"},on:{confirm:e.changeStartDateTime},model:{value:e.startDateTime,callback:function(s){e.startDateTime=s},expression:"startDateTime"}})],1)])},staticRenderFns:[]}},962:function(e,s,t){e.exports=t(351)}},[962]);