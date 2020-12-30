
    const tom=document.createElement('img');
    tom.setAttribute('src','https://th.bing.com/th/id/OIP.lT-BL-XQj4hC7xDvXCqQ2AHaFj?pid=Api&rs=1')
    tom.setAttribute('style',' border-radius: 100%; height: 250px; width:250px; border-style: dashed; border-color: orange;')
    const tom_image=document.createElement('div');
    tom_image.setAttribute('style','display: flex; justify-content: center;  text-align: center; align-items: center; background-color: grey;')
    tom_image.append(tom);
    document.body.append(tom_image);

    const div_author=document.createElement('div');
    div_author.setAttribute('style','font-size: 40px;  background-color: yellow;  text-align: center  height: 50px; width: 300px;');
    div_author.innerHTML="BRIAN DUDEY";

    const div_image=document.createElement('div');
    div_image.setAttribute('style',' display: flex; justify-content: center; text-align: center;  background-color: grey; ' )
    div_image.append(div_author);
   document.body.append(div_image);
const div_header=document.createElement('div');
div_header.append(tom_image,div_author )
var add=document.createElement('h4');
add.setAttribute('style','display: flex;  justify-content: center;')
add.innerText="N. Damen Avenue, Chicago 99999 | 999-999-9999 | hello@kickresume.com | www.kickresume.com"
document.body.append(div_header, add)

     const hr=document.createElement('hr');
document.body.append(hr)

    const profile=document.createElement('img');
    profile.setAttribute('src','profile.png');
    const pr=document.createElement('h2');
    pr.innerText="Profile";
    
    const profile_div=document.createElement('div');
    profile_div.setAttribute('style',' display: flex; justify-content: flex-start;')
    profile_div.append(profile,pr);

    var  profile_span=document.createElement('span');
    profile_span.innerHTML="Innovative optimized solution seeker. Excited to be at the deployment phase of my new carrer as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate"


//Technical Skills
   const skills_img=document.createElement('img');
    skills_img.setAttribute('src','skill.png');
    const skills_pr=document.createElement('h2');
    skills_pr.innerText="Skills";
    const skills_div=document.createElement('div');
    skills_div.setAttribute('style',' display: flex; justify-content: flex-start;')
    skills_div.append(skills_img,skills_pr);

const tskills=document.createElement('h3');
tskills.innerHTML="Technical Skills"

const td1=document.createElement('td')
td1.innerHTML="<span>JavaScript</span>";
const td2=document.createElement('td');
td2.innerHTML='<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
const tr1=document.createElement('tr');
tr1.append(td1,td2);

const td3=document.createElement('td')
td3.innerHTML="<span>HTML</span>";
const td4=document.createElement('td');
td4.innerHTML='<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
const tr2=document.createElement('tr');
tr2.append(td3,td4);

const td5=document.createElement('td')
td5.innerHTML="<span>CSS</span>";
const td6=document.createElement('td');
td6.innerHTML='<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
const tr3=document.createElement('tr');
tr3.append(td5,td6);
const tbody1=document.createElement('tbody')
tbody1.append(tr1,tr2,tr3);
const table1=document.createElement('table');
table1.append(tbody1)

const askills=document.createElement('h3');
askills.innerHTML="Technical Skills"

const td7=document.createElement('td')
td7.innerHTML="<span>Editing</span>";
const td8=document.createElement('td');
td8.innerHTML='<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
const tr4=document.createElement('tr');
tr4.append(td7,td8)
const td9=document.createElement('td')
td9.innerHTML="<span>Project Management</span>";
const td10=document.createElement('td');
td10.innerHTML='<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
const tr5=document.createElement('tr');
tr5.append(td9,td10);

const td11=document.createElement('td')
td11.innerHTML="<span>CSS</span>";
const td12=document.createElement('td');
td12.innerHTML='<input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
const tr6=document.createElement('tr');
tr6.append(td11,td12);
const tbody2=document.createElement('tbody')
tbody2.append(tr4,tr5,tr6);
const table2=document.createElement('table');
table2.append(tbody2)


const work_img1=document.createElement('img');
    work_img1.setAttribute('src','work.png');
    const pr1=document.createElement('h2');
    pr1.innerText="Work Experience";
    
    const work1_div=document.createElement('div');
    work1_div.setAttribute('style',' display: flex; justify-content: flex-start;')
    work1_div.append(work_img1,pr1)

const b1=document.createElement('b');
b1.innerHTML="  <b>Community Relations Manager</b> &emsp;&emsp;&emsp;&emsp; <span>06/2011-01/2014</span><br>"

var work_span1=document.createElement('span');
work_span1.innerText="Gay & Lesbian Elder Housing, Los Angles";

var work1_ul=document.createElement('ul');
work1_ul.innerHTML="<li>Arranging presentations and pitch deck</li> <li>Designing a PR plan and establishing important focus points.</li>   <li>Designing, creating and managing content across multiple communication platforms.</li>        <li>Building releationships with media players.</li>"

var div_left=document.createElement('div');
div_left.setAttribute('style','float: left; width: 40%; height: 400px; padding: 25px')
div_left.append(profile_div,profile_span,skills_div,tskills,table1,askills,table2,work1_div,b1,work_span1,work1_ul)
document.body.append(div_left)



const work_img2=document.createElement('img');
    work_img2.setAttribute('src','work.png');
    const pr2=document.createElement('h2');
    pr2.innerText="Work Experience";
    
    const work2_div=document.createElement('div');
    work2_div.setAttribute('style',' display: flex; justify-content: flex-start;')
    work2_div.append(work_img2,pr2)

const b=document.createElement('b');
b.innerHTML="  <b>Community Relations Manager</b> &emsp;&emsp;&emsp;&emsp; <span>06/2011-01/2014</span><br>"

var work_span2=document.createElement('span');
work_span2.innerText="Gay & Lesbian Elder Housing, Los Angles";

var work_ul=document.createElement('ul');
work_ul.innerHTML="<li>Arranging presentations and pitch deck</li> <li>Designing a PR plan and establishing important focus points.</li>   <li>Designing, creating and managing content across multiple communication platforms.</li>        <li>Building releationships with media players.</li>"


//Education

const edu_img=document.createElement('img')
edu_img.setAttribute('src','edu.png')

const  edu_div=document.createElement('div');
edu_div.setAttribute('style','display: flex; justify-content: flex-start;')
edu_div.append(edu_img)
edu_div.innerHTML="<h2>Education</h2>"

var edu_b=document.createElement('span');
edu_b.innerHTML="<b>Engineering Immersion Program</b>&emsp;&emsp;&emsp;    <span>11/2018-06/2018</span><br>  <span>Thinkful, Chicago, IL</span> <br> <span>Project-focused intensive program with emphasis on Mongo, express, React, and JavaScript(MERN) technical stack.</span>"

var edu_ul=document.createElement('ul');
edu_ul.innerHTML='<ul>  <li> Developed a full-stack web application, "RenewU", using React that allows users to explore various aspects of meditation. Users progress is stored ona backend created using Node and MongoDB</li>       <li>Developed a language learning app, "Foodie Phnetics" using spaced repetition and a linked list data structure. react was used to create the front end components while Node and Mongo were used to create a backend that stores user data.   </li>       <li>Developed a concierge app, "Pley", for individuals looking for curated suggestions when visting a new place. React was used to develop the front end while inlcudes rela-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.</li> </ul>'

var edu_b2=document.createElement('span');
edu_b2.innerHTML=" <b>BA,English</b>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span>09/2001-09/2005</span><br><span>University of California, Los Angles.</span>"
document.body.append(edu_div,edu_b,edu_ul,edu_b2);

var div_right=document.createElement('div');
div_right.setAttribute('style','float: right; width: 40%; height: 400px; padding: 25px')
div_right.append(work2_div,b,work_span2,work_ul,edu_div,edu_b,edu_ul,edu_b2)
document.body.append(div_right)
