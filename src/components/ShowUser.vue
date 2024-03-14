<template lang="">
    <div>
        <h5>Name:{{userName}}</h5>
        <h5>Age:{{userAge}}</h5>
    </div>
</template>
<script>
export default {
    name:'ShowUser',
    props:{
       userName:{
            type:String,
            required:true
        },
        userAge:{ 
            type:Number,
            required:true
        }
    }
}
</script>
<style lang="">
    
</style>