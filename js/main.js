/*
window.addEventListener("load", function(){
	var distance=0;
	var container=document.getElementsByClassName("container")[0];

	for(var i=0; i<container.children.length; i++){
		if(container.children[i].className == "controller"){
			var controller=container.children[i];
		}
		else if(container.children[i].className == "picture"){
			var picture=container.children[i];
		}
	}

	var controllerLi=controller.children;
	var gallery=picture.children[0];

	for(var j=0; j<controllerLi.length; j++){
		controllerLi[j].index=j;

		controllerLi[j].addEventListener("click", function(e){
			e.preventDefault();
			var index=e.currentTarget.index;
			// console.log("index : "+index);

			for(var k=0; k<controllerLi.length; k++){
				if(k == index){
					controllerLi[k].classList.add("on");
				}
				else{
					controllerLi[k].classList.remove("on");
				}
			}

			distance=index*400*(-1);
			gallery.style.left=distance+"px";
		});
	}
});
*/

window.addEventListener("load", function(){
	var imgPath={
		keyvisual1 : "work1.jpg",
		keyvisual2 : "work2.jpg",
		keyvisual3 : "work3.jpg",
		keyvisual4 : "work4.jpg",
		keyvisual5 : "work5.jpg",
		keyvisual6 : "work6.jpg"
	}

	var appendHtml="";
	var distance=0;
	var container=document.getElementsByClassName("container")[0];

	for(var i=0; i<container.children.length; i++){
		if(container.children[i].className == "controller"){
			var controller=container.children[i];
		}
		else if(container.children[i].className == "picture"){
			var picture=container.children[i];
		}
	}

	var controllerLi=controller.children;
	appendHtml+='<ul>\n';

	for(key in imgPath){
		// console.log(key+" : "+imgPath[key]);
		// <li><img src="images/work1.jpg" alt=""></li>
		appendHtml+='<li><img src="images/'+imgPath[key]+'" alt=""></li>\n';
	}

	appendHtml+='</ul>';
	// console.log("appendHtml : "+appendHtml);
	picture.innerHTML=appendHtml;
	var gallery=picture.children[0];

	for(var j=0; j<controllerLi.length; j++){
		controllerLi[j].index=j;

		controllerLi[j].addEventListener("click", function(e){
			e.preventDefault();
			var index=e.currentTarget.index;
			// console.log("index : "+index);

			for(var k=0; k<controllerLi.length; k++){
				if(k == index){
					controllerLi[k].classList.add("on");
				}
				else{
					controllerLi[k].classList.remove("on");
				}
			}

			distance=index*400*(-1);
			gallery.style.left=distance+"px";
		});
	}
});