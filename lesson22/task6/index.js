const single = document.querySelector('.single-use-btn');

const cons = () => {
  console.log('clicked')
  single.removeEventListener('click', cons)
}

single.addEventListener('click', cons)

