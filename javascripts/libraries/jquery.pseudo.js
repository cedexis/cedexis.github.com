(function(a){function c(a){if(a&&a.length){var c=a.match(b.text)[1],d=c.match(b.url);return d?'<img src="'+d[1]+'" />':c}}function d(b,d,e){b!="after"&&(b="before"),(e=c(d.currentStyle[b]))&&a(d)[b=="before"?"prepend":"append"](a(document.createElement("span")).addClass(b).html(e))}var b={text:/^['"]?(.+?)["']?$/,url:/^url\(["']?(.+?)['"]?\)$/};a.pseudo=function(a){d("before",a),d("after",a),a.runtimeStyle.behavior=null};if(document.createStyleSheet){var e=document.createStyleSheet(null,0);e.addRule(".dummy","display: static;"),e.cssText="html, head, head *, body, *.before, *.after, *.before *, *.after * { behavior: none; } * { behavior: expression($.pseudo(this)); }"}})(jQuery);