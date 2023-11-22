window.addEventListener('scroll', function() {
    var topNav = document.getElementById('top_nav');
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition >= 1100) {
        topNav.style.top = '0';
    } else {
        topNav.style.top = '-50px'; /* 导航栏高度示例 */
    }
  });