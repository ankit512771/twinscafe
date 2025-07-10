// Scroll-to-top button
const topBtn = document.getElementById('topBtn');
window.onscroll = function () {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
