(function(){
    document.write = '';
    
    var scripts = [
        "file:///home/ren/workspace/web/guardian/guardian/dist/inline.bundle.js",
        "file:///home/ren/workspace/web/guardian/guardian/dist/polyfills.bundle.js",
        "file:///home/ren/workspace/web/guardian/guardian/dist/main.bundle.js"
    ]

    var angularAppElement = document.createElement('app-root');
    document.body.appendChild(angularAppElement);
    
    for (var i = 0; i < scripts.length; i++){
        var s = document.createElement('script');
        s.src = scripts[i];
        document.body.appendChild(s);
    }
})()
