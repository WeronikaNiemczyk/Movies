var e=globalThis,t={},a={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in t)return t[e].exports;if(e in a){var d=a[e];delete a[e];var i={id:e,exports:{}};return t[e]=i,d.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=d),d.register;var i=d("f4Zwh");document.querySelector(".library-queue");const o=document.querySelector(".modal-window"),s=document.querySelector(".inner-modal-content"),r=document.querySelector(".modal-overlay"),l=document.querySelector(".library-watched"),n=()=>{o.classList.add("hidden"),r.classList.remove("active")},c=async()=>{let e=document.querySelector(".library-queue"),t=localStorage.getItem("watched"),a=document.querySelector(".library-watched");e.style.display="none",a.style.display="flex",t&&JSON.parse(t).length>0?Promise.all(JSON.parse(t).map(e=>(0,i.fetchMoviesByID)(e.id))).then(e=>{let t=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
                    <span class="modal-rates__vote">${e.vote_average}</span>
                      </p>
                    
                  </div>
                </div>
              </div>
            </li>`}).join("");a.innerHTML=t}).catch(e=>console.error(e)):a.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},u=document.querySelector(".header-library-button-watched");u.addEventListener("click",c);const m=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,i.fetchMoviesByID)(e),a=`
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
            <p><span class="modal-rates__vote">${t.vote_average}</span> / <span class="modal-rates__allvotes">${t.vote_count}</span></p>
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
          <button class="button-standard modal-button remove" data-movie-id="${e}" type="button" class="add-to-watched" id="watched-btn">REMOVE FROM WATCHED</button>
          <button class="button-standard modal-button modal-button__queue add" data-movie-id="${e}" type="button" class="add-to-queue" id="queue-button">ADD TO QUEUE</button>
        </div>
      </div>`;s.innerHTML=a,o.classList.remove("hidden"),r.classList.add("active"),r.addEventListener("click",()=>{n()}),document.querySelector("#close-modal").addEventListener("click",()=>{n()})}catch(e){console.error("Error fetching movie details:",e)}}};l.addEventListener("click",m),document.addEventListener("keydown",e=>{"Escape"===e.key&&n()}),u.addEventListener("click",()=>{l.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'});var i=d("f4Zwh");document.querySelector(".library-watched");const p=document.querySelector(".library-queue"),v=document.querySelector(".modal-window"),y=document.querySelector(".inner-modal-content"),b=document.querySelector(".modal-overlay"),h=()=>{v.classList.add("hidden"),b.classList.remove("active")},g=async()=>{let e=document.querySelector(".library-watched"),t=document.querySelector(".library-queue"),a=localStorage.getItem("queue");e.style.display="none",t.style.display="flex",a?Promise.all(JSON.parse(a).map(e=>(0,i.fetchMoviesByID)(e.id))).then(e=>{let a=e.map(e=>{let t=e.genres.map(e=>e.name).join(", ");return`<li class="movie-card">
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
                    <span class="modal-rates__vote">${e.vote_average}</span>
                  </p>
                  
                </div>
              </div>
            </div>
          </li>`}).join("");t.innerHTML=a}).catch(e=>console.error(e)):t.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'},q=async e=>{e.preventDefault();let t=e.target.closest("a");if(t){let e=t.dataset.movieId;try{let t=await (0,i.fetchMoviesByID)(e),a=`
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
            <p><span class="modal-rates__vote">${t.vote_average}</span> / <span class="modal-rates__allvotes">${t.vote_count}</span></p>
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
          <button class="button-standard modal-button modal-button__queue remove" data-movie-id="${e}" type="button" class="add-to-queue"  id="queue-button">REMOVE FROM QUEUE</button>
        </div>
      </div>`;y.innerHTML=a,v.classList.remove("hidden"),b.classList.add("active"),b.addEventListener("click",()=>{h()}),document.querySelector("#close-modal").addEventListener("click",()=>{h()})}catch(e){console.error("Error fetching movie details:",e)}}};p.addEventListener("click",q),document.addEventListener("keydown",e=>{"Escape"===e.key&&h()});const _=document.querySelector(".header-library-button-queue");_.addEventListener("click",g),_.addEventListener("click",()=>{p.innerHTML='<img src="https://i.pinimg.com/originals/4a/06/ef/4a06efb5a2f39feaa2f81b9f3d179a94.gif"/>'}),d("7lTlQ"),d("kkREw"),d("f4Zwh");const w=document.querySelector(".header-library-button-watched"),L=document.querySelector(".header-library-button-queue");function $(e){document.querySelector(".library-watched"),document.querySelector(".library-queue"),"watched"===e?(w.classList.add("active"),L.classList.remove("active"),c()):"queued"===e&&(L.classList.add("active"),w.classList.remove("active"),g())}document.addEventListener("DOMContentLoaded",()=>{$("watched")}),w.addEventListener("click",()=>{$("watched")}),L.addEventListener("click",()=>{$("queued")}),f;const E=localStorage.getItem("watched");0!=JSON.parse(E).length&&(document.querySelector(".library-watched").style.display="flex",document.querySelector(".container-trevolta").style.display="none",document.addEventListener("DOMContentLoaded",c)),console.log(JSON.parse(E).length);
//# sourceMappingURL=library.f5e27c08.js.map
