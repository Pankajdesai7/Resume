var navMenuElements=document.querySelectorAll('.nav-bar a');

for(var i=0;i<navMenuElements.length;i++){
	navMenuElements[i].addEventListener('click',function(event){
            event.preventDefault();
            var targetSectionid=this.textContent.trim().toLowerCase();
            var targetSection=document.getElementById(targetSectionid);
            var interval=setInterval(function(){
            	var targetpos=targetSection.getBoundingClientRect();
            	if(targetpos.top<=0){
            		clearInterval(interval);
                    return;
            	}
            	window.scrollBy(0,20);
            },20);

	});
}