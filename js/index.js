function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("btnScrollToTop").style.display="block":document.getElementById("btnScrollToTop").style.display="none"}function scrollToTop(){document.body.scrollTop=0,document.documentElement.scrollTop=0}function animateOnScroll(e,o){e.forEach((e=>{e.isIntersecting&&(e.target.classList.add("zoomIn"),o.unobserve(e.target))}))}window.onscroll=function(){scrollFunction()};const observer=new IntersectionObserver(animateOnScroll,{root:null,threshold:.5}),image=document.getElementById("carbonImage");observer.observe(image),document.getElementById("toggleButton").addEventListener("click",(function(){document.querySelector(".divfooterbottom div").classList.toggle("visible")})),window.axeptioSettings={clientId:"65e4b1b9c065d174cb3f24f4",cookiesVersion:"carbonfight landing-fr-EU"},function(e,o){var t=e.getElementsByTagName(o)[0],n=e.createElement(o);n.async=!0,n.src="//static.axept.io/sdk.js",t.parentNode.insertBefore(n,t)}(document,"script");