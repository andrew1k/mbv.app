<template>
  <v-card elevation="0" rounded="0" variant="text" class="mt-4">
    <v-card-actions>
      <v-btn block variant="text" :color="purposeColor" :to="purposeRoute">
        <v-card-title>{{ purposeTitle }}</v-card-title>
      </v-btn>
    </v-card-actions>
    <v-slide-group class="mx-3">
      <v-slide-group-item v-for="(pAct, i) in purposeActs" :key="i">
        <PurposeAction
          :title="pAct.title"
          :img="pAct.img"
          :route="pAct.route"
        />
      </v-slide-group-item>
    </v-slide-group>
  </v-card>
</template>

<script setup>
import PurposeAction from '@/components/discover/PurposeAction.vue'

defineProps({
  purposeTitle: {
    required: true,
    type: String,
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
})
</script>
