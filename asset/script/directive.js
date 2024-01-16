if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    document.write(
        '<script type="text/javascript" crossorigin="anonymous" referrerpolicy="no-referrer" src="asset/script/polyfill.js"><\/script>'
    );
    document.write(
        '<script type="text/javascript" crossorigin="anonymous" referrerpolicy="no-referrer" src="asset/script/iecore.js"><\/script>'
    );
} else {
    $("head").append($('<script type="text/javascript" crossorigin="anonymous" referrerpolicy="no-referrer" src="asset/framework/sweetalert2.js" integrity="sha256-fig09622MjUZxFIDxUgqwsKQeKNKCOwF0LpPNytcHY8="><\/script'));
    $.getScript("asset/script/core.js");
}