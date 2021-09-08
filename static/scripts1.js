const listarr=["money heist","friends","brooklyn nine nine","big bang theory","two and a half men", "vampire diaries",  "suits","big mouth","breaking bad","elite"];
let j,k;
const movieplay=["project x", "captain marvel","dark knight rises"];
const tvplay=["Money heist", "Riverdale","stranger things"];

const Movieslist=["money heist","friends","brooklyn nine nine","big bang theory","two and a half men", "vampire diaries",  "suits","big mouth","breaking bad","elite","stranger things","riverdale","how i met your mother","special ops","game of thrones", "narcos","peaky blinders","the office","made in heaven","lucifer","never have i ever","you","the boys","prison break","true detective","the blacklist","dexter","the punisher","titans","sex education" ];
const list = document.getElementById("list");
const tvshow=document.getElementById("tvshow");
const movi=document.getElementById("movies");
const mlist = document.getElementById("movies-list");
var ite=document.getElementsByClassName('item');
const img1=document.getElementById("img1");
const imgs=document.getElementById("carousel");
const search=document.getElementById("search");
const search_bar=document.getElementById("search-bar");
const imgbox=document.getElementById("imgbox");
const username=document.getElementById("user-name");
console.log(ite)

let nam="kissing booth";
async function apicall(name){

    

        
    const det= await fetch(" http://www.omdbapi.com/?t="+encodeURI(name)+"&apikey=e7b6d097");
        const respdata= await det.json();
        console.log(respdata)
        // console.log(det)
        // console.log(name)
        
    };
    apicall(nam);
    const temp=[];
    async function carous(mov){
        for(k=0;k<mov.length;k++){
            const det= await fetch(" http://www.omdbapi.com/?t="+encodeURI(mov[k])+"&apikey=e7b6d097");
        const respdata= await det.json();
        temp.push(respdata);

        }
        img1.innerHTML=`<img src="${temp[0].Poster}" class="img">
         <img src="${temp[1].Poster}" class="img">
         <img src="${temp[2].Poster}" class="img">
        `;
        

    }
    let index=0;
    function run(){
        index++;
        if (index >2){
            index=0;
        }
        img1.style.transform= `translateX(${-index*290}px)`;

        
    };
    let index1=0;
    function run1(){
        index1++;
        if (index1 >6){
            index1=0;
        }
        list.style.transform= `translateY(${-index*250}px)`;

        
    };

    async function detsss(listarr){
        for (i=0;i<listarr.length;i++){
            const det= await fetch(" http://www.omdbapi.com/?t="+encodeURI(listarr[i])+"&apikey=e7b6d097");
        const respdata= await det.json();
        const listele=document.createElement("div");
        listele.classList.add("row");
        listele.innerHTML=`<img src="${respdata.Poster}" class="img2">`
            const listel=document.createElement('div');
            listel.classList.add("show-box");
            listel.classList.add("column");
            listel.innerHTML=`<span class="show">Name : ${respdata.Title}</span>
            <span class="show">Genre : ${respdata.Genre}</span>`;
            // listel.innerHTML=`<h2 class="show">Actors${respdata.Actors}</h2>`;

            listele.appendChild(listel);
            list.appendChild(listele);
            listele.addEventListener("click",
                ()=>{
                    // neww(respdata.Title)
                    if(sec1.classList!="hide"){
                        sec1.removeChild(document.getElementById("view"))
                        const newview=document.createElement("div");
                        newview.setAttribute('id','view');
                        sec1.appendChild(newview);
                        
                        // sec1.remove();
                        
                        
                    }
                    if(sec1.classList=="hide"){
                        if(imgbox.classList!="hide"){

                            imgbox.classList.add("hide");
                            // search_bar.classList.add("hide");
                        }

                        sec1.classList.remove("hide");
                    }
                    const movel=document.createElement('div');
                    movel.classList.add("mov");
                    movel.innerHTML=`<img src="${respdata.Poster}" alt="movie">`;
                    const movtext=document.createElement('div');
                    movtext.classList.add("box1");
                    movtext.innerHTML=`<h1>
                    ${respdata.Title}
                </h1>
               <h2>
                   OVERVIEW
               </h2>
               <p>${respdata.Plot}

               </p>
               
               <span class="movinfo">Duration : ${respdata.Runtime}</span><br>
               <span class="movinfo">Year : ${respdata.Year}</span><br>
               <span class="movinfo">Genre : ${respdata.Genre}</span><br>
               <span class="movinfo">Actors : ${respdata.Actors}</span><br>
               <span class="movinfo">Country : ${respdata.Country}</span><br>
               <span class="movinfo">Production : ${respdata.Production}</span><br>
               <span class="movinfo">IMDB RATINGS : ${respdata.imdbRating}</span>`;
               document.getElementById("view").appendChild(movel);
               document.getElementById("view").appendChild(movtext);
               

                }
            );
            
            
        };
    };



    async function movies(Movieslist){
        for (j=0;j<Movieslist.length;j++){
            // console.log(j);
            const det= await fetch(" http://www.omdbapi.com/?t="+encodeURI(Movieslist[j])+"&apikey=e7b6d097");
            // console.log(j);
        const respdata= await det.json();
        const listele=document.createElement("div");
        listele.classList.add("column");
        listele.classList.add("item");
        // listele.classList.add("item-j");
        // listele.id= "item-" + (n );
        listele.innerHTML=`<img src="${respdata.Poster}"  alt="" class="img3">`;
            const listel=document.createElement('div');
            listel.classList.add("item-content");
            listel.classList.add("column");
            listel.innerHTML=`<span class="show1"  > ${respdata.Title}</span>
            <span class="show1"> ${respdata.Year} . ${respdata.Runtime}</span>
            <span class="show1"> ${respdata.Genre}</span>
            `;
            listele.appendChild(listel);
            mlist.appendChild(listele);
            listele.addEventListener("click",
                ()=>{
                    // neww(respdata.Title)
                    if(sec1.classList!="hide"){
                        sec1.removeChild(document.getElementById("view"))
                        const newview=document.createElement("div");
                        newview.setAttribute('id','view');
                        sec1.appendChild(newview);
                        
                        // sec1.remove();
                        
                        
                    }
                    if(sec1.classList=="hide"){
                        if(imgbox.classList!="hide"){

                            imgbox.classList.add("hide");
                            // search_bar.classList.add("hide");
                        }

                        sec1.classList.remove("hide");
                    }
                    const movel=document.createElement('div');
                    movel.classList.add("mov");
                    movel.innerHTML=`<img src="${respdata.Poster}" alt="movie">`;
                    const movtext=document.createElement('div');
                    movtext.classList.add("box1");
                    movtext.innerHTML=`<h1>
                    ${respdata.Title}
                </h1>
               <h2>
                   OVERVIEW
               </h2>
               <p>${respdata.Plot}

               </p>
               
               <span class="movinfo">Duration : ${respdata.Runtime}</span><br>
               <span class="movinfo">Year : ${respdata.Year}</span><br>
               <span class="movinfo">Genre : ${respdata.Genre}</span><br>
               <span class="movinfo">Actors : ${respdata.Actors}</span><br>
               <span class="movinfo">Country : ${respdata.Country}</span><br>
               <span class="movinfo">Production : ${respdata.Production}</span><br>
               <span class="movinfo">IMDB RATINGS : ${respdata.imdbRating}</span>`;
               document.getElementById("view").appendChild(movel);
               document.getElementById("view").appendChild(movtext);
               

                }
            );
            
        };
    };
    function neww(x){
        // imgbox.classList.toggle("hide");
        console.log(x);    }
    //     var n;
    for (n=0, length = ite.length; n < length; n++) {
        console.log(ite[n]);
    }
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        document.getElementById("right").innerHTML=`
        <img src="${profile.getImageUrl()}" alt="" id="user-image" style="margin-top: 0px;"> <span id="user-name">${profile.getName()}</span>
        `;
        document.getElementById("dom1").classList.remove("hide");  
        document.getElementById("login").classList.add("hide");  
        
}



carous(tvplay);
detsss(listarr);
movies(Movieslist);
async function submitLoginForm(event){
    event.preventDefault();
    // apicall(event.target['search'].value);
    const det= await fetch(" http://www.omdbapi.com/?t="+encodeURI(event.target['search'].value)+"&apikey=e7b6d097");
    const respdata= await det.json();





    if(sec1.classList!="hide"){
        sec1.removeChild(document.getElementById("view"))
        const newview=document.createElement("div");
        newview.setAttribute('id','view');
        sec1.appendChild(newview);
        
        // sec1.remove();
        
        
    }
    if(sec1.classList=="hide"){
        if(imgbox.classList!="hide"){

            imgbox.classList.add("hide");
            
        }

        sec1.classList.remove("hide");
    }
    const movel=document.createElement('div');
    movel.classList.add("mov");
    movel.innerHTML=`<img src="${respdata.Poster}" alt="movie">`;
    const movtext=document.createElement('div');
    movtext.classList.add("box1");
    movtext.innerHTML=`<h1>
    ${respdata.Title}
</h1>
<h2>
   OVERVIEW
</h2>
<p>${respdata.Plot}

</p>

<span class="movinfo">Duration : ${respdata.Runtime}</span><br>
<span class="movinfo">Year : ${respdata.Year}</span><br>
<span class="movinfo">Genre : ${respdata.Genre}</span><br>
<span class="movinfo">Actors : ${respdata.Actors}</span><br>
<span class="movinfo">Country : ${respdata.Country}</span><br>
<span class="movinfo">Production : ${respdata.Production}</span><br>
<span class="movinfo">IMDB RATINGS : ${respdata.imdbRating}</span>`;
document.getElementById("view").appendChild(movel);
document.getElementById("view").appendChild(movtext);
    }
    // function submitLoginForm1(event){
    //     event.preventDefault();
    //     username.innerHTML=`<span id="user-name">${event.target["name"].value}</span>`;    
    //     console.log(event.target["name"].value);    
    //     }
    setInterval(run1,2500);
    setInterval(run,2500);