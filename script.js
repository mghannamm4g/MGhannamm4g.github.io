(()=>{
 const toggle=document.querySelector('.menu-toggle');
 const menu=document.querySelector('.nav-links');
 if(toggle && menu){
   const close=()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open')};
   toggle.addEventListener('click',()=>{const open=!menu.classList.contains('open');menu.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open));document.body.classList.toggle('menu-open',open)});
   menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
   document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 }
 const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
})();