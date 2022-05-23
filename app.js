let body = $("body");
let wrong = false;
let clicked = false;
let transition = false;

setTimeout(function () {
    wrong = true;

    if (wrong) {
        body.addClass("wrong");
        setTimeout(function () {
            body.removeClass("wrong")
        }, 31.25);
    };
}, 3000);

let btn = $(".btn");

setTimeout(function () {
    clicked = true;

    if (clicked) {
        btn.addClass("click");
        setTimeout(function () {
            btn.removeClass("click")
        }, 31.25);
    };
}, 6000);

setTimeout(function () {
    transition = true;

    if (transition) {
        btn.addClass("transition");
        setTimeout(function () {
            btn.removeClass("transition");
        }, 62.5);
    }
}, 9000);