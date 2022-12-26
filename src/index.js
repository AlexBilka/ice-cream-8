document.addEventListener(
    'DOMContentLoaded',
    () => {
        var swiper = new Swiper(".customer-reviews-swiper", {
            pagination: {
                el: ".customer-reviews-swipes",
                bulletActiveClass: "active",
                bulletClass: "customer-reviews-swipepoint",
                bulletElement: "li",
                type: "bullets",
            }
        });
    }
);

(function (document, history, location) {
  var HISTORY_SUPPORT = !!(history && history.pushState);

  function padding(w) {
  
    if (window.innerWidth < 768) {
      w = 40;
    } else {
      w = 65;
    }
    return w;
  }
  let paddingTop = padding();

  var anchorScrolls = {
    ANCHOR_REGEX: /^#[^ ]+$/,
    OFFSET_HEIGHT_PX: paddingTop,

    init: function () {
      this.scrollToCurrent();
      window.addEventListener('hashchange', this.scrollToCurrent.bind(this));
      document.body.addEventListener('click', this.delegateAnchors.bind(this));
    },

    getFixedOffset: function () {
      return this.OFFSET_HEIGHT_PX;
    },

    scrollIfAnchor: function (href, pushToHistory) {
      var match, rect, anchorOffset;

      if (!this.ANCHOR_REGEX.test(href)) {
        return false;
      }

      match = document.getElementById(href.slice(1));

      if (match) {
        rect = match.getBoundingClientRect();
        anchorOffset = window.pageYOffset + rect.top - this.getFixedOffset();
        window.scrollTo(window.pageXOffset, anchorOffset);

        if (HISTORY_SUPPORT && pushToHistory) {
          history.pushState({}, document.title, location.pathname + href);
        }
      }

      return !!match;
    },

    scrollToCurrent: function () {
      this.scrollIfAnchor(window.location.hash);
    },

    delegateAnchors: function (e) {
      var elem = e.target;

      if (
        elem.nodeName === 'A' &&
        this.scrollIfAnchor(elem.getAttribute('href'), true)
      ) {
        e.preventDefault();
      }
    },
  };

  window.addEventListener(
    'DOMContentLoaded',
    anchorScrolls.init.bind(anchorScrolls)
  );
})(window.document, window.history, window.location);

