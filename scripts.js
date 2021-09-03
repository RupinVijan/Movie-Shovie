const listarr=["Avengers:endgame", "gangs of wasseypur", "american pie", "conjuring"];
let j;

const Movieslist=["3 Idiots","Jab we met","shershaah","Avengers:endgame", "gangs of wasseypur", "american pie", "conjuring","soorma","The Shawshank Redemption","The Godfather ","12 Angry Men","The Dark Knight" ];
const list = document.getElementById("list");
const mlist = document.getElementById("movies-list");
const img1=document.getElementById("img1");
const imgs=document.getElementById("carousel");
let nam="kissing booth";
async function apicall(name){

        
    const det= await fetch(" http://www.omdbapi.com/?t="+encodeURI(name)+"&apikey=e7b6d097");
        const respdata= await det.json();
        // console.log(respdata)
        // console.log(det)
        // console.log(name)
        img1.innerHTML=`<img src="${respdata.Poster}" class="img">
        // <img src="${respdata.Poster}" class="img">
        // <img src="${respdata.Poster}" class="img">
        // `;
    };
    apicall(nam);
    let index=0;
    function run(){
        index++;
        if (index >2){
            index=0;
        }
        img1.style.transform= `translateX(${-index*290}px)`;

        
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
        listele.innerHTML=`<img src="${respdata.Poster}" alt="" class="img3">`;
            const listel=document.createElement('div');
            listel.classList.add("item-content");
            listel.classList.add("column");
            listel.innerHTML=`<span class="show1">Name : ${respdata.Title}</span>
            <span class="show1">Country : ${respdata.Country}</span>
            <span class="show1">Genre : ${respdata.Genre}</span>
            <span class="show1">Actors : ${respdata.Actors}</span>`;
            listele.appendChild(listel);
            mlist.appendChild(listele);
            
        };
    };



    detsss(listarr);
    movies(Movieslist);
    const search=document.getElementById("search");
    function submitLoginForm(event){
        event.preventDefault();
        apicall(event.target['search'].value);
        }
    setInterval(run,1500);