<template>
  <v-card
    class="mx-2 my-4 py-2"
    :variant="show ? 'text' : 'elevated'"
  >
    <VCardItem
      @click="show = !show"
    >
      <template #prepend>
        <VIcon
          :icon="signedEventsIds.includes(eventId) ? 'mdi-check-outline' : eventIcon"
          :color="signedEventsIds.includes(eventId) ? 'green' : eventColor"
        />
      </template>
      <template #append>
        <VIcon :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"/>
      </template>
      <template #title>
        <h4 class="font-weight-medium">{{eventTitle}}</h4>
      </template>
    </VCardItem>
    <v-expand-transition>
      <v-card
        v-if="show"
        variant="text"
        class="mx-2"
        rounded="0"
      >
        <h4 class="text-mono ml-2 font-weight-thin">
          {{ show ? `${eventTime.slice(0, 10)}  в ${eventTime.slice(11)}` : '' }}
        </h4>
        <VCardText class="ma-2 pa-0" v-html="eventText"/>
<!--        <v-card-actions>-->
<!--          <VSpacer/>-->
<!--          <v-chip v-if="signedEventsIds.includes(eventId)" rounded="pill" color="success">вы записаны</v-chip>-->
<!--        </v-card-actions>-->
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
  </v-card>

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
