if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    document.write(
        '<script type="text/javascript" crossorigin="anonymous" referrerpolicy="no-referrer" src="asset/script/polyfill.js"><\/script>'
    );
    document.write(
        '<script type="text/javascript" crossorigin="anonymous" referrerpolicy="no-referrer" src="asset/script/iecore.js"><\/script>'
    );
} else {
    (function ($) {
        var import_js_imported = [];
        $.extend(true, {
            import_js: function (script) {
                var found = false;
                for (var i = 0; i < import_js_imported.length; i++)
                    if (import_js_imported[i] == script) {
                        found = true;
                        break;
                    }

                if (found == false) {
                    $("head").append($('<script><\/script').attr('src', script));
                    import_js_imported.push(script);
                }
            }
        });
    })(jQuery);
    $.import_js("asset/framework/sweetalert2.js");
    $.getScript("asset/script/core.js");
}