 
let k=3,
j=0,
u = 0;
let x = 0, y = 0;
let red = 0;
let shape = 0;
let shape1 = 0;
let k1=9;



function xy() {
    x = Math.floor(Math.random() * ( 70 - 30)) + 30;
    y = Math.floor(Math.random() * ( 60 - 30)) + 30;
}
function round1() {
   
    document.getElementById('field').innerHTML = "<button id='click1' type='button' onClick='handleButtonClick()'> 1 </button>";
    k=9;
    xy();
    let touch = document.getElementById("click1");
    touch.style.top = y+'%';
    touch.style.left = x+'%';
    touch.innerHTML = k;
    document.getElementById("rC1").id="act";
}

function round2() {
    
    j=0;
    u=0;
    shape = 0;
    document.getElementById('field').innerHTML = "<button id='click1' type='button' onClick='handleButtonClick2()'> 1 </button>";
    k=19; 
    xy();
    let touch = document.getElementById("click1");
    touch.style.top = y+'%';
    touch.style.left = x+'%';
    touch.innerHTML = k;
    red = Math.random()*(1-0.3)+0.3;
    document.getElementById("rC2").id="act";
}

function handleButtonClick2() {
    k--;

    document.getElementById("click1").innerHTML=k;
    if (u>red && shape == 0 && k<10) {
        shape++;
        document.getElementById('field').innerHTML = "<button id='click1' type='button' onClick='handleButtonClick2()'> 8 </button>";
        xy();
        let touch = document.getElementById("click1");
        touch.style.top = y+'%';
        touch.style.left = x+'%';
        touch.innerHTML = k;
        
    }
    if (k == 18) 
    timer();
    
}

function round3() {
    shape1=0;
    j=0;
    u=0;
    shape = 0;
    document.getElementById('field').innerHTML = "<button id='click1' type='button' onClick='handleButtonClick3()'> 1 </button>";
    k=9;
    k1=9;
    xy();
    let touch = document.getElementById("click1");
    touch.style.top = y+'%';
    touch.style.left = x+'%';
    touch.innerHTML = k;
    red = Math.random()*(1.5-0.6)+0.6;
    document.getElementById("rC3").id="act";
}

function handleButtonClick3() {
   if (k>0) k--;
    
    if (k == 1 && shape1 == 0) {
        shape1++;
        k=9;
        document.getElementById('field').innerHTML = "<button id='click1' type='button' onClick='handleButtonClick3()'> 8 </button>";
        xy();
        let touch = document.getElementById("click1");
        touch.style.top = y+'%';
        touch.style.left = x+'%';
        touch.innerHTML = k;
    }
    document.getElementById("click1").innerHTML=k;

    if (u>red && shape == 0) {
        shape++;
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<button id='click2' type='button' onClick='handleButtonClick3v1()'> 8 </button>";

    // Добавляем только что созданный элемент в дерево DOM

    let my_div = document.getElementById("page");
    document.body.insertBefore(newDiv, my_div);
       // document.getElementById('field').innerHTML = "<button id='click2' type='button' onClick='handleButtonClick3()'> 8 </button>";
        xy();
        let touch = document.getElementById("click2");
        touch.style.top = y+'%';
        touch.style.left = x+'%';
        touch.innerHTML = k1;
    }    
    if (k == 8 && shape==0 && shape1 == 0) {
    timer3();
    }
}

function handleButtonClick3v1() {
    k1--;
    document.getElementById("click2").innerHTML=k1;
    if (k1<1) {
        let child = document.getElementById("click2");
        child.remove(child);
    }
   }

function handleButtonClick() {
    k--;
    document.getElementById("click1").innerHTML=k;
    //document.getElementById("s").innerHTML=k;
    
    if (k==8 ) 
    timer();
    
}

function timer() {
    
		var messageTime = document.getElementById('time');	
	if (j == 0) {
		j=j+0.1;	
	}
    if (j > 0) {
	var id = setInterval(function rt() {
    j=j+0.1;
	u=j.toFixed(1);				
    messageTime.innerHTML="Ваше время: "+u;
	if (u>19.9 || k == 0) {
        clearInterval(id);
        document.getElementById('field').innerHTML = '<div id="result"> Ваш результат = ' + u + '</div>';
            } 		 
	    }, 100)
    };
}

function timer3() {
    
    var messageTime = document.getElementById('time');	
if (j == 0) {
    j=j+0.1;	
}
if (j > 0) {
var id = setInterval(function rt() {
j=j+0.1;
u=j.toFixed(1);				
messageTime.innerHTML="Ваше время: "+u;
if (u>19.9 || k < 1 && k1 < 1) {
    clearInterval(id);
    document.getElementById('field').innerHTML = '<div id="result"> Ваш результат = ' + u + '</div>';
        } 		 
    }, 100)
};
}


