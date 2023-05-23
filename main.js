
///array to store data of slider
const sliderData=[
{
id:1,
imgURL:"images/555.jpg",
},
{
    id:2,
    imgURL:"images/222.JPG",
},
{
    id:3,
    imgURL:"images/333.JPG",
},
{
    id:3,
    imgURL:"images/444.JPG",
},
{
    id:3,
    imgURL:"images/666.JPG",
},
{
    id:3,
    imgURL:"images/777.JPEG",
},
{
    id:3,
    imgURL:"images/888.webp",
},
{
    id:3,
    imgURL:"images/111.JPG",
}

]
///define data of slider html in js
var imgslider=document.getElementById("imgslider");
var nextbtn=document.getElementById("nextbtn");
var prevbtn=document.getElementById("prevbtn");
let currentitem=0;

/// make data of html equal data in js
let updateUi= () =>{
    const item =sliderData[currentitem];
    console.log(item);
    imgslider.src=item.imgURL;
}
updateUi();
//button to get next value
nextbtn.addEventListener( 'click',()=>{
    currentitem++;
    if(currentitem==sliderData.length){
        currentitem=0;
    }
    updateUi();
});
///button to get previous value
prevbtn.addEventListener( 'click',()=>{

    //if(currentitem==0){
      //  currentitem=reviewData.length-1;
    //}
    currentitem--;
    
    if(currentitem<0)currentitem=sliderData.length-1;
    
        updateUi();
        
    });

var child1=document.getElementById("child1");
var ov1=document.getElementById("ov1");
var childimg1=document.getElementById("childimg1");
 child1.addEventListener('mouseenter',()=>{
    childimg1.style.display="none";
 ov1.style.display="block";
 
});
child1.addEventListener('mouseleave',()=>{
    ov1.style.display="none";
    childimg1.style.display="block";
   
});

var child2=document.getElementById("child2");
var ov2=document.getElementById("ov2");
var childimg2=document.getElementById("childimg2");
 child2.addEventListener('mouseenter',()=>{
    childimg2.style.display="none";
 ov2.style.display="block";

});
child2.addEventListener('mouseleave',()=>{
    ov2.style.display="none";
    childimg2.style.display="block";
   
});

var child3=document.getElementById("child3");
var ov3=document.getElementById("ov3");
var childimg3=document.getElementById("childimg3");
 child3.addEventListener('mouseenter',()=>{
    childimg3.style.display="none";
 ov3.style.display="block";

});
child3.addEventListener('mouseleave',()=>{
    ov3.style.display="none";
    childimg3.style.display="block";
    
});

var child4=document.getElementById("child4");
var ov4=document.getElementById("ov4");
var childimg4=document.getElementById("childimg4");
 child4.addEventListener('mouseenter',()=>{
    childimg4.style.display="none";
 ov4.style.display="block";

});
child4.addEventListener('mouseleave',()=>{
    ov4.style.display="none";
    childimg4.style.display="block";

});

var child5=document.getElementById("child5");
var ov5=document.getElementById("ov5");
var childimg5=document.getElementById("childimg5");
 child5.addEventListener('mouseenter',()=>{
    childimg5.style.display="none";
 ov5.style.display="block";
});
child5.addEventListener('mouseleave',()=>{
    ov5.style.display="none";
    childimg5.style.display="block";
});

var child6=document.getElementById("child6");
var ov6=document.getElementById("ov6");
var childimg6=document.getElementById("childimg6");
 child6.addEventListener('mouseenter',()=>{
    childimg6.style.display="none";
 ov6.style.display="block";
});
child6.addEventListener('mouseleave',()=>{
    ov6.style.display="none";
    childimg6.style.display="block";
});
//idoioaoi
var child7=document.getElementById("child7");
var ov7=document.getElementById("ov7");
var childimg7=document.getElementById("childimg7");
 child7.addEventListener('mouseenter',()=>{
    childimg7.style.display="none";
 ov7.style.display="block";
});
child7.addEventListener('mouseleave',()=>{
    ov7.style.display="none";
    childimg7.style.display="block";
});

var child8=document.getElementById("child8");
var ov8=document.getElementById("ov8");
var childimg8=document.getElementById("childimg8");
 child8.addEventListener('mouseenter',()=>{
    childimg8.style.display="none";
 ov8.style.display="block";
});
child8.addEventListener('mouseleave',()=>{
    ov8.style.display="none";
    childimg8.style.display="block";
});

var child9=document.getElementById("child9");
var ov9=document.getElementById("ov9");
var childimg9=document.getElementById("childimg9");
 child9.addEventListener('mouseenter',()=>{
    childimg9.style.display="none";
 ov9.style.display="block";
});
child9.addEventListener('mouseleave',()=>{
    ov9.style.display="none";
    childimg9.style.display="block";
});

var child10=document.getElementById("child10");
var ov10=document.getElementById("ov10");
var childimg10=document.getElementById("childimg10");
 child10.addEventListener('mouseenter',()=>{
    childimg10.style.display="none";
 ov10.style.display="block";
});
child10.addEventListener('mouseleave',()=>{
    ov10.style.display="none";
    childimg10.style.display="block";
});

var child11=document.getElementById("child11");
var ov11=document.getElementById("ov11");
var childimg11=document.getElementById("childimg11");
 child11.addEventListener('mouseenter',()=>{
    childimg11.style.display="none";
 ov11.style.display="block";
});
child11.addEventListener('mouseleave',()=>{
    ov11.style.display="none";
    childimg11.style.display="block";
});


var child12=document.getElementById("child12");
var ov12=document.getElementById("ov12");
var childimg12=document.getElementById("childimg12");
 child12.addEventListener('mouseenter',()=>{
    childimg12.style.display="none";
 ov12.style.display="block";
});
child12.addEventListener('mouseleave',()=>{
    ov12.style.display="none";
    childimg12.style.display="block";
});

var child13=document.getElementById("child13");
var ov13=document.getElementById("ov13");
var childimg13=document.getElementById("childimg13");
 child13.addEventListener('mouseenter',()=>{
    childimg13.style.display="none";
 ov13.style.display="block";
});
child13.addEventListener('mouseleave',()=>{
    ov13.style.display="none";
    childimg13.style.display="block";
});

var child14=document.getElementById("child14");
var ov14=document.getElementById("ov14");
var childimg14=document.getElementById("childimg14");
 child14.addEventListener('mouseenter',()=>{
    childimg14.style.display="none";
 ov14.style.display="block";
});
child14.addEventListener('mouseleave',()=>{
    ov14.style.display="none";
    childimg14.style.display="block";
});

var child15=document.getElementById("child15");
var ov15=document.getElementById("ov15");
var childimg15=document.getElementById("childimg15");
 child15.addEventListener('mouseenter',()=>{
    childimg15.style.display="none";
 ov15.style.display="block";
});
child15.addEventListener('mouseleave',()=>{
    ov15.style.display="none";
    childimg15.style.display="block";
});

var nam1=document.getElementById("nam1");
//video
var vid=document.getElementById("vid");
var closevid=document.getElementById("closevid");
videoex=document.getElementById("example_video_1");
closevid.addEventListener('click',()=>{
    vid.style.display="none";
    
   
});

child1.addEventListener('click',()=>{
    vid.style.display="block";
    videoex.autoplay=true;
    videoex.load();
})
child2.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child3.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child4.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child5.addEventListener('click',()=>{
    vid.style.display="block";
  
})
child6.addEventListener('click',()=>{
    vid.style.display="block";
  
})
child7.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child8.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child9.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child10.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child11.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child12.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child13.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child14.addEventListener('click',()=>{
    vid.style.display="block";
    
})
child15.addEventListener('click',()=>{
    vid.style.display="block";
    
})


//rate

var Egypt=document.getElementById("Egypt");
var USA=document.getElementById("USA");
var NorthKorea=document.getElementById("NorthKorea");
var Egypt_rate=document.getElementById("Egypt_rate");
var USA_rate=document.getElementById("USA_rate");
var NorthKorea_rate=document.getElementById("NorthKorea_rate");

Egypt.addEventListener('click',()=>{

   Egypt_rate.style.display="block";
   USA_rate.style.display="none";
   NorthKorea_rate.style.display="none";

})

USA.addEventListener('click',()=>{
    
    USA_rate.style.display="block";
    NorthKorea_rate.style.display="none";
    Egypt_rate.style.display="none";
 })
 
 NorthKorea.addEventListener('click',()=>{

    NorthKorea_rate.style.display="block";
    USA_rate.style.display="none";
    Egypt_rate.style.display="none";
 })
 
 var child22=document.getElementById("child22");
var ov22=document.getElementById("ov22");
var childimg22=document.getElementById("childimg22");

 child22.addEventListener('mouseenter',()=>{
    childimg22.style.display="none";
 ov22.style.display="block";
 
});
child22.addEventListener('mouseleave',()=>{
    ov22.style.display="none";
    childimg22.style.display="block";
   
});

var child23=document.getElementById("child23");
var ov23=document.getElementById("ov23");
var childimg23=document.getElementById("childimg23");
 child23.addEventListener('mouseenter',()=>{
    childimg23.style.display="none";
 ov23.style.display="block";

});
child23.addEventListener('mouseleave',()=>{
    ov23.style.display="none";
    childimg23.style.display="block";
   
});

var child24=document.getElementById("child24");
var ov24=document.getElementById("ov24");
var childimg24=document.getElementById("childimg24");
 child24.addEventListener('mouseenter',()=>{
    childimg24.style.display="none";
 ov24.style.display="block";

});
child24.addEventListener('mouseleave',()=>{
    ov24.style.display="none";
    childimg24.style.display="block";
    
});
//USA
var child25=document.getElementById("child25");
var ov25=document.getElementById("ov25");
var childimg25=document.getElementById("childimg25");
 child25.addEventListener('mouseenter',()=>{
    childimg25.style.display="none";
 ov25.style.display="block";

});
child25.addEventListener('mouseleave',()=>{
    ov25.style.display="none";
    childimg25.style.display="block";
    
});

var child26=document.getElementById("child26");
var ov26=document.getElementById("ov26");
var childimg26=document.getElementById("childimg26");
 child26.addEventListener('mouseenter',()=>{
    childimg26.style.display="none";
 ov26.style.display="block";

});
child26.addEventListener('mouseleave',()=>{
    ov26.style.display="none";
    childimg26.style.display="block";
    
});

var child27=document.getElementById("child27");
var ov27=document.getElementById("ov27");
var childimg27=document.getElementById("childimg27");
 child27.addEventListener('mouseenter',()=>{
    childimg27.style.display="none";
 ov27.style.display="block";

});
child27.addEventListener('mouseleave',()=>{
    ov27.style.display="none";
    childimg27.style.display="block";
    
});

///southkorea
var child28=document.getElementById("child28");
var ov28=document.getElementById("ov28");
var childimg28=document.getElementById("childimg28");
 child28.addEventListener('mouseenter',()=>{
    childimg28.style.display="none";
 ov28.style.display="block";

});
child28.addEventListener('mouseleave',()=>{
    ov28.style.display="none";
    childimg28.style.display="block";
    
});

var child29=document.getElementById("child29");
var ov29=document.getElementById("ov29");
var childimg29=document.getElementById("childimg29");
 child29.addEventListener('mouseenter',()=>{
    childimg29.style.display="none";
 ov29.style.display="block";

});
child29.addEventListener('mouseleave',()=>{
    ov29.style.display="none";
    childimg29.style.display="block";
    
});

var child30=document.getElementById("child30");
var ov30=document.getElementById("ov30");
var childimg30=document.getElementById("childimg30");
 child30.addEventListener('mouseenter',()=>{
    childimg30.style.display="none";
 ov30.style.display="block";

});
child30.addEventListener('mouseleave',()=>{
    ov30.style.display="none";
    childimg30.style.display="block";
    
});


//random
var myElment=document.getElementById('MyImg');

myImgs=[
`images/23.jpg`,
`images/24.jpg`,
`images/33.jpg`,
`images/44.jpg`,
`images/22.jpg`,
`images/111.jpg`,
`images/24.jpg`,
`images/45.jpg`,
`images/8.jpg`,
`images/a.jpg`,
`images/222.jpg`,
`images/6.jpg`
];
console.log(myImgs);

function changeImage(myElment,myImgs){

    `use strict`;
    setInterval(function(){
var myRandomNum=Math.floor(Math.random()*myImgs.length);
console.log(myRandomNum);
myElment.src=myImgs[myRandomNum];


    },1000);
}
changeImage(myElment,myImgs);


//search
//search
const searchinput=document.getElementById("searchinput");
	
function search(){
	const searchinput=document.getElementById("searchinput").value.toUpperCase();
	const allfims=document.querySelector('allfims');
	const filmname=document.querySelectorAll('h3');
	const li=document.querySelectorAll('li');

	for(let i=0;i<li.length;i++){
		if(filmname[i].innerHTML.toUpperCase().indexOf(searchinput)>=0){
li[i].style.display="block";
		}else{
			li[i].style.display="none";
		}
	}
}	


function redirectme(url){
	window.location.href=url;
}



const register_btn=document.getElementById("register-btn");

register_btn.addEventListener('click',()=>{
    redirectme('Login.html');
    console.log("ajjj");

})




// function search2(){
// 	const searchinput=document.getElementById("searchinput").value.toUpperCase();
// 	const allfims=document.querySelector('allfims');
// 	const h1=document.querySelectorAll('h1');
// 	const child=document.querySelectorAll('child');

// 	for(let i=0;i<li.length;i++){
// 		if(h1[i].innerHTML.toUpperCase().indexOf(searchinput)>=0){
//             child[i].style.display="block";
// 		}else{
// 			li[i].style.display="none";
// 		}
// 	}
// }	







// const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=a';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '84411c48ffmsh9339453d8c03346p1670b7jsn6f2d0644962d',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

///fetch data

fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20", { 
"method": "GET",
"headers": {
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
"x-rapidapi-key": "84411c48ffmsh9339453d8c03346p1670b7jsn6f2d0644962d"
}

})

.then(response=>response.json())
.then(data=>{
    nam1.innerHTML=data.d[4].l;
childimg1.setAttribute=("src",`https:${data.d[4].i.imageUrl}`);
}  )
.catch(err=>{ 
    console.log(err);
 })
// var data;
// function getdata(akh){
//     var myhttp=new XMLHttpRequest();
//     myhttp.open("GET",`https://api.themoviedb.org/3/movie/550?api_key=65f7c15c612e4cbea84fecc5c27613fd`);
    
//     myhttp.send();
    
//     myhttp.addEventListener("readystatechange",function(){
//         if(myhttp.readyState==4&&myhttp.status==200){
          
//             data=JSON.parse(myhttp.response);
//             console.log(data);
        
// nam1.innerHTML=data.original_language;
// childimg1.setAttribute("src",`https:${data.poster_path}`);
//         }
      
//     })
    
    
//     }
// console.log(getdata());