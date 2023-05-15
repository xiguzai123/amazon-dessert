"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[740],{91798:function(nt,aa,N){N.r(aa),N.d(aa,{default:function(){return tt}});var ma=N(97857),b=N.n(ma),da=N(19632),fa=N.n(da),pa=N(5574),P=N.n(pa),M=N(67294),Ca=N(64082),xa=N(66476),H=N(2453),va=N(49053),ha=N(96695),Z=N.n(ha),V=N(78045),$=N(36934),ya=N(96486),Q=N.n(ya),e=N(85893),ga=function(a){var n=new Array,i=(0,M.useState)({}),x=P()(i,2),v=x[0],A=x[1],w=(0,M.useState)(31104e6),p=P()(w,2),r=p[0],d=p[1];if(a.data){var t=0;a.data.forEach(function(h){var S=h[a.countKey];t+=S}),a.data.forEach(function(h){var S=h[a.countKey],y=h[a.rankKey],F={};F.salesRanking=y,F.salesCount=S,F.salesRatio=Number((S/t*100).toFixed(2));var j=Date.now();j<=h.timestamp+r?F.newProduct=1:F.newProduct=0,F.data=h,n.push(F)})}return n=Q().sortBy(n,"salesRanking"),v={toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},tooltip:{trigger:"axis",axisPointer:{type:"none",show:!1},formatter:function(S){var y=S[0].data,F=["<span>".concat(y.data.\u5546\u54C1\u6807\u9898,"</span>"),"<b>ASIN: </b><span>".concat(y.data.ASIN,"</span>"),"<b>\u54C1\u724C: </b><span>".concat(y.data.\u54C1\u724C,"</span>"),"<b>\u8FD130\u5929\u9500\u91CF: </b><span>".concat(y.data.\u8FD130\u5929\u9500\u91CF,"</span>"),"<b>\u8BC4\u5206/Rating: </b><span>".concat(y.data.\u8BC4\u5206,"/").concat(y.data.\u8BC4\u5206\u6570,"</span>"),"<b>\u8FD130\u5929\u9500\u552E\u989D($): </b><span>".concat(y.data["\u8FD130\u5929\u9500\u552E\u989D($)"],"</span>"),"<b>\u9500\u91CF\u6392\u540D: </b><span>".concat(y.salesRanking,"</span>"),"<b>\u5356\u5BB6\u4FE1\u606F: </b><span>".concat(y.data.\u5356\u5BB6\u4FE1\u606F.replace("\u516C\u53F8\u540D\u79F0\uFF1A","").replace(`
\u529E\u516C\u5730\u5740\uFF1A
`,"/").replaceAll(`
`,","),"</span>"),"<b>\u9500\u91CF\u5360\u6BD4: </b><span>".concat(y.salesRatio,"%</span>"),"<b>\u4EF7\u683C($): </b><span>".concat(y.data["\u4EF7\u683C($)"],"</span>"),"<b>\u4E0A\u67B6\u65F6\u95F4: </b><span>".concat(y.data.\u4E0A\u67B6\u65F6\u95F4,"</span>"),"<b>\u914D\u9001\u65B9\u5F0F: </b><span>".concat(y.data.\u914D\u9001\u65B9\u5F0F,"</span>")];return F.join("<br/>")},extraCssText:"max-width: 600px; white-space:pre-wrap"},legend:{data:[a.option.yAxisItemNames[1]],selectedMode:!1},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:a.option.xAxisName,nameLocation:"start",nameGap:40,type:"category"}],yAxis:[{type:"value",name:a.option.yAxisItemNames[0]},{type:"value",name:a.option.yAxisItemNames[1],axisLabel:{formatter:"{value} %"}}],dataset:{source:n},visualMap:{type:"piecewise",show:!0,pieces:[{min:0,max:0,color:"#556fc5",label:a.option.yAxisItemNames[0]},{min:1,max:1,color:"#91cd77",label:"\u65B0\u54C1".concat(a.option.yAxisItemNames[0])}],seriesIndex:0,dimension:3,orient:"horizontal",selectedMode:!1,hoverLink:!1,left:"auto",bottom:"auto",top:0,inRange:{color:"#91cd77"},outOfRange:{color:"#556fc5"}},series:[{name:a.option.yAxisItemNames[0],type:"bar",encode:{x:"salesRanking",y:"salesCount"}},{name:a.option.yAxisItemNames[1],type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(S){return"".concat(S," %")}},encode:{x:"salesRanking",y:"salesRatio"}}]},(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{overflow:"hidden",padding:"0 0 10px 0"},children:(0,e.jsxs)("div",{style:{float:"right",clear:"both"},children:[(0,e.jsx)("span",{children:"\u65B0\u54C1\u5B9A\u4E49\uFF1A"}),(0,e.jsxs)(V.ZP.Group,{size:"small",defaultValue:r,onChange:function(S){var y=S.target.value,F=Date.now();v.dataset.source.forEach(function(j){F<=j.timestamp+Number(y)?j.newProduct=1:j.newProduct=0}),d(Number(y)),A(b()({},v))},children:[(0,e.jsx)(V.ZP.Button,{value:31104e6,children:"\u6700\u8FD11\u5E74"}),(0,e.jsx)(V.ZP.Button,{value:15552e6,children:"\u6700\u8FD16\u4E2A\u6708"}),(0,e.jsx)(V.ZP.Button,{value:7776e6,children:"\u6700\u8FD13\u4E2A\u6708"})]})]})}),(0,e.jsx)($.Z,{option:v,onEvents:{click:function(S,y){console.log(S,y),window.open(S.data.data.URL.text,"_blank")}}})]})},L=ga,T=N(69400),ta=function(a){return a.max?"".concat(a.min,"-").concat(a.max):"".concat(a.min,"+")},Aa=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=[{min:0,max:99},{min:100,max:199},{min:200,max:299},{min:300,max:399},{min:400,max:499},{min:500,max:999},{min:1e3,max:1499},{min:1500,max:1999},{min:2e3,max:2999},{min:3e3,max:4999},{min:5e3,max:9999},{min:1e4}],r=new Map;p.forEach(function(g){return r.set(g,{})});var d=a.data,t=0;d.forEach(function(g){var o=g.\u8FD130\u5929\u9500\u91CF;t+=o}),d.forEach(function(g){var o=Z()(r),s;try{var l=function(){var E=P()(s.value,2),R=E[0],c=E[1],f=g.\u8FD130\u5929\u9500\u91CF;if(R.min===R.max&&R.min==f||R.min!==void 0&&R.max!==void 0&&R.min<=f&&R.max>=f||R.min!==void 0&&R.max===void 0&&R.min>=f){c.list||(c.list=[]),c.list[c.list.length]=g,c.productCount||(c.productCount=0),c.productCount++,c.salesRange||(c.salesRange=ta(R));var u=0;c.list.forEach(function(m){var B=m.\u8FD130\u5929\u9500\u91CF;u+=B}),c.salesCount=u,c.salesRatio=Number((u/t*100).toFixed(2))}};for(o.s();!(s=o.n()).done;)l()}catch(C){o.e(C)}finally{o.f()}}),console.log("\u603B\u9500\u91CF ".concat(t));var h=Array.from(r.values()),S=(0,M.useState)(new Array),y=P()(S,2),F=y[0],j=y[1],k={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:"\u9500\u91CF\u533A\u95F4",nameLocation:"start",nameGap:40,type:"category",data:p.map(ta)}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:h},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(o){return o}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(o){return o+" %"}},encode:{x:"salesRange",y:"salesRatio"}}]},I=function(o,s){console.log(o,s),j(o.value.list),A()};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:k,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:I}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(o){},children:(0,e.jsx)(L,{data:F})})]})},ba=Aa,z=function(){return{countKey:"\u8FD130\u5929\u9500\u91CF",rankKey:"salesRanking",option:{title:"\u5546\u54C1\u9500\u91CF\u96C6\u4E2D\u5EA6",xAxisName:"\u9500\u91CF\u6392\u540D",yAxisItemNames:["\u9500\u91CF","\u9500\u91CF\u5360\u6BD4"]}}},ea=function(a){return a.max?"".concat(a.min,"-").concat(a.max):"".concat(a.min,"+")},Sa=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=[{min:0,max:999},{min:1e3,max:4999},{min:5e3,max:9999},{min:1e4,max:19999},{min:2e4,max:49999},{min:5e4,max:99999},{min:1e5}],r=new Map;p.forEach(function(o){return r.set(o,{})});var d=a.data,t=0;d.forEach(function(o){var s=o.\u8FD130\u5929\u9500\u91CF;t+=s}),d.forEach(function(o){var s=Z()(r),l;try{var C=function(){var R=P()(l.value,2),c=R[0],f=R[1],u=o["\u8FD130\u5929\u9500\u552E\u989D($)"];if(c.min===c.max&&c.min==u||c.min!==void 0&&c.max!==void 0&&c.min<=u&&c.max>=u||c.min!==void 0&&c.max===void 0&&c.min<=u){f.list||(f.list=[]),f.list[f.list.length]=o,f.productCount||(f.productCount=0),f.productCount++,f.salesRange||(f.salesRange=ea(c));var m=0;f.list.forEach(function(B){var O=B.\u8FD130\u5929\u9500\u91CF;m+=O}),f.salesCount=m,f.salesRatio=Number((m/t*100).toFixed(2))}};for(s.s();!(l=s.n()).done;)C()}catch(E){s.e(E)}finally{s.f()}}),console.log("\u603B\u9500\u91CF ".concat(t));var h=Array.from(r.values()),S=(0,M.useState)(new Array),y=P()(S,2),F=y[0],j=y[1],k={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:"\u9500\u552E\u989D\u533A\u95F4",nameLocation:"start",nameGap:40,type:"category",data:p.map(ea)}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:h},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(s){return s}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(s){return s+" %"}},encode:{x:"salesRange",y:"salesRatio"}}]},I=function(s,l){console.log(s,l),j(s.value.list),A()},g=b()(b()({},z()),{},{data:F});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:k,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:I}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(s){},children:(0,e.jsx)(L,b()({},g))})]})},Ra=Sa,na=function(a){return a.min===a.max?"".concat(a.min):a.max!==void 0?"".concat(a.min,"-").concat(a.max):"".concat(a.min,"+")},wa=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=[{min:0,max:0},{min:1,max:49},{min:50,max:99},{min:100,max:499},{min:500,max:999},{min:1e3,max:4999},{min:5e3,max:9999},{min:1e4}],r=new Map;p.forEach(function(o){return r.set(o,{})});var d=a.data,t=0;d.forEach(function(o){var s=o.\u8FD130\u5929\u9500\u91CF;t+=s}),d.forEach(function(o){var s=Z()(r),l;try{var C=function(){var R=P()(l.value,2),c=R[0],f=R[1],u=o.\u8BC4\u5206\u6570;if(c.min===c.max&&c.min==u||c.min!==void 0&&c.max!==void 0&&c.min<=u&&c.max>=u||c.min!==void 0&&c.max===void 0&&c.min<=u){f.list||(f.list=[]),f.list[f.list.length]=o,f.productCount||(f.productCount=0),f.productCount++,f.salesRange||(f.salesRange=na(c));var m=0;f.list.forEach(function(B){var O=B.\u8FD130\u5929\u9500\u91CF;m+=O}),f.salesCount=m,f.salesRatio=Number((m/t*100).toFixed(2))}};for(s.s();!(l=s.n()).done;)C()}catch(E){s.e(E)}finally{s.f()}}),console.log("\u603B\u9500\u91CF ".concat(t));var h=Array.from(r.values()),S=(0,M.useState)(new Array),y=P()(S,2),F=y[0],j=y[1],k={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:"\u8BC4\u5206\u6570",nameLocation:"start",nameGap:40,type:"category",data:p.map(na)}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:h},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(s){return s}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(s){return s+" %"}},encode:{x:"salesRange",y:"salesRatio"}}]},I=function(s,l){console.log(s,l),j(s.value.list),A()},g=b()(b()({},z()),{},{data:F});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:k,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:I}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(s){},children:(0,e.jsx)(L,b()({},g))})]})},Fa=wa,oa=function(a){return a.max?"".concat(a.min,"-").concat(a.max):"".concat(a.min,"+")},Ea=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=[{min:0,max:1.9},{min:2,max:2.9},{min:3,max:3.9},{min:4,max:4.4},{min:4.5}],r=new Map;p.forEach(function(o){return r.set(o,{})});var d=a.data,t=0;d.forEach(function(o){var s=o.\u8FD130\u5929\u9500\u91CF;t+=s}),d.forEach(function(o){var s=Z()(r),l;try{var C=function(){var R=P()(l.value,2),c=R[0],f=R[1],u=o.\u8BC4\u5206;if(c.min===c.max&&c.min==u||c.min!==void 0&&c.max!==void 0&&c.min<=u&&c.max>=u||c.min!==void 0&&c.max===void 0&&c.min<=u){f.list||(f.list=[]),f.list[f.list.length]=o,f.productCount||(f.productCount=0),f.productCount++,f.salesRange||(f.salesRange=oa(c));var m=0;f.list.forEach(function(B){var O=B.\u8FD130\u5929\u9500\u91CF;m+=O}),f.salesCount=m,f.salesRatio=Number((m/t*100).toFixed(2))}};for(s.s();!(l=s.n()).done;)C()}catch(E){s.e(E)}finally{s.f()}}),console.log("\u603B\u9500\u91CF ".concat(t));var h=Array.from(r.values()),S=(0,M.useState)(new Array),y=P()(S,2),F=y[0],j=y[1],k={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:"\u8BC4\u5206\u6570",nameLocation:"start",nameGap:40,type:"category",data:p.map(oa)}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:h},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(s){return s}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(s){return s+" %"}},encode:{x:"salesRange",y:"salesRatio"}}]},I=function(s,l){console.log(s,l),j(s.value.list),A()},g=b()(b()({},z()),{},{data:F});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:k,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:I}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(s){},children:(0,e.jsx)(L,b()({},g))})]})},Pa=Ea,ra=function(a){return a.max?"".concat(a.min,"-").concat(a.max):"".concat(a.min,"+")},Ba=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=[{min:0,max:9.99},{min:10,max:19.99},{min:20,max:29.99},{min:30,max:39.99},{min:40,max:49.99},{min:50,max:74.99},{min:75,max:99.99},{min:100,max:149.99},{min:150,max:199.99},{min:200,max:299.99},{min:300}],r=new Map;p.forEach(function(l){return r.set(l,{})});var d=a.data,t=0,h=d.length,S=0;d.forEach(function(l){var C=l.\u8FD130\u5929\u9500\u91CF;t+=C;var E=Number(l["\u8FD130\u5929\u9500\u552E\u989D($)"]);S+=E}),d.forEach(function(l){var C=Z()(r),E;try{var R=function(){var f=P()(E.value,2),u=f[0],m=f[1],B=l["\u4EF7\u683C($)"];if(u.min===u.max&&u.min==B||u.min!==void 0&&u.max!==void 0&&u.min<=B&&u.max>=B||u.min!==void 0&&u.max===void 0&&u.min<=B){m.list||(m.list=[]),m.list[m.list.length]=l,m.productCount||(m.productCount=0),m.productCount++,m.salesRange||(m.salesRange=ra(u));var O=0,G=0;m.list.forEach(function(K){var U=K.\u8FD130\u5929\u9500\u91CF,et=Number(K["\u8FD130\u5929\u9500\u552E\u989D($)"]);O+=U,G+=et}),m.salesCount=O,m.salesRatio=Number((O/t*100).toFixed(2)),m.productCountRatio=Number((m.productCount/h*100).toFixed(2)),m.salesAmtRatio=Number((G/S*100).toFixed(2))}};for(C.s();!(E=C.n()).done;)R()}catch(c){C.e(c)}finally{C.f()}}),console.log("\u603B\u9500\u91CF ".concat(t));var y=Array.from(r.values()),F=(0,M.useState)(new Array),j=P()(F,2),k=j[0],I=j[1],g={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4","\u6570\u91CF\u5360\u6BD4","\u9500\u552E\u989D\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:"\u4EF7\u683C($)",nameLocation:"start",nameGap:40,type:"category",data:p.map(ra)}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:y},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(C){return C}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(C){return C+" %"}},encode:{x:"salesRange",y:"salesRatio"}},{name:"\u6570\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(C){return C+" %"}},encode:{x:"salesRange",y:"productCountRatio"}},{name:"\u9500\u552E\u989D\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(C){return C+" %"}},encode:{x:"salesRange",y:"salesAmtRatio"}}]},o=function(C,E){console.log(C,E),I(C.value.list),A()},s=b()(b()({},z()),{},{data:k});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:g,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:o}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(C){},children:(0,e.jsx)(L,b()({},s))})]})},Da=Ba,ja=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=60*60*24*30*1e3,r=[{min:0,max:p-1,title:"\u4E00\u4E2A\u6708"},{min:p,max:p*3-1,title:"3\u4E2A\u6708"},{min:p*3,max:p*6-1,title:"\u534A\u5E74"},{min:p*6,max:p*12-1,title:"1\u5E74"},{min:p*12,max:p*18-1,title:"1\u5E74\u534A"},{min:p*18,max:p*24-1,title:"2\u5E74"},{min:p*24,max:p*30-1,title:"2\u5E74\u534A"},{min:p*30,max:p*36-1,title:"3\u5E74"},{min:p*36,title:"3\u5E74\u4EE5\u4E0A"}],d=new Map;r.forEach(function(l){return d.set(l,{})});var t=a.data,h=0;t.forEach(function(l){var C=l.\u8FD130\u5929\u9500\u91CF;h+=C});var S=Date.now();t.forEach(function(l){var C=Z()(d),E;try{var R=function(){var f=P()(E.value,2),u=f[0],m=f[1],B=S-l.timestamp;if(u.min===u.max&&u.min==B||u.min!==void 0&&u.max!==void 0&&u.min<=B&&u.max>=B||u.min!==void 0&&u.max===void 0&&u.min<=B){m.list||(m.list=[]),m.list[m.list.length]=l,m.productCount||(m.productCount=0),m.productCount++,m.salesRange||(m.salesRange=u.title);var O=0;m.list.forEach(function(G){var K=G.\u8FD130\u5929\u9500\u91CF;O+=K}),m.salesCount=O,m.salesRatio=Number((O/h*100).toFixed(2))}};for(C.s();!(E=C.n()).done;)R()}catch(c){C.e(c)}finally{C.f()}}),console.log("\u603B\u9500\u91CF ".concat(h));var y=Array.from(d.values()),F=(0,M.useState)(new Array),j=P()(F,2),k=j[0],I=j[1],g={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:"\u4EF7\u683C($)",nameLocation:"start",nameGap:40,type:"category",data:r.map(function(l){return l.title})}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:y},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(C){return C}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(C){return C+" %"}},encode:{x:"salesRange",y:"salesRatio"}}]},o=function(C,E){console.log(C,E),I(C.value.list),A()},s=b()(b()({},z()),{},{data:k});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:g,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:o}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(C){},children:(0,e.jsx)(L,b()({},s))})]})},ka=ja,sa=["AMZ","FBA","FBM"],ua=["CN","US","\u672A\u77E5"],ia={nameLocation:"start",nameGap:40,type:"category"},la={tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["\u4EA7\u54C1\u6570\u91CF","\u9500\u91CF\u5360\u6BD4"]},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{nameLocation:"start",nameGap:40,type:"category"}],yAxis:[{type:"value",name:"\u4EA7\u54C1\u6570\u91CF"},{type:"value",name:"\u9500\u91CF\u5360\u6BD4",axisLabel:{formatter:"{value} %"}}],dataset:{source:[]},series:[{name:"\u4EA7\u54C1\u6570\u91CF",type:"bar",tooltip:{valueFormatter:function(a){return a}},encode:{x:"salesRange",y:"productCount"}},{name:"\u9500\u91CF\u5360\u6BD4",type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(a){return a+" %"}},encode:{x:"salesRange",y:"salesRatio"}}]},W=b()({},la),X=b()({},la);W.title={name:"\u914D\u9001\u65B9\u5F0F"},W.xAxis=[b()(b()({},ia),{},{name:"\u914D\u9001\u65B9\u5F0F",data:sa})],X.title={name:"\u5356\u5BB6\u5730\u533A"},X.xAxis=[b()(b()({},ia),{},{name:"\u5356\u5BB6\u5730\u533A",data:ua})];var ca=function(a,n,i,x,v,A){n.list||(n.list=[]),n.list[n.list.length]=i,n.productCount||(n.productCount=0),n.productCount++,n.salesRange=i[A];var w=0;n.list.forEach(function(p){var r=p.\u8FD130\u5929\u9500\u91CF;w+=r}),n.salesRatio=Number((w/x*100).toFixed(2)),n.productCountRatio=Number((n.productCount/v*100).toFixed(2))},Na=function(a){var n=(0,M.useState)(!1),i=P()(n,2),x=i[0],v=i[1],A=function(){v(!0)},w=function(){v(!1)},p=new Map;sa.forEach(function(g){return p.set(g,{})});var r=new Map;ua.forEach(function(g){return r.set(g,{})});var d=a.data,t=0,h=d.length;d.forEach(function(g){var o=g.\u8FD130\u5929\u9500\u91CF;t+=o}),d.forEach(function(g){var o=Z()(p),s;try{for(o.s();!(s=o.n()).done;){var l=P()(s.value,2),C=l[0],E=l[1];g.\u914D\u9001\u65B9\u5F0F===C&&ca(C,E,g,t,h,"\u914D\u9001\u65B9\u5F0F")}}catch(B){o.e(B)}finally{o.f()}var R=Z()(r),c;try{for(R.s();!(c=R.n()).done;){var f=P()(c.value,2),u=f[0],m=f[1];g.\u5356\u5BB6\u6240\u5C5E\u5730===u&&ca(u,m,g,t,h,"\u5356\u5BB6\u6240\u5C5E\u5730")}}catch(B){R.e(B)}finally{R.f()}}),console.log(Array.from(p.values()));var S=(0,M.useState)(new Array),y=P()(S,2),F=y[0],j=y[1];W.dataset={source:Array.from(p.values())},X.dataset={source:Array.from(r.values())};var k=function(o,s){console.log(o,s),j(o.value.list),A()},I=b()(b()({},z()),{},{data:F});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)($.Z,{option:W,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:k}}),(0,e.jsx)($.Z,{option:X,onChartReady:function(){return console.log("echarts ready ok")},onEvents:{click:k}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:x,onCancel:w,afterOpenChange:function(o){},children:(0,e.jsx)(L,b()({},I))})]})},Ma=Na,Ia=function(a){var n=a.data;console.log(n);var i=b()(b()({},z()),{},{data:n}),x={data:n,rankKey:"salesAmtRanking",countKey:"\u8FD130\u5929\u9500\u552E\u989D($)",option:{title:"\u5546\u54C1\u9500\u91CF\u989D\u96C6\u4E2D\u5EA6",xAxisName:"\u9500\u91CF\u989D\u6392\u540D",yAxisItemNames:["\u9500\u91CF\u989D","\u9500\u91CF\u989D\u5360\u6BD4"]}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(L,b()({},i)),(0,e.jsx)(L,b()({},x))]})},Oa=Ia,Za=function(a,n){return{tooltip:{trigger:"axis",axisPointer:{type:"none"},formatter:a.option.tooltipFormatter,extraCssText:"max-width: 600px; white-space:pre-wrap"},toolbox:{feature:{dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:a.option.legendData},dataZoom:[{type:"inside"},{type:"slider"}],xAxis:[{name:a.option.xAxisName,nameLocation:"start",nameGap:40,type:"category"}],yAxis:[{type:"value",name:a.option.yAxisItemNames[0]},{type:"value",name:a.option.yAxisItemNames[0],axisLabel:{formatter:"{value} %"}}],dataset:{source:n},visualMap:{type:"piecewise",show:!0,pieces:[{min:0,max:0,color:"#556fc5",label:a.option.yAxisItemNames[0]},{min:1,max:1,color:"#91cd77",label:"\u65B0\u54C1".concat(a.option.yAxisItemNames[0])}],seriesIndex:0,dimension:16,orient:"horizontal",selectedMode:!1,hoverLink:!1,left:"auto",bottom:"auto",top:0,inRange:{color:"#91cd77"},outOfRange:{color:"#556fc5"}},series:[{name:a.option.bar.name,type:"bar",tooltip:{valueFormatter:function(x){return x}},encode:{x:a.option.bar.x,y:a.option.bar.y}},{name:a.option.line.name,type:"line",yAxisIndex:1,tooltip:{valueFormatter:function(x){return x+" %"}},encode:{x:a.option.line.x,y:a.option.line.y}}]}},$a=function(a,n,i,x,v){n.list||(n.list=[]),n.list[n.list.length]=i,n.group=i[x];var A=Date.now();i.newProduct=A<=i.timestamp+Number(v)?1:0,n.data=i},La=function(a,n,i,x){a.salesCount=0,a.salesAmt=0,a.productCount=a.list.length;var v=0,A=0,w=0,p=0;a.list.forEach(function(r){var d=r.\u8FD130\u5929\u9500\u91CF;a.salesCount+=d;var t=r["\u8FD130\u5929\u9500\u552E\u989D($)"];a.salesAmt+=t,r.newProduct===1&&(w=1,v++,A+=r["\u8FD130\u5929\u9500\u552E\u989D($)"],p+=d)}),a.newProductSalesCount=p,a.unNewProductSalesCount=a.salesCount-p,a.newProductCount=v,a.unNewProductCount=a.productCount-a.newProductCount,a.newProductSalesAmt=A,a.unNewProductSalesAmt=a.salesAmt-a.newProductSalesAmt,a.newProductSalesAmtRatio=Number((a.newProductSalesAmt/a.salesAmt*100).toFixed(2)),a.unNewProductSalesAmtRatio=100-a.newProductSalesAmtRatio,a.newProductSalesCountRatio=Number((a.newProductSalesCount/a.salesCount*100).toFixed(2)),a.unNewProductSalesCountRatio=100-a.newProductSalesCountRatio,a.newProduct=w,a.salesCountRatio=Number((a.salesCount/n*100).toFixed(2)),a.salesAmtRatio=Number((a.salesAmt/i*100).toFixed(2))},Y,Ga=function(a){var n=(0,M.useState)(31104e6),i=P()(n,2),x=i[0],v=i[1],A=(0,M.useState)(!1),w=P()(A,2),p=w[0],r=w[1],d=(0,M.useState)(new Array),t=P()(d,2),h=t[0],S=t[1],y=function(){r(!0)},F=function(){r(!1)},j=function(m,B){console.log(m,B),S(m.value.list),y()},k=a.metadata,I=0,g=0;k.forEach(function(u){var m=u.\u8FD130\u5929\u9500\u91CF;I+=m;var B=u["\u8FD130\u5929\u9500\u552E\u989D($)"];g+=B;var O=Date.now();u.newProduct=O<=u.timestamp+x?1:0}),Y||(Y=new Set(k.map(function(u){return u[a.groupKey]})));var o=new Map;Y.forEach(function(u){return o.set(u,{})}),k.forEach(function(u){var m=Z()(o),B;try{for(m.s();!(B=m.n()).done;){var O=P()(B.value,2),G=O[0],K=O[1];u[a.groupKey]===G&&$a(G,K,u,a.groupKey,x)}}catch(U){m.e(U)}finally{m.f()}});var s=Array.from(o.values());s.map(function(u,m){La(u,I,g,m)}),s=Q().sortBy(s,a.sortKey).reverse(),s.forEach(function(u,m){return u.ranking=m+1});var l=Za(a,s),C=(0,M.useState)(l),E=P()(C,2),R=E[0],c=E[1];console.log(R);var f=b()(b()({},z()),{},{data:h});return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{overflow:"hidden",padding:"0 0 10px 0"},children:(0,e.jsxs)("div",{style:{float:"right",clear:"both"},children:[(0,e.jsx)("span",{children:"\u65B0\u54C1\u5B9A\u4E49\uFF1A"}),(0,e.jsxs)(V.ZP.Group,{size:"small",defaultValue:x,onChange:function(m){var B=m.target.value,O=Date.now();R.dataset.source.forEach(function(G){var K=0;G.list.forEach(function(U){O<=U.timestamp+Number(B)&&(K=1)}),G.newProduct=K}),v(Number(B)),c(b()({},R))},children:[(0,e.jsx)(V.ZP.Button,{value:31104e6,children:"\u6700\u8FD11\u5E74"}),(0,e.jsx)(V.ZP.Button,{value:15552e6,children:"\u6700\u8FD16\u4E2A\u6708"}),(0,e.jsx)(V.ZP.Button,{value:7776e6,children:"\u6700\u8FD13\u4E2A\u6708"})]})]})}),(0,e.jsx)($.Z,{option:R,onEvents:{click:j}}),(0,e.jsx)(T.Z,{footer:null,maskClosable:!1,title:"\u5546\u54C1\u5217\u8868",width:1200,open:p,onCancel:F,afterOpenChange:function(m){},children:(0,e.jsx)(L,b()({},f))})]})},J=Ga,Ka=function(a,n,i,x,v,A){n.list||(n.list=[]),n.list[n.list.length]=i,n.salesRange=i[A]},Va=function(a,n,i){a.salesCount===void 0&&(a.salesCount=0),a.salesAmt===void 0&&(a.salesAmt=0),a.list.forEach(function(x){var v=x.\u8FD130\u5929\u9500\u91CF;a.salesCount+=v;var A=x["\u8FD130\u5929\u9500\u552E\u989D($)"];a.salesAmt+=A}),a.salesRatio=Number((a.salesCount/n*100).toFixed(2)),a.salesAmtRatio=Number((a.salesAmt/i*100).toFixed(2))},_,Ta=function(a){var n=a.data;_||(_=new Set(n.map(function(r){return r.Buybox\u5356\u5BB6})));var i=new Map;_.forEach(function(r){return i.set(r,{})});var x=0,v=0;n.forEach(function(r){var d=r.\u8FD130\u5929\u9500\u91CF;x+=d;var t=r["\u8FD130\u5929\u9500\u552E\u989D($)"];v+=t}),n.forEach(function(r){var d=Z()(i),t;try{for(d.s();!(t=d.n()).done;){var h=P()(t.value,2),S=h[0],y=h[1];r.Buybox\u5356\u5BB6===S&&Ka(S,y,r,x,v,"Buybox\u5356\u5BB6")}}catch(F){d.e(F)}finally{d.f()}});var A=Array.from(i.values());A.map(function(r){Va(r,x,v)}),console.log(A);var w={metadata:n,sortKey:"salesCount",groupKey:"Buybox\u5356\u5BB6",option:{title:"\u5356\u5BB6\u9500\u91CF\u96C6\u4E2D\u5EA6",xAxisName:"\u5356\u5BB6",yAxisItemNames:["\u9500\u91CF","\u9500\u91CF\u5360\u6BD4"],legendData:["\u9500\u91CF\u5360\u6BD4"],bar:{name:"\u9500\u91CF",x:"group",y:"salesCount"},line:{name:"\u9500\u91CF\u5360\u6BD4",x:"group",y:"salesCountRatio"},tooltipFormatter:function(d){var t=d[0].data,h=["<b>\u6392\u540D: </b><span>".concat(t.ranking,"</span>"),"<b>\u5356\u5BB6: </b><span>".concat(t.group,"</span>"),"<b>\u5546\u54C1\u6570\u91CF/\u65B0\u54C1\u6570\u91CF: </b><span>".concat(t.productCount,"/").concat(t.newProductCount,"</span>"),"<b>\u6708\u9500\u91CF: </b><span>".concat(t.salesCount," (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCount," \u65B0\u54C1: ").concat(t.newProductSalesCount,")</span>"),"<b>\u6708\u9500\u91CF\u5360\u6BD4: </b><span>".concat(t.salesCountRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCountRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesCountRatio,"%)</span>"),"<b>\u6708\u9500\u552E\u989D: </b><span>$".concat(t.salesAmt," (\u975E\u65B0\u54C1: $").concat(t.unNewProductSalesAmt," \u65B0\u54C1: $").concat(t.newProductSalesAmt,")</span>"),"<b>\u6708\u9500\u552E\u989D\u5360\u6BD4: </b><span>".concat(t.salesAmtRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesAmtRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesAmtRatio,"%)</span>")];return h.join("<br/>")}}},p={metadata:n,sortKey:"salesAmt",groupKey:"Buybox\u5356\u5BB6",option:{title:"\u5356\u5BB6\u9500\u552E\u989D\u96C6\u4E2D\u5EA6",xAxisName:"\u5356\u5BB6",yAxisItemNames:["\u9500\u552E\u989D","\u9500\u552E\u989D\u5360\u6BD4"],legendData:["\u9500\u552E\u989D\u5360\u6BD4"],bar:{name:"\u9500\u552E\u989D",x:"group",y:"salesAmt"},line:{name:"\u9500\u552E\u989D\u5360\u6BD4",x:"group",y:"salesAmtRatio"},tooltipFormatter:function(d){var t=d[0].data,h=["<b>\u6392\u540D: </b><span>".concat(t.ranking,"</span>"),"<b>\u5356\u5BB6: </b><span>".concat(t.group,"</span>"),"<b>\u5546\u54C1\u6570\u91CF/\u65B0\u54C1\u6570\u91CF: </b><span>".concat(t.productCount,"/").concat(t.newProductCount,"</span>"),"<b>\u6708\u9500\u91CF: </b><span>".concat(t.salesCount," (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCount," \u65B0\u54C1: ").concat(t.newProductSalesCount,")</span>"),"<b>\u6708\u9500\u91CF\u5360\u6BD4: </b><span>".concat(t.salesCountRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCountRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesCountRatio,"%)</span>"),"<b>\u6708\u9500\u552E\u989D: </b><span>$".concat(t.salesAmt," (\u975E\u65B0\u54C1: $").concat(t.unNewProductSalesAmt," \u65B0\u54C1: $").concat(t.newProductSalesAmt,")</span>"),"<b>\u6708\u9500\u552E\u989D\u5360\u6BD4: </b><span>".concat(t.salesAmtRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesAmtRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesAmtRatio,"%)</span>")];return h.join("<br/>")}}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J,b()({},w)),(0,e.jsx)(J,b()({},p))]})},za=Ta,Ua=function(a,n,i,x,v,A){n.list||(n.list=[]),n.list[n.list.length]=i,n.salesRange=i[A]},Ha=function(a,n,i){a.salesCount===void 0&&(a.salesCount=0),a.salesAmt===void 0&&(a.salesAmt=0),a.list.forEach(function(x){var v=x.\u8FD130\u5929\u9500\u91CF;a.salesCount+=v;var A=x["\u8FD130\u5929\u9500\u552E\u989D($)"];a.salesAmt+=A}),a.salesRatio=Number((a.salesCount/n*100).toFixed(2)),a.salesAmtRatio=Number((a.salesAmt/i*100).toFixed(2))},q,Qa=function(a){var n=a.data;q||(q=new Set(n.map(function(r){return r.\u54C1\u724C})));var i=new Map;q.forEach(function(r){return i.set(r,{})});var x=0,v=0;n.forEach(function(r){var d=r.\u8FD130\u5929\u9500\u91CF;x+=d;var t=r["\u8FD130\u5929\u9500\u552E\u989D($)"];v+=t}),n.forEach(function(r){var d=Z()(i),t;try{for(d.s();!(t=d.n()).done;){var h=P()(t.value,2),S=h[0],y=h[1];r.\u54C1\u724C===S&&Ua(S,y,r,x,v,"\u54C1\u724C")}}catch(F){d.e(F)}finally{d.f()}});var A=Array.from(i.values());A.map(function(r){Ha(r,x,v)}),console.log(A);var w={metadata:n,sortKey:"salesCount",groupKey:"\u54C1\u724C",option:{title:"\u54C1\u724C\u9500\u91CF\u96C6\u4E2D\u5EA6",xAxisName:"\u54C1\u724C",yAxisItemNames:["\u9500\u91CF","\u9500\u91CF\u5360\u6BD4"],legendData:["\u9500\u91CF\u5360\u6BD4"],bar:{name:"\u9500\u91CF",x:"group",y:"salesCount"},line:{name:"\u9500\u91CF\u5360\u6BD4",x:"group",y:"salesCountRatio"},tooltipFormatter:function(d){var t=d[0].data,h=["<b>\u6392\u540D: </b><span>".concat(t.ranking,"</span>"),"<b>\u5356\u5BB6: </b><span>".concat(t.group,"</span>"),"<b>\u5546\u54C1\u6570\u91CF/\u65B0\u54C1\u6570\u91CF: </b><span>".concat(t.productCount,"/").concat(t.newProductCount,"</span>"),"<b>\u6708\u9500\u91CF: </b><span>".concat(t.salesCount," (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCount," \u65B0\u54C1: ").concat(t.newProductSalesCount,")</span>"),"<b>\u6708\u9500\u91CF\u5360\u6BD4: </b><span>".concat(t.salesCountRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCountRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesCountRatio,"%)</span>"),"<b>\u6708\u9500\u552E\u989D: </b><span>$".concat(t.salesAmt," (\u975E\u65B0\u54C1: $").concat(t.unNewProductSalesAmt," \u65B0\u54C1: $").concat(t.newProductSalesAmt,")</span>"),"<b>\u6708\u9500\u552E\u989D\u5360\u6BD4: </b><span>".concat(t.salesAmtRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesAmtRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesAmtRatio,"%)</span>")];return h.join("<br/>")}}},p={metadata:n,sortKey:"salesAmt",groupKey:"\u54C1\u724C",option:{title:"\u54C1\u724C\u9500\u552E\u989D\u96C6\u4E2D\u5EA6",xAxisName:"\u54C1\u724C",yAxisItemNames:["\u9500\u552E\u989D","\u9500\u552E\u989D\u5360\u6BD4"],legendData:["\u9500\u552E\u989D\u5360\u6BD4"],bar:{name:"\u9500\u552E\u989D",x:"group",y:"salesAmt"},line:{name:"\u9500\u552E\u989D\u5360\u6BD4",x:"group",y:"salesAmtRatio"},tooltipFormatter:function(d){var t=d[0].data,h=["<b>\u6392\u540D: </b><span>".concat(t.ranking,"</span>"),"<b>\u5356\u5BB6: </b><span>".concat(t.group,"</span>"),"<b>\u5546\u54C1\u6570\u91CF/\u65B0\u54C1\u6570\u91CF: </b><span>".concat(t.productCount,"/").concat(t.newProductCount,"</span>"),"<b>\u6708\u9500\u91CF: </b><span>".concat(t.salesCount," (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCount," \u65B0\u54C1: ").concat(t.newProductSalesCount,")</span>"),"<b>\u6708\u9500\u91CF\u5360\u6BD4: </b><span>".concat(t.salesCountRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesCountRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesCountRatio,"%)</span>"),"<b>\u6708\u9500\u552E\u989D: </b><span>$".concat(t.salesAmt," (\u975E\u65B0\u54C1: $").concat(t.unNewProductSalesAmt," \u65B0\u54C1: $").concat(t.newProductSalesAmt,")</span>"),"<b>\u6708\u9500\u552E\u989D\u5360\u6BD4: </b><span>".concat(t.salesAmtRatio,"% (\u975E\u65B0\u54C1: ").concat(t.unNewProductSalesAmtRatio,"% \u65B0\u54C1: ").concat(t.newProductSalesAmtRatio,"%)</span>")];return h.join("<br/>")}}};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(J,b()({},w)),(0,e.jsx)(J,b()({},p))]})},Wa=Qa,Xa=function(a){var n=[{label:"\u6708\u9500\u91CF",key:"MonthlySalesVolumeChart",children:(0,e.jsx)(ba,{data:a.data})},{label:"\u6708\u9500\u552E\u989D",key:"MonthlySalesChart",children:(0,e.jsx)(Ra,{data:a.data})},{label:"rating\u6570",key:"RatingQuantityChart",children:(0,e.jsx)(Fa,{data:a.data})},{label:"\u8BC4\u5206\u6570",key:"ScoreQuantityChart",children:(0,e.jsx)(Pa,{data:a.data})},{label:"\u4EF7\u683C",key:"PriceChart",children:(0,e.jsx)(Da,{data:a.data})},{label:"\u4E0A\u67B6\u65F6\u95F4",key:"AddedTimeChart",children:(0,e.jsx)(ka,{data:a.data})},{label:"\u5356\u5BB6\u7C7B\u578B",key:"SellerTypeChart",children:(0,e.jsx)(Ma,{data:a.data})},{label:"\u5546\u54C1\u96C6\u4E2D\u5EA6",key:"ProductConcentrationChart",children:(0,e.jsx)(Oa,{data:a.data})},{label:"\u5356\u5BB6\u96C6\u4E2D\u5EA6",key:"SellerConcentrationChart",children:(0,e.jsx)(za,{data:a.data})},{label:"\u54C1\u724C\u96C6\u4E2D\u5EA6",key:"BrandConcentrationChart",children:(0,e.jsx)(Wa,{data:a.data})}];return(0,e.jsx)(va.Z,{defaultActiveKey:"1",centered:!0,items:n.map(function(i,x){return{label:i.label,key:i.key,children:i.children}})})},Ja=Xa,Ya=N(74295),_a=N.n(Ya),qa=xa.Z.Dragger,at=function(){var a=(0,M.useState)(!1),n=P()(a,2),i=n[0],x=n[1],v=(0,M.useState)(new Array),A=P()(v,2),w=A[0],p=A[1],r={name:"file",accept:".xlsx",multiple:!0,itemRender:function(){return(0,e.jsx)("span",{})},onChange:function(t){var h=t.file.status;h!=="uploading"&&console.log(t.file,t.fileList),h==="done"?H.ZP.success("".concat(t.file.name," file uploaded successfully.")):h==="error"&&H.ZP.error("".concat(t.file.name," file upload failed."))},onDrop:function(t){console.log("Dropped files",t.dataTransfer.files)},customRequest:function(t){var h=t.file;if(h instanceof File){x(!0);var S=new(_a()).Workbook;h.arrayBuffer().then(function(y){S.xlsx.load(y).then(function(){var F=S.getWorksheet("US"),j=F.getRow(1).values;if(j instanceof Array){console.log(j);var k=["\u8FD130\u5929\u9500\u91CF","\u8BC4\u5206\u6570","\u8FD130\u5929\u9500\u552E\u989D($)","\u8BC4\u5206"];F.eachRow({includeEmpty:!0},function(I,g){if(!(g<=1)){var o=I.values;if(o instanceof Array){var s={};o.forEach(function(l,C){var E=j[C];if(E){var R=l;if(k.includes(E))typeof R!="number"&&(R=0);else if(E==="\u4E0A\u67B6\u65F6\u95F4"){var c=Date.parse(l);s.timestamp=c}else E==="\u5356\u5BB6\u6240\u5C5E\u5730"&&!l&&(R="\u672A\u77E5");s[E]=R}}),w.push(s)}else w.push(o);w.forEach(function(l){k.forEach(function(C){l[C]===void 0&&(l[C]=0)})})}})}}).then(function(){console.log(w);var F=Q().sortBy(w,"\u8FD130\u5929\u9500\u91CF").reverse();F.forEach(function(k,I){k.salesRanking=I+1});var j=Q().sortBy(w,"\u8FD130\u5929\u9500\u552E\u989D($)").reverse();j.forEach(function(k,I){k.salesAmtRanking=I+1}),p(fa()(w))})}),H.ZP.success("\u5BFC\u5165\u6210\u529F")}else H.ZP.error("\u5BFC\u5165\u5931\u8D25")}};return i?(0,e.jsx)(Ja,{data:w}):(0,e.jsxs)(qa,b()(b()({},r),{},{children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(Ca.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,e.jsx)("p",{className:"ant-upload-hint",children:"Support for a single or bulk upload. Strictly prohibited from uploading company data or ot\xCFher banned files."})]}))},tt=at}}]);
