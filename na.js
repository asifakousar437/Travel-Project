const activePage = window.location.pathname;
    const navLinks = document.querySelectorAll('.right-section a').
    forEach(link => {
        if(link.href.includes(`${activePage}`)){
            link.classList.add('active');
        }
    })