<template>
    <div>
        <h1>Store Page</h1>
    </div>
</template>

<script>
import {useStore} from '../store/auth'

export default {
    name: 'MiniposStore',

    setup(){
        const store = useStore()
        return {store}
    },

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>