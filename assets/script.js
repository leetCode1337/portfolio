
// reveal on scroll
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// lightbox for images
const lb = document.createElement('div');
lb.className = 'lb';
lb.innerHTML = '<img alt="">';
document.body.appendChild(lb);
lb.addEventListener('click', ()=> lb.classList.remove('show'));
document.addEventListener('click', (e)=>{
  const t = e.target;
  if(t.tagName === 'IMG' && t.closest('figure')){
    lb.querySelector('img').src = t.src;
    lb.classList.add('show');
  }
});
