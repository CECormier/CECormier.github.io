const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxDm04mOwmKWSneyeChTBA2L7plG1yu7qDcuyKigMMlUdeSJtqeiiWUQpbvCAmnntTB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

const carousel = function () {
    $('.owl-carousel').owlCarousel({
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 35,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        items: 1,
        responsive: {}
    });
};
carousel();