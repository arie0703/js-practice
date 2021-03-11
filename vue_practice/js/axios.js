var bitcoin = new Vue ({
  el: '#bitcoin',
  //jsonファイルのbpi部分を格納するプロパティの作成
  data: {
      bpi: null,
      hasError: false,
  },
  mounted: function() {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // responseにapiの戻り値が入る。
      .then(function(response){
          //bpiにresponseのbpi情報を格納
          this.bpi = response.data.bpi
      }.bind(this))
      .catch(function(error){
          console.log(error)
          this.hasError = true
      }.bind(this))
  },
  filters: {
      currencyDecimal(value) {
          //小数点第２位まで表示
          return value.toFixed(2)
      }
  }
})