document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        if (window.jQuery) {
            console.info("Compatibility Agent: jQuery is loaded.");
        } else {
            console.warn("Compatibility Agent: Cannot load jQuery. Reverting to version 1.12.4.");
            (function (document, tag) {
                var scriptTag = document.createElement(tag),
                    firstScriptTag = document.getElementsByTagName(tag)[0];
                scriptTag.src = 'asset/framework/legacy/jquery.1.12.4.js';
                firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
            }(document, 'script'));
        }
        if (typeof math !== 'undefined') {
            window.mathjsversionold = false;
            console.info("Compatibility Agent: math.js is loaded.");
        } else {
            console.warn("Compatibility Agent: Cannot load math.js. Reverting to version 1.5.2.");
            window.mathjsversionold = true;
            (function (document, tag) {
                var scriptTag = document.createElement(tag),
                    firstScriptTag = document.getElementsByTagName(tag)[0];
                scriptTag.src = 'asset/framework/legacy/math.1.5.2.js';
                firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
            }(document, 'script'));
        }
        if (window.mainsupportscriptloaded === true) {
            console.info("Compatibility Agent: Main component is loaded.");
        } else {
            console.warn("Compatibility Agent: Cannot load main component. Secondary support active.");
            (function (document, tag) {
                var scriptTag = document.createElement(tag),
                    firstScriptTag = document.getElementsByTagName(tag)[0];
                scriptTag.src = 'asset/script/secondary.js';
                firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
            }(document, 'script'));
        }
    }
}