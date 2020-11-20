var demo = {};

demo.vars = {
    "now"   : dayjs(),
    "$reviewToday" : $("#review-today"),
    "clipboard" : new ClipboardJS('.clip'),
    "url": window.location.href,
    "$body" : $("body"),
}

demo.toggleDyslexiaFont = function(){
    // get current active font from localstorage,
    // toggle between dyslexia font and standard.
    currentTheme = localStorage.getItem('font');
    if (currentTheme === 'opendyslexic') {
        demo.vars.$body.addClass("opendyslexic");
    } else {
        demo.vars.$body.removeClass("opendyslexic");
    }
}

$(function() {
    // enable tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // add a pretty formated date string for review dates.
    demo.vars.$reviewToday.val("reviewed: " + demo.vars.now.format())
    // copy/paste utility for esyMDE
    if (window.hasOwnProperty("easyMDE")){
        console.log("yup")
        var mdClip = new ClipboardJS("#copyMarkdown", {
            text: function() {
                return easyMDE.value();;
            },
            container: document.getElementById('modal-markdown-editor')
        });
    }
    // Show modal on page load if query string is present
    if(demo.vars.url.indexOf('?modal=markdown') != -1){
        $('#modal-markdown-editor').modal('show');
    }
    // Set font-variables to localstorage
    var fontStyle = localStorage.getItem('font');
    if (!fontStyle) {
        localStorage.setItem('font', 'standard');
    };
    demo.toggleDyslexiaFont();
    $("#toggle-opendyslexia").on("click", function(e){
        // toggle font
        e.preventDefault();
        fontStyle = localStorage.getItem('font');
        if (fontStyle === 'standard') {
            fontStyle = 'opendyslexic';
        } else {
            fontStyle = 'standard';
        }
        localStorage.setItem('font', fontStyle);

        demo.toggleDyslexiaFont();
        return false;
    });
});

