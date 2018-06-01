<style>
    .pay-div{
        padding-top:20%;
        text-align:center;

    }
    .pay-div .confirm-div{
        padding-top:40%;
        padding-left:20%;
        padding-right:20%;
    }
    .notice-div{
        padding-top:30%;
        font-size:1rem;
    }
</style>
<template>
    <div>
       <div class="pay-div"> 
          <h1>支付成功</h1>
          <div class="notice-div">
            <p v-html="systemMsg.payMsg"></p>
          </div>
          <div class="confirm-div"><x-button @click.native="payConfirm()" type="primary">确定</x-button></div>
      </div>
    </div>

</template>

<script>
    import {XButton} from 'vux'
    import {mapGetters} from 'vuex'
    export default {
        components:{
            XButton
        },
        data () {
            return {
                
            }
        },
        beforeCreate(){

        },
        
        computed:{
            ...mapGetters(['systemMsg'])
        },
        methods: {
            payConfirm(){
                this.$router.push({path:'/order',query:{clearHistory:1}})

            }
        }
    }
</script>

<style>

</style>