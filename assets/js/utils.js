var demo = {};

demo.vars = {
    "now"   : dayjs(),
    "$reviewToday" : $("#review-today"),
    "clipboard" : new ClipboardJS('.clip'),
    "url": window.location.href
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
    if(demo.vars.url.indexOf('?modal=markdown') != -1){
        $('#modal-markdown-editor').modal('show');
    }
});

