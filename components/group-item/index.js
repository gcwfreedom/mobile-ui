!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxGroupItem=t():e.vuxGroupItem=t()}(this,function(){return function(e){function t(s){if(o[s])return o[s].exports;var i=o[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(6)},function(e,t,o){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(7),r=s(i);t["default"]={components:{InlineDesc:r["default"]},props:{title:String,inlineDesc:String,rightDesc:String},created:function(){this.$dispatch("group.class.add","mui_group_item_access")}}},function(e,t){},function(e,t){},function(e,t){e.exports='<a class=mui_group_item href=javascript:> <div class="mui_group_item_bd mui_group_item_primary"> <p>{{title}}</p> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="mui_group_item_ft with_arrow">{{rightDesc}}</div> </a>'},function(e,t){e.exports="<span class=mui_label_desc><slot></slot></span>"},function(e,t,o){var s,i;o(2),s=o(1),i=o(4),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)},function(e,t,o){var s,i;o(3),i=o(5),e.exports=s||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}])});