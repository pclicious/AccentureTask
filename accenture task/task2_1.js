var allAnchors = document.getElementsByTagName("a");
for (i=0; i < allAnchors.length; i++) {
	var element = allAnchors[i];
	element.addEventListener("click", function (event) {
    event.preventDefault();
	let ref = this.getAttribute("href");
	alert(ref);
  });
}
