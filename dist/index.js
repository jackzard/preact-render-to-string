!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.preactRenderToString=e()}(this,function(){var t=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,e=function(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},n=function(t,e){return String(t).replace(/(\n+)/g,"$1"+(e||"\t"))},r=function(t,e,n){return String(t).length>(e||40)||!n&&-1!==String(t).indexOf("\n")||-1!==String(t).indexOf("<")},i={};function o(e){var n="";for(var r in e){var o=e[r];null!=o&&(n&&(n+=" "),n+=i[r]||(i[r]=r.replace(/([A-Z])/g,"-$1").toLowerCase()),n+=": ",n+=o,"number"==typeof o&&!1===t.test(r)&&(n+="px"),n+=";")}return n||void 0}function l(t,e){for(var n in e)t[n]=e[n];return t}var a=!1,c={shallow:!0},u=[],f=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/;s.render=s;function s(t,i,c,h,p){return new Promise(function(d,g){var m,v,b,y,x,S,w,k,O,C;if(null==t||"boolean"==typeof t)return d("");if(m=t.nodeName,v=t.attributes,b=!1,i=i||{},c=c||{},x=(y=a&&c.pretty)&&"string"==typeof y?y:"\t","object"!=typeof t&&!m)return d(e(t));if("function"==typeof m){if(b=!0,c.shallow&&(h||!1===c.renderRootComponent))return m=(C=m).displayName||C!==Function&&C.name||function(t){var e=(Function.prototype.toString.call(t).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!e){for(var n=-1,r=u.length;r--;)if(u[r]===t){n=r;break}n<0&&(n=u.push(t)-1),e="UnnamedComponent"+n}return e}(C),L.call(this);{var P,j;if(P=function(t){var e=l({},t.attributes);e.children=t.children;var n=t.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===e[r]&&(e[r]=n[r]);return e}(t),!m.prototype||"function"!=typeof m.prototype.render)return j=m(P,i),A.call(this);{var $;if(($=new m(P,i))._disable=$.__x=!0,$.props=P,$.context=i,m.getDerivedStateFromProps)return $.state=l(l({},$.state),m.getDerivedStateFromProps($.props,$.state)),N.call(this);{if($.componentWillMount){var _;if((_=$.componentWillMount())instanceof Promise)return Promise.resolve(_).then(function(t){try{return F.call(this)}catch(t){return g(t)}}.bind(this),g);function F(){return H.call(this)}return F.call(this)}function H(){return N.call(this)}return H.call(this)}function N(){return j=$.render($.props,$.state,$.context),$.getChildContext&&(i=l(l({},i),$.getChildContext())),A.call(this)}}function A(){return d(s(j,i,c,!1!==c.shallowHighOrder))}}function L(){return M.call(this)}return L.call(this)}function M(){if(S="",v){var l=Object.keys(v);c&&!0===c.sortAttributes&&l.sort();for(var a=0;a<l.length;a++){var u=l[a],h=v[u];if("children"!==u&&(!u.match(/[\s\n\\/='"\0<>]/)&&(c&&c.allAttributes||"key"!==u&&"ref"!==u))){if("className"===u){if(v.class)continue;u="class"}else p&&u.match(/^xlink:?./)&&(u=u.toLowerCase().replace(/^xlink:?/,"xlink:"));"style"===u&&h&&"object"==typeof h&&(h=o(h));var C=c.attributeHook&&c.attributeHook(u,h,i,c,b);if(C||""===C)S+=C;else if("dangerouslySetInnerHTML"===u)w=h&&h.__html;else if((h||0===h||""===h)&&"function"!=typeof h){if(!(!0!==h&&""!==h||(h=u,c&&c.xml))){S+=" "+u;continue}S+=" "+u+'="'+e(h)+'"'}}}}if(y){var P=S.replace(/^\n\s*/," ");P===S||~P.indexOf("\n")?y&&~S.indexOf("\n")&&(S+="\n"):S=P}if(S="<"+m+S+">",String(m).match(/[\s\n\\/='"\0<>]/))return g(S);if((k=String(m).match(f))&&(S=S.replace(/>$/," />")),O=[],w)y&&r(w)&&(w="\n"+x+n(w,x)),S+=w;else if(t.children){for(var j=y&&~S.indexOf("\n"),$=0;$<t.children.length;$++){var _=t.children[$];if(null!=_&&!1!==_){var F=s(_,i,c,!0,"svg"===m||"foreignObject"!==m&&p);y&&!j&&r(F)&&(j=!0),F&&O.push(F)}}if(y&&j)for(var H=O.length;H--;)O[H]="\n"+x+n(O[H],x)}return O.length?Promise.all(O).then(function(t){try{return S+=(O=t).join(""),N.call(this)}catch(t){return g(t)}}.bind(this),g):c&&c.xml?d(S.substring(0,S.length-1)+" />"):N.call(this);function N(){return k||(y&&~S.indexOf("\n")&&(S+="\n"),S+="</"+m+">"),d(S)}}return M.call(this)})}return s.shallowRender=function(t,e){return s(t,e,c)},s});
//# sourceMappingURL=index.js.map
