function toggleTheme() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const logo = document.getElementById('logo-img');
    const search = document.getElementById('search');
    const footer = document.querySelector('footer');
    const divsPost = document.querySelectorAll('.post');
    const isDarkTheme = document.body.classList.contains('dark');

    body.classList.toggle('dark');
    header.classList.toggle('preto'); 
    footer.classList.toggle('footer-dark');

    if (isDarkTheme) {
        logo.src = 'logo.png';
        divsPost.forEach((div) => {
            div.classList.remove('post-dark');
          });
          search.classList.remove('search-bar-dark');
          
      } else {
        logo.src = 'logo-dark.png'; 
        divsPost.forEach((div) => {
            div.classList.add('post-dark');
          });
          search.classList.toggle('search-bar-dark');
      }
  }
  
