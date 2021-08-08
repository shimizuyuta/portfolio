<template>
  <div>
<p>aas</p>
<button @click="aaa()">ss2</button>
<button @click="getData()">ssss1</button>
<p>{{hello}}</p>
<p>{{word}}</p>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data:function(){
     return {
       hello:'',
       word:'',
     }
  },
  methods:{
    getData() {
        axios.get('/api/about')
        .then(res => {
          //リクエスト成功時
          console.log('resssssssss',res)
          this.word = res.data
        })
        .catch(err => {
          //リクエスト失敗時
        })
      },
    async aaa(){
      console.log('aaaa')
       const data = await axios.get('api/about')
       console.log(data)
       this.hello = data.data
    }
  }
}
</script>
