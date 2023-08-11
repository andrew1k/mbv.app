<template>
  <v-card elevation="0" rounded="0" variant="text">
    <v-card class="ma-2">
      <purposes-cards :img="img" :text="text" title="Молитвенное служение" btn="Есть нужда" @toggler-btn="signToggle"/>
    </v-card>
    <v-expand-transition>
      <v-card class="pa-4" v-if="sign" rounded="0" elevation="0" variant="text">
        <v-textarea rows="2" label="Опишите вашу молитвенную нужду" v-model="prayer"/>
        <v-card-actions>
          <VSpacer/>
          <v-btn variant="outlined" block
                 @click="sendForm('prayer', {prayer}, 'Молитвенная нужда')">
            Отправить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import {ref} from 'vue'
import PurposesCards from '@/components/purposes/PurposesCards.vue'
import img from '@/assets/helpPics/Prayer.jpg'
import {useFormsStore} from '@/store/form.store'

const text = ref(`<b>Молитвенная команда</b>
<br/>
Молитвенная команда молится за ключевые направления и проекты церкви, проводит душепопечение, а также организует и проводит утренние и вечерние молитвы.
<br/>
Пастор молитвенного служения: Татьяна Ступа
<br/><br/>
<b>Вечерняя молитва</b>
<br/>
Вечерняя молитва проходит каждую среду, 19:00, в КЗ «Колизей», Малый зал (последняя среда каждого месяца – молодежная молитва)
<br/><br/>
<b>Молитвенный чат «Скорая помощь»</b>
<br/>
В молитвенный чат стекаются молитвенные просьбы прихожан нашей церкви, которые распределяются между молитвенными служителями.
<br/>
Молитвенную нужду можно написать в молитвенной карточке или обратиться по телефону офиса церкви - <a href="tel:88005555525">8-800-555-55-25</a>
`)

const sign = ref(false)
const signToggle = () => {
  sign.value = !sign.value
  if (sign.value)
    setTimeout(() => {
      window.scrollBy({
        top: 500,
        left: 0,
        behavior: "smooth",
      })
    }, 300)
}

const prayer = ref('')
const {sendForm} = useFormsStore()
</script>
