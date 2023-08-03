// nav menu close

const menu = document.querySelector(".menu"),
      close = document.querySelector(".close"),
      links = document.querySelector(".links")


menu.addEventListener("click", () => {
    links.style.right = 0;
    
    close.addEventListener("click", () => {
        links.style.right = "-650px";
    })
})



// all-courses

let allcourses = document.querySelector(".all-courses")

let isdraging = true, pagex, totalscrollLeft;

const draging = e => {
    if(isdraging) return;
    allcourses.scrollLeft = totalscrollLeft - (e.pageX - pagex);
}

const dragstart = e => {
    isdraging = false;
    pagex = e.pageX;
    totalscrollLeft = allcourses.scrollLeft;
}

allcourses.addEventListener("mousemove", draging);
allcourses.addEventListener("mousedown", dragstart);
document.addEventListener("mouseup", () => isdraging = true);

// all users

let arrowbtns = document.querySelectorAll(".btn-group button"),
    usersrate = document.querySelector(".users")

arrowbtns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        if(i === 1) {
        usersrate.scrollLeft += 150;
    }
    else {
        usersrate.scrollLeft -= 150;
        }
    })
})



// form input

let input = document.querySelectorAll(".inp input");



input.forEach(item => {
    item.addEventListener("click", () => {
        if(item) {
            item.nextElementSibling.style.top = "2px";
            item.nextElementSibling.style.background = "#000";
            return;
        }
    })
})