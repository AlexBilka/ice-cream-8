document.addEventListener("DOMContentLoaded",(()=>{new Swiper(".customer-reviews-swiper",{pagination:{el:".customer-reviews-swipes",bulletActiveClass:"active",bulletClass:"customer-reviews-swipepoint",bulletElement:"li",type:"bullets"}})})),function(e,t,n){var i=!(!t||!t.pushState),o={ANCHOR_REGEX:/^#[^ ]+$/,OFFSET_HEIGHT_PX:65,init:function(){this.scrollToCurrent(),window.addEventListener("hashchange",this.scrollToCurrent.bind(this)),e.body.addEventListener("click",this.delegateAnchors.bind(this))},getFixedOffset:function(){return this.OFFSET_HEIGHT_PX},scrollIfAnchor:function(o,s){var r,l,d;return!!this.ANCHOR_REGEX.test(o)&&((r=e.getElementById(o.slice(1)))&&(l=r.getBoundingClientRect(),d=window.pageYOffset+l.top-this.getFixedOffset(),window.scrollTo(window.pageXOffset,d),i&&s&&t.pushState({},e.title,n.pathname+o)),!!r)},scrollToCurrent:function(){this.scrollIfAnchor(window.location.hash)},delegateAnchors:function(e){var t=e.target;"A"===t.nodeName&&this.scrollIfAnchor(t.getAttribute("href"),!0)&&e.preventDefault()}};window.addEventListener("DOMContentLoaded",o.init.bind(o))}(window.document,window.history,window.location);
//# sourceMappingURL=index.fa0bc3bc.js.map
