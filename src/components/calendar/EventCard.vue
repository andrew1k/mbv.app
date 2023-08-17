<template>
  <v-card
    class="mx-1 my-4"
    @click="show = !show"
    :variant="show ? 'text' : 'elevated'"
  >
    <v-card-actions>
      <VIcon :icon="eventIcon" :color="eventColor" class="ml-2"/>
      <VCardItem
        :title="eventTitle"
      />
      <VSpacer/>
      <v-chip v-if="signedEventsIds.includes(eventId)" rounded="pill" color="success">
        <VIcon icon="mdi-check"/>
      </v-chip>
      <VIcon class="mx-2" :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"/>
    </v-card-actions>
  </v-card>
  <v-expand-transition>
    <v-card
      v-if="show"
      variant="text"
      class="mx-2"
    >
      <v-card-title class="text-mono">
        {{ show ? `${eventTime.slice(0, 10)}  в ${eventTime.slice(11)}` : '' }}
      </v-card-title>
      <VCardText v-html="eventText"/>
      <v-card-actions>
        <VSpacer/>
        <v-chip v-if="signedEventsIds.includes(eventId)" rounded="pill" color="success">вы записаны</v-chip>
      </v-card-actions>
      <v-card-actions class="mx-2">
        <VSpacer/>
        <slot name="deleteBtnSpace"/>
        <v-btn
          :color="eventColor"
          v-if="!signedEventsIds.includes(eventId)"
          variant="outlined"
          @click="$emit('signBtn')"
        >
          Записаться
        </v-btn>
        <v-btn
          color="error"
          v-if="signedEventsIds.includes(eventId)"
          variant="outlined"
          @click="$emit('unsignBtn')"
        >
          Отменить запись
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-expand-transition>
</template>

<script setup>
import {useAuthStore} from '@/store/auth.store'
import {storeToRefs} from 'pinia'

const authStore = useAuthStore()
const {signedEventsIds} = storeToRefs(authStore)

defineProps({
  eventTitle: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventText: {
    type: String,
    required: false,
  },
  eventColor: {
    type: String,
  },
  eventId: {
    type: Number,
    required: true,
  },
  eventIcon: {
    type: String,
  },
  show: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['signBtn', 'unsignBtn'])
</script>
