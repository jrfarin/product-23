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

// ZOOM MOBILE
export const srcSliderActive = () => {
    const sliderImages = document.querySelectorAll('.swiperProduct img');

    sliderImages.forEach(function(source) {
        source.addEventListener('click', triggerZoom);
    });

    function triggerZoom() {
        const imageSource = this.src;
        //console.log(imageSource);
        
        const image = document.createElement('IMG');
        image.src = imageSource;

        const zoomContainer = document.createElement('DIV');
        zoomContainer.classList.add('zoomBox');
        zoomContainer.appendChild(image);;

        const mainContainer = document.querySelector('main');
        mainContainer.appendChild(zoomContainer); 
        
        const zoomBox = document.querySelector('.zoomBox');
        zoomBox.addEventListener('click', ()=> {
            zoomBox.remove();
        })
    }
}

// GALLERY DESKTOP
export const slideshowDk = () => {
    const srcThumbs = document.querySelectorAll('#imgThumbs img')

    srcThumbs.forEach((thumb) => {
        thumb.addEventListener('click', showSlideshowDesktop);
    });

    function showSlideshowDesktop() {

        const thumbSource = this.src;
        const mainImage = document.querySelector('#mainImage img');
        const regex = /xs./i
        const srcMainImg = thumbSource.replace(regex, 'xl.');
        mainImage.src = srcMainImg;

        let thumbnails = document.getElementsByClassName('thumbnail');
        for (let i = 0; i < thumbnails.length; i++) {
            thumbnails[i].className = thumbnails[i].className.replace(' active', '');
            this.classList.add('active');
        }
    }
}

// CLOSE PANELS
export const closePanels = () => {
    const btnClosePanel = document.querySelectorAll('#pdp .btn-close');

    btnClosePanel.forEach((btn) => {
        btn.addEventListener("click", hidePanel);
    })

    function hidePanel() {
        const panels = document.querySelectorAll(".collapse");
        panels.forEach((panel) => {
            panel.classList.remove('show');
        })
    }
}