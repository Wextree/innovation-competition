webpackJsonp([1],{"+kar":function(t,e){},"3m5P":function(t,e){},"K+QV":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var c=i("VU/8")({name:"App"},s,!1,function(t){i("pBFe")},null,null).exports,a=i("/ocq"),r=i("BO1k"),l=i.n(r),o=i("mtWM"),p=i.n(o),u={name:"InputArea",data:function(){return{red:0,orange:0,yellow:0,green:0,cyan:0,blue:0,purple:0,gray:0,pink:0,black:0,white:0,brown:0,data:{color12:"",scope:null}}},methods:{handleInput:function(){this.data.scope=this.$refs.scope.value,this.data.scope>=0&&this.data.scope<=63?(this.data.color12=this.red+","+this.orange+","+this.yellow+","+this.green+","+this.cyan+","+this.blue+","+this.purple+","+this.gray+","+this.pink+","+this.black+","+this.white+","+this.brown,this.$emit("submit",this.data)):alert("请确保数值在0~63的范围")},clickRed:function(){this.red=1===this.red?0:1},clickOrange:function(){this.orange=1===this.orange?0:1},clickYellow:function(){this.yellow=1===this.yellow?0:1},clickGreen:function(){this.green=1===this.green?0:1},clickCyan:function(){this.cyan=1===this.cyan?0:1},clickBlue:function(){this.blue=1===this.blue?0:1},clickPurple:function(){this.purple=1===this.purple?0:1},clickGray:function(){this.gray=1===this.gray?0:1},clickPink:function(){this.pink=1===this.pink?0:1},clickBlack:function(){this.black=1===this.black?0:1},clickWhite:function(){this.white=1===this.white?0:1},clickBrown:function(){this.brown=1===this.brown?0:1}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"inputWrapper"},[i("div",{staticClass:"inputCheckBox"},[i("div",{staticClass:"color-box"},[i("div",{staticClass:"red wrapper"},[i("input",{attrs:{type:"checkbox",name:"red"},on:{click:t.clickRed}})]),t._v(" "),i("div",{staticClass:"orange wrapper"},[i("input",{attrs:{type:"checkbox",name:"orange"},on:{click:t.clickOrange}})]),t._v(" "),i("div",{staticClass:"yellow wrapper"},[i("input",{attrs:{type:"checkbox",name:"yellow"},on:{click:t.clickYellow}})]),t._v(" "),i("div",{staticClass:"green wrapper"},[i("input",{attrs:{type:"checkbox",name:"green"},on:{click:t.clickGreen}})]),t._v(" "),i("div",{staticClass:"cyan wrapper"},[i("input",{attrs:{type:"checkbox",name:"cyan"},on:{click:t.clickCyan}})]),t._v(" "),i("div",{staticClass:"blue wrapper"},[i("input",{attrs:{type:"checkbox",name:"blue"},on:{click:t.clickBlue}})])]),t._v(" "),i("div",{staticClass:"color-box"},[i("div",{staticClass:"purple wrapper"},[i("input",{attrs:{type:"checkbox",name:"purple"},on:{click:t.clickPurple}})]),t._v(" "),i("div",{staticClass:"gray wrapper"},[i("input",{attrs:{type:"checkbox",name:"gray"},on:{click:t.clickGray}})]),t._v(" "),i("div",{staticClass:"pink wrapper"},[i("input",{attrs:{type:"checkbox",name:"pink"},on:{click:t.clickPink}})]),t._v(" "),i("div",{staticClass:"black wrapper"},[i("input",{attrs:{type:"checkbox",name:"black"},on:{click:t.clickBlack}})]),t._v(" "),i("div",{staticClass:"white wrapper"},[i("input",{attrs:{type:"checkbox",name:"white"},on:{click:t.clickWhite}})]),t._v(" "),i("div",{staticClass:"brown wrapper"},[i("input",{attrs:{type:"checkbox",name:"brown"},on:{click:t.clickBrown}})])])]),t._v(" "),i("div",{staticClass:"inputScope"},[i("input",{ref:"scope",attrs:{type:"number",name:"label",min:"0",max:"63",placeholder:"0~63"}})]),t._v(" "),i("div",[i("button",{on:{click:t.handleInput}},[t._v("提交")])])])])},staticRenderFns:[]};var d=i("VU/8")(u,h,!1,function(t){i("+kar")},null,null).exports,m={props:{imgs:Array,selected:Number},name:"imgDisplayer",data:function(){return{}},methods:{previousImg:function(){this.selected=0===this.selected?0:this.selected-1},nextImg:function(){this.selected=this.selected===this.imgs.length-1?this.imgs.length-1:this.selected+1}},computed:{}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"imgComponent"}},[i("div",{attrs:{id:"large-img-holder"}},[i("img",{staticClass:"large-img",attrs:{src:t.imgs[t.selected]}})]),t._v(" "),i("div",[i("div",{attrs:{id:"small-img-holder"}},t._l(t.imgs,function(e,n){return i("img",{key:n,class:{active:t.selected===n,"small-img":!0},attrs:{src:e},on:{mousedown:function(e){return t.$emit("select-img",n)}}})}),0)])])},staticRenderFns:[]};var k=i("VU/8")(m,g,!1,function(t){i("K+QV")},null,null).exports;p.a.defaults.baseURL="http://"+document.domain+":8000";var v={name:"homeBody",data:function(){return{imgs:[],selected:0}},components:{inputArea:d,imgDisplayer:k},mounted:function(){var t=!0,e=!1,i=void 0;try{for(var n,s=l()(["mio"]);!(t=(n=s.next()).done);t=!0){var c=n.value;this.imgs.push("../../static/images/"+c+".png")}}catch(t){e=!0,i=t}finally{try{!t&&s.return&&s.return()}finally{if(e)throw i}}},methods:{select_img:function(t){console.log("slect "+t),this.selected=t},scroll_left:function(){var t=document.getElementById("small-img-holder");setTimeout(function(){t.scrollLeft=t.scrollWidth},50)},insert_img:function(t){console.log(t),this.imgs.push(t),this.selected=this.imgs.length-1,this.scroll_left()},handleSubmit:function(t){this.insert_img("../../static/images/"+["123"]+".jpg")},handleReturn:function(t){var e="data:image/jpeg;base64,"+t.data;this.insert_img(e)}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page-body"}},[e("div",{attrs:{id:"input-holder"}},[e("div",{attrs:{id:"input-box"}},[e("inputArea",{attrs:{id:"input-comp"},on:{submit:this.handleSubmit}})],1)]),this._v(" "),e("div",{attrs:{id:"img-holder"}},[e("imgDisplayer",{attrs:{id:"img-box",imgs:this.imgs,selected:this.selected},on:{"select-img":this.select_img}})],1)])},staticRenderFns:[]};var y={name:"home",components:{homeBody:i("VU/8")(v,f,!1,function(t){i("g4Hz")},null,null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("homeBody")],1)},staticRenderFns:[]};var w=i("VU/8")(y,b,!1,function(t){i("3m5P")},null,null).exports;n.a.use(a.a);var _=new a.a({routes:[{path:"/",name:"home",component:w}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:_,components:{App:c},template:"<App/>"})},g4Hz:function(t,e){},pBFe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d15510b6dd88b2451dd0.js.map