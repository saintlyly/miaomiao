<template>
<div>
   <Headbar title="我的喵喵"/>
   <div id="content">
     <Login/>
   </div>
   <TabBar/>
</div>
 
</template>
<script>
import Headbar from '@/components/Headbar'
import TabBar from '@/components/TabBar'
import Login from '@/components/Login'
export default {
    name:'mine',
    components:{
    Headbar,TabBar,Login

    }
    
}
</script>

<style lang="scss" scoped>

</style>