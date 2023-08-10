<template>
  <v-card elevation="0" rounded="xl"  class="mb-4 mt-2 mx-2">
    <v-card elevation="0" @click="isCardOpen = !isCardOpen">
      <v-card-actions>
        <VCardItem
          :prepend-icon="purposeIcon"
          :title="purposeTitle"
        />
        <VSpacer />
        <VBtn
          @click="isCardOpen = !isCardOpen"
          variant="text"
          color="contrast"
          :icon="isCardOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        />
      </v-card-actions>
    </v-card>
    <v-expand-transition>
      <v-card v-if="isCardOpen" elevation="0" rounded="0" variant="text">
        <v-slide-group>
          <v-slide-group-item v-for="(pAct, i) in purposeActs" :key="i">
            <PurposeSlider
              :title="pAct.title"
              :img="pAct.img"
              :route="pAct.route"
            />
          </v-slide-group-item>
        </v-slide-group>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import PurposeSlider from '@/components/purposes/PurposeSliderItem.vue'


defineProps({
  purposeTitle: {
    required: true,
    type: String,
  },
  purposeIcon: {
    required: false,
    type: String,
    default: 'mdi-circle'
  },
  purposeRoute: {
    required: true,
    type: String,
  },
  purposeColor: {
    required: false,
    type: String,
    default: 'primary',
  },
  purposeActs: {
    required: true,
    type: Array,
  },
  isCardOpen: {
    type: Boolean,
    default: false
  }
})
</script>
