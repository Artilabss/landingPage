function scrollToContact() {
  document.getElementById("info").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
