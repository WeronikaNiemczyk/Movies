let e;var t=globalThis,o={},a={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=n),n.register,n("f4Zwh");var i=(n("f4Zwh"),n("f4Zwh"));const l=document.querySelector(".modal-window"),s=document.querySelector(".inner-modal-content"),r=document.querySelector(".modal-overlay"),d=()=>{l.classList.add("hidden"),r.classList.remove("active")},c=async e=>{try{let t=await (0,i.fetchMoviesByID)(e),o=`
      <div>
        <img class="modal-image" src="https://image.tmdb.org/t/p/w500/${t.poster_path}" alt="${t.title}" />
      </div>
      <div class="modal-description">
        <h1>${t.title}</h1>
        <div class="modal-rates">
          <div class="modal-rates__titles">
            <p>Vote/Votes</p>
            <p>Popularity</p>
            <p>Original Title</p>
            <p>Genre</p>
          </div>
          <div class="modal-rates__results">
            <p><span class="modal-rates__vote">${t.vote_average.toFixed(1)}</span> / <span class="modal-rates__allvotes">${t.vote_count}</span></p>
            <p>${t.popularity}</p>
            <p>${t.original_title}</p>
            <p>${t.genres.map(e=>e.name).join(", ")}</p>
          </div>
        </div>
        <div class="modal-about">
          <dt>ABOUT</dt>
          <dd>${t.overview}</dd>
        </div>
        <div class="modal-button-window">
          <button class="button-standard modal-button add" data-movie-id="${e}" type="button" class="add-to-watched"  id="watched-btn">ADD TO WATCHED</button>
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${e}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>
    `;s.innerHTML=o,l.classList.remove("hidden"),r.classList.add("active"),r.addEventListener("click",()=>{d()}),document.querySelector("#close-modal").addEventListener("click",()=>{d()})}catch(e){console.error("Error fetching movie details:",e)}};var i=n("f4Zwh");const u=async e=>{let t=document.querySelector(".movie__list"),o=document.querySelector("#prevQuery"),a=document.querySelector("#nextQuery"),n=document.querySelector(".paginatorPopular"),l=document.querySelector(".paginatorQuery");o.style.display="none",a.style.display="none",function(e,t){let o,a="",n=-1,i=3;t>1&&(p.style.display="block"),t>3&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(a+='<li class="numb" onclick="goToPage(1)"><span>1</span></li><li class="dots"><span>...</span></li>'),n<1&&(n=1),i>100&&(i=100);for(let e=n;e<=i;e++)o=t===e?"active":"",a+=`<li class="numb ${o}" onclick="goToPage(${e})"><span>${e}</span></li>`;t<e-2&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(t<e-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="numb" onclick="goToPage(${e})"><span>${e}</span></li>`),t<e&&(y.style.display="block"),g.innerHTML=a}(100,1),l.style.display="none",n.style.display="flex";let s=e.results.map(async e=>{let t=(await (0,i.fetchMoviesByID)(e.id)).genres.map(e=>e.name).join(", ");return`
      <li class="movie-card">
        <div class="card">
          <a href="${e.poster_path}" data-movie-id="${e.id}">
            <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}" />
          </a>
          <div class="info">
            <p class="info-item">
              <b>${e.title}</b>
            </p>
            <div class="details">
              <p class="info-item">
                <b>${t} | ${e.release_date.slice(0,4)}</b>
              </p>
            </div>
          </div>
        </div>
      </li>`}),r=(await Promise.all(s)).join("");t.innerHTML=r},m=document.querySelector(".movie__list"),p=document.querySelector("#prevPopular"),y=document.querySelector("#nextPopular"),v=document.querySelector(".modal-window"),h=document.querySelector(".modal-overlay"),g=document.querySelector(".paginator-ul");console.log(g);let f=1;const w=()=>{v.classList.add("hidden"),h.classList.remove("active")};(0,i.fetchPopularMovies)(f).then(e=>u(e)).catch(e=>console.error(e)),m.addEventListener("click",async e=>{e.preventDefault();let t=e.target.closest("a");t&&c(t.dataset.movieId)}),document.addEventListener("keydown",e=>{"Escape"===e.key&&w()}),y.addEventListener("click",async()=>{try{f++;let e=await (0,i.fetchPopularMovies)(f);m.innerHTML="",u(e)}catch(e){console.error("Error fetching popular movies:",e)}}),p.addEventListener("click",async()=>{try{if(f>1){f--;let e=await (0,i.fetchPopularMovies)(f);m.innerHTML="",u(e)}}catch(e){console.error("Error fetching popular movies:",e)}}),window.goToPage=function(e){f=e,(0,i.fetchPopularMovies)(e).then(e=>{u(e),window.scrollTo({top:0,left:0,behavior:"smooth"})}).catch(e=>{console.error("Error fetching popular movies:",e)})},document.getElementById("openModal").addEventListener("click",function(){document.getElementById("studentModal").style.display="block",E(b)});let b=0;function E(e){let t=document.querySelectorAll(".student-card");t.forEach(e=>e.style.display="none"),t[e].style.display="flex"}document.addEventListener("keydown",function(e){"Escape"===e.key&&(document.getElementById("studentModal").style.display="none")}),E(b),document.addEventListener("click",function(e){e.target.matches(".modal-prev")?E(b=b-1<0?document.querySelectorAll(".student-card").length-1:b-1):e.target.matches(".modal-next")?E(b=(b+1)%document.querySelectorAll(".student-card").length):(e.target.matches(".btn-close")||e.target===document.getElementById("studentModal"))&&(document.getElementById("studentModal").style.display="none")}),n("7lTlQ"),n("kkREw");var $=n("lzX4I");const q=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],_=e=>{let t=document.querySelector("#prevQuery"),o=document.querySelector("#nextQuery"),a=document.querySelector(".paginatorPopular"),n=document.querySelector(".paginatorQuery");return t.style.display="none",o.style.display="none",n.style.display="flex",a.style.display="none",function(e,t){let o,a="",n=-1,i=3;t>1&&(M.style.display="block"),t>3&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(a+='<li class="numb" onclick="goToPageQ(1)"><span>1</span></li><li class="dots"><span>...</span></li>'),n<1&&(n=1),i>e&&(i=e);for(let e=n;e<=i;e++)o=t===e?"active":"",a+=`<li class="numb ${o}" onclick="goToPageQ(${e})"><span>${e}</span></li>`;t<e-2&&!(window.innerWidth>=320&&window.innerWidth<=767)&&(t<e-2&&(a+='<li class="dots"><span>...</span></li>'),a+=`<li class="numb" onclick="goToPageQ(${e})"><span>${e}</span></li>`),t<e&&(P.style.display="block"),1===e&&(Q.style.display="none"),x.innerHTML=a}(e.totalPages,1),e.results.map(({id:e,poster_path:t,original_title:o,genre_ids:a,release_date:n})=>{let i="";return i=a&&a.length>0?q.filter(({id:e})=>a.includes(e)).map(({name:e})=>e).join(", "):"Genre is not available",`
        <li class="movie-card">
          <div class="card">
            <a href="${t}" data-movie-id="${e}">
              <img src="${t?`https://image.tmdb.org/t/p/w500${t}`:"https://media.wired.com/photos/59326d5344db296121d6aee9/master/w_2240,c_limit/8552.gif"}" alt="${o}" />
            </a>
            <div class="info">
              <p class="info-item">
                <b>${o}</b>
              </p>
              <div class="details">
                <p class="info-item">
                  <b>${i} | ${n.slice(0,4)}</b>
                </p>
              </div>
            </div>
          </div>
        </li>`}).join("")},T=document.querySelector(".header-home-form"),L=document.querySelector(".movie__list");let S=1;const k=document.querySelector(".header-home-item");k.style.opacity="0";const M=document.querySelector("#prevQuery"),P=document.querySelector("#nextQuery"),Q=document.querySelector(".paginatorQuery"),x=document.querySelector(".paginator-ulq"),D=async(e,t)=>{let o=new URLSearchParams({api_key:"e7c930d9ee21da94f8fc3257d387eced",query:e,page:t}),a=await fetch(`https://api.themoviedb.org/3/search/movie?${o}`),n=await a.json();return{totalPages:n.total_pages,results:n.results}},H=async t=>{t.preventDefault(),e=t.target.elements.searchQuery.value.trim(),S=1,await D(e,S).then(t=>{if(""===e||t.results.length<=0)k.style.opacity="1";else{let e=_(t);L.innerHTML=e,k.style.opacity="0"}}).catch(e=>console.log(e)),T.reset()};function I(){document.getElementById("loader").style.display="flex"}function B(){document.getElementById("loader").style.display="none"}T.addEventListener("submit",H),P.addEventListener("click",async t=>{try{let t=await D(e,S+1);if(t.totalPages>=S+1){S++;let e=_(t);L.innerHTML=e}else($&&$.__esModule?$.default:$).Notify.info("You have reached the end of the search results.")}catch(e){console.error("Error fetching popular movies:",e)}}),M.addEventListener("click",async t=>{try{if(S>1){let t=await D(e,S-1);if(t.totalPages>=S-1){S--;let e=_(t);L.innerHTML=e}}}catch(e){console.error("Error fetching popular movies:",e)}}),window.goToPageQ=function(t){S=t,D(e,t).then(e=>{_(e),L.innerHTML=_(e),window.scrollTo({top:0,left:0,behavior:"smooth"})}).catch(e=>{console.error("Error fetching popular movies:",e)})},document.getElementById("searchForm").addEventListener("submit",function(e){e.preventDefault,I(),setTimeout(function(){B()},1e3)}),I(),setTimeout(function(){B()},1e3);
//# sourceMappingURL=index.262efe07.js.map
