(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/9aa":function(e,t,n){var o=n("NykK"),r=n("ExA7");e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==o(e)}},"3cYt":function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},"4K3U":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return A}));var o=n("MUpH"),r=n("q1tI"),a=n.n(r),i=n("Wbzz"),l=n("TJpk"),u=n("N1om"),f=n.n(u),c=n("Kvkj"),s=n("g67X"),d=n("vOnD"),p=n("InJ6");function x(){var e=Object(o.a)(["grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));"]);return x=function(){return e},e}var m=p.h.colors,g=p.h.fontSizes,h=p.h.fonts,v=Object(d.c)(p.d).withConfig({displayName:"posts__StyledMainContainer",componentId:"hgxkh5-0"})(["& > header{text-align:center;margin-bottom:100px;a{&:hover,&:focus{cursor:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>⚡</text></svg>\") 20 0,auto;}}}footer{",";margin-top:20px;width:100%;}"],p.g.flexBetween),y=d.c.div.withConfig({displayName:"posts__StyledGrid",componentId:"hgxkh5-1"})(["margin-top:50px;.posts{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:15px;position:relative;",";}"],p.f.desktop(x())),b=d.c.div.withConfig({displayName:"posts__StyledPostInner",componentId:"hgxkh5-2"})(["",";",";flex-direction:column;align-items:flex-start;position:relative;padding:2rem 1.75rem;height:100%;border-radius:",";transition:",";background-color:",";header,a{width:100%;}"],p.g.boxShadow,p.g.flexBetween,p.h.borderRadius,p.h.transition,m.lightNavy),E=d.c.div.withConfig({displayName:"posts__StyledPost",componentId:"hgxkh5-3"})(["transition:",";cursor:default;&:hover,&:focus{outline:0;","{transform:translateY(-5px);}}"],p.h.transition,b),w=d.c.div.withConfig({displayName:"posts__StyledPostHeader",componentId:"hgxkh5-4"})(["",";margin-bottom:30px;"],p.g.flexBetween),k=d.c.div.withConfig({displayName:"posts__StyledFolder",componentId:"hgxkh5-5"})(["color:",";svg{width:40px;height:40px;}"],m.green),S=d.c.h5.withConfig({displayName:"posts__StyledPostName",componentId:"hgxkh5-6"})(["margin:0 0 10px;font-size:",";color:",";"],g.xxl,m.lightestSlate),N=d.c.div.withConfig({displayName:"posts__StyledPostDescription",componentId:"hgxkh5-7"})(["font-size:17px;color:",";"],m.lightSlate),z=d.c.span.withConfig({displayName:"posts__StyledDate",componentId:"hgxkh5-8"})(["text-transform:uppercase;font-family:",";font-size:",";color:",";"],h.SFMono,g.xs,m.lightSlate),I=d.c.ul.withConfig({displayName:"posts__StyledTags",componentId:"hgxkh5-9"})(["display:flex;align-items:flex-end;flex-wrap:wrap;padding:0;margin:0;list-style:none;li{font-family:",";font-size:",";color:",";line-height:1.75;margin-right:15px;&:last-of-type{margin-right:0;}a{",";}}"],h.SFMono,g.xs,m.green,p.g.inlineLink);t.default=function(e){var t=e.location,n=e.data.allMarkdownRemark.edges;return a.a.createElement(c.i,{location:t},a.a.createElement(l.Helmet,null,a.a.createElement("title",null,"Posts"),a.a.createElement("link",{rel:"canonical",href:"https://shivgodhia.com/posts"})),a.a.createElement(v,null,a.a.createElement("header",null,a.a.createElement("h1",{className:"big-title"},"Things I think about"),a.a.createElement("p",{className:"subtitle"},"Here's where I share about what I'm learning. I hope that you'll join the conversation.")),a.a.createElement(y,null,a.a.createElement("div",{className:"posts"},n.length>0&&n.map((function(e,t){var n=e.node.frontmatter,o=n.title,r=n.description,l=n.slug,u=n.date,c=n.tags,d=new Date(u);return a.a.createElement(E,{key:t,tabIndex:"0"},a.a.createElement(b,null,a.a.createElement("header",null,a.a.createElement(i.Link,{to:l},a.a.createElement(w,null,a.a.createElement(k,null,a.a.createElement(s.q,null))),a.a.createElement(S,null,o),a.a.createElement(N,null,r))),a.a.createElement("footer",null,a.a.createElement(z,null,""+d.toLocaleDateString()),a.a.createElement(I,null,c.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(i.Link,{to:"/posts/tags/"+f()(e)+"/"},"#",e))}))))))}))))))};var A="1490430893"},"6nK8":function(e,t,n){var o=n("dVn5"),r=n("fo6e"),a=n("dt0z"),i=n("9NmV");e.exports=function(e,t,n){return e=a(e),void 0===(t=n?void 0:t)?r(e)?i(e):o(e):e.match(t)||[]}},"9NmV":function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+n+"]",r="\\d+",a="[\\u2700-\\u27bf]",i="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+n+r+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",u="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",c="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+i+"|"+l+")",d="(?:"+c+"|"+l+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",u,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),m="(?:"+[a,u,f].join("|")+")"+x,g=RegExp([c+"?"+i+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[o,c,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[o,c+s,"$"].join("|")+")",c+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",c+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",r,m].join("|"),"g");e.exports=function(e){return e.match(g)||[]}},AP2z:function(e,t,n){var o=n("nmnc"),r=Object.prototype,a=r.hasOwnProperty,i=r.toString,l=o?o.toStringTag:void 0;e.exports=function(e){var t=a.call(e,l),n=e[l];try{e[l]=void 0;var o=!0}catch(u){}var r=i.call(e);return o&&(t?e[l]=n:delete e[l]),r}},ExA7:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},KfNM:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},Kz5y:function(e,t,n){var o=n("WFqU"),r="object"==typeof self&&self&&self.Object===Object&&self,a=o||r||Function("return this")();e.exports=a},N1om:function(e,t,n){var o=n("sgoq")((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=o},NykK:function(e,t,n){var o=n("nmnc"),r=n("AP2z"),a=n("KfNM"),i=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?r(e):a(e)}},TKrE:function(e,t,n){var o=n("qRkn"),r=n("dt0z"),a=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(a,o).replace(i,"")}},WFqU:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n("yLpj"))},Z0cm:function(e,t){var n=Array.isArray;e.exports=n},asDA:function(e,t){e.exports=function(e,t,n,o){var r=-1,a=null==e?0:e.length;for(o&&a&&(n=e[++r]);++r<a;)n=t(n,e[r],r,e);return n}},dVn5:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},dt0z:function(e,t,n){var o=n("zoYe");e.exports=function(e){return null==e?"":o(e)}},eUgh:function(e,t){e.exports=function(e,t){for(var n=-1,o=null==e?0:e.length,r=Array(o);++n<o;)r[n]=t(e[n],n,e);return r}},fo6e:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},nmnc:function(e,t,n){var o=n("Kz5y").Symbol;e.exports=o},qRkn:function(e,t,n){var o=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=o},sgoq:function(e,t,n){var o=n("asDA"),r=n("TKrE"),a=n("6nK8"),i=RegExp("['’]","g");e.exports=function(e){return function(t){return o(a(r(t).replace(i,"")),e,"")}}},zoYe:function(e,t,n){var o=n("nmnc"),r=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),l=o?o.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return r(t,e)+"";if(i(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-pages-posts-index-js-91f603bd58b01ae3a1ea.js.map