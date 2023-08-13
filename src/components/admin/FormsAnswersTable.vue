<!--suppress VueUnrecognizedSlot -->
<template>
  <VTextField
    prepend-inner-icon="mdi-magnify"
    v-model="searchText"
    label="Поиск"
    variant="outlined"
    class="ma-2"
  />
  <VDataTable
    density="compact"
    items-per-page="100"
    :group-by="[{key: 'from'}]"
    fixed-header
    :headers="tableHeader"
    :items="formsData"
    :search="searchText"
    height="400"
    :sort-by="[{key: 'time', order: 'desc'}]"
  >
    <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
      <tr>
        <td :colspan="columns.length">
          <v-btn
            size="small"
            variant="text"
            :prepend-icon="isGroupOpen(item) ? '$expand' : '$next'"
            @click="toggleGroup(item)"
          >{{ item.value }}
          </v-btn>
        </td>
      </tr>
    </template>
    <template #item.time="{item}">
      {{ new Date(+item.raw.time).toLocaleDateString() }}
    </template>
    <template #item.fullName="{item}">
      <v-chip :to="{ name: 'User', params: { id: item.raw.uid }}">
        {{ item.raw.fullName }}
        {{ item.raw.age }}
      </v-chip>
    </template>
    <template #item.phoneNumber="{item}">
      <a :href="`+7${item.raw.phoneNumber}`">{{ `+7${item.raw.phoneNumber}` }}</a>
    </template>
    <template #item.answer="{item}">
      <ul>
        <li v-for="(val) in JSON.parse(item.raw.answer)">
          {{ val }}
        </li>
      </ul>
    </template>
  </VDataTable>
</template>

<script setup>
import {ref} from 'vue'

const searchText = ref()
defineProps({
  tableHeader: {
    required: true,
    type: Array,
  },
  formsData: {
    required: true,
    type: Array,
  },
})
</script>
