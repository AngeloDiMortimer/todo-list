(()=>{"use strict";class e{constructor(e,t,o,d){this.title=e,this.details=t,this.date=o,this.priority=d}}const t=(e,t)=>{e.classList.remove("active"),t.classList.remove("active")};(()=>{document.getElementById("main");const o=document.getElementById("new-todo"),d=document.getElementById("overlay-add"),n=document.getElementById("overlay-bg"),c=document.getElementById("todo-form"),l=document.getElementById("close-modal"),s=document.getElementById("todo-submit");o.addEventListener("click",(e=>{((e,t,o)=>{o.reset(),e.classList.add("active"),t.classList.add("active")})(d,n,c)})),n.addEventListener("click",(e=>{t(d,n)})),l.addEventListener("click",(e=>{t(d,n)})),s.addEventListener("click",(t=>{(()=>{let t=(()=>{const t=document.getElementById("new-todo-title").value,o=document.getElementById("new-todo-details").value,d=document.getElementById("new-todo-date").value,n=document.querySelector('input[name="create-new-priority"]:checked').value;return new e(t,o,d,n)})();console.log(t.title),console.log(t.details),console.log(t.date),console.log(t.priority)})()}))})()})();