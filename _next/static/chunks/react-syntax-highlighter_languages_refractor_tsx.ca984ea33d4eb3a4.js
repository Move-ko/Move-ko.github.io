"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2509,4657,9461],{6412:function(e){function t(e){!function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function(e){return e?"string"==typeof e?e:"string"==typeof e.content?e.content:e.content.map(n).join(""):""},a=function(t){for(var s=[],i=0;i<t.length;i++){var o=t[i],r=!1;if("string"!=typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?s.length>0&&s[s.length-1].tagName===n(o.content[0].content[1])&&s.pop():"/>"===o.content[o.content.length-1].content||s.push({tagName:n(o.content[0].content[1]),openedBraces:0}):s.length>0&&"punctuation"===o.type&&"{"===o.content?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?s[s.length-1].openedBraces--:r=!0),(r||"string"==typeof o)&&s.length>0&&0===s[s.length-1].openedBraces){var g=n(o);i<t.length-1&&("string"==typeof t[i+1]||"plain-text"===t[i+1].type)&&(g+=n(t[i+1]),t.splice(i+1,1)),i>0&&("string"==typeof t[i-1]||"plain-text"===t[i-1].type)&&(g=n(t[i-1])+g,t.splice(i-1,1),i--),t[i]=new e.Token("plain-text",g,null,g)}o.content&&"string"!=typeof o.content&&a(o.content)}};e.hooks.add("after-tokenize",function(e){("jsx"===e.language||"tsx"===e.language)&&a(e.tokens)})}(e)}e.exports=t,t.displayName="jsx",t.aliases=[]},7041:function(e,t,n){var a=n(6412),s=n(4979);function i(e){e.register(a),e.register(s);var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t)}e.exports=i,i.displayName="tsx",i.aliases=[]},4979:function(e){function t(e){e.languages.typescript=e.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),e.languages.ts=e.languages.typescript}e.exports=t,t.displayName="typescript",t.aliases=["ts"]}}]);