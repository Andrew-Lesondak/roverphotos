(this.webpackJsonproverphotos=this.webpackJsonproverphotos||[]).push([[0],{10:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a(3),c=a.n(o),s=a(4),i=a(2),d=a(12),u="REQUEST_IMAGE_PENDING",h="REQUEST_IMAGE_SUCCESS",j="REQUEST_IMAGE_FAILED",m="IMAGE_LOADED_SUCCESS",l="IMAGE_LOADED_PENDING",g={isPending:!1,imageData:"",imageLoaded:!1,error:""},p=(a(30),a(13)),b=a(14),f=a(18),O=a(16),v=a(17),x=(a(31),a(10),function(e){var t=e.imageSrc,a=e.photoLoaded;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"photo",children:Object(n.jsx)("img",{src:t,alt:"Mars",onLoad:function(){return a}})})})}),I=function(e){var t,a=e.imageData,r=e.imageRequest,o=e.photoLoaded,c=e.tweetImage,s="",i="",d="",u="";if(void 0!==a&&void 0!==a.photos&&a.photos.length>0){var h=a.photos.length>1?(t=a.photos)[Math.floor(Math.random()*t.length)]:a.photos[0];s=h.img_src,i=h.rover.name,d=h.camera.full_name,u=h.earth_date}return""===a||void 0===a?Object(n.jsxs)("div",{className:"loader center",children:[Object(n.jsx)("h1",{children:"Loading"}),Object(n.jsx)("i",{className:"fas fa-satellite-dish fa-5x"})]}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"photo-container",id:"photo-container",children:[Object(n.jsx)(x,{imageSrc:s,photoLoaded:o}),Object(n.jsxs)("div",{className:"rover-name",children:[Object(n.jsx)("i",{className:"fas fa-robot"}),"\xa0",Object(n.jsx)("span",{id:"rover-name",children:i})]}),Object(n.jsxs)("div",{className:"camera-name",children:[Object(n.jsx)("i",{className:"fas fa-video"}),"\xa0",Object(n.jsx)("span",{id:"camera-name",children:d})]}),Object(n.jsxs)("div",{className:"earth-date",children:[Object(n.jsx)("i",{className:"far fa-calendar-alt"}),"\xa0",Object(n.jsx)("span",{id:"earth-date",children:u})]}),Object(n.jsxs)("div",{className:"button-container",children:[Object(n.jsx)("button",{className:"twitter-button",id:"twitter",onClick:function(){return c([s,i,d,u])},children:Object(n.jsx)("i",{className:"fab fa-twitter"})}),Object(n.jsx)("button",{id:"new-photo",onClick:r,children:"New Photo"})]})]})})},L=a(9),N=a.n(L),E=a(15),w=function(){var e=Object(E.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:u}),e.next=3,fetch("https://nasa-rover-images.herokuapp.com/api/search").then((function(e){return e.json()})).then((function(e){return t({type:h,payload:e.results})})).catch((function(e){return t({type:j,payload:e})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=Object(v.a)(e,4),a=t[0],n=t[1],r=t[2],o=t[3],c="https://twitter.com/intent/tweet?text=Check%20out%20this%20Mars%20Rover%20photo!%0ARover:%20".concat(n,"%0ACamera:%20").concat(r,"%0AEarth%20Date:%20").concat(o,"%0A&url=").concat(a).trim();window.open(c,"_blank")},y=function(e){Object(f.a)(a,e);var t=Object(O.a)(a);function a(){return Object(p.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.onRequestImage(),this.props.onImageLoadedSuccess(),this.props.onImageLoadedPending()}},{key:"render",value:function(){var e=this.props,t=e.imageData,a=e.isPending,r=e.onRequestImage,o=e.onImageLoadedSuccess,c=e.onImageLoadedPending,s=e.imageLoaded,i=new Date;return s&&(i="",c()),a&&i?Object(n.jsxs)("div",{className:"loader center",children:[Object(n.jsx)("div",{className:"loading-text",children:"Loading Photo"}),Object(n.jsx)("br",{}),Object(n.jsx)("i",{className:"fa fa-cog fa-spin fa-5x"})]}):Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(I,{imageData:t,imageRequest:r,photoLoaded:o,tweetImage:D})})}}]),a}(r.Component),P=Object(s.b)((function(e){return{imageData:e.requestImage.imageData,isPending:e.requestImage.isPending,error:e.requestImage.error,imageLoaded:e.setImageLoaded.imageLoaded}}),(function(e){return{onRequestImage:function(){return e((function(e,t){return w(e)}))},onImageLoadedSuccess:function(){return e((function(e,t){return e({type:m})}))},onImageLoadedPending:function(){return e((function(e,t){return e({type:l})}))}}}))(y),S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))},_=Object(i.c)({requestImage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case u:return Object.assign({},e,{isPending:!0});case h:return Object.assign({},e,{isPending:!1,imageData:t.payload});case j:return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}},setImageLoaded:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case l:return Object.assign({},e,{imageLoaded:!1});case m:return Object.assign({},e,{imageLoaded:!0});default:return e}}}),A=Object(i.d)(_,Object(i.a)(d.a));c.a.render(Object(n.jsx)(s.a,{store:A,children:Object(n.jsx)(P,{})}),document.getElementById("root")),S()}},[[33,1,2]]]);
//# sourceMappingURL=main.860ec0ec.chunk.js.map