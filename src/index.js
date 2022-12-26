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


