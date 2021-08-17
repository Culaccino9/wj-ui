<template>
    <ul class="mune">
        <slot>
            <menu-effect-item></menu-effect-item>
        </slot>
    </ul>
</template>

<script>
    export default {
        name:"wj-menu-effect"
    }
</script>

<style lang="less" scoped>
.mune{
	// transform: translate(-50%, -50%);
	margin: 0;
	padding: 0;
	display: flex;
}
</style>