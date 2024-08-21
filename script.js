// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const sections = document.querySelectorAll('.section');

const options = {
    root: null,
    threshold: 0.1,
};

document.addEventListener('DOMContentLoaded', function() {
    const showMoreBtn = document.getElementById('show-more');
    const hiddenPosts = document.querySelector('.hidden-posts');

    showMoreBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        hiddenPosts.style.display = hiddenPosts.style.display === 'none' ? 'block' : 'none';
        showMoreBtn.textContent = hiddenPosts.style.display === 'none' ? 'Read More' : 'Show Less';
    });
});

