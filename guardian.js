(function() {
    document.write = '';
    var url = "https://raw.githubusercontent.com/rengare/codeeuropa_angular/master/";
    // var url = "file:///home/ren/workspace/web/guardian/guardian/dist/";
    inline.bundle.js
    var scripts = [
        url + "inline.bundle.js",
        url + "polyfills.bundle.js",
        url + "main.bundle.js"
    ]

    var angularAppElement = document.createElement('app-root');
    document.body.appendChild(angularAppElement);

    for (var i = 0; i < scripts.length; i++) {
        var s = document.createElement('script');
        s.src = scripts[i];
        document.body.appendChild(s);
    }
})()