var hljs=new function(){var m={};var b={};function n(q){return q.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function f(s,r){if(!s){return false}for(var q=0;q<s.length;q++){if(s[q]==r){return true}}return false}function e(C,E){function D(O,P){O.sub_modes=[];for(var N=0;N<O.contains.length;N++){for(var M=0;M<P.modes.length;M++){if(P.modes[M].className==O.contains[N]){O.sub_modes[O.sub_modes.length]=P.modes[M]}}}}function s(M,O){if(!O.contains){return null}if(!O.sub_modes){D(O,F)}for(var N=0;N<O.sub_modes.length;N++){if(O.sub_modes[N].beginRe.test(M)){return O.sub_modes[N]}}return null}function x(N,M){if(q[N].end&&q[N].endRe.test(M)){return 1}if(q[N].endsWithParent){var O=x(N-1,M);return O?O+1:0}return 0}function y(M,N){return N.illegalRe&&N.illegalRe.test(M)}function L(R,S){var N=[];function Q(T){if(!f(N,T)){N[N.length]=T}}if(R.contains){for(var P=0;P<S.modes.length;P++){if(f(R.contains,S.modes[P].className)){Q(S.modes[P].begin)}}}var O=q.length-1;do{if(q[O].end){Q(q[O].end)}O--}while(q[O+1].endsWithParent);if(R.illegal){Q(R.illegal)}var M="("+N[0];for(var P=0;P<N.length;P++){M+="|"+N[P]}M+=")";return h(S,M)}function r(O,N){var P=q[q.length-1];if(!P.terminators){P.terminators=L(P,F)}O=O.substr(N);var M=P.terminators.exec(O);if(!M){return[O,"",true]}if(M.index==0){return["",M[0],false]}else{return[O.substr(0,M.index),M[0],false]}}function B(Q,M){var O=F.case_insensitive?M[0].toLowerCase():M[0];for(var N in Q.keywordGroups){if(!Q.keywordGroups.hasOwnProperty(N)){continue}var P=Q.keywordGroups[N].hasOwnProperty(O);if(P){return[N,P]}}return false}function G(N,T){if(!T.keywords||!T.lexems){return n(N)}if(!T.lexemsRe){var S="("+T.lexems[0];for(var P=1;P<T.lexems.length;P++){S+="|"+T.lexems[P]}S+=")";T.lexemsRe=h(F,S,true)}var M="";var R=0;T.lexemsRe.lastIndex=0;var O=T.lexemsRe.exec(N);while(O){M+=n(N.substr(R,O.index-R));var Q=B(T,O);if(Q){z+=Q[1];M+='<span class="'+Q[0]+'">'+n(O[0])+"</span>"}else{M+=n(O[0])}R=T.lexemsRe.lastIndex;O=T.lexemsRe.exec(N)}M+=n(N.substr(R,N.length-R));return M}function K(N,O){if(O.subLanguage&&b[O.subLanguage]){var M=e(O.subLanguage,N);z+=M.keyword_count;v+=M.relevance;return M.value}else{return G(N,O)}}function J(O,M){var N=O.noMarkup?"":'<span class="'+O.className+'">';if(O.returnBegin){A+=N;O.buffer=""}else{if(O.excludeBegin){A+=n(M)+N;O.buffer=""}else{A+=N;O.buffer=M}}q[q.length]=O}function H(P,O,N){var T=q[q.length-1];if(N){A+=K(T.buffer+P,T);return false}var R=s(O,T);if(R){A+=K(T.buffer+P,T);J(R,O);v+=R.relevance;return R.returnBegin}var M=x(q.length-1,O);if(M){var Q=T.noMarkup?"":"</span>";if(T.returnEnd){A+=K(T.buffer+P,T)+Q}else{if(T.excludeEnd){A+=K(T.buffer+P,T)+Q+n(O)}else{A+=K(T.buffer+P+O,T)+Q}}while(M>1){Q=q[q.length-2].noMarkup?"":"</span>";A+=Q;M--;q.length--}q.length--;q[q.length-1].buffer="";if(T.starts){for(var S=0;S<F.modes.length;S++){if(F.modes[S].className==T.starts){J(F.modes[S],"");break}}}return T.returnEnd}if(y(O,T)){throw"Illegal"}}var F=m[C];var q=[F.defaultMode];var v=0;var z=0;var A="";try{var w=0;F.defaultMode.buffer="";do{var t=r(E,w);var u=H(t[0],t[1],t[2]);w+=t[0].length;if(!u){w+=t[1].length}}while(!t[2]);if(q.length>1){throw"Illegal"}return{relevance:v,keyword_count:z,value:A}}catch(I){if(I=="Illegal"){return{relevance:0,keyword_count:0,value:n(E)}}else{throw I}}}function i(s){var q="";for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){q+=s.childNodes[r].nodeValue}else{if(s.childNodes[r].nodeName=="BR"){q+="\n"}else{q+=i(s.childNodes[r])}}}return q}function a(t){var s=t.className.split(/\s+/);s=s.concat(t.parentNode.className.split(/\s+/));for(var r=0;r<s.length;r++){var q=s[r].replace(/^language-/,"");if(q=="no-highlight"){throw"No highlight"}if(m[q]){return q}}}function d(r){var q=[];(function(t,u){for(var s=0;s<t.childNodes.length;s++){if(t.childNodes[s].nodeType==3){u+=t.childNodes[s].nodeValue.length}else{if(t.childNodes[s].nodeName=="BR"){u+=1}else{q.push({event:"start",offset:u,node:t.childNodes[s]});u=arguments.callee(t.childNodes[s],u);q.push({event:"stop",offset:u,node:t.childNodes[s]})}}}return u})(r,0);return q}function k(z,x,y){var r=0;var B="";var t=[];function v(){if(z.length&&x.length){if(z[0].offset!=x[0].offset){return(z[0].offset<x[0].offset)?z:x}else{return(z[0].event=="start"&&x[0].event=="stop")?x:z}}else{return z.length?z:x}}function u(E){var C="<"+E.nodeName.toLowerCase();for(var D=0;D<E.attributes.length;D++){C+=" "+E.attributes[D].nodeName.toLowerCase()+'="'+n(E.attributes[D].nodeValue)+'"'}return C+">"}function A(C){return"</"+C.nodeName.toLowerCase()+">"}while(z.length||x.length){var w=v().splice(0,1)[0];B+=n(y.substr(r,w.offset-r));r=w.offset;if(w.event=="start"){B+=u(w.node);t.push(w.node)}else{if(w.event=="stop"){var s=t.length;do{s--;var q=t[s];B+=A(q)}while(q!=w.node);t.splice(s,1);while(s<t.length){B+=u(t[s]);s++}}}}B+=y.substr(r);return B}function o(u,A){try{var C=i(u);var y=a(u)}catch(z){if(z=="No highlight"){return}}if(y){var E=e(y,C).value}else{var D=0;for(var B in b){if(!b.hasOwnProperty(B)){continue}var s=e(B,C);var x=s.keyword_count+s.relevance;if(x>D){D=x;var E=s.value;y=B}}}if(E){if(A){E=E.replace(/^(\t+)/gm,function(F,I,H,G){return I.replace(/\t/g,A)})}var w=u.className;if(!w.match(y)){w+=" "+y}var r=d(u);if(r.length){var t=document.createElement("pre");t.innerHTML=E;E=k(r,d(t),C)}var q=document.createElement("div");q.innerHTML='<pre><code class="'+w+'">'+E+"</code></pre>";var v=u.parentNode.parentNode;v.replaceChild(q.firstChild,u.parentNode)}}function h(t,r,q){var s="m"+(t.case_insensitive?"i":"")+(q?"g":"");return new RegExp(r,s)}function j(){for(var r in m){if(!m.hasOwnProperty(r)){continue}var s=m[r];for(var q=0;q<s.modes.length;q++){if(s.modes[q].begin){s.modes[q].beginRe=h(s,"^"+s.modes[q].begin)}if(s.modes[q].end){s.modes[q].endRe=h(s,"^"+s.modes[q].end)}if(s.modes[q].illegal){s.modes[q].illegalRe=h(s,"^(?:"+s.modes[q].illegal+")")}s.defaultMode.illegalRe=h(s,"^(?:"+s.defaultMode.illegal+")");if(s.modes[q].relevance==undefined){s.modes[q].relevance=1}}}}function g(){function q(v){if(!v.keywordGroups){for(var u in v.keywords){if(!v.keywords.hasOwnProperty(u)){continue}if(v.keywords[u] instanceof Object){v.keywordGroups=v.keywords}else{v.keywordGroups={keyword:v.keywords}}break}}}for(var s in m){if(!m.hasOwnProperty(s)){continue}var t=m[s];q(t.defaultMode);for(var r=0;r<t.modes.length;r++){q(t.modes[r])}}}function c(r){for(var q=0;q<r.childNodes.length;q++){node=r.childNodes[q];if(node.nodeName=="CODE"){return node}if(!(node.nodeType==3&&node.nodeValue.match(/\s+/))){return null}}}function p(){if(p.called){return}p.called=true;j();g();if(arguments.length){for(var q=0;q<arguments.length;q++){if(m[arguments[q]]){b[arguments[q]]=m[arguments[q]]}}}else{b=m}var s=document.getElementsByTagName("pre");for(var q=0;q<s.length;q++){var r=c(s[q]);if(r){o(r,hljs.tabReplace)}}}function l(){var q=arguments;var r=function(){p.apply(null,q)};if(window.addEventListener){window.addEventListener("DOMContentLoaded",r,false);window.addEventListener("load",r,false)}else{if(window.attachEvent){window.attachEvent("onload",r)}else{window.onload=r}}}this.LANGUAGES=m;this.initHighlightingOnLoad=l;this.highlightBlock=o;this.initHighlighting=p;this.IDENT_RE="[a-zA-Z][a-zA-Z0-9_]*";this.UNDERSCORE_IDENT_RE="[a-zA-Z_][a-zA-Z0-9_]*";this.NUMBER_RE="\\b\\d+(\\.\\d+)?";this.C_NUMBER_RE="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:["escape"],relevance:0};this.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:["escape"],relevance:0};this.BACKSLASH_ESCAPE={className:"escape",begin:"\\\\.",end:"^",noMarkup:true,relevance:0};this.C_LINE_COMMENT_MODE={className:"comment",begin:"//",end:"$",relevance:0};this.C_BLOCK_COMMENT_MODE={className:"comment",begin:"/\\*",end:"\\*/"};this.HASH_COMMENT_MODE={className:"comment",begin:"#",end:"$"};this.C_NUMBER_MODE={className:"number",begin:this.C_NUMBER_RE,end:"^",relevance:0}}();var initHighlightingOnLoad=hljs.initHighlightingOnLoad;hljs.LANGUAGES.bash=function(){var a={"true":1,"false":1};return{defaultMode:{lexems:[hljs.IDENT_RE],contains:["string","shebang","comment","number","test_condition","string","variable"],keywords:{keyword:{"if":1,then:1,"else":1,fi:1,"for":1,"break":1,"continue":1,"while":1,"in":1,"do":1,done:1,echo:1,exit:1,"return":1,set:1,declare:1},literal:a}},case_insensitive:false,modes:[{className:"shebang",begin:"(#!\\/bin\\/bash)|(#!\\/bin\\/sh)",end:"^",relevance:10},hljs.HASH_COMMENT_MODE,{className:"test_condition",begin:"\\[ ",end:" \\]",contains:["string","variable","number"],lexems:[hljs.IDENT_RE],keywords:{literal:a},relevance:0},{className:"test_condition",begin:"\\[\\[ ",end:" \\]\\]",contains:["string","variable","number"],lexems:[hljs.IDENT_RE],keywords:{literal:a}},{className:"variable",begin:"\\$([a-zA-Z0-9_]+)\\b",end:"^"},{className:"variable",begin:"\\$\\{(([^}])|(\\\\}))+\\}",end:"^",contains:["number"]},{className:"string",begin:'"',end:'"',illegal:"\\n",contains:["escape","variable"],relevance:0},{className:"string",begin:'"',end:'"',illegal:"\\n",contains:["escape","variable"],relevance:0},hljs.BACKSLASH_ESCAPE,hljs.C_NUMBER_MODE,{className:"comment",begin:"\\/\\/",end:"$",illegal:"."}]}}();hljs.LANGUAGES.cpp=function(){var a={keyword:{"false":1,"int":1,"float":1,"while":1,"private":1,"char":1,"catch":1,"export":1,virtual:1,operator:2,sizeof:2,dynamic_cast:2,typedef:2,const_cast:2,"const":1,struct:1,"for":1,static_cast:2,union:1,namespace:1,unsigned:1,"long":1,"throw":1,"volatile":2,"static":1,"protected":1,bool:1,template:1,mutable:1,"if":1,"public":1,friend:2,"do":1,"return":1,"goto":1,auto:1,"void":2,"enum":1,"else":1,"break":1,"new":1,extern:1,using:1,"true":1,"class":1,asm:1,"case":1,typeid:1,"short":1,reinterpret_cast:2,"default":1,"double":1,register:1,explicit:1,signed:1,typename:1,"try":1,"this":1,"switch":1,"continue":1,wchar_t:1,inline:1,"delete":1},built_in:{std:1,string:1,cin:1,cout:1,cerr:1,clog:1,stringstream:1,istringstream:1,ostringstream:1,auto_ptr:1,deque:1,list:1,queue:1,stack:1,vector:1,map:1,set:1,bitset:1,multiset:1,multimap:1}};return{defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],illegal:"</",contains:["comment","string","number","preprocessor","stl_container"],keywords:a},modes:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.C_NUMBER_MODE,hljs.QUOTE_STRING_MODE,hljs.BACKSLASH_ESCAPE,{className:"string",begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"},{className:"preprocessor",begin:"#",end:"$"},{className:"stl_container",begin:"\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap)\\s*<",end:">",contains:["stl_container"],lexems:[hljs.UNDERSCORE_IDENT_RE],keywords:a,relevance:10}]}}();hljs.LANGUAGES.cs={defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["comment","string","number"],keywords:{"abstract":1,as:1,base:1,bool:1,"break":1,"byte":1,"case":1,"catch":1,"char":1,checked:1,"class":1,"const":1,"continue":1,decimal:1,"default":1,delegate:1,"do":1,"do":1,"double":1,"else":1,"enum":1,event:1,explicit:1,extern:1,"false":1,"finally":1,fixed:1,"float":1,"for":1,foreach:1,"goto":1,"if":1,implicit:1,"in":1,"int":1,"interface":1,internal:1,is:1,lock:1,"long":1,namespace:1,"new":1,"null":1,object:1,operator:1,out:1,override:1,params:1,"private":1,"protected":1,"public":1,readonly:1,ref:1,"return":1,sbyte:1,sealed:1,"short":1,sizeof:1,stackalloc:1,"static":1,string:1,struct:1,"switch":1,"this":1,"throw":1,"true":1,"try":1,"typeof":1,uint:1,ulong:1,unchecked:1,unsafe:1,ushort:1,using:1,virtual:1,"volatile":1,"void":1,"while":1,ascending:1,descending:1,from:1,get:1,group:1,into:1,join:1,let:1,orderby:1,partial:1,select:1,set:1,value:1,"var":1,where:1,yield:1}},modes:[{className:"comment",begin:"///",end:"$",returnBegin:true,contains:["xmlDocTag"]},{className:"xmlDocTag",begin:"///|<!--|-->",end:"^"},{className:"xmlDocTag",begin:"</?",end:">"},{className:"string",begin:'@"',end:'"',contains:["quoteQuote"]},{className:"quoteQuote",begin:'""',end:"^"},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.BACKSLASH_ESCAPE,hljs.C_NUMBER_MODE]};hljs.LANGUAGES.css={defaultMode:{contains:["at_rule","id","class","attr_selector","pseudo","rules","comment"],keywords:hljs.HTML_TAGS,lexems:[hljs.IDENT_RE],illegal:"="},case_insensitive:true,modes:[{className:"at_rule",begin:"@",end:"[{;]",excludeEnd:true,lexems:[hljs.IDENT_RE],keywords:{"import":1,page:1,media:1,charset:1,"font-face":1},contains:["function","string","number","pseudo"]},{className:"id",begin:"\\#[A-Za-z0-9_-]+",end:"^"},{className:"class",begin:"\\.[A-Za-z0-9_-]+",end:"^",relevance:0},{className:"attr_selector",begin:"\\[",end:"\\]",illegal:"$"},{className:"pseudo",begin:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+",end:"^"},{className:"rules",begin:"{",end:"}",contains:["rule","comment"],illegal:"[^\\s]"},{className:"rule",begin:"[A-Z\\_\\.\\-]+\\s*:",end:";",endsWithParent:true,lexems:["[A-Za-z-]+"],keywords:{"play-during":1,"counter-reset":1,"counter-increment":1,"min-height":1,quotes:1,"border-top":1,pitch:1,font:1,pause:1,"list-style-image":1,"border-width":1,cue:1,"outline-width":1,"border-left":1,elevation:1,richness:1,"speech-rate":1,"border-bottom":1,"border-spacing":1,background:1,"list-style-type":1,"text-align":1,"page-break-inside":1,orphans:1,"page-break-before":1,"text-transform":1,"line-height":1,"padding-left":1,"font-size":1,right:1,"word-spacing":1,"padding-top":1,"outline-style":1,bottom:1,content:1,"border-right-style":1,"padding-right":1,"border-left-style":1,"voice-family":1,"background-color":1,"border-bottom-color":1,"outline-color":1,"unicode-bidi":1,"max-width":1,"font-family":1,"caption-side":1,"border-right-width":1,"pause-before":1,"border-top-style":1,color:1,"border-collapse":1,"border-bottom-width":1,"float":1,height:1,"max-height":1,"margin-right":1,"border-top-width":1,speak:1,"speak-header":1,top:1,"cue-before":1,"min-width":1,width:1,"font-variant":1,"border-top-color":1,"background-position":1,"empty-cells":1,direction:1,"border-right":1,visibility:1,padding:1,"border-style":1,"background-attachment":1,overflow:1,"border-bottom-style":1,cursor:1,margin:1,display:1,"border-left-width":1,"letter-spacing":1,"vertical-align":1,clip:1,"border-color":1,"list-style":1,"padding-bottom":1,"pause-after":1,"speak-numeral":1,"margin-left":1,widows:1,border:1,"font-style":1,"border-left-color":1,"pitch-range":1,"background-repeat":1,"table-layout":1,"margin-bottom":1,"speak-punctuation":1,"font-weight":1,"border-right-color":1,"page-break-after":1,position:1,"white-space":1,"text-indent":1,"background-image":1,volume:1,stress:1,outline:1,clear:1,"z-index":1,"text-decoration":1,"margin-top":1,azimuth:1,"cue-after":1,left:1,"list-style-position":1},contains:["value"]},hljs.C_BLOCK_COMMENT_MODE,{className:"value",begin:"^",endsWithParent:true,excludeEnd:true,contains:["function","number","hexcolor","string"]},{className:"number",begin:hljs.NUMBER_RE,end:"^"},{className:"hexcolor",begin:"\\#[0-9A-F]+",end:"^"},{className:"function",begin:hljs.IDENT_RE+"\\(",end:"\\)",contains:["params"]},{className:"params",begin:"^",endsWithParent:true,excludeEnd:true,contains:["number","string"]},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]};hljs.LANGUAGES.diff={case_insensitive:true,defaultMode:{contains:["chunk","header","addition","deletion","change"]},modes:[{className:"chunk",begin:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",end:"^",relevance:10},{className:"chunk",begin:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",end:"^",relevance:10},{className:"chunk",begin:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",end:"^",relevance:10},{className:"header",begin:"Index: ",end:"$"},{className:"header",begin:"=====",end:"=====$"},{className:"header",begin:"^\\-\\-\\-",end:"$"},{className:"header",begin:"^\\*{3} ",end:"$"},{className:"header",begin:"^\\+\\+\\+",end:"$"},{className:"header",begin:"\\*{5}",end:"\\*{5}$"},{className:"addition",begin:"^\\+",end:"$"},{className:"deletion",begin:"^\\-",end:"$"},{className:"change",begin:"^\\!",end:"$"}]};hljs.XML_COMMENT={className:"comment",begin:"<!--",end:"-->"};hljs.XML_ATTR={className:"attribute",begin:"\\s[a-zA-Z\\:_-]+=",end:"^",contains:["value"]};hljs.XML_VALUE_QUOT={className:"value",begin:'"',end:'"'};hljs.XML_VALUE_APOS={className:"value",begin:"'",end:"'"};hljs.LANGUAGES.xml={defaultMode:{contains:["pi","comment","cdata","tag"]},case_insensitive:true,modes:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},hljs.XML_COMMENT,{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>"},{className:"tag",begin:"</?",end:">",contains:["title","tag_internal"],relevance:1.5},{className:"title",begin:"[A-Za-z:_][A-Za-z0-9\\._:-]+",end:"^",relevance:0},{className:"tag_internal",begin:"^",endsWithParent:true,noMarkup:true,contains:["attribute"],relevance:0,illegal:"[\\+\\.]"},hljs.XML_ATTR,hljs.XML_VALUE_QUOT,hljs.XML_VALUE_APOS]};hljs.HTML_TAGS={code:1,kbd:1,font:1,noscript:1,style:1,img:1,title:1,menu:1,tt:1,tr:1,param:1,li:1,tfoot:1,th:1,input:1,td:1,dl:1,blockquote:1,fieldset:1,big:1,dd:1,abbr:1,optgroup:1,dt:1,button:1,isindex:1,p:1,small:1,div:1,dir:1,em:1,frame:1,meta:1,sub:1,bdo:1,label:1,acronym:1,sup:1,body:1,xml:1,basefont:1,base:1,br:1,address:1,strong:1,legend:1,ol:1,script:1,caption:1,s:1,col:1,h2:1,h3:1,h1:1,h6:1,h4:1,h5:1,table:1,select:1,noframes:1,span:1,area:1,dfn:1,strike:1,cite:1,thead:1,head:1,option:1,form:1,hr:1,"var":1,link:1,b:1,colgroup:1,ul:1,applet:1,del:1,iframe:1,pre:1,frameset:1,ins:1,tbody:1,html:1,samp:1,map:1,object:1,a:1,xmlns:1,center:1,textarea:1,i:1,q:1,u:1};hljs.HTML_DOCTYPE={className:"doctype",begin:"<!DOCTYPE",end:">",relevance:10};hljs.HTML_ATTR={className:"attribute",begin:"\\s[a-zA-Z\\:_-]+=",end:"^",contains:["value"]};hljs.HTML_SHORT_ATTR={className:"attribute",begin:" [a-zA-Z]+",end:"^"};hljs.HTML_VALUE={className:"value",begin:"[a-zA-Z0-9]+",end:"^"};hljs.LANGUAGES.html={defaultMode:{contains:["tag","comment","doctype","vbscript"]},case_insensitive:true,modes:[hljs.XML_COMMENT,hljs.HTML_DOCTYPE,{className:"tag",lexems:[hljs.IDENT_RE],keywords:hljs.HTML_TAGS,begin:"<style",end:">",contains:["attribute"],illegal:"[\\+\\.]",starts:"css"},{className:"tag",lexems:[hljs.IDENT_RE],keywords:hljs.HTML_TAGS,begin:"<script",end:">",contains:["attribute"],illegal:"[\\+\\.]",starts:"javascript"},{className:"tag",lexems:[hljs.IDENT_RE],keywords:hljs.HTML_TAGS,begin:"<[A-Za-z/]",end:">",contains:["attribute"],illegal:"[\\+\\.]"},{className:"css",end:"</style>",returnEnd:true,subLanguage:"css"},{className:"javascript",end:"<\/script>",returnEnd:true,subLanguage:"javascript"},hljs.HTML_ATTR,hljs.HTML_SHORT_ATTR,hljs.XML_VALUE_QUOT,hljs.XML_VALUE_APOS,hljs.HTML_VALUE,{className:"vbscript",begin:"<%",end:"%>",subLanguage:"vbscript"}]};hljs.LANGUAGES.java={defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["javadoc","comment","string","class","number","annotation"],keywords:{"false":1,"synchronized":1,"int":1,"abstract":1,"float":1,"private":1,"char":1,"interface":1,"boolean":1,"static":1,"null":1,"if":1,"const":1,"for":1,"true":1,"while":1,"long":1,"throw":1,strictfp:1,"finally":1,"protected":1,"extends":1,"import":1,"native":1,"final":1,"implements":1,"return":1,"void":1,"enum":1,"else":1,"break":1,"transient":1,"new":1,"catch":1,"instanceof":1,"byte":1,"super":1,"class":1,"volatile":1,"case":1,assert:1,"short":1,"package":1,"default":1,"double":1,"public":1,"try":1,"this":1,"switch":1,"continue":1,"throws":1}},modes:[{className:"class",lexems:[hljs.UNDERSCORE_IDENT_RE],begin:"(class |interface )",end:"{",illegal:":",keywords:{"class":1,"interface":1},contains:["inheritance","title"]},{className:"inheritance",begin:"(implements|extends)",end:"^",noMarkup:true,lexems:[hljs.IDENT_RE],keywords:{"extends":1,"implements":1},relevance:10},{className:"title",begin:hljs.UNDERSCORE_IDENT_RE,end:"^"},{className:"params",begin:"\\(",end:"\\)",contains:["string","annotation"]},hljs.C_NUMBER_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.BACKSLASH_ESCAPE,hljs.C_LINE_COMMENT_MODE,{className:"javadoc",begin:"/\\*\\*",end:"\\*/",contains:["javadoctag"],relevance:10},{className:"javadoctag",begin:"@[A-Za-z]+",end:"^"},hljs.C_BLOCK_COMMENT_MODE,{className:"annotation",begin:"@[A-Za-z]+",end:"^"}]};hljs.LANGUAGES.javascript={defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["string","comment","number","regexp_container","function"],keywords:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}}},modes:[hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,hljs.C_NUMBER_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.BACKSLASH_ESCAPE,{className:"regexp_container",begin:"("+hljs.RE_STARTERS_RE+"|case|return|throw)\\s*",end:"^",noMarkup:true,lexems:[hljs.IDENT_RE],keywords:{"return":1,"throw":1,"case":1},contains:["comment","regexp"],relevance:0},{className:"regexp",begin:"/.*?[^\\\\/]/[gim]*",end:"^"},{className:"function",begin:"\\bfunction\\b",end:"{",lexems:[hljs.UNDERSCORE_IDENT_RE],keywords:{"function":1},contains:["title","params"]},{className:"title",begin:"[A-Za-z$_][0-9A-Za-z$_]*",end:"^"},{className:"params",begin:"\\(",end:"\\)",contains:["string","comment"]}]};hljs.LANGUAGES.lisp=function(){var a="[a-zA-Z_\\-\\+\\*\\/\\<\\=\\>\\&\\#][a-zA-Z0-9_\\-\\+\\*\\/\\<\\=\\>\\&\\#]*";var b="(\\-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s)(\\+|\\-)?\\d+)?";return{case_insensitive:true,defaultMode:{lexems:[a],contains:["literal","number","string","comment","quoted","list"],illegal:"[^\\s]"},modes:[{className:"string",begin:'"',end:'"',contains:["escape"],relevance:0},hljs.BACKSLASH_ESCAPE,{className:"number",begin:b,end:"^"},{className:"number",begin:"#b[0-1]+(/[0-1]+)?",end:"^"},{className:"number",begin:"#o[0-7]+(/[0-7]+)?",end:"^"},{className:"number",begin:"#x[0-9a-f]+(/[0-9a-f]+)?",end:"^"},{className:"number",begin:"#c\\("+b+" +"+b,end:"\\)"},{className:"comment",begin:";",end:"$"},{className:"quoted",begin:"['`]\\(",end:"\\)",contains:["number","string","variable","keyword","quoted_list"]},{className:"quoted",begin:"\\(quote ",end:"\\)",contains:["number","string","variable","keyword","quoted_list"],lexems:[a],keywords:{title:{quote:1}}},{className:"quoted_list",begin:"\\(",end:"\\)",contains:["quoted_list","literal","number","string"]},{className:"list",begin:"\\(",end:"\\)",contains:["title","body"]},{className:"title",begin:a,end:"^",endsWithParent:true},{className:"body",begin:"^",endsWithParent:true,excludeEnd:true,contains:["quoted","list","literal","number","string","comment","variable","keyword"]},{className:"keyword",begin:"[:&]"+a,end:"^"},{className:"variable",begin:"\\*",end:"\\*"},{className:"literal",begin:"\\b(t{1}|nil)\\b",end:"^"}]}}();hljs.LANGUAGES.php={defaultMode:{lexems:[hljs.IDENT_RE],contains:["comment","number","string","variable","preprocessor"],keywords:{and:1,include_once:1,list:1,"abstract":1,global:1,"private":1,echo:1,"interface":1,as:1,"static":1,endswitch:1,array:1,"null":1,"if":1,endwhile:1,or:1,"const":1,"for":1,endforeach:1,self:1,"var":1,"while":1,isset:1,"public":1,"protected":1,exit:1,foreach:1,"throw":1,elseif:1,"extends":1,include:1,__FILE__:1,empty:1,require_once:1,"function":1,"do":1,xor:1,"return":1,"implements":1,parent:1,clone:1,use:1,__CLASS__:1,__LINE__:1,"else":1,"break":1,print:1,"eval":1,"new":1,"catch":1,__METHOD__:1,"class":1,"case":1,exception:1,php_user_filter:1,"default":1,die:1,require:1,__FUNCTION__:1,enddeclare:1,"final":1,"try":1,"this":1,"switch":1,"continue":1,endfor:1,endif:1,declare:1,unset:1}},case_insensitive:true,modes:[hljs.C_LINE_COMMENT_MODE,hljs.HASH_COMMENT_MODE,{className:"comment",begin:"/\\*",end:"\\*/",contains:["phpdoc"]},{className:"phpdoc",begin:"\\s@[A-Za-z]+",end:"^",relevance:10},hljs.C_NUMBER_MODE,{className:"string",begin:"'",end:"'",contains:["escape"],relevance:0},{className:"string",begin:'"',end:'"',contains:["escape"],relevance:0},hljs.BACKSLASH_ESCAPE,{className:"variable",begin:"\\$[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*",end:"^"},{className:"preprocessor",begin:"<\\?php",end:"^",relevance:10},{className:"preprocessor",begin:"\\?>",end:"^"}]};hljs.LANGUAGES.python={defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],illegal:"(</|->)",contains:["comment","string","function","class","number","decorator"],keywords:{keyword:{and:1,elif:1,is:1,global:1,as:1,"in":1,"if":1,from:1,raise:1,"for":1,except:1,"finally":1,print:1,"import":1,pass:1,"return":1,exec:1,"else":1,"break":1,not:1,"with":1,"class":1,assert:1,yield:1,"try":1,"while":1,"continue":1,del:1,or:1,def:1,lambda:1,nonlocal:10},built_in:{None:1,True:1,False:1,Ellipsis:1,NotImplemented:1}}},modes:[{className:"function",lexems:[hljs.UNDERSCORE_IDENT_RE],begin:"\\bdef ",end:":",illegal:"$",keywords:{def:1},contains:["title","params"],relevance:10},{className:"class",lexems:[hljs.UNDERSCORE_IDENT_RE],begin:"\\bclass ",end:":",illegal:"[${]",keywords:{"class":1},contains:["title","params",],relevance:10},{className:"title",begin:hljs.UNDERSCORE_IDENT_RE,end:"^"},{className:"params",begin:"\\(",end:"\\)",contains:["string"]},hljs.HASH_COMMENT_MODE,hljs.C_NUMBER_MODE,{className:"string",begin:"u?r?'''",end:"'''",relevance:10},{className:"string",begin:'u?r?"""',end:'"""',relevance:10},hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.BACKSLASH_ESCAPE,{className:"string",begin:"(u|r|ur)'",end:"'",contains:["escape"],relevance:10},{className:"string",begin:'(u|r|ur)"',end:'"',contains:["escape"],relevance:10},{className:"decorator",begin:"@",end:"$"}]};hljs.LANGUAGES.profile={defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["number","builtin","filename","header","summary","string","function"]},modes:[hljs.C_NUMBER_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{className:"summary",begin:"function calls",end:"$",contains:["number"],relevance:10},{className:"header",begin:"(ncalls|tottime|cumtime)",end:"$",lexems:[hljs.IDENT_RE],keywords:{ncalls:1,tottime:10,cumtime:10,filename:1},relevance:10},{className:"function",begin:"\\(",end:"\\)",lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["title"]},{className:"title",begin:hljs.UNDERSCORE_IDENT_RE,end:"^"},{className:"builtin",begin:"{",end:"}",contains:["string"],excludeBegin:true,excludeEnd:true},{className:"filename",begin:"(/w|[a-zA-Z_][\da-zA-Z_]+\\.[\da-zA-Z_]{1,3})",end:":",excludeEnd:true}]};hljs.LANGUAGES.ruby=function(){var a="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var c="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var b=["comment","string","char","class","function","constant","symbol","number","variable","identifier","regexp_container"];var d={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,"eval":1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,include:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}};return{defaultMode:{lexems:[a],contains:b,keywords:d},modes:[{className:"comment",begin:"#",end:"$",contains:["yardoctag"]},{className:"yardoctag",begin:"@[A-Za-z]+",end:"^"},{className:"comment",begin:"^\\=begin",end:"^\\=end",contains:["yardoctag"],relevance:10},{className:"comment",begin:"^__END__",end:"\\n$"},{className:"params",begin:"\\(",end:"\\)",lexems:[a],keywords:d,contains:b},{className:"function",begin:"\\bdef\\s+",end:" |$|;",lexems:[a],keywords:d,contains:["ftitle","params","comment"]},{className:"ftitle",begin:c,end:"^",lexems:[a],keywords:d},{className:"class",begin:"\\b(class|module)\\b",end:"$|;",lexems:[hljs.UNDERSCORE_IDENT_RE],keywords:d,contains:["title","inheritance","comment"],keywords:{"class":1,module:1}},{className:"title",begin:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",end:"^",relevance:0},{className:"inheritance",begin:"<\\s*",end:"^",contains:["parent"]},{className:"parent",begin:"("+hljs.IDENT_RE+"::)?"+hljs.IDENT_RE,end:"^"},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",end:"^",relevance:0},{className:"number",begin:"\\?\\w",end:"^"},{className:"string",begin:"'",end:"'",contains:["escape","subst"],relevance:0},{className:"string",begin:'"',end:'"',contains:["escape","subst"],relevance:0},{className:"string",begin:"%[qw]?\\(",end:"\\)",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?\\[",end:"\\]",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?{",end:"}",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?<",end:">",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?/",end:"/",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?%",end:"%",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?-",end:"-",contains:["escape","subst"],relevance:10},{className:"string",begin:"%[qw]?\\|",end:"\\|",contains:["escape","subst"],relevance:10},{className:"constant",begin:"(::)?([A-Z]\\w*(::)?)+",end:"^"},{className:"symbol",begin:":",end:"^",contains:["string","identifier"]},{className:"identifier",begin:a,end:"^",lexems:[a],keywords:d},hljs.BACKSLASH_ESCAPE,{className:"subst",begin:"#\\{",end:"}",lexems:[a],keywords:d,contains:b},{className:"regexp_container",begin:"("+hljs.RE_STARTERS_RE+")\\s*",end:"^",noMarkup:true,contains:["comment","regexp"],relevance:0},{className:"regexp",begin:"/",end:"/[a-z]*",illegal:"\\n",contains:["escape"]},{className:"variable",begin:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))",end:"^"}]}}();hljs.LANGUAGES.scala={defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["javadoc","comment","string","class","number","annotation"],keywords:{type:1,yield:1,lazy:1,override:1,def:1,"with":1,val:1,"var":1,"false":1,"true":1,sealed:1,"abstract":1,"private":1,trait:1,object:1,"null":1,"if":1,"for":1,"while":1,"throw":1,"finally":1,"protected":1,"extends":1,"import":1,"final":1,"return":1,"else":1,"break":1,"new":1,"catch":1,"super":1,"class":1,"case":1,"package":1,"default":1,"try":1,"this":1,match:1,"continue":1,"throws":1}},modes:[{className:"class",lexems:[hljs.UNDERSCORE_IDENT_RE],begin:"((case )?class |object |trait )",end:"({|$)",illegal:":",keywords:{"case":1,"class":1,trait:1,object:1},contains:["inheritance","title","params"]},{className:"inheritance",begin:"(extends|with)",end:"^",noMarkup:true,lexems:[hljs.IDENT_RE],keywords:{"extends":1,"with":1},relevance:10},{className:"title",begin:hljs.UNDERSCORE_IDENT_RE,end:"^"},{className:"params",begin:"\\(",end:"\\)",contains:["string","annotation"]},hljs.C_NUMBER_MODE,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,hljs.BACKSLASH_ESCAPE,hljs.C_LINE_COMMENT_MODE,{className:"javadoc",begin:"/\\*\\*",end:"\\*/",contains:["javadoctag"],relevance:10},{className:"javadoctag",begin:"@[A-Za-z]+",end:"^"},hljs.C_BLOCK_COMMENT_MODE,{className:"annotation",begin:"@[A-Za-z]+",end:"^"},{className:"string",begin:'u?r?"""',end:'"""',relevance:10}]};hljs.LANGUAGES.smalltalk=function(){var a="[a-z][a-zA-Z0-9_]*";return{defaultMode:{lexems:[hljs.UNDERSCORE_IDENT_RE],contains:["comment","string","class","method","number","symbol","char","localvars","array"],keywords:{self:1,"super":1,nil:1,"true":1,"false":1,thisContext:1}},modes:[{className:"class",begin:"\\b[A-Z][A-Za-z0-9_]*",end:"^",relevance:0},{className:"symbol",begin:"#"+hljs.UNDERSCORE_IDENT_RE,end:"^"},hljs.C_NUMBER_MODE,hljs.APOS_STRING_MODE,{className:"comment",begin:'"',end:'"',relevance:0},{className:"method",begin:a+":",end:"^"},{className:"char",begin:"\\$.{1}",end:"^"},{className:"localvars",begin:"\\|\\s*(("+a+")\\s*)+\\|",end:"^",relevance:10},{className:"array",begin:"\\#\\(",end:"\\)",contains:["string","char","number","symbol"]}]}}();

