<template>
  <div class="notification is-link" style="width:260px;">
    <p class="subtitle is-5">{{ $t("msg.info.spendable") }}:</p>
    <p class="title" v-bind:class="{'is-2':!smallTitle, 'is-4':smallTitle}">{{spendable}} ☍</p>
    <p>{{ $t("msg.info.total") }}: {{total}} ☍</p> 
    <p>{{ $t("msg.unconfirmed") }}: {{unconfirmed}} ☍</p>
    <p>{{ $t("msg.info.unfinalization") }}: {{unfinalization}} ☍</p>
    <p v-if="immature>0">{{ $t("msg.info.immature") }}: {{immature}} ☍</p>
    <p>{{ $t("msg.locked") }}: {{locked}} ☍</p>
  </div>
</template>

<script>
  import { messageBus } from '@/messagebus'

  export default {
    name: 'summary-info',
    data(){
      return {
        spendable: 0,
        total: 0,
        unconfirmed: 0,
        unfinalization: 0,
        immature: 0,
        locked: 0,
        smallTitle: false
      }
    },

    mounted () {
      this.getSummaryinfo()
    },
    created () {
      messageBus.$on('update', (showloading=true)=>this.getSummaryinfo(showloading))
    },
    methods: {
      getSummaryinfo: function(showloading=true) {
        this.$walletServiceV3.getSummaryInfo(true, 10)
          .then( (res) => {
            //console.log('getSummaryInfo return:' + JSON.stringify(res))
            let data = res.result.Ok
            this.spendable = data[1]['amount_currently_spendable']/1000000
            this.total = data[1]['total']/1000000
            this.unconfirmed = data[1]['amount_awaiting_confirmation']/1000000
            this.locked = data[1]['amount_locked']/1000000
            this.unfinalization = data[1]['amount_awaiting_finalization']/1000000
            this.immature = data[1]['amount_immature']/1000000
            this.$dbService.setSpendable(this.spendable)

            if(this.spendable.toString().length > 6)this.smallTitle=true
          }).catch((error) => {
            this.$log.error('getSummaryinfo error:' + error)
            if (error.response) {   
              let resp = error.response      
              this.$log.error(`resp.data:${resp.data}; status:${resp.status};headers:${resp.headers}`)
            }
          }).finally(()=> {
            messageBus.$emit('loaded')
          })       
      }
    }
  }
</script>

<style>
</style>
