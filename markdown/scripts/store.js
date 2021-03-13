Vue.use(window["vue-js-modal"].default);

var code = new Vue ({
  el: '#code',
  data: {
  	newCode: '',
    code_list: [],
    modal_content: '',
    output_code: ''
  },
  methods: {
  	addCode: function(event) {
    	if(this.newCode == "") return;
        
        var num = this.code_list.length + 1;
    	var code = {
            title: num,
            content: this.newCode
        };

        this.code_list.push(code);
        this.newCode = "";
        $('#result').html("");
    },
    showCode: function(index) {

        this.newCode = this.code_list[index].content;
        
        //メソッド発火時にmarkedも発動するように設定！
        var src = this.newCode;
        var html = marked(src);
        $('#result').html(html);
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
        
    },
    closeCode : function () {
        this.$modal.hide('hello-world');
    },
  },
})