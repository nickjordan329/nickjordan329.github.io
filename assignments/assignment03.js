let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1] = document.getElementById("1");
elem[2] = document.getElementById("2");
elem[3] = document.getElementById("3");
elem[4] = document.getElementById("4");
elem[5] = document.getElementById("5");
elem[6] = document.getElementById("6");
elem[7] = document.getElementById("7");
elem[8] = document.getElementById("8");
elem[9] = document.getElementById("9");
elem[10] = document.getElementById("10");
elem[11] = document.getElementById("11");
elem[12] = document.getElementById("12");
elem[13] = document.getElementById("13");
elem[14] = document.getElementById("14");
elem[15] = document.getElementById("15");
elem[16] = document.getElementById("16");
elem[17] = document.getElementById("17");
elem[18] = document.getElementById("18");
elem[19]=document.getElementById("Total");

// assign a function to the + button
elem[1].children[4].children[0].onclick = function(){add1(elem[1]);totals(elem);};
elem[2].children[4].children[0].onclick = function(){add1(elem[2]);totals(elem);};
elem[3].children[4].children[0].onclick = function(){add1(elem[3]);totals(elem);};
elem[4].children[4].children[0].onclick = function(){add1(elem[4]);totals(elem);};
elem[5].children[4].children[0].onclick = function(){add1(elem[5]);totals(elem);};
elem[6].children[4].children[0].onclick = function(){add1(elem[6]);totals(elem);};
elem[7].children[4].children[0].onclick = function(){add1(elem[7]);totals(elem);};
elem[8].children[4].children[0].onclick = function(){add1(elem[8]);totals(elem);};
elem[9].children[4].children[0].onclick = function(){add1(elem[9]);totals(elem);};
elem[10].children[4].children[0].onclick = function(){add1(elem[10]);totals(elem);};
elem[11].children[4].children[0].onclick = function(){add1(elem[11]);totals(elem);};
elem[12].children[4].children[0].onclick = function(){add1(elem[12]);totals(elem);};
elem[13].children[4].children[0].onclick = function(){add1(elem[13]);totals(elem);};
elem[14].children[4].children[0].onclick = function(){add1(elem[14]);totals(elem);};
elem[15].children[4].children[0].onclick = function(){add1(elem[15]);totals(elem);};
elem[16].children[4].children[0].onclick = function(){add1(elem[16]);totals(elem);};
elem[17].children[4].children[0].onclick = function(){add1(elem[17]);totals(elem);};
elem[18].children[4].children[0].onclick = function(){add1(elem[18]);totals(elem);};

//assign a function to the - buttons
elem[1].children[4].children[1].onclick = function(){sub1(elem[1]);totals(elem);};
elem[2].children[4].children[1].onclick = function(){sub1(elem[2]);totals(elem);};
elem[3].children[4].children[1].onclick = function(){sub1(elem[3]);totals(elem);};
elem[4].children[4].children[1].onclick = function(){sub1(elem[4]);totals(elem);};
elem[5].children[4].children[1].onclick = function(){sub1(elem[5]);totals(elem);};
elem[6].children[4].children[1].onclick = function(){sub1(elem[6]);totals(elem);};
elem[7].children[4].children[1].onclick = function(){sub1(elem[7]);totals(elem);};
elem[8].children[4].children[1].onclick = function(){sub1(elem[8]);totals(elem);};
elem[9].children[4].children[1].onclick = function(){sub1(elem[9]);totals(elem);};
elem[10].children[4].children[1].onclick = function(){sub1(elem[10]);totals(elem);};
elem[11].children[4].children[1].onclick = function(){sub1(elem[11]);totals(elem);};
elem[12].children[4].children[1].onclick = function(){sub1(elem[12]);totals(elem);};
elem[13].children[4].children[1].onclick = function(){sub1(elem[13]);totals(elem);};
elem[14].children[4].children[1].onclick = function(){sub1(elem[14]);totals(elem);};
elem[15].children[4].children[1].onclick = function(){sub1(elem[15]);totals(elem);};
elem[16].children[4].children[1].onclick = function(){sub1(elem[16]);totals(elem);};
elem[17].children[4].children[1].onclick = function(){sub1(elem[17]);totals(elem);};
elem[18].children[4].children[1].onclick = function(){sub1(elem[18]);totals(elem);};

//assign a function to the clear button
elem[1].children[4].children[2].onclick = function(){clear(elem[1]);totals(elem);};
elem[2].children[4].children[2].onclick = function(){clear(elem[2]);totals(elem);};
elem[3].children[4].children[2].onclick = function(){clear(elem[3]);totals(elem);};
elem[4].children[4].children[2].onclick = function(){clear(elem[4]);totals(elem);};
elem[5].children[4].children[2].onclick = function(){clear(elem[5]);totals(elem);};
elem[6].children[4].children[2].onclick = function(){clear(elem[6]);total(elem);};
elem[7].children[4].children[2].onclick = function(){clear(elem[7]);totals(elem);};
elem[8].children[4].children[2].onclick = function(){clear(elem[8]);totals(elem);};
elem[9].children[4].children[2].onclick = function(){clear(elem[9]);totals(elem);};
elem[10].children[4].children[2].onclick = function(){clear(elem[10]);totals(elem);};
elem[11].children[4].children[2].onclick = function(){clear(elem[11]);totals(elem);};
elem[12].children[4].children[2].onclick = function(){clear(elem[12]);totals(elem);};
elem[13].children[4].children[2].onclick = function(){clear(elem[13]);totals(elem);};
elem[14].children[4].children[2].onclick = function(){clear(elem[14]);totals(elem);};
elem[15].children[4].children[2].onclick = function(){clear(elem[15]);totals(elem);};
elem[16].children[4].children[2].onclick = function(){clear(elem[16]);totals(elem);};
elem[17].children[4].children[2].onclick = function(){clear(elem[17]);totals(elem);};
elem[18].children[4].children[2].onclick = function(){clear(elem[18]);totals(elem);};


// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-"){      
    elem.children[2].innerHTML = "1";
	let currentScore = Number.parseInt(elem.children[2].innerHTML);
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
    elem.children[3].innerHTML=currentScore - par;
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    currentScore+=1;
    //take care of over.
    let par = elem.children[1].innerHTML;
    par = Number.parseInt(par);
    elem.children[3].innerHTML=currentScore - par;
  }
}
//create sub1 function
function sub1 (elem) {
  if( elem.children[2].innerHTML == "-" || elem.children[2].innerHTML== "1"){
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML="-";
  }
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    currentScore-=1;
    //take care of over.
    if(currentScore!=0)
      {
          let par = elem.children[1].innerHTML;
          par = Number.parseInt(par);
          elem.children[3].innerHTML=currentScore - par;
      }
  }
}
//create clear function
function clear(elem){
    elem.children[2].innerHTML = "-";
    elem.children[3].innerHTML="-";
}

//create function to to do totals
function totals(elem){
    let overTotal = 0;
    let scoreTotal = 0;
	overTotal=0;
	scoreTotal=0;
  for(let i=1;i<19;i++)
  {
	console.log(i+" "+elem[i].children[2].innerHTML);
    if(elem[i].children[2].innerHTML=="-")
      scoreTotal+=0;
    else{
      let currScore = Number.parseInt(elem[i].children[2].innerHTML);
      scoreTotal+=currScore;
    }
    if(elem[i].children[3].innerHTML=="-")
      overTotal+=0;
    else{
      let currOver = Number.parseInt(elem[i].children[3].innerHTML);
      overTotal+=currOver;
	}
  }
    elem[19].children[2].innerHTML = scoreTotal;
    elem[19].children[3].innerHTML = overTotal;
}
