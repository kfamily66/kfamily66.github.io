(this.webpackJsonpdesignsolutions=this.webpackJsonpdesignsolutions||[]).push([[6],{379:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={black:"#000",white:"#FFF",gray:"#4c4c4c"}},381:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/bespoke1.c638383a.jpg"},382:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/bespoke2.f101b97a.jpg"},383:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/bespoke3.1e8602f7.jpg"},384:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/bespoke4.14357389.jpg"},385:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/title1.7bdccb37.jpg"},386:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/title2.4de0a774.jpg"},387:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/title3.97bfe88c.jpg"},388:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/title4.3a4ac2c5.jpg"},389:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/title5.3f40de1f.jpg"},441:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e),n.d(e,"default",(function(){return Q}));var o=n(27),a=n(0),s=n(38);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var u=new Map,l=new Map,f=0;function d(t){return Object.keys(t).sort().filter((function(e){return void 0!==t[e]})).map((function(e){return e+"_"+("root"===e?(n=t.root)?(l.has(n)||(f+=1,l.set(n,f.toString())),l.get(n)):"0":t[e]);var n})).toString()}function p(t,e,n){if(void 0===n&&(n={}),!t)return function(){};var r=function(t){var e=d(t),n=u.get(e);if(!n){var r,i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n,o=e.isIntersecting&&r.some((function(t){return e.intersectionRatio>=t}));t.trackVisibility&&"undefined"===typeof e.isVisible&&(e.isVisible=o),null==(n=i.get(e.target))||n.forEach((function(t){t(o,e)}))}))}),t);r=o.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:o,elements:i},u.set(e,n)}return n}(n),i=r.id,o=r.observer,a=r.elements,s=a.get(t)||[];return a.has(t)||a.set(t,s),s.push(e),o.observe(t),function(){s.splice(s.indexOf(e),1),0===s.length&&(a.delete(t),o.unobserve(t)),0===a.size&&(o.disconnect(),u.delete(i))}}function h(t){return"function"!==typeof t.children}var b=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).node=null,n._unobserveCb=null,n.handleNode=function(t){n.node&&(n.unobserve(),t||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=t||null,n.observeNode()},n.handleChange=function(t,e){t&&n.props.triggerOnce&&n.unobserve(),h(n.props)||n.setState({inView:t,entry:e}),n.props.onChange&&n.props.onChange(t,e)},n.state={inView:!!e.initialInView,entry:void 0},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.componentDidUpdate=function(t){t.rootMargin===this.props.rootMargin&&t.root===this.props.root&&t.threshold===this.props.threshold&&t.skip===this.props.skip&&t.trackVisibility===this.props.trackVisibility&&t.delay===this.props.delay||(this.unobserve(),this.observeNode())},i.componentWillUnmount=function(){this.unobserve(),this.node=null},i.observeNode=function(){if(this.node&&!this.props.skip){var t=this.props,e=t.threshold,n=t.root,r=t.rootMargin,i=t.trackVisibility,o=t.delay;this._unobserveCb=p(this.node,this.handleChange,{threshold:e,root:n,rootMargin:r,trackVisibility:i,delay:o})}},i.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},i.render=function(){if(!h(this.props)){var t=this.state,e=t.inView,n=t.entry;return this.props.children({inView:e,entry:n,ref:this.handleNode})}var r=this.props,i=r.children,o=r.as,s=r.tag,u=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(r,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(a.createElement)(o||s||"div",c({ref:this.handleNode},u),i)},r}(a.Component);b.displayName="InView",b.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1};var v=n(381),g=n(382),y=n(383),j=n(384),m=n(385),O=n(386),x=n(387),w=n(388),k=n(389),V=[m.default,g.default],C=[O.default,y.default],I=[x.default,j.default],A=[w.default,g.default,y.default,j.default],S=[k.default,v.default],M=n(378),_=n(377),N=n(379);function E(){var t=Object(M.a)(["\n    height: 500px;\n    z-index: 2;\n    transform: translate3d(100px, -50px, 10px);\n    box-shadow: -7px 6px 15px -1px rgba(0, 0, 0, 0.35);\n"]);return E=function(){return t},t}function F(){var t=Object(M.a)(["\n    height: 400px;\n    position: absolute;\n    top: 0;\n"]);return F=function(){return t},t}function U(){var t=Object(M.a)(["\n    position: relative;\n\n    margin: 100px;\n    height: 600px;\n"]);return U=function(){return t},t}function z(){var t=Object(M.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return z=function(){return t},t}function J(){var t=Object(M.a)(["\n    color: ",";\n    margin: 8px 0;\n"]);return J=function(){return t},t}function P(){var t=Object(M.a)(["\n    width: 30%;\n"]);return P=function(){return t},t}function R(){var t=Object(M.a)(["\n    flex: 1;\n\n    padding: 32px;\n\n    display: flex;\n"]);return R=function(){return t},t}var D=_.a.div(R()),T=_.a.div(P()),W=_.a.div(J(),(function(t){return t.active?"red":N.a.gray})),$=_.a.div(z()),q=_.a.div(U()),B=_.a.img(F()),G=Object(_.a)(B)(E()),H=[{title:"house & orange accent",images:V,alias:"orange"},{title:"luxury apartment",images:C,alias:"stone"},{title:"50 metres of gray",images:S,alias:"gray"},{title:"save classic",images:I,alias:"classic"},{title:"bespoke furniture",images:A,alias:"bespoke"}],K=function(t){var e=t.items,n=t.currentIndex,r=Object(s.e)().router;return Object(o.jsx)(T,{children:e.map((function(t,e){var i=t.title,a=t.alias;return Object(o.jsx)(W,{active:e===n,onClick:function(){return r.push("/projects/".concat(a))},children:i},i)}))})},L=function(t){var e=t.item,n=t.setActive,r=function(t){var e=void 0===t?{}:t,n=e.threshold,r=e.delay,i=e.trackVisibility,o=e.rootMargin,s=e.root,c=e.triggerOnce,u=e.skip,l=e.initialInView,f=Object(a.useRef)(),d=Object(a.useState)({inView:!!l}),h=d[0],b=d[1],v=Object(a.useCallback)((function(t){void 0!==f.current&&(f.current(),f.current=void 0),u||t&&(f.current=p(t,(function(t,e){b({inView:t,entry:e}),e.isIntersecting&&c&&f.current&&(f.current(),f.current=void 0)}),{root:s,rootMargin:o,threshold:n,trackVisibility:i,delay:r}))}),[Array.isArray(n)?n.toString():n,s,o,c,u,i,r]);Object(a.useEffect)((function(){f.current||!h.entry||c||u||b({inView:!!l})}));var g=[v,h.inView,h.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}({threshold:1}),i=r.ref;return r.inView&&(n(),console.log("setActive:",e.title)),Object(o.jsxs)(q,{ref:i,children:[Object(o.jsx)(G,{src:e.images[1]}),Object(o.jsx)(B,{src:e.images[0]})]})};function Q(t){var e=i(Object(a.useState)(0),2),n=e[0],r=e[1];return Object(o.jsxs)(D,{children:[Object(o.jsx)(K,{items:H,currentIndex:n,setCurrentIndex:r}),Object(o.jsx)($,{children:H.map((function(t,e){return Object(o.jsx)(L,{item:t,setActive:function(){return r(e)}},t.title)}))})]})}}}]);
//# sourceMappingURL=6.233363f8.chunk.js.map