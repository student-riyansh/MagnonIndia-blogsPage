
        document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');

    let timeoutId;

    function showSidebar() {
        sidebar.classList.add('show');
        if (timeoutId) clearTimeout(timeoutId);
    }

    function hideSidebar() {
        timeoutId = setTimeout(() => {
            sidebar.classList.remove('show');
         } , 2000); 
    }



    
    window.addEventListener('scroll', showSidebar);

   
    sidebar.addEventListener('mouseover', showSidebar);

 
    window.addEventListener('mousemove', showSidebar); 
    sidebar.addEventListener('mouseout', hideSidebar); 

  
    hideSidebar();
});
