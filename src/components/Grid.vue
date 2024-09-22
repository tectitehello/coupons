<script setup lang="ts">
const props = defineProps({
    coupon:{
        expiry:Number
    }
})
</script>

<template>
        <table>
            <thead>
                <tr>
                    <th>Date Added</th>
                    <th>Expiration</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>{{ props.coupon.expiry}}</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
</template>

<style scoped>
table {
    width: 100%;
    font-size: 1.25rem;
}
</style>
