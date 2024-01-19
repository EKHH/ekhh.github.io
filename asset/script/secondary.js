console.warn("Compatibility Agent: Feature support for the current client may be partial or unavailable. Compatibility mode is enabled.");
var nofocusmouseaway;
window.inactive_timer_active = false;
var input = $('textarea[type="text"]');
var container = $('.primary-container');

function reloadtextarea() {
    $("textarea").trigger("input");
    console.info("Compatibility Agent: Input triggered manually to reload area spacing.");
}

function solveinput() {
    input.blur();
    container.fadeOut(200);
    setTimeout(function () {
        if (window.mathjsversionold === true) {
            input.val(math.eval(input.val()));
        } else {
            input.val(math.evaluate(input.val()));
        }
    }, 250);
    setTimeout(function () {
        container.fadeIn(200);
        reloadtextarea();
        console.info("Interaction Handler: Input solved.");
    }, 300);
}

function clearinput() {
    input.blur();
    container.fadeOut(200);
    setTimeout(function () {
        input.val("");
    }, 250);
    setTimeout(function () {
        container.fadeIn(200);
        reloadtextarea()
        console.info("Interaction Handler: Key detected. Input cleared.");
    }, 300);
}

function resetAll() {
    console.group();
    console.warn("Interaction Handler: Full reset initiated.");
    var theCookies = document.cookie.split(';');
    for (var i = 1; i <= theCookies.length; i++) {
        var acookie = theCookies[i - 1];
        var cookieArr = acookie.split('=');
        console.log(cookieArr[0]);
        document.cookie = cookieArr[0] + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    console.warn("Interaction Handler: All cookies removed.");

    window.localStorage.clear();
    console.warn("Interaction Handler: localStorage cleared.");
    window.sessionStorage.clear();
    console.warn("Interaction Handler: sessionStorage cleared.");

    console.info("Interaction Handler: Log clear initiated.");
    console.API;
    if (typeof console._commandLineAPI !== 'undefined') {
        console.API = console._commandLineAPI;
    } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI;
    } else if (typeof console.clear !== 'undefined') {
        console.API = console;
    }
    console.API.clear();
    console.groupEnd();
    console.info("Interaction Handler: Reload initiated.");
    window.location.reload();
}

if (!Date.now) {
    Date.now = function () {
        return new Date().getTime();
    }
}

$(document).ready(function () {
    console.info("Compatibility Agent: Elements loaded and ready. (E" + Date.now() + ")");
    $(".containheader").hide();
    input.blur();
    reloadtextarea();
});

$('body').on('keydown', function () {
    if (!input.is(':focus')) {
        reloadtextarea();
        input.focus();
        console.info("Interaction Handler: Interaction detected. Input focused.");
        window.clearTimeout(nofocusmouseaway);
        console.info("Compatibility Agent: Interaction detected. Inactive timer cleared.");
    }
});

$(document).keypress(function (e) {
    if (window.inactive_timer_active) {
        window.clearTimeout(nofocusmouseaway);
        window.inactive_timer_active = false;
        console.info("Interaction Handler: Key active. Inactive timer cleared.");
    }
    if (e.keyCode == 13 || e.which == '13') {
        e.preventDefault();
        solveinput();
    }
});

$(document).keyup(function (e) {
    if (e.key === "Escape") {
        clearinput();
    }
});

$("textarea").each(function () {
    this.setAttribute("style", "height:" + (this.scrollHeight) + "px;");
}).on("input", function () {
    var orgheight = this.style.height;
    this.style.height = 0;
    this.style.height = Number(this.scrollHeight) + 10 + "px";
    if (this.style.height !== orgheight) {
        console.info(
            "Compatibility Agent: Input threshold reached or differs from area height. Area height resized and set to " +
            this.style.height + ".");
    }
});

$(window).on('resize', function () {
    input.blur();
    console.info("Compatibility Agent: Window resize detected. Input focus is off.");
    reloadtextarea();
    console.info(
        "Compatibility Agent: Window resize detected. Input triggered manually to reload area spacing."
    );
});

input.on({
    mouseenter: function () {
        window.clearTimeout(nofocusmouseaway);
        console.info("Compatibility Agent: Hover detected. Inactive timer cleared.");
        input.focus();
        console.info("Interaction Handler: Hover detected. Input focused.");
    },
    mouseleave: function () {
        window.inactive_timer_active = true;
        window.nofocusmouseaway = setTimeout(function () {
            input.blur();
            console.info("Interaction Handler: Hover inactive. Input focus is off.");
        }, 500);
        console.info("Interaction Handler: Hover away. Inactive timer set.");
    }
});

input.click(function () {
    window.clearTimeout(nofocusmouseaway);
    console.info("Compatibility Agent: Click detected. Inactive timer cleared.");
    input.focus();
});

if (window.addEventListener) {
    window.addEventListener("error", function (e) {
        alert(e.error.message);
        return false;
     })
     console.info("Compatibility Agent: Secondary error handler registered.");
} else {
    console.warn("Compatibility Agent: Error handling is not supported.");
}