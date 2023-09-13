<template>
  <v-container>
    <v-card rounded="0" variant="text">
      <v-tabs
        v-model="tab"
        align-tabs="center"
      >
        <v-tab value="Contacts">Контакты</v-tab>
        <v-tab value="Pastors">Пастора</v-tab>
        <v-tab value="Filial">Филиалы</v-tab>
        <v-tab value="Docs">Документы</v-tab>
        <!--      <v-tab value="Vision">Видение</v-tab>-->
      </v-tabs>
      <VDivider/>
      <v-window v-model="tab">
        <!-- ------------------------------------------------------------------------ -->
        <v-window-item value="Contacts">
          <v-card class="ma-2">
            <v-card-title class="text-center">Воскресные богослужения</v-card-title>
            <v-card-subtitle class="mt-2">Каждое воскресенье</v-card-subtitle>
            <v-card-text>
              11:00, 13:00 <br>
              15:30 (молодежное)<br>
            </v-card-text>
            <v-card-subtitle>Адрес</v-card-subtitle>
            <v-card-text>
              Санкт-Петербург, Невский пр., д. 100 <br>
              КЗ «Колизей» <br>
              Ближайшие ст. м. «Маяковская», «Площадь Восстания»
              <br><br>
              Богослужения во всех филиалах проходят по воскресеньям с единой проповедью
            </v-card-text>
            <v-card-subtitle>Телефон</v-card-subtitle>
            <v-card-text>
              <a class="text-mono text-primary" href="tel:8-800-555-25-15">
                8-800-555-25-15 - Позвонить >
              </a>
            </v-card-text>
            <v-card-subtitle>Соц.Сети</v-card-subtitle>
            <v-card-actions>
              <VSpacer/>
              <a href="https://www.youtube.com/@mbv1916">
                <VAvatar rounded="0" :image="yt"/>
              </a>
              <VSpacer/>
              <a href="https://t.me/mbvspb">
                <VAvatar rounded="0" :image="tg"/>
              </a>
              <VSpacer/>
              <a href="https://vk.com/mbvspb">
                <VAvatar rounded="0" :image="vk"/>
              </a>
              <VSpacer/>
            </v-card-actions>
            <v-card-subtitle>Режим работы офиса</v-card-subtitle>
            <v-card-text>Пн-Пт, 10:00-18:00</v-card-text>
          </v-card>
        </v-window-item>
        <v-window-item value="Pastors">
          <v-card class="ma-2" v-for="(pastor, i) in pastors" :key="i">
            <v-img :src="pastor.img" :options="{threshold: 0}" eager>
              <div class="fill-height bottom-gradient d-flex align-end">
                <VCardTitle class="text-white">
                  {{ pastor.title }}
                  <v-card-subtitle class="pa-0">
                    {{ pastor.subtitle }}
                  </v-card-subtitle>
                </VCardTitle>
              </div>
            </v-img>
            <VCardText v-html="pastor.text"/>
          </v-card>
        </v-window-item>
        <v-window-item value="Filial">
          <v-card class="ma-2">
            <v-card-text>
              <h4>Филиал «Балканы»</h4>
              Шатров Олег Васильевич <br><br>
              <v-card-subtitle>Адрес церкви</v-card-subtitle>
              Санкт-Петербург, ул. Купчинская, д. 32, кор. 1, лит. Д, пом. 15 Н<br>
              Ближайшая ст. м. «Купчино»<br><br>

              <v-card-subtitle>Время</v-card-subtitle>
              Каждое воскресенье 11:00<br><br>
              <v-card-subtitle>Телефон</v-card-subtitle>
              8-800-555-25-15<br><br>
              <v-card-subtitle>Режим работы офиса</v-card-subtitle>
              Вс 11:00-18:00
            </v-card-text>
            <v-card-text>
              <h4>Филиал «Серебристый»</h4>
              Бойко Сергей Петрович <br> <br>
              <v-card-subtitle>Адрес церкви</v-card-subtitle>
              Санкт-Петербург, аллея Поликарпова, д. 6, к. 2 <br>
              Ближайшая ст. м. «Пионерская» <br> <br>
              <v-card-subtitle>Время</v-card-subtitle>
              Каждое воскресенье 11:00 <br><br>
              <v-card-subtitle>Телефон</v-card-subtitle>
              8-800-555-25-15
            </v-card-text>
            <v-card-text>
              <h4>Филиал «Колпино»</h4>
              Коротаев Егор Валерьевич <br><br>
              <v-card-subtitle>Адрес церкви</v-card-subtitle>
              г. Колпино, улица Труда, д.4 <br><br>
              <v-card-subtitle>Время</v-card-subtitle>

              Каждое воскресенье 11:00 <br><br>
              <v-card-subtitle>Телефон</v-card-subtitle>

              +7 (911) 716-88-38; +7 (952) 370-88-72
            </v-card-text>
          </v-card>
        </v-window-item>
<!--        <v-window-item value="Vision">-->
<!--          <v-card class="ma-2">-->

<!--          </v-card>-->
<!--        </v-window-item>-->
        <v-window-item value="Docs">
          <v-card class="ma-2">
            <ChurchDocs/>
          </v-card>
        </v-window-item>
      </v-window>
    </v-card>
    <v-footer color="background" class="text-center text-caption">
      Местная религиозная организация христиан веры евангельской (пятидесятников) «Церковь евангельских христиан в духе
      апостолов «Миссия «Благая весть»
      <br>
      ОГРН 1037858004964 30 января 2003 г.
      <br>
      ИНН 7802073302
    </v-footer>
  </v-container>
</template>

<script setup>
import DD from '@/assets/pastors/DD.jpg'
import DaD from '@/assets/pastors/DaD.jpg'
import AlHo from '@/assets/pastors/AlHo.jpg'
import TaSt from '@/assets/pastors/TaSt.jpg'
import SBo from '@/assets/pastors/SBo.jpg'
import OlSh from '@/assets/pastors/OlSh.jpg'
import EKo from '@/assets/pastors/EKo.jpg'
import VGo from '@/assets/pastors/VGo.jpg'
import {ref} from 'vue'
import yt from '@/assets/socialMediaIcons/youtube-outlinesvg.svg'
import tg from '@/assets/socialMediaIcons/tg-outline.svg'
import vk from '@/assets/socialMediaIcons/vk-outlinesvg.svg'
import ChurchDocs from '@/components/about/ChurchDocs.vue'

const tab = ref('Contacts')

const pastors = ref([
  {
    title: 'Дмитрий Шатров',
    img: DD,
    subtitle: 'Старший пастор церкви, епископ',
    text: `Родился 29 августа 1966 года в семье потомственного священника евангельской церкви.
В служении с 1980 года. Рукоположен в сан пастора в 1998 году, в сан епископа в 2012 году. <br><br>

С 2008 года полномочный представитель Председателя Российского объединенного Союза христиан веры евангельской (пятидесятников)
в г. СПб и ЛО, с 2015 года – заместитель Начальствующего епископа РОСХВЕ в Северо-Западном федеральном округе.
Имеет два высших образования: техническое и богословское в степени Бакалавра и магистра. <br><br>

В браке с 1987 года, четверо детей, семь внуков.`,
  }, {
    title: 'Даниил Шатров',
    img: DaD,
    subtitle: 'Ведущий пастор церкви',
    text: `Родился 22 июня 1989 года в священнической семье. <br><br>

В служении с 2003 года. Рукоположен в сан пастора в 2012 году, в 2022 году стал ведущим пастором церкви.
Закончил СПбГЭУ, высшее образование. <br><br>

В браке с 2008 года, четверо детей.`,
  }, {
    title: 'Александр Холеменко',
    img: AlHo,
    subtitle: 'Пастор церкви',
    text: `Родился 24 марта 1968 года, верующий с 1989 года. <br><br>

В служении с 1990 года. Рукоположен в сан пастора в 1998 году.
Имеет высшее богословское образование. <br><br>

В браке с 1991 года, трое детей.`,
  }, {
    title: 'Татьяна Ступа',
    img: TaSt,
    subtitle: 'Пастор церкви',
    text: `Родилась 9 сентября 1963 года, верующая с 1984 года. <br><br>

В служении с 2001 года. С 2005 года является руководителем молитвенного служения. Рукоположена в сан пастора в 2012 году.
Закончила Педагогическое училище и Московскую Евроазиатскую Богословскую семинарию. <br><br>

В браке с 1983 года, двое детей, пять внуков.`,
  }, {
    title: 'Сергей Бойко',
    img: SBo,
    subtitle: 'Пастор филиала церкви "Серебристый"',
    text: `Родился 19 июля 1963 года, верующий с 2002 года. <br><br>

В служении с 2004 года. Рукоположен в сан пастора в 2012 году.
Закончил ЛТИ им. Ленсовета и СПХУ. <br><br>

В браке с 1985 года, двое детей, двое внуков.`,
  }, {
    title: 'Олег Шатров',
    img: OlSh,
    subtitle: 'Пастор филиала церкви "Балканы"',
    text: `Родился 30 марта 1968 года, верующий с 1983 года. <br><br>

В служении с 2004 года. Рукоположен в сан пастора в 2012 году.
Имеет высшее богословское образование. <br><br>

В браке с 1999 года, трое детей: Анна, Екатерина, Глеб.`,
  }, {
    title: 'Егор Коротаев',
    img: EKo,
    subtitle: 'Пастор филиала церкви "Колпино"',
    text: `Родился 20 декабря 1973 года, верующий с 2003 года. <br><br>

В служении с 2006 года. Рукоположен в сан пастора в 2012 году.
Закончил ЛГУ им. Пушкина и Московскую Евроазиатскую Богословскую семинарию. <br><br>

В браке с 2008 года, трое детей.`,
  }, {
    title: 'Виталий Голиков',
    img: VGo,
    subtitle: 'Молодежный пастор',
    text: `Родился 4 мая 1996 года, верующий с детства. <br><br>

В служении с 2019 года. Рукоположен в сан пастора в 2022 году.
Закончил Политехнический Университет, высшее образование. <br><br>

Не женат, детей нет.`,
  },
])
</script>

<style scoped>
.bottom-gradient {
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    transparent 150px
  );
}
</style>
