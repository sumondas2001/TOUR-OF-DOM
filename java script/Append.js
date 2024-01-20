const visitList = document.getElementById('visit-list');

const li = document.createElement ("li");
li.innerText = "New place add";
visitList.append(li);


const visitList2 = document.getElementById("visit-list");

// const li2 = document.createElement("li");
li.innerText = "other new place ad";
visitList2.append(li);



const mainSection = document.getElementById ('main-section');

const section = document.createElement('section');


const h1 = document.createElement('h1');
h1.innerText = 'Food section';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1= document.createElement('li');
li1.innerText = 'Apple';
ul.appendChild(li1);

const li2= document.createElement('li');
li2.innerText = 'Mengo';
ul.appendChild(li2);

const li3= document.createElement('li');
li3.innerText = 'orenge';
ul.appendChild(li3);



section.appendChild(ul);


mainSection.appendChild(section);


const carMainSection2 = document.getElementById('main-section');

const carSection = document.createElement('section');
const carH1 = document.createElement('h1');
carH1.innerText= 'This is my car'
carSection.appendChild(carH1);

const carUl = document.createElement('ul');

const carLi1 = document.createElement('li');
carLi1.innerText = 'BMW'
carUl.appendChild(carLi1);

const carLi2 = document.createElement('li');
carLi2.innerText = 'ODI'
carUl.appendChild(carLi2);

const carLi3 = document.createElement('li');
carLi3.innerText = 'TATA'
carUl.appendChild(carLi3);




carSection.appendChild(carUl);
carMainSection2.appendChild(carSection);


// set inner Html Directly

const sectionDressMain = document.getElementById('main-section');
const sectionDress = document.createElement("section")

sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
     <li>T-srirt</li>
     <li>srirt</li>
     <li>t-srirt</li>
     <li>Watch</li>
</ul>
`
carMainSection2.appendChild(sectionDress);
