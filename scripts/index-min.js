function activeButton(t){const e=$(".filter-btn");for(let t=0;t<e.length;t++)e[t].classList.remove("active");$("#"+t)[0].classList.add("active")}function filterStore(t){const e=$(".store-item");for(let t=0;t<e.length;t++)e[t].classList.add("animated"),setTimeout(()=>{e[t].classList.add("zoomOut")},0),setTimeout(()=>{e[t].classList.replace("zoomOut","zoomIn")},500);if("all"===t)for(let t=0;t<e.length;t++)setTimeout(()=>{e[t].classList.remove("hide")},500);else for(let i=0;i<e.length;i++)e[i].dataset.item.split(" ").indexOf(t)>=0?setTimeout(()=>{e[i].classList.remove("hide")},500):setTimeout(()=>{e[i].classList.add("hide")},500)}$(document).ready((function(){$(".filter-btn").click((function(){activeButton($(this).attr("id")),filterStore($(this).attr("id"))}))}));