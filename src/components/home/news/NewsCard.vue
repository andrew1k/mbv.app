<template>
  <v-card class="mx-2 mt-2 mb-8" :to="{ name: 'NewsPage', params: { id }}">
<!--    <v-container class="ma-0 pa-0">-->
<!--      <v-row>-->
<!--        <v-col cols="4">-->
<!--          <v-card elevation="0">-->
<!--            <VImg :src="img" eager/>-->
<!--          </v-card>-->
<!--        </v-col>-->
<!--        <v-col cols="8" class="d-flex flex-column">-->
<!--          <VCardTitle class="ma-0 px-0 pt-1">{{ title }}</VCardTitle>-->
<!--          <v-card-actions class="mx-0 pa-0 mt-auto">-->
<!--            <v-card-subtitle class="ma-0 pa-0">{{ new Date(+id).toLocaleDateString() }}</v-card-subtitle>-->
<!--            <VSpacer/>-->
<!--            <VIcon class="mx-3" icon="mdi-chevron-right"/>-->
<!--          </v-card-actions>-->
<!--        </v-col>-->
<!--      </v-row>-->
<!--    </v-container>-->
    <v-img :src="img" eager />
    <VCardText><h2>{{title}}</h2></VCardText>
    <v-card-text class="py-0 text-subtitle-2 text-mono">{{subtitle}}</v-card-text>
    <v-card-actions class="mx-0 px-0">
      <v-card-subtitle>{{ new Date(+id).toLocaleDateString() }}</v-card-subtitle>
      <v-spacer/>
      <v-icon class="mx-4" icon="mdi-chevron-right"/>
    </v-card-actions>
  </v-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
  img: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  leaderName: {
    type: String,
  },
  leaderUrl: {
    type: String,
  },
})
</script>
