// WISHLIST ICONS
export const wishlistIcon = () => {
    const notWished = document.querySelectorAll('.notWished');
    const wished = document.querySelectorAll('.wished');

    notWished.forEach(function(item) {
        item.addEventListener('click', showWished);        
    });

    wished.forEach(function(item) {
        item.addEventListener('click', hideWished);       
    });
    
    function showWished(e) {
        e.preventDefault();
        console.log(this.parentElement);
        this.parentElement.querySelector('.wished').classList.remove("d-none");
    };

    function hideWished(e) {
        e.preventDefault();
        this.parentElement.querySelector('.wished').classList.add("d-none");
    };
}

// Toggle Class Active
export const toggleActiveClass = (e) => {
    const pillLabel = document.querySelectorAll('.pill-rounded');
    
    pillLabel.forEach(function(pill) {
        pill.addEventListener('click', pillActive);       
    });

    function pillActive() {
        this.classList.toggle('active')
    }  
}
