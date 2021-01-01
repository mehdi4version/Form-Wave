const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{label.innerHTML = label.innerText
  .split('').map((letter, idx)=>`<span  style="transition-delay:${idx * 50}ms">${letter}</span>`).join('')
   
})

console.log(labels)
// array with 2 elements. element 0 label with e,m,a,i,l and element 1 with p,a,s,s,w,o,r,d.

//map results in an array


