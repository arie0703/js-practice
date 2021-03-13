$(function() {

    // marked.jsの設定
    marked.setOptions({
        langPrefix: '' ,
        // XSS対策
        sanitize: true,
        // highlight処理の実行
        highlight: function (code, lang) {
            return hljs.highlightAuto(code, [lang]).value
        }
        
    });

    $('#editor').keyup(function() {
        var src = $(this).val();

        var html = marked(src);

        $('#result').html(html);
        //highlight
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });


    //goボタン押した時の処理
    let button = document.getElementById('add_button');
    button.onclick = function addBackquotes(){
        let editor = document.getElementById('editor');
        let language = document.getElementById('language');
        let newLine = "\n".repeat(3);

        editor.value = "```" + language.value + newLine + "```";
        //resultにも反映
        $('#result').html(marked(editor.value));
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
        language.value = "";

    }

    //textareaでtabキーによるインデント入力を可能にする
    function OnTabKey( e, obj ){

        // タブキーが押された時以外は即リターン
        if( e.keyCode!=9 ){ return; }
    
        // タブキーを押したときのデフォルトの挙動を止める
        e.preventDefault();
    
        // 現在のカーソルの位置と、カーソルの左右の文字列を取得しておく
        var cursorPosition = obj.selectionStart;
        var cursorLeft     = obj.value.substr( 0, cursorPosition );
        var cursorRight    = obj.value.substr( cursorPosition, obj.value.length );
    
        // テキストエリアの中身を、
        // 「取得しておいたカーソルの左側」+「タブ」+「取得しておいたカーソルの右側」
        // という状態にする。
        obj.value = cursorLeft+"\t"+cursorRight;
    
        // カーソルの位置を入力したタブの後ろにする
        obj.selectionEnd = cursorPosition+1;
    }
    
    // 対象となるテキストエリアにonkeydownイベントを追加する
    document.getElementById( "editor" ).onkeydown = function( e ){ OnTabKey( e, this ); }
});