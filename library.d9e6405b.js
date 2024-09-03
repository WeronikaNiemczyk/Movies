var e=globalThis,t={},a={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in a){var i=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,i.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=i),i.register;var r=i("f4Zwh");const o=e=>e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
            <div class="card">
              <a href="${e.poster_path}" data-movie-id="${e.id}">
                <img src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}"/>
              </a>
              <div class="info">
                <p class="info-item">
                  <b>${e.title}</b>
                </p>
                <div class="details">
                  <p class="info-item">
                    <b>${t} | ${e.release_date.slice(0,4)}</b>
                    <span class="modal-rates__vote">${e.vote_average.toFixed(1)}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </li>`}).join(""),d=(e,t)=>`
    <div>
      <img class="modal-image" src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.title}" />
    </div>
    <div class="modal-description">
      <h1>${e.title}</h1>
      <div class="modal-rates">
        <div class="modal-rates__titles">
          <p>Vote/Votes</p>
          <p>Popularity</p>
          <p>Original Title</p>
          <p>Genre</p>
        </div>
        <div class="modal-rates__results">
          <p><span class="modal-rates__vote">${e.vote_average.toFixed(1)}</span> / <span class="modal-rates__allvotes">${e.vote_count}</span></p>
          <p>${e.popularity}</p>
          <p>${e.original_title}</p>
          <p>${e.genres.map(e=>e.name).join(", ")}</p>
        </div>
      </div>
      <div class="modal-about">
        <dt>ABOUT</dt>
        <dd>${e.overview}</dd>
      </div>
      <div class="modal-button-window">
        <button class="button-standard modal-button add" data-movie-id="${t}" type="button" id="watched-btn">ADD TO WATCHED</button>
        <button class="button-standard modal-button modal-button__queue remove" data-movie-id="${t}" type="button" id="queue-button">REMOVE FROM QUEUE</button>
      </div>
    </div>`,s=document.querySelector(".modal-window"),l=document.querySelector(".inner-modal-content"),n=document.querySelector(".modal-overlay"),c=document.querySelector(".library-watched"),u=()=>{s.classList.add("hidden"),n.classList.remove("active")},m=async()=>{let e=document.querySelector(".library-queue"),t=localStorage.getItem("watched"),a=document.querySelector(".library-watched");if(e.style.display="none",a.style.display="flex",t&&JSON.parse(t).length>0){let e=JSON.parse(t);try{let t=await Promise.all(e.map(e=>(0,r.fetchMoviesByID)(e.id))),i=o(t);a.innerHTML=i}catch(e){console.error(e)}}else a.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},v=document.querySelector(".header-library-button-watched");v.addEventListener("click",m);const p=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,r.fetchMoviesByID)(e),a=d(e,t);l.innerHTML=a,s.classList.remove("hidden"),n.classList.add("active"),n.addEventListener("click",()=>{u()}),document.querySelector("#close-modal").addEventListener("click",()=>{u()})}catch(e){console.error("Error fetching movie details:",e)}}};c.addEventListener("click",p),document.addEventListener("keydown",e=>{"Escape"===e.key&&u()}),v.addEventListener("click",()=>{c.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'});var r=i("f4Zwh");const y=document.querySelector(".library-queue"),f=document.querySelector(".modal-window"),h=document.querySelector(".inner-modal-content"),b=document.querySelector(".modal-overlay"),g=()=>{f.classList.add("hidden"),b.classList.remove("active")},L=async()=>{let e=document.querySelector(".library-watched"),t=document.querySelector(".library-queue"),a=localStorage.getItem("queue");if(e.style.display="none",t.style.display="flex",a){let e=JSON.parse(a);try{let a=await Promise.all(e.map(e=>(0,r.fetchMoviesByID)(e.id))),i=o(a);t.innerHTML=i}catch(e){console.error(e)}}else t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},q=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,r.fetchMoviesByID)(e),a=d(t,e);h.innerHTML=a,f.classList.remove("hidden"),b.classList.add("active"),b.addEventListener("click",()=>{g()}),document.querySelector("#close-modal").addEventListener("click",()=>{g()})}catch(e){console.error("Error fetching movie details:",e)}}};y.addEventListener("click",q),document.addEventListener("keydown",e=>{"Escape"===e.key&&g()});const w=document.querySelector(".header-library-button-queue");w.addEventListener("click",L),w.addEventListener("click",()=>{y.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'}),i("7lTlQ"),i("kkREw");const E=document.querySelector(".header-library-button-watched"),S=document.querySelector(".header-library-button-queue");function _(e){"watched"===e?(E.classList.add("active"),S.classList.remove("active"),m()):"queued"===e&&(S.classList.add("active"),E.classList.remove("active"),L())}document.addEventListener("DOMContentLoaded",()=>{_("watched")}),E.addEventListener("click",()=>{_("watched")}),S.addEventListener("click",()=>{_("queued")}),0!=JSON.parse(localStorage.getItem("watched")).length&&(document.querySelector(".library-watched").style.display="flex",document.querySelector(".container-trevolta").style.display="none",document.addEventListener("DOMContentLoaded",m));
//# sourceMappingURL=library.d9e6405b.js.map
