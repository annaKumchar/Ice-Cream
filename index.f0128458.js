!function(){var e,o,t,n;e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=function(){var t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),function(){var e={openModalBtn:document.querySelector("[data-modal-buy-open]"),openModalBtn2:document.querySelector("[data-modal-buy-open2]"),closeModalBtn:document.querySelector("[data-modal-buy-close]"),modal:document.querySelector("[data-modal-buy]")};function o(){e.modal.classList.toggle("backdrop-hero--is-hidden")}e.openModalBtn.addEventListener("click",o),e.openModalBtn2.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-icecream-open]"),closeModalBtn:document.querySelector("[data-modal-icecream-close]"),modal:document.querySelector("[data-modal-icecream]")};function o(){e.modal.classList.toggle("backdrop-products--is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-icecoffee-open]"),closeModalBtn:document.querySelector("[data-modal-icecoffee-close]"),modal:document.querySelector("[data-modal-icecoffee]")};function o(){e.modal.classList.toggle("backdrop-products--is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-milkshake-open]"),closeModalBtn:document.querySelector("[data-modal-milkshake-close]"),modal:document.querySelector("[data-modal-milkshake]")};function o(){e.modal.classList.toggle("backdrop-products--is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open-about]"),closeModalBtn:document.querySelector("[data-modal-close-about]"),modal:document.querySelector("[data-modal-about]")},o=document.getElementById("vid");function t(){e.modal.classList.toggle("is-hidden-about");var t=o.src;o.src=t}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}();new Swiper(".swiper-container",{direction:"horizontal",loop:!0,spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".swiper__gallery",{direction:"horizontal",loop:!0,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1}});!function(){var e={openModalBtn:document.querySelector("[data-modal-open-map]"),closeModalBtn:document.querySelector("[data-modal-close-map]"),modal:document.querySelector("[data-modal-map]")};function o(){e.modal.classList.toggle("is-hidden-map")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),function(){var e={openModalBtn:document.querySelector("[data-modal-franchise-open]"),closeModalBtn:document.querySelector("[data-modal-franchise-close]"),modal:document.querySelector("[data-modal-franchise]")};function o(){e.modal.classList.toggle("backdrop-franchise--is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}(),window.onscroll=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?a.classList.add("visible"):a.classList.remove("visible")};var a=document.querySelector("[data-scroll-top]")}();
//# sourceMappingURL=index.f0128458.js.map
