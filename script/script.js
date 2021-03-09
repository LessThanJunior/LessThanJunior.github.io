var btn = document.querySelector(".button");
var video = document.getElementsByClassName("video");
var videoel = video[0]
var about = document.querySelector("a.about__link");
var scrolltoabout = document.getElementsByClassName("about");
var scroll_to_about = scrolltoabout[0]
var work = document.querySelector("a.about__work");
var scrolltowork = document.getElementsByClassName("container__skills");
var scroll_to_work = scrolltowork[0]
var proces = document.querySelector("a.about__process");
var scrolltoprocess = document.getElementsByClassName("contain");
var scroll_to_process = scrolltoprocess[0]
var portfolio = document.querySelector("body > section > div.container__menu > div > div.chest > img");
var time = document.querySelector("body > section > div.container__menu > div > div.time > img");
var stars = document.querySelector("body > section > div.container__menu > div > div.star > img");
var healths = document.querySelector("body > section > div.container__menu > div > div.health > img");
var services = document.querySelector("a.about__service");
var scrolltoservices = document.getElementsByClassName("icon__container");
var scroll_to_services = scrolltoservices[0]
var testimonials = document.querySelector("a.about__testimonials")
var testContainer = document.querySelector("div.testimonials__container")
var modal = document.querySelector(".modal")
var myModal = document.querySelector(".myModal")
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");

img1.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src;
	document.body.classList.add("lock");
}

img2.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

img3.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

img4.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

img5.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

img6.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

img7.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

img8.onclick = function(){
	modal.style.display="flex";
	myModal.src = this.src
	document.body.classList.add("lock");
}

window.onkeydown = function(event){
	if(event.code === 'Escape'){
		modal.style.display="none";
		document.body.classList.remove("lock")
	}
}


console.log(videoel)

var image = document.querySelector("body > section > div.image__list > div.images1 > div:nth-child(1)");

function onloads(){
	var set = setTimeout(function(){
		image.classList.add('hover')
		let type = document.querySelector('.hover')
		type.style.opacity = '1'
	},1500)

	var set1 = setTimeout(function(){
		image.classList.remove('hover')
		let div = document.querySelector("body > section > div.image__list > div.images1 > div:nth-child(2)")
		div.classList.add('hover')
		let type = document.querySelector('.hover')
		type.style.opacity = '1'
		image.removeAttribute('style')
	}, 3000)

	var set2 = setTimeout(function(){
		let prevdiv = document.querySelector("body > section > div.image__list > div.images1 > div:nth-child(2)")
		prevdiv.classList.remove('hover')
		prevdiv.removeAttribute('style')
		let div = document.querySelector("body > section > div.image__list > div.images1 > div:nth-child(3)")
		div.classList.add('hover')
		let type = document.querySelector('.hover')
		type.style.opacity = '1'
	}, 4500)

	var set3 = setTimeout(function(){
		let prevdiv = document.querySelector("body > section > div.image__list > div.images1 > div:nth-child(3)")
		prevdiv.classList.remove('hover')
		prevdiv.removeAttribute('style')
		let div = document.querySelector("body > section > div.image__list > div.images1 > div:nth-child(4)")
		div.classList.add('hover')
		let type = document.querySelector('.hover')
		type.style.opacity = '1'
	}, 6000)

	var set4 = setTimeout(function(){
		let type = document.querySelector('body > section > div.image__list > div.images1 > div:nth-child(4)')
   	 	type.classList.remove('hover')
   	 	type.removeAttribute('style')
	},7500)
}

//onloads()

function portfolioLike() {
	let portfolios = document.querySelector("body > section > div.container__menu > div > div.chest > h2");
	let get_portfolio = portfolios.outerText;
	console.log(get_portfolio)
	portfolios.innerText = parseInt(portfolios.outerText)+1;
}

function portfolioDisLike() {
	let portfolios = document.querySelector("body > section > div.container__menu > div > div.chest > h2");
	let get_portfolio = portfolios.outerText;
	console.log(get_portfolio)
	portfolios.innerText = parseInt(portfolios.outerText)-1;
}

function timeLike() {
	let times = document.querySelector("body > section > div.container__menu > div > div.time > h2");
	let get_time = times.outerText;
	//console.log(get_portfolio)
	times.innerText = parseInt(times.outerText)+1;
}

function timeDisLike() {
	let times = document.querySelector("body > section > div.container__menu > div > div.time > h2");
	let get_time = times.outerText;
	//console.log(get_portfolio)
	times.innerText = parseInt(times.outerText)-1;
}

function starsLike() {
	let star = document.querySelector("body > section > div.container__menu > div > div.star > h2");
	let get_stars = star.outerText;
	//console.log(get_portfolio)
	star.innerText = parseInt(star.outerText)+1;
}

function starsDisLike() {
	let star = document.querySelector("body > section > div.container__menu > div > div.star > h2");
	let get_stars = star.outerText;
	//console.log(get_portfolio)
	star.innerText = parseInt(star.outerText)-1;
}


function healthLike() {
	let health = document.querySelector("body > section > div.container__menu > div > div.health > h2");
	let get_health = health.outerText;
	//console.log(get_portfolio)
	health.innerText = parseInt(health.outerText)+1;
}

function healthDisLike() {
	let health = document.querySelector("body > section > div.container__menu > div > div.health > h2");
	let get_health = health.outerText;
	//console.log(get_portfolio)
	health.innerText = parseInt(health.outerText)-1;
}

function handleClickButton() {
	videoel.scrollIntoView({block: "center", behavior: "smooth"});
}

function ServicesScroll(){
	scroll_to_services.scrollIntoView({block: "start", behavior: "smooth"})
}

function WorkScroll(){
	scroll_to_work.scrollIntoView({block: "start", behavior: "smooth"})
}

function ProcessScroll(){
	scroll_to_process.scrollIntoView({block: "start", behavior: "smooth"})
}

function TestimonialsScroll() {
	testContainer.scrollIntoView({block: "start", behavior: "smooth"})
}

var load = document.querySelector("body > section > div.more > p");
function slideUp(){
	let slide = document.querySelector("body > section > div.our_work__container > div")
  	slide.classList.add('hide');
};


load.addEventListener('click', slideUp)
portfolio.addEventListener('click', portfolioLike)
time.addEventListener('click', timeLike)
stars.addEventListener('click', starsLike)
healths.addEventListener('click', healthLike)
services.addEventListener('click', ServicesScroll)
work.addEventListener('click', WorkScroll)
proces.addEventListener('click', ProcessScroll)
btn.addEventListener('click', handleClickButton)
portfolio.addEventListener('contextmenu', portfolioDisLike)
time.addEventListener('contextmenu', timeDisLike)
stars.addEventListener('contextmenu', starsDisLike)
healths.addEventListener('contextmenu', healthDisLike)
testimonials.addEventListener('click', TestimonialsScroll)

function clickOn(){
	var c = document.querySelector("body");
	c.classList.add('hide')
}