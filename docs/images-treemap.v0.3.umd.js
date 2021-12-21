!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("d3"),require("@rawgraphs/rawgraphs-core")):"function"==typeof define&&define.amd?define(["exports","d3","@rawgraphs/rawgraphs-core"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).myAwsesomeCharts={},e.d3,e.rawgraphsCore)}(this,(function(e,t,a){"use strict";function c(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(a){if("default"!==a){var c=Object.getOwnPropertyDescriptor(e,a);Object.defineProperty(t,a,c.get?c:{enumerable:!0,get:function(){return e[a]}})}})),t.default=e,Object.freeze(t)}var l=c(t);const i={name:"Treemap (images)",id:"rawgraphs.treemapImages",thumbnail:"data:image/svg+xml,%3csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='320' height='160' viewBox='0 0 320 160'%3e %3cdefs%3e %3cstyle%3e .cls-1 %7b fill: none%3b %7d .cls-2 %7b fill: white%3b %7d .cls-3 %7b fill: %23a0d9a3%3b %7d .cls-4 %7b clip-path: url(%23clip-path)%3b %7d .cls-5%2c .cls-6%2c .cls-9 %7b isolation: isolate%3b %7d .cls-6%2c .cls-9 %7b font-size: 12px%3b font-family: Helvetica%3b %7d .cls-7 %7b fill: %234ba0b1%3b %7d .cls-8 %7b clip-path: url(%23clip-path-2)%3b %7d .cls-9 %7b letter-spacing: -0.0366em%3b %7d .cls-10 %7b fill: %235e4fa2%3b %7d .cls-11 %7b clip-path: url(%23clip-path-3)%3b %7d .cls-12 %7b clip-path: url(%23clip-path-4)%3b %7d .cls-13 %7b clip-path: url(%23clip-path-5)%3b %7d .cls-14 %7b clip-path: url(%23clip-path-6)%3b %7d .cls-15 %7b fill: %239e0142%3b %7d .cls-16 %7b clip-path: url(%23clip-path-7)%3b %7d .cls-17 %7b clip-path: url(%23clip-path-8)%3b %7d .cls-18 %7b fill: %23e1524a%3b %7d .cls-19 %7b clip-path: url(%23clip-path-9)%3b %7d .cls-20 %7b fill: %23fba35e%3b %7d .cls-21 %7b clip-path: url(%23clip-path-10)%3b %7d .cls-22 %7b clip-path: url(%23clip-path-11)%3b %7d .cls-23 %7b clip-path: url(%23clip-path-12)%3b %7d .cls-24 %7b fill: %23fee89a%3b %7d .cls-25 %7b clip-path: url(%23clip-path-13)%3b %7d .cls-26 %7b clip-path: url(%23clip-path-14)%3b %7d .cls-27 %7b fill: %23ebf7a6%3b %7d .cls-28 %7b clip-path: url(%23clip-path-15)%3b %7d .cls-29 %7b clip-path: url(%23clip-path-16)%3b %7d .cls-30 %7b clip-path: url(%23clip-path-17)%3b %7d %3c/style%3e %3cclipPath id='clip-path'%3e %3crect class='cls-1' x='5' y='5' width='38' height='74'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-2'%3e %3crect class='cls-1' x='44' y='5' width='52' height='74'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-3'%3e %3crect class='cls-1' x='5' y='80' width='91' height='31'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-4'%3e %3crect class='cls-1' x='5' y='114' width='20' height='41'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-5'%3e %3crect class='cls-1' x='28' y='114' width='44' height='41'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-6'%3e %3crect class='cls-1' x='75' y='114' width='21' height='41'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-7'%3e %3crect class='cls-1' x='101' y='5' width='6' height='110'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-8'%3e %3crect class='cls-1' x='110' y='5' width='89' height='21'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-9'%3e %3crect class='cls-1' x='110' y='27' width='89' height='88'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-10'%3e %3crect class='cls-1' x='200' y='5' width='26' height='110'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-11'%3e %3crect class='cls-1' x='101' y='118' width='74' height='37'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-12'%3e %3crect class='cls-1' x='178' y='118' width='48' height='37'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-13'%3e %3crect class='cls-1' x='231' y='5' width='84' height='32'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-14'%3e %3crect class='cls-1' x='231' y='40' width='35' height='80'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-15'%3e %3crect class='cls-1' x='267' y='40' width='48' height='80'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-16'%3e %3crect class='cls-1' x='231' y='123' width='26' height='32'/%3e %3c/clipPath%3e %3cclipPath id='clip-path-17'%3e %3crect class='cls-1' x='260' y='123' width='55' height='32'/%3e %3c/clipPath%3e %3c/defs%3e %3crect id='backgorund' class='cls-2' width='320' height='160'/%3e %3crect id='backgorund-2' data-name='backgorund' class='cls-2' width='320' height='160'/%3e %3cg id='viz'%3e %3cg id='leaves'%3e %3cg%3e %3crect id='path0' class='cls-3' x='5' y='5' width='38' height='74'/%3e %3cg class='cls-4'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(8 17)'%3eI%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path1' class='cls-7' x='44' y='5' width='52' height='74'/%3e %3cg class='cls-8'%3e %3cg class='cls-5'%3e %3ctext class='cls-9' transform='translate(47 17)'%3eL%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path2' class='cls-10' x='5' y='80' width='91' height='31'/%3e %3cg class='cls-11'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(8 92)'%3eM%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path3' class='cls-7' x='5' y='114' width='20' height='41'/%3e %3cg class='cls-12'%3e %3cg class='cls-5'%3e %3ctext class='cls-9' transform='translate(8 126)'%3eL%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path4' class='cls-10' x='28' y='114' width='44' height='41'/%3e %3cg class='cls-13'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(31 126)'%3eM%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path5' class='cls-10' x='75' y='114' width='21' height='41'/%3e %3cg class='cls-14'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(78 126)'%3eM%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path6' class='cls-15' x='101' y='5' width='6' height='110'/%3e %3cg class='cls-16'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(104 17)'%3eD%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path7' class='cls-15' x='110' y='5' width='89' height='21'/%3e %3cg class='cls-17'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(113 17)'%3eD%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path8' class='cls-18' x='110' y='27' width='89' height='88'/%3e %3cg class='cls-19'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(113 39)'%3eE%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path9' class='cls-20' x='200' y='5' width='26' height='110'/%3e %3cg class='cls-21'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(203 17)'%3eF%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path10' class='cls-18' x='101' y='118' width='74' height='37'/%3e %3cg class='cls-22'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(104 130)'%3eE%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path11' class='cls-20' x='178' y='118' width='48' height='37'/%3e %3cg class='cls-23'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(181 130)'%3eF%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path12' class='cls-24' x='231' y='5' width='84' height='32'/%3e %3cg class='cls-25'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(234 17)'%3eG%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path13' class='cls-24' x='231' y='40' width='35' height='80'/%3e %3cg class='cls-26'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(234 52)'%3eG%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path14' class='cls-27' x='267' y='40' width='48' height='80'/%3e %3cg class='cls-28'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(270 52)'%3eH%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path15' class='cls-27' x='231' y='123' width='26' height='32'/%3e %3cg class='cls-29'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(234 135)'%3eH%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3cg%3e %3crect id='path16' class='cls-27' x='260' y='123' width='55' height='32'/%3e %3cg class='cls-30'%3e %3cg class='cls-5'%3e %3ctext class='cls-6' transform='translate(263 135)'%3eH%3c/text%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e %3c/g%3e%3c/svg%3e",icon:"data:image/svg+xml,%3csvg id='rawgraphs-icons' xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3e %3cdefs%3e %3cstyle%3e .cls-1 %7b fill: %2395e5c0%3b %7d .cls-2 %7b fill: %2306c26c%3b %7d %3c/style%3e %3c/defs%3e %3cg id='secundary'%3e %3crect class='cls-1' x='8' y='30' width='19' height='18'/%3e %3crect class='cls-1' x='35' y='8' width='13' height='4'/%3e %3crect class='cls-1' x='35' y='13' width='13' height='9'/%3e %3crect class='cls-1' x='42' y='42' width='6' height='6'/%3e %3crect class='cls-1' x='29' y='42' width='12' height='6'/%3e %3c/g%3e %3cg id='primary'%3e %3crect class='cls-2' x='8' y='8' width='19' height='21'/%3e %3crect class='cls-2' x='29' y='8' width='5' height='14'/%3e %3crect class='cls-2' x='29' y='24' width='19' height='17'/%3e %3c/g%3e%3c/svg%3e",categories:["hierarchies","proportions","images"],description:"It displays hierarchically structured data and a related quantitative dimension. It is composed of an area divided into small rectangles, representing the last level of the tree structure. The rectangles’ size depends on the quantitative dimension.\nThe model displays images.",code:"https://github.com/iosonosempreio/rawgraphs-treemap-with-images"};function s(e,a){if("object"==typeof e){for(var c in e)l(this,c,e[c]);return this}return"function"==typeof e?this.each(r(e)):1==arguments.length?this.style(e):l(this,e,a);function l(e,t,a){t=t.replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase();return~"top left bottom right padding-top padding-left padding-bottom padding-right border-top b-width border-left-width border-botto-width m border-right-width margin-top margin-left margin-bottom margin-right font-size width stroke-width line-height margin padding border border-radius max-width min-width max-height min-height".indexOf(t)?e.style(t,"function"==typeof a?s(a):i(a)):e.style(t,a),e}function i(e){return e.match?e:e+"px"}function s(e){return function(){var t=e.apply(this,arguments);return i(t)}}function r(e){return function(){var a=e.apply(this,arguments);for(var c in a)l(t.select(this),c,a[c])}}}t.selection.prototype.styles=s,t.transition.prototype.styles=s;var r={metadata:i,dimensions:[{id:"hierarchy",name:"Hierarchy",validTypes:["number","date","string"],required:!0,multiple:!0},{id:"size",name:"Size",validTypes:["number"],required:!1,aggregation:!0,aggregationDefault:"sum"},{id:"color",name:"Color",validTypes:["number","date","string"],required:!1,aggregation:!0,aggregationDefault:{number:"sum",string:"csvDistinct",date:"csvDistinct"}},{id:"images",name:"Images",validTypes:["string"],required:!1,aggregation:!0,aggregationDefault:{string:"csvDistinct"}},{id:"label",name:"Label",validTypes:["number","date","string"],required:!1,multiple:!0,aggregation:!0,aggregationDefault:"csvDistinct"}],mapData:function(e,t,c,i){const s=a.getDimensionAggregator("color",t,c,i),r=a.getDimensionAggregator("size",t,c,i),h=a.getDimensionAggregator("label",t,c,i),g=a.getDimensionAggregator("images",t,c,i);!("color"in t)&&(t.color={value:void 0}),!("size"in t)&&(t.size={value:void 0}),!("label"in t)&&(t.label={value:void 0}),!("images"in t)&&(t.images={value:void 0});const p=[];return l.rollups(e,(e=>{const a={hierarchy:new Map(t.hierarchy.value.map((t=>[t,e[0][t]]))),size:t.size.value?r(e.map((e=>e[t.size.value]))):e.length,color:t.color.value?s(e.map((e=>e[t.color.value]))):"cells color",label:t.label.value?t.label.value.map(((t,a)=>h[a](e.map((e=>e[t]))))):void 0,images:t.images.value?g(e.map((e=>e[t.images.value]))):"no images"};return p.push(a),a}),...t.hierarchy.value.map((e=>t=>t[e]))),p},render:function(e,t,c,i,s,r){const{width:h,height:g,background:p,marginTop:d,marginRight:n,marginBottom:o,marginLeft:b,showLegend:m,legendWidth:u,colorScale:f,tiling:y,padding:x,showLabelsOutline:w,showHierarchyLabels:v,labelStyles:P,fillArea:S,imagesStrokeWidth:z}=c,k=d,A=b,D=h-A-n,M=g-k-o,L=l.rollup(t,(e=>e[0]),...i.hierarchy.value.map((e=>t=>t.hierarchy.get(e)))),T=l.hierarchy(L).sum((e=>e[1]instanceof Map?0:e[1].size)),q=l.treemap().tile(l[y]).size([D,M]).padding(x).round(!0);v&&q.paddingTop(12);const O=q(T);l.select(e).append("rect").attr("width",m?h+u:h).attr("height",g).attr("x",0).attr("y",0).attr("fill",p).attr("id","backgorund"),c.fillArea||l.select(e).append("filter").attr("id","blurImages").append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",3);const j=l.select(e).append("g").attr("transform","translate("+A+","+k+")").attr("id","viz");if(v){const e=O.descendants().filter((e=>e.children)),t=l.scaleLinear().domain([0,O.leaves()[0].depth+1]),a=j.append("g").attr("id","ancestors").selectAll("rect").data(e).join("g").attr("transform",(e=>`translate(${e.x0},${e.y0})`));a.append("rect").attr("width",(e=>e.x1-e.x0)).attr("height",(e=>e.y1-e.y0)).attr("id",((e,t)=>"path_ancestor"+t)).attr("fill","#ccc").attr("fill-opacity",(e=>t(e.depth))).attr("stroke","#ccc").attr("stroke-opacity",(e=>t(e.depth)+.1)),v&&(a.append("clipPath").attr("id",((e,t)=>"clip_ancestor"+t)).append("use").attr("xlink:href",((e,t)=>"#path_ancestor"+t)),a.append("text").attr("x",x).attr("y",2).attr("clip-path",((e,t)=>"url(#clip_ancestor"+t+")")).attr("font-family","Arial, sans-serif").attr("font-size",8).attr("dominant-baseline","text-before-edge").attr("class","txt").text((e=>0!==e.depth||e.data[0]?e.data[0]:"Root")))}const I=j.append("g").attr("id","leaves").selectAll("g").data(O.leaves()).join("g").attr("transform",(e=>`translate(${e.x0},${e.y0})`));if(I.append("rect").attr("id",((e,t)=>"path"+t)).attr("fill",(e=>{let t=f(e.data[1].color);return i.images.value&&(t="white"),t})).attr("width",(e=>e.x1-e.x0)).attr("height",(e=>e.y1-e.y0)),I.append("clipPath").attr("id",((e,t)=>"clip"+t)).append("use").attr("xlink:href",((e,t)=>"#path"+t)),i.images.value){if(!c.fillArea){const e=10;I.append("image").attr("id",((e,t)=>"image-blurred"+t)).attr("xlink:href",(e=>e.data[1].images)).attr("width",(t=>t.x1-t.x0+e)).attr("height",(t=>t.y1-t.y0+e)).attr("x",-e/2).attr("y",-e/2).attr("preserveAspectRatio","xMidYMid "+(c.fillArea,"slice")).attr("clip-path",((e,t)=>"url(#clip"+t+")")).attr("filter","url(#blurImages)").attr("opacity",.6)}I.append("image").attr("id",((e,t)=>"image"+t)).attr("xlink:href",(e=>e.data[1].images)).attr("width",(e=>Math.max(0,e.x1-e.x0-2*c.imagesStrokeSize))).attr("height",(e=>Math.max(0,e.y1-e.y0-2*c.imagesStrokeSize))).attr("x",c.imagesStrokeSize).attr("y",c.imagesStrokeSize).attr("preserveAspectRatio","xMidYMid "+(c.fillArea?"slice":"meet")).attr("clip-path",((e,t)=>"url(#clip"+t+")")),I.append("rect").attr("id",((e,t)=>"image-border"+t)).attr("width",(e=>Math.max(1,e.x1-e.x0-c.imagesStrokeSize))).attr("height",(e=>Math.max(1,e.y1-e.y0-c.imagesStrokeSize))).attr("x",Math.max(0,c.imagesStrokeSize/2)).attr("y",Math.max(0,c.imagesStrokeSize/2)).attr("fill","none").attr("stroke",(e=>f(e.data[1].color))).attr("stroke-width",c.imagesStrokeSize).attr("clip-path",((e,t)=>"url(#clip"+t+")"))}if(I.append("text").attr("clip-path",((e,t)=>"url(#clip"+t+")")).attr("font-family","Arial, sans-serif").attr("font-size",10).attr("dominant-baseline","text-before-edge").attr("class","txt").selectAll("tspan").data(((e,t,a)=>Array.isArray(e.data[1].label)?e.data[1].label:[e.data[1].label])).join("tspan").attr("x",3).attr("y",((e,t)=>1.1*t+.2+"em")).text(((e,t)=>e&&"date"===i.label.dataType[t].type?l.timeFormat(dateFormats[i.label.dataType[t].dateFormat])(e):e)).styles(((e,t)=>r[P[t]])),w&&l.selectAll(".txt").styles(r.labelOutline),m){const t=l.select(e).append("g").attr("id","legend").attr("transform",`translate(${h},${d})`),c=a.legend().legendWidth(u);i.color.value&&c.addColor(i.color.value,f),t.call(c)}},visualOptions:{marginTop:{type:"number",label:"Margin (top)",default:10,group:"artboard"},marginRight:{type:"number",label:"Margin (right)",default:10,group:"artboard"},marginBottom:{type:"number",label:"Margin (bottom)",default:10,group:"artboard"},marginLeft:{type:"number",label:"Margin (left)",default:10,group:"artboard"},showLegend:{type:"boolean",label:"Show legend",default:!1,group:"artboard"},legendWidth:{type:"number",label:"Legend width",default:200,group:"artboard",disabled:{showLegend:!1},container:"width",containerCondition:{showLegend:!0}},tiling:{type:"text",label:"Tiling method",group:"chart",options:[{label:"Binary",value:"treemapBinary"},{label:"Dice",value:"treemapDice"},{label:"Slice",value:"treemapSlice"},{label:"Slice and dice",value:"treemapSliceDice"},{label:"Squarify",value:"treemapSquarify"}],default:"treemapSquarify"},padding:{type:"number",label:"Padding",default:2,group:"chart"},fillArea:{type:"boolean",label:"Fill area",default:!1,group:"images"},imagesStrokeSize:{type:"number",label:"Stroke size",default:2,group:"images"},colorScale:{type:"colorScale",label:"Color scale",dimension:"color",default:{scaleType:"ordinal",interpolator:"interpolateSpectral"},group:"colors"},labelStyles:{type:"text",label:"Label",group:"labels",options:[{label:"Primary",value:"labelPrimary"},{label:"Secondary",value:"labelSecondary"},{label:"Italic",value:"labelItalic"}],default:"labelPrimary",repeatFor:"label",repeatDefault:["labelPrimary","labelSecondary","labelItalic"]},showLabelsOutline:{type:"boolean",label:"Show outline",default:!1,group:"labels"},showHierarchyLabels:{type:"boolean",label:"Show hierarchy labels",default:!1,group:"labels"}},styles:{coolText:{fontFamily:"Arial, sans-serif",fontSize:"25px",fontWeight:"bold"}}};e.treemapImages=r,Object.defineProperty(e,"__esModule",{value:!0})}));
