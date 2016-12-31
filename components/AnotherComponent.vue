<template lang="html">
    <div>
        <p v-text="msg"></p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg : 'Children component from math'
        }
    }
}
</script>
