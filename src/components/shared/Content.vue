<template>
    <div>
            <div class="main-content">
                <aside class="content-navigation">
                    <slot  name="nav"></slot>
                   
                </aside>
                <section class="content-info">
                   <slot name="info"></slot>
                </section>
            </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>