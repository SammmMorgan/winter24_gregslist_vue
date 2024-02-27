<template>
    <div class="container">
        <section class="row">
            <div v-for="house in houses" :key="house.div" class="col-4">
                <div class="card border-dark container mt-4">

                    <img class="card-img-top" :src="house.imgUrl" alt="Title" />
                    <div class="card-body row d-flex container">
                        <h4 class="card-title col-12">{{ house.description }}</h4>
                        <span class="col-6">{{ house.bathrooms }}</span>
                        <span class="col-6">{{ house.bedrooms }}</span>
                        <span class="col-6">{{ house.levels }}</span>
                        <span class="col-6">{{ house.price }}</span>
                        <span class="col-6">{{ house.year }}</span>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

<script>
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js'
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue';

export default {
    setup() {

        async function paintHouses() {
            try {
                await housesService.paintHouses()
            } catch (error) {
                Pop.error(error)
            }
        }
        onMounted(() => { paintHouses() })

        return {
            houses: computed(() => AppState.houses)
        }
    }

}
</script>

<style lang="scss" scoped></style>