var logo = document.querySelector("#hplogo");
logo.setAttribute("srcset", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7YDjHjnP5DURcPrZpcFPO6BI6I4kOiqTvNeCy4NRYFbA--5J");
logo.style.width = "300px";
logo.style.height = "200px";
logo.style.border = "2px solid purple";

var links = document.getElementsByTagName("a");
for (var i = 0;i < links.length; i++) {
	console.log(links[i].textContent);
	links[i].style.background = "pink";
	links[i].style.border = "1px dashed purple";
	links[i].style.color = "orange";
	console.log(links[i].getAttribute("href"));
	links[i].setAttribute("href", "http://www.bing.com");
}