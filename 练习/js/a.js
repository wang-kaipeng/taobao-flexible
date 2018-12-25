// 轮播图
var spans=document.querySelectorAll(".child span");
var father=document.querySelector(".father");
    for (var i = 0; i < spans.length; i++) {
        spans[i].onclick=function(){
        clearInterval(timer);
        document.querySelector("span.sel").className="";
        this.className="sel";
        var img=this.getAttribute("data");
        father.style.background="url("+img+")";
        timer=setInterval(lunbo,2000);
        }
    }
var timer=setInterval(lunbo,2000);

function lunbo() { 
var sel=document.querySelector(".sel");
    if (sel.nextElementSibling!=null) {
       sel.className="";
       var nextxiongdi=sel.nextElementSibling;
       nextxiongdi.className="sel";
       var img=nextxiongdi.getAttribute("data");
       father.style.background="url("+img+")";
    }else{
       sel.className="";
       sel.parentNode.firstElementChild.className="sel";
       father.style.background=sel.parentNode.firstElementChild.getAttribute("data")
       }
    }
// 切换
	var ps=document.querySelectorAll('.yihang>p');
	var divs=document.querySelectorAll('.you-neirong>div');
 /* console.log(divs)
	console.log(ps)*/
	for (var i = 0; i <ps.length; i++) {
		ps[i].onmousemove=function () {
			console.log(this)
			for (var i = 0; i <divs.length; i++) {
				if (ps[i]==this) {
					ps[i].className="select";
					divs[i].className="aa";

				}else{
					ps[i].className="";
					divs[i].className="";
				}
			}
		}
	}
