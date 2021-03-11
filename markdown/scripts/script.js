$(function() {
    marked.setOptions({
        langPrefix: '' ,

        // highlight処理の実行
        highlight: function (code, lang) {
            return hljs.highlightAuto(code, [lang]).value
        }
    });

    $('#editor').keyup(function() {
        var src = $(this).val();

        var html = marked(src);

        $('#result').html(html);

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
});