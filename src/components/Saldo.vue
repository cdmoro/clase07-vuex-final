<template>
    <b-container class="mt-4">
        <b-card title="Saldo">
            <b-card class="text-right mb-2" bg-variant="dark" text-variant="light">
                <h3>$ {{ saldo }}</h3>
                <h5>en {{ movimientos.length }} movimientos</h5>
            </b-card>
            <div class="text-right">
                <b-button variant="primary" @click="fetch_movimientos">Actualizar movimientos</b-button>
                <b-button variant="info" @click="RESET_MOVIMIENTOS">Estado anterior</b-button>
            </div>
        </b-card>
    </b-container>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'Saldo',
        methods: {
            ...mapActions(['fetch_movimientos']),
            ...mapMutations(['RESET_MOVIMIENTOS']),
        },
        computed: {
            ...mapState(['movimientos']),
            saldo() {
                let suma = this.movimientos.reduce(function(sum, item) {
                        return sum + item.importe
                    }, 0)
                return parseFloat(suma.toFixed(2))
            }
        }
    }
</script>