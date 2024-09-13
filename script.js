// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button by its class name (returns a collection)
  const loadPageBtn = document.getElementsByClassName("button");

  // Since getElementsByClassName returns a collection, access the first element
  if (loadPageBtn.length > 0) {
    loadPageBtn[0].addEventListener("click", function () {
      // Navigate to the new page (replace 'newpage.html' with your desired page URL)
      window.location.href = "newpage.html";
    });
  }
});

// Wait until the DOM is fully loaded
