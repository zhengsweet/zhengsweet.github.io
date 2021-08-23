
var img =$(".swiper-container img");
var mp3=$(".m_mp3");
var m_play=$(".m_play");
var r_img=$(".record");
var qiehuan=$("#qiehuan");
var bg=$("#bg");


var now_song;
var title;
var now_img;
var flag=false;
var pause_icon ="images/pause.png";
var start_icon ="images/play.png";


qiehuan.click(function(){
	// alert('fdfcerv');
	
	if(bg[0].style.display != "none"){
		bg[0].style.display="none";
	}else{
		bg[0].style.display="block";
	}
})


img.click(function(){
	
	now_song=$(this).attr('datasrc');
	now_img =$(this).attr('src');
	change_img();
	play_mp3();
	
	
})


// 播放音乐
function play_mp3(){
	mp3.attr("src", now_song);
	// console.log(now_song);
	mp3[0].play();
	flag=true;
	xuanzhuan();
	change_btn();
	
}

//切换播放器图片
function change_img(){
	
	console.log(now_img);
	r_img.attr("src",now_img);
}

// 旋转胶片
function xuanzhuan(){
	r_img.addClass("xuanzhuan");
}

// 切换按钮
function change_btn(){
	m_play.attr("src",pause_icon);
}


// 暂停/播放功能
m_play.click(function(){

	if(flag){
		// 点击，歌曲暂停
		
		r_img.removeClass("xuanzhuan");
		m_play.attr("src",start_icon);
		mp3[0].pause();
		flag=false;
	}else{
		r_img.addClass("xuanzhuan");
		m_play.attr("src",pause_icon);
		mp3[0].play();
		flag=true;
	}
	
})