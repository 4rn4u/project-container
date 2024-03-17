function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('small');
  
    const content = document.querySelector('.main-content');
    if (sidebar.classList.contains('small')) {
      content.style.marginLeft = '80px';
    } else {
      content.style.marginLeft = '240px';
    }
  }