!function(e){e.fn.slide=function(t){return e.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var n=e.extend({},e.fn.slide.defaults,t),a=e(this),i=n.effect,s=e(n.prevCell,a),o=e(n.nextCell,a),r=e(n.pageStateCell,a),u=e(n.playStateCell,a),l=(R=e(n.titCell,a)).size(),c=e(n.mainCell,a),f=c.children().size(),p=n.switchLoad,d=e(n.targetCell,a),h=parseInt(n.defaultIndex),v=parseInt(n.delayTime),m=parseInt(n.interTime);parseInt(n.triggerTime);var g,w=parseInt(n.scroll),I=parseInt(n.vis),M="false"!=n.autoPlay&&0!=n.autoPlay,C="false"!=n.opp&&0!=n.opp,y="false"!=n.autoPage&&0!=n.autoPage,x="false"!=n.pnLoop&&0!=n.pnLoop,O="false"!=n.mouseOverStop&&0!=n.mouseOverStop,b="false"!=n.defaultPlay&&0!=n.defaultPlay,q="false"!=n.returnDefault&&0!=n.returnDefault,k=0,P=0,Q=0,S=0,T=n.easing,L=null,j=null,B=null,D=n.titOnClassName,F=R.index(a.find("."+D)),E=h=-1==F?h:F,W=h,z=h,A=f>=I?0!=f%w?f%w:w:0,N="leftMarquee"==i||"topMarquee"==i,U=function(){e.isFunction(n.startFun)&&n.startFun(h,l,a,e(n.titCell,a),c,d,s,o)},H=function(){e.isFunction(n.endFun)&&n.endFun(h,l,a,e(n.titCell,a),c,d,s,o)},$=function(){R.removeClass(D),b&&R.eq(W).addClass(D)};if("menu"==n.type)return b&&R.removeClass(D).eq(h).addClass(D),R.hover(function(){g=e(this).find(n.targetCell);var t=R.index(e(this));j=setTimeout(function(){switch(h=t,R.removeClass(D).eq(h).addClass(D),U(),i){case"fade":g.stop(!0,!0).animate({opacity:"show"},v,T,H);break;case"slideDown":g.stop(!0,!0).animate({height:"show"},v,T,H)}},n.triggerTime)},function(){switch(clearTimeout(j),i){case"fade":g.animate({opacity:"hide"},v,T);break;case"slideDown":g.animate({height:"hide"},v,T)}}),void(q&&a.hover(function(){clearTimeout(B)},function(){B=setTimeout($,v)}));if(0==l&&(l=f),N&&(l=2),y){if(f>=I)if("leftLoop"==i||"topLoop"==i)l=0!=f%w?1+(0^f/w):f/w;else{var G=f-I;0>=(l=1+parseInt(0!=G%w?G/w+1:G/w))&&(l=1)}else l=1;R.html("");var J="";if(1==n.autoPage||"true"==n.autoPage)for(var K=0;l>K;K++)J+="<li>"+(K+1)+"</li>";else for(K=0;l>K;K++)J+=n.autoPage.replace("$",K+1);R.html(J);var R=R.children()}if(f>=I){c.children().each(function(){e(this).width()>Q&&(Q=e(this).width(),P=e(this).outerWidth(!0)),e(this).height()>S&&(S=e(this).height(),k=e(this).outerHeight(!0))});var V=c.children(),X=function(){for(var e=0;I>e;e++)V.eq(e).clone().addClass("clone").appendTo(c);for(e=0;A>e;e++)V.eq(f-e-1).clone().addClass("clone").prependTo(c)};switch(i){case"fold":c.css({position:"relative",width:P,height:k}).children().css({position:"absolute",width:Q,left:0,top:0,display:"none"});break;case"top":c.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+I*k+'px"></div>').css({top:-h*w*k,position:"relative",padding:"0",margin:"0"}).children().css({height:S});break;case"left":c.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+I*P+'px"></div>').css({width:f*P,left:-h*w*P,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({float:"left",width:Q});break;case"leftLoop":case"leftMarquee":X(),c.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+I*P+'px"></div>').css({width:(f+I+A)*P,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(A+h*w)*P}).children().css({float:"left",width:Q});break;case"topLoop":case"topMarquee":X(),c.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+I*k+'px"></div>').css({height:(f+I+A)*k,position:"relative",padding:"0",margin:"0",top:-(A+h*w)*k}).children().css({height:S})}}var Y=function(e){var t=e*w;return e==l?t=f:-1==e&&0!=f%w&&(t=-f%w),t},Z=function(t){var n=function(n){for(var a=n;I+n>a;a++)t.eq(a).find("img["+p+"]").each(function(){var t=e(this);if(t.attr("src",t.attr(p)).removeAttr(p),c.find(".clone")[0])for(var n=c.children(),a=0;a<n.size();a++)n.eq(a).find("img["+p+"]").each(function(){e(this).attr(p)==t.attr("src")&&e(this).attr("src",e(this).attr(p)).removeAttr(p)})})};switch(i){case"fade":case"fold":case"top":case"left":case"slideDown":n(h*w);break;case"leftLoop":case"topLoop":n(A+Y(z));break;case"leftMarquee":case"topMarquee":var a="leftMarquee"==i?c.css("left").replace("px",""):c.css("top").replace("px",""),s="leftMarquee"==i?P:k,o=A;if(0!=a%s){var r=Math.abs(0^a/s);o=1==h?A+r:A+r-1}n(o)}},_=function(e){if(!b||E!=h||e||N){if(N?h>=1?h=1:0>=h&&(h=0):(z=h,h>=l?h=0:0>h&&(h=l-1)),U(),null!=p&&Z(c.children()),d[0]&&(g=d.eq(h),null!=p&&Z(d),"slideDown"==i?(d.not(g).stop(!0,!0).slideUp(v),g.slideDown(v,T,function(){c[0]||H()})):(d.not(g).stop(!0,!0).hide(),g.animate({opacity:"show"},v,function(){c[0]||H()}))),f>=I)switch(i){case"fade":c.children().stop(!0,!0).eq(h).animate({opacity:"show"},v,T,function(){H()}).siblings().hide();break;case"fold":c.children().stop(!0,!0).eq(h).animate({opacity:"show"},v,T,function(){H()}).siblings().animate({opacity:"hide"},v,T);break;case"top":c.stop(!0,!1).animate({top:-h*w*k},v,T,function(){H()});break;case"left":c.stop(!0,!1).animate({left:-h*w*P},v,T,function(){H()});break;case"leftLoop":var t=z;c.stop(!0,!0).animate({left:-(Y(z)+A)*P},v,T,function(){-1>=t?c.css("left",-(A+(l-1)*w)*P):t>=l&&c.css("left",-A*P),H()});break;case"topLoop":t=z;c.stop(!0,!0).animate({top:-(Y(z)+A)*k},v,T,function(){-1>=t?c.css("top",-(A+(l-1)*w)*k):t>=l&&c.css("top",-A*k),H()});break;case"leftMarquee":var n=c.css("left").replace("px","");0==h?c.animate({left:++n},0,function(){c.css("left").replace("px","")>=0&&c.css("left",-f*P)}):c.animate({left:--n},0,function(){c.css("left").replace("px","")<=-(f+A)*P&&c.css("left",-A*P)});break;case"topMarquee":var a=c.css("top").replace("px","");0==h?c.animate({top:++a},0,function(){c.css("top").replace("px","")>=0&&c.css("top",-f*k)}):c.animate({top:--a},0,function(){c.css("top").replace("px","")<=-(f+A)*k&&c.css("top",-A*k)})}R.removeClass(D).eq(h).addClass(D),E=h,x||(o.removeClass("nextStop"),s.removeClass("prevStop"),0==h&&s.addClass("prevStop"),h==l-1&&o.addClass("nextStop")),r.html("<span>"+(h+1)+"</span>/"+l)}};b&&_(!0),q&&a.hover(function(){clearTimeout(B)},function(){B=setTimeout(function(){h=W,b?_():"slideDown"==i?g.slideUp(v,$):g.animate({opacity:"hide"},v,$),E=h},300)});var ee=function(e){L=setInterval(function(){C?h--:h++,_()},e||m)},te=function(e){L=setInterval(_,e||m)},ne=function(){O||(clearInterval(L),ee())},ae=function(){(x||h!=l-1)&&(h++,_(),N||ne())},ie=function(){(x||0!=h)&&(h--,_(),N||ne())},se=function(){clearInterval(L),N?te():ee(),u.removeClass("pauseState")},oe=function(){clearInterval(L),u.addClass("pauseState")};if(M?N?(C?h--:h++,te(),O&&c.hover(oe,se)):(ee(),O&&a.hover(oe,se)):(N&&(C?h--:h++),u.addClass("pauseState")),u.click(function(){u.hasClass("pauseState")?se():oe()}),"mouseover"==n.trigger?R.hover(function(){var e=R.index(this);j=setTimeout(function(){h=e,_(),ne()},n.triggerTime)},function(){clearTimeout(j)}):R.click(function(){h=R.index(this),_(),ne()}),N){if(o.mousedown(ae),s.mousedown(ie),x){var re,ue=function(){re=setTimeout(function(){clearInterval(L),te(0^m/10)},150)},le=function(){clearTimeout(re),clearInterval(L),te()};o.mousedown(ue),o.mouseup(le),s.mousedown(ue),s.mouseup(le)}"mouseover"==n.trigger&&(o.hover(ae,function(){}),s.hover(ie,function(){}))}else o.click(ae),s.click(ie)})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,a,i){return jQuery.easing[jQuery.easing.def](e,t,n,a,i)},easeInQuad:function(e,t,n,a,i){return a*(t/=i)*t+n},easeOutQuad:function(e,t,n,a,i){return-a*(t/=i)*(t-2)+n},easeInOutQuad:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t+n:-a/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,a,i){return a*(t/=i)*t*t+n},easeOutCubic:function(e,t,n,a,i){return a*((t=t/i-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t+n:a/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,a,i){return a*(t/=i)*t*t*t+n},easeOutQuart:function(e,t,n,a,i){return-a*((t=t/i-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t+n:-a/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,a,i){return a*(t/=i)*t*t*t*t+n},easeOutQuint:function(e,t,n,a,i){return a*((t=t/i-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,a,i){return(t/=i/2)<1?a/2*t*t*t*t*t+n:a/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,a,i){return-a*Math.cos(t/i*(Math.PI/2))+a+n},easeOutSine:function(e,t,n,a,i){return a*Math.sin(t/i*(Math.PI/2))+n},easeInOutSine:function(e,t,n,a,i){return-a/2*(Math.cos(Math.PI*t/i)-1)+n},easeInExpo:function(e,t,n,a,i){return 0==t?n:a*Math.pow(2,10*(t/i-1))+n},easeOutExpo:function(e,t,n,a,i){return t==i?n+a:a*(1-Math.pow(2,-10*t/i))+n},easeInOutExpo:function(e,t,n,a,i){return 0==t?n:t==i?n+a:(t/=i/2)<1?a/2*Math.pow(2,10*(t-1))+n:a/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,a,i){return-a*(Math.sqrt(1-(t/=i)*t)-1)+n},easeOutCirc:function(e,t,n,a,i){return a*Math.sqrt(1-(t=t/i-1)*t)+n},easeInOutCirc:function(e,t,n,a,i){return(t/=i/2)<1?-a/2*(Math.sqrt(1-t*t)-1)+n:a/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,a,i){var s=1.70158,o=0,r=a;if(0==t)return n;if(1==(t/=i))return n+a;if(o||(o=.3*i),r<Math.abs(a)){r=a;s=o/4}else s=o/(2*Math.PI)*Math.asin(a/r);return-r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-s)*Math.PI/o)+n},easeOutElastic:function(e,t,n,a,i){var s=1.70158,o=0,r=a;if(0==t)return n;if(1==(t/=i))return n+a;if(o||(o=.3*i),r<Math.abs(a)){r=a;s=o/4}else s=o/(2*Math.PI)*Math.asin(a/r);return r*Math.pow(2,-10*t)*Math.sin(2*(t*i-s)*Math.PI/o)+a+n},easeInOutElastic:function(e,t,n,a,i){var s=1.70158,o=0,r=a;if(0==t)return n;if(2==(t/=i/2))return n+a;if(o||(o=.3*i*1.5),r<Math.abs(a)){r=a;s=o/4}else s=o/(2*Math.PI)*Math.asin(a/r);return 1>t?-.5*r*Math.pow(2,10*(t-=1))*Math.sin(2*(t*i-s)*Math.PI/o)+n:.5*r*Math.pow(2,-10*(t-=1))*Math.sin(2*(t*i-s)*Math.PI/o)+a+n},easeInBack:function(e,t,n,a,i,s){return void 0==s&&(s=1.70158),a*(t/=i)*t*((s+1)*t-s)+n},easeOutBack:function(e,t,n,a,i,s){return void 0==s&&(s=1.70158),a*((t=t/i-1)*t*((s+1)*t+s)+1)+n},easeInOutBack:function(e,t,n,a,i,s){return void 0==s&&(s=1.70158),(t/=i/2)<1?a/2*t*t*((1+(s*=1.525))*t-s)+n:a/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+n},easeInBounce:function(e,t,n,a,i){return a-jQuery.easing.easeOutBounce(e,i-t,0,a,i)+n},easeOutBounce:function(e,t,n,a,i){return(t/=i)<1/2.75?7.5625*a*t*t+n:2/2.75>t?a*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?a*(7.5625*(t-=2.25/2.75)*t+.9375)+n:a*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,a,i){return i/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,a,i)+n:.5*jQuery.easing.easeOutBounce(e,2*t-i,0,a,i)+.5*a+n}});