<template>
    <b-container class="mt-4">
        <h3 class="mb-3">Movimientos</h3>
        <b-button variant="primary" @click="fetch_movimientos">Actualizar movimientos</b-button>
        <b-button variant="info" @click="RESET_MOVIMIENTOS">Estado anterior</b-button>
        <b-table class="mt-3" small hover striped :items="movimientos"></b-table>
    </b-container>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'Movimientos',
        methods: {
            ...mapActions(['fetch_movimientos']),
            ...mapMutations(['RESET_MOVIMIENTOS']),
        },
        computed: {
            ...mapState(['movimientos'])
        }
    }
</script>