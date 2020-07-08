const social = document.getElementById('social');
const share = document.getElementById('share');


share.addEventListener('click', function(e){
  e.preventDefault();
  
  if (social.classList.contains('active')){
    social.classList.remove('active');
    social.style.display = 'none';
  } else{
    social.classList.add('active');
    social.style.display = 'flex';
  }
})