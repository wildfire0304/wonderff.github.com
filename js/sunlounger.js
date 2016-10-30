var sunloungerData = 
{
	"id":1,
	"title":["SUN","LOUNGER"],
	"img":"./img/product/sun_lounger/sun_lounger.png",
	"shadow-pic":"./img/product/sun_lounger/sun_lounger_shadow.png",
	"link":"#",
	"color":"#fbda52",
	"toC": "#6091ad",
	"details":[
		"../img/product/sun_lounger/details/sdraio_locus_solus_1.jpg",
		"../img/product/sun_lounger/details/sdraio_locus_solus_1.jpg",
		"../img/product/sun_lounger/details/sdraio_locus_solus_1.jpg"
		],
	"type":[
		{
			"color":"#fbda52",
			"fontC":"#5091ad",
			"src":"../img/product/sun_lounger/types/yellow_sdraio_prendisole.png"
		},
		{
			"color":"#de6c40",
			"fontC":"#a0da98",
			"src":"../img/product/sun_lounger/types/red_sdraio_prendisole.png"
		},
		{
			"color":"#22548c",
			"fontC":"#de9092",
			"src":"../img/product/sun_lounger/types/blue_sdraio_prendisole.png"
		},
		{
			"color":"#54943e",
			"fontC":"#e7b589",
			"src":"../img/product/sun_lounger/types/green_sdraio_prendisole.png"
		},
		{
			"color":"#eae7dc",
			"fontC":"#e85a4f",
			"src":"../img/product/sun_lounger/types/white_sdraio_prendisole.png"
		},
		{
			"color":"#5091ad",
			"fontC":"#fbda52",
			"src":"../img/product/sun_lounger/types/yellow_sdraio_prendisole.png"
		}

	]
};
 
var scroll = document.querySelector("#scroll");
var title = document.querySelector("#title");
var proImg = document.querySelector("#productImg");
var details = document.querySelector("#details");
var detail_1 = document.querySelector("#detail_1");
var detail_2 = document.querySelector("#detail_2");
var detail_3 = document.querySelector("#detail_3");
var moreType = document.querySelector("#moreType");
var list = moreType.querySelectorAll("li");
var text = moreType.querySelector("#desc");
var textItems = text.children;
var footer = document.querySelector("#footer");
var initBg = document.querySelector("#initBg");
var sc = 0;


var setScroll = function (scroll_top) {
		document.documentElement.scrollTop = scroll_top;
		window.pageYOffset = scroll_top;
		document.body.scrollTop = scroll_top;
	}
var Gt = function(obj) {
		return obj.getBoundingClientRect().top;
	};


var setCss = function (index) {
	for (var i = 0; i < list.length; i++) {
		list[i].style = "";
		if (i == index) {
			list[i].style.opacity = "1";
		}

	};
	initBg.style.backgroundColor = sunloungerData.type[index].color;
	textItems[0].style.color = sunloungerData.type[index].fontC;
	textItems[2].style.color = sunloungerData.type[index].fontC;
	textItems[4].style.borderColor = sunloungerData.type[index].fontC;
	textItems[4].style.color = sunloungerData.type[index].fontC;
	for (var j = 0; j <textItems[4].children.length; j++) {
		textItems[4].children[j].style.backgroundColor = sunloungerData.type[index].color;	
	};
}

document.onscroll = function(ev){
	sc = Gt(scroll);
	
	footer.style = "";
	// 商品栏目的呈现
	if (sc <= 0 && sc > -2330) {
		proImg.style.transform = "translateY(" + sc*0.3 + "px)";
	}else {
		proImg.style.transform = "translateY(-700px)";
	}

	// 详情列表
	if (sc > -1500 ) {
		details.style.transform = "translateY(0px)";
	}
	if (sc < -1500 && sc > -5900) {
		details.style.transform = "translateY(" + (sc + 1500)*0.5 + "px)";
	}
	if (sc < -5900) {
		details.style.transform = "translateY(-2200px)";
	}

	// 详情1
	if (sc > -2000 ) {
		detail_1.style.transform = "translateY(0px)";
	}
	if (sc < -2000 && sc > -4000) {
		detail_1.style.transform = "translateY(" + (sc + 2000)*0.36 + "px)";
	}
	if (sc < -4000) {
		detail_1.style.transform = "translateY(-640px)";
	}
	// 详情2
	if (sc > -2500 ) {
		detail_2.style.transform = "translateY(0px)";
	}
	if (sc < -2500 && sc > -5000) {
		detail_2.style.transform = "translateY(" + (sc + 2300)*0.24 + "px)";
	}
	if (sc < -5000) {
		detail_2.style.transform = "translateY(-600px)";
	}

	// 详情3
	if (sc > -3000 ) {
		detail_3.style.transform = "translateY(0px)";
	}
	if (sc < -3000 && sc > -6000) {
		detail_3.style.transform = "translateY(" + (sc + 2300)*0.18 + "px)";
	}
	if (sc < -6000) {
		detail_3.style.transform = "translateY(-480px)";
	}


	// diff type
	if (sc > -4000 ) {
		moreType.style.transform = "translateY(0px)";
	} else if (sc < -4000 && sc > -6000) {
		setCss(0);
		moreType.style.transform = "translateY(" + (sc + 4000)*0.33 + "px)";
	}else if (sc < -6000 && sc > -7000) {
		setCss(1);
		moreType.style.transform = "translateY(-660px)";
	}else if (sc < -7000 && sc > -8000) {
		setCss(2);
		moreType.style.transform = "translateY(-660px)";
	}else if (sc < -8000 && sc > -9000) {
		setCss(3);
		moreType.style.transform = "translateY(-660px)";
	}else if(sc < -9000 && sc > -10000) {
		setCss(4);
		moreType.style.transform = "translateY(-660px)";
	}else if(sc < -10000 && sc > -11000) {
		setCss (5);
		moreType.style.transform = "translateY(" + (-660+(sc + 10000)*0.1) + "px)";
	}else if (sc < -11000){
		footer.style.opacity = 1;
		moreType.style.transform = "translateY(-760px)";
	}



	// 标题的设置
	if ( sc > -400 ) {
		title.style = "";
		initBg.style.backgroundColor = "#fbda52";
	} else if (sc < -400 && sc > -2000) {
		initBg.style.backgroundColor = "#fbda52";
		title.style.transform = "scale(.7) translateY(" + sc*0.08 + "px)";
	} else if (sc < -2000 && sc > -4000){
		title.style.transform = "scale(.7) translateY(" + sc*0.08 + "px)";
		title.style.color = "#fbda52";
		initBg.style.backgroundColor = "#5091ad";
	} else if ( sc < -4000 && sc > -11000 ){
		title.style.transform = "scale(.7) translateY(" + sc*0.08 + "px)";
		title.style.color = "#fbda52";
		title.style.opacity = "0";
	} else if( sc < -11000 ){
		title.style.opacity = "1";
		title.style.color = "#fbda52";
		title.style.transform = "scale(1) translateY(0px)";
	}
}





