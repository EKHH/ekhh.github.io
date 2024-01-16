var nofocusmouseaway;
window.inactive_timer_active = false;
var input = $('textarea[type="text"]');
var container = $('.primary-container');
var keysscroll = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
};
var supportsPassive = false;
var wheelOpt = supportsPassive ? {
    passive: false
} : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

window.mobileAndTabletCheck = function () {
    var ismobilecheck = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) ismobilecheck = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return ismobilecheck;
};

function reloadtextarea() {
    $("textarea").trigger("input");
    console.info("Compatibility Agent: Input triggered manually to reload area spacing.");
}

function solveinput() {
    input.blur();
    container.fadeOut(200);
    setTimeout(function () {
        input.val(math.evaluate(input.val()));
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

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keysscroll[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () {
            supportsPassive = true;
        }
    }));
} catch (e) {}

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener('touchmove', preventDefault, wheelOpt);
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    console.warn("Interaction Handler: Scrolling has been temporarily disabled.");
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    console.info("Interaction Handler: Scrolling is allowed.");
}

function resetAll() {
    console.group();
    console.warn("Interaction Handler: Full reset initiated.");
    disableScroll();
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

function handleError(evt) {
    if (evt.message) {
        var errordisplayeventmessage = evt.message.split(":");
        errordisplayeventmessage.shift();
        errordisplayeventmessage = errordisplayeventmessage.join(":");
        Toast.fire({
            icon: "warning",
            title: "ERROR",
            text: errordisplayeventmessage
        });
    } else {
        Toast.fire({
            icon: "error",
            title: evt.type,
            text: (evt.srcElement || evt.target)
        });
    }
}

if (!Date.now) {
    Date.now = function () {
        return new Date().getTime();
    }
}

$(document).ready(function () {
    console.info("Compatibility Agent: Elements loaded and ready. (E" + Date.now() + ")");
    if (mobileAndTabletCheck()) {
        console.warn("Compatibility Agent: Feature support for the current client may be partial or unavailable.");
        $("textarea").css({
            "font-size": "100%"
        });
        $(".containheader").hide();
        console.info("Compatibility Agent: Font size changed to match the device type.");
        $(".isFade").removeClass("isFade");
        console.warn("Compatibility Agent: Container animation is disabled.");
        if ((localStorage.getItem("compatibilitycheck")) !== 'false') {
            $('.primary-container').hide();
            Swal.fire({
                title: "Warning",
                text: "Your device is not compatible. Some features may be unavailable.",
                icon: "warning",
                showCancelButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                backdrop: false,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Proceed"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem("compatibilitycheck", false);
                    console.warn("Interaction Handler: Key value set. Compatibility issues will be ignored in all future instances.");
                    $('.primary-container').show();
                    input.blur();
                    reloadtextarea();
                }
            });
        } else {
            console.warn("Compatibility Agent: User alert has been overridden due to stored value.");
        }
    }
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

window.addEventListener('resize', function (event) {
    input.blur();
    console.info("Compatibility Agent: Window resize detected. Input focus is off.");
    reloadtextarea();
    console.info(
        "Compatibility Agent: Window resize detected. Input triggered manually to reload area spacing."
    );
}, true);

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

window.addEventListener("error", handleError, true);
var Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: false,
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
    }
});