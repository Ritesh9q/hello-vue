<template lang="">
    <div>
      <form  @submit.prevent="submitUser">
        <input type="text" placeholder="Enter User Name" v-model="name" />
        <input type="number" placeholder="Enter User Age" v-model="age" />
        <input type="submit" value="Submit"/>
      </form>
    </div>
</template>
<script>
export default {
    name:'AddUser',
    emit:['add-user'],
    data(){
        return{
           name:'',
           age:''
        }
    },
    methods:{
        submitUser(){
            this.$emit('add-user',this.name,this.age)
        }
    }

}
</script>
<style lang="">
    
</style>