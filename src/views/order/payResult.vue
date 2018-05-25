<style>
    .pay-div{
        padding-top:20%;
        text-align:center;

    }
    .pay-div .confirm-div{
        padding-top:80%;
        padding-left:20%;
        padding-right:20%;
    }
</style>
<template>
    <div>
       <div class="pay-div"> 
          <h1>支付成功</h1>
          <div class="confirm-div"><x-button @click.native="payConfirm()" type="primary">确定</x-button></div>
      </div>
    </div>

</template>

<script>
    import {XButton} from 'vux'
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
        mounted(){

        },
        methods: {
            payConfirm(){
                this.$router.push({path:'/order'})
            }
        }
    }
</script>

<style>

</style>