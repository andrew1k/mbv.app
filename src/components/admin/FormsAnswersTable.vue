<!--suppress VueUnrecognizedSlot -->
<template>
  <v-container>
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
      <template #item.time="{value}">
        {{ new Date(+value).toLocaleDateString() }}
      </template>
      <template #item.fullName="{ item }">
        <v-chip :to="{ name: 'User', params: { id: item.uid }}">
          {{ item.fullName }}
          {{ item.age }}
        </v-chip>
      </template>
      <template #item.phoneNumber="{item}">
        <a :href="`+7${item.phoneNumber}`">{{ `+7${item.phoneNumber}` }}</a>
      </template>
      <template #item.answer="{ value }">
        <ul>
          <li v-for="(val) in JSON.parse(value)">
            {{ val }}
          </li>
        </ul>
      </template>
    </VDataTable>
  </v-container>
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
