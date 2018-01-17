<template>
    <b-container class="mt-4">
        <h3 class="mb-3">Movimientos</h3>
        <b-button :disabled="cargando" variant="primary" @click="buscarMovimientos">Actualizar movimientos</b-button>
        <b-button :disabled="cargando" variant="info" @click="RESET_MOVIMIENTOS">Estado anterior</b-button>
        <b-table class="mt-3" small hover striped :items="movimientos"></b-table>
        <b-card v-show="cargando" class="text-center">Cargando movimientos</b-card>
    </b-container>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'Movimientos',
        data() {
            return {
                cargando: false
            }
        },
        methods: {
            ...mapActions(['fetch_movimientos']),
            ...mapMutations(['RESET_MOVIMIENTOS']),
            buscarMovimientos() {
                this.cargando = true
                this.fetch_movimientos().then(() => {
                        this.cargando = false
                    })
            }
        },
        computed: {
            ...mapState(['movimientos'])
        }
    }
</script>