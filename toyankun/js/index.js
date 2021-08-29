
var content= document.getElementById('content');
var btn_enjoy=document.getElementById('btn_enjoy');
var img=document.getElementsByClassName('swiper-slide');

content.onmouseout=function(){
	btn_enjoy.style.display='block';
	btn_enjoy.className='rollInTop';
}

for(let i=0;i<img.length;i++){
	img[i].addEventListener('click',function(){
		console.log(i)
	})
}
