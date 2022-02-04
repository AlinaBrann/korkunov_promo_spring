<template>
  <constructor-step
    title="шаг 4. информация <br>о получателе"
    back="Вернуться назад"
  >
    <div class="preloader">
      <img src="../../assets/images/spinner.svg" alt="">
    </div>
    <label 
      class="form__field"
      :class="{
        error: validationStatus($v.recipient_name) || this.errorMessage.recipient_name,
      }"
    >
      <div class="form__caption">
        Кому видеопоздравление
        <div
          class="form__tooltip"
          v-tooltip.bottom="{
            content:
              'Впишите обращение к&nbsp;получателю в&nbsp;дательном падеже, например: Тамаре, Маме, Любимой. Текст будет указан на&nbsp;открытке в&nbsp;видеопоздравлении',
            trigger: 'click',
          }"
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.3998 8.41V7.86C6.3998 7.71333 6.40647 7.59 6.4198 7.49C6.4398 7.38333 6.4698 7.29 6.5098 7.21C6.55647 7.12333 6.61314 7.04333 6.6798 6.97C6.75314 6.89 6.8398 6.79667 6.9398 6.69L7.7098 5.91C7.87647 5.74333 7.9598 5.52667 7.9598 5.26C7.9598 5 7.87314 4.79 7.6998 4.63C7.53314 4.46333 7.3198 4.38 7.0598 4.38C6.7798 4.38 6.5498 4.47667 6.3698 4.67C6.1898 4.85667 6.08647 5.08667 6.0598 5.36L4.7798 5.26C4.8198 4.94 4.90314 4.65667 5.0298 4.41C5.15647 4.15667 5.3198 3.94333 5.5198 3.77C5.72647 3.59667 5.96314 3.46667 6.2298 3.38C6.49647 3.28667 6.7898 3.24 7.1098 3.24C7.4098 3.24 7.68647 3.28333 7.9398 3.37C8.1998 3.45667 8.42314 3.58333 8.6098 3.75C8.80314 3.91 8.95314 4.11333 9.0598 4.36C9.16647 4.6 9.2198 4.87667 9.2198 5.19C9.2198 5.41 9.1898 5.60333 9.1298 5.77C9.0698 5.93667 8.98981 6.09 8.8898 6.23C8.7898 6.37 8.67314 6.50333 8.5398 6.63C8.41314 6.75667 8.27647 6.89 8.1298 7.03C8.03647 7.11667 7.95647 7.19333 7.8898 7.26C7.82314 7.32667 7.76647 7.39667 7.7198 7.47C7.6798 7.53667 7.6498 7.61667 7.6298 7.71C7.6098 7.79667 7.5998 7.90333 7.5998 8.03V8.41H6.3998ZM6.1998 9.8C6.1998 9.58667 6.27647 9.40333 6.4298 9.25C6.5898 9.09667 6.7798 9.02 6.9998 9.02C7.21314 9.02 7.3998 9.09333 7.5598 9.24C7.7198 9.38667 7.7998 9.56667 7.7998 9.78C7.7998 9.99333 7.7198 10.1767 7.5598 10.33C7.40647 10.4833 7.2198 10.56 6.9998 10.56C6.89314 10.56 6.7898 10.54 6.6898 10.5C6.59647 10.46 6.51314 10.4067 6.4398 10.34C6.36647 10.2733 6.30647 10.1933 6.2598 10.1C6.2198 10.0067 6.1998 9.90667 6.1998 9.8Z"
              fill="white"
            />
            <circle cx="7" cy="7" r="6.5" stroke="white" />
          </svg>
        </div>
      </div>
      <span></span>
      <vue-infinite-autocomplete
        id="recipient_name"
        :data-source="nameOptions"
        :value="currentValue"
        v-on:select="handleOnSelect"
      >
      </vue-infinite-autocomplete>
      <div v-if="validationStatus($v.recipient_name)" class="error-hint" v-html="!$v.recipient_name.required && $v.recipient_name.$error ? 'Обязательное поле' : ''"></div>
    </label>
    <label 
      class="form__field"
      :class="{
        error: validationStatus($v.audio) || this.errorMessage.audio,
      }"
    >
      <div class="form__caption">
        Имя адресата
        <div
          class="form__tooltip"
          v-tooltip.bottom="{
            content:
              'Нажмите, чтобы выбрать. Имя или обращение в видео будет произносить Сергей Безруков',
            trigger: 'click',
          }"
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.3998 8.41V7.86C6.3998 7.71333 6.40647 7.59 6.4198 7.49C6.4398 7.38333 6.4698 7.29 6.5098 7.21C6.55647 7.12333 6.61314 7.04333 6.6798 6.97C6.75314 6.89 6.8398 6.79667 6.9398 6.69L7.7098 5.91C7.87647 5.74333 7.9598 5.52667 7.9598 5.26C7.9598 5 7.87314 4.79 7.6998 4.63C7.53314 4.46333 7.3198 4.38 7.0598 4.38C6.7798 4.38 6.5498 4.47667 6.3698 4.67C6.1898 4.85667 6.08647 5.08667 6.0598 5.36L4.7798 5.26C4.8198 4.94 4.90314 4.65667 5.0298 4.41C5.15647 4.15667 5.3198 3.94333 5.5198 3.77C5.72647 3.59667 5.96314 3.46667 6.2298 3.38C6.49647 3.28667 6.7898 3.24 7.1098 3.24C7.4098 3.24 7.68647 3.28333 7.9398 3.37C8.1998 3.45667 8.42314 3.58333 8.6098 3.75C8.80314 3.91 8.95314 4.11333 9.0598 4.36C9.16647 4.6 9.2198 4.87667 9.2198 5.19C9.2198 5.41 9.1898 5.60333 9.1298 5.77C9.0698 5.93667 8.98981 6.09 8.8898 6.23C8.7898 6.37 8.67314 6.50333 8.5398 6.63C8.41314 6.75667 8.27647 6.89 8.1298 7.03C8.03647 7.11667 7.95647 7.19333 7.8898 7.26C7.82314 7.32667 7.76647 7.39667 7.7198 7.47C7.6798 7.53667 7.6498 7.61667 7.6298 7.71C7.6098 7.79667 7.5998 7.90333 7.5998 8.03V8.41H6.3998ZM6.1998 9.8C6.1998 9.58667 6.27647 9.40333 6.4298 9.25C6.5898 9.09667 6.7798 9.02 6.9998 9.02C7.21314 9.02 7.3998 9.09333 7.5598 9.24C7.7198 9.38667 7.7998 9.56667 7.7998 9.78C7.7998 9.99333 7.7198 10.1767 7.5598 10.33C7.40647 10.4833 7.2198 10.56 6.9998 10.56C6.89314 10.56 6.7898 10.54 6.6898 10.5C6.59647 10.46 6.51314 10.4067 6.4398 10.34C6.36647 10.2733 6.30647 10.1933 6.2598 10.1C6.2198 10.0067 6.1998 9.90667 6.1998 9.8Z"
              fill="white"
            />
            <circle cx="7" cy="7" r="6.5" stroke="white" />
          </svg>
        </div>
      </div>
      <span></span>
      <vue-infinite-autocomplete
        id="audio_id"
        :data-source="namesItems"
        v-on:select="handleOnSelectAudio"
      >
      </vue-infinite-autocomplete>
      <div v-if="validationStatus($v.audio)" class="error-hint" v-html="!$v.audio.required && $v.audio.$error ? 'Обязательное поле' : ''"></div>
    </label>

    <button
      type="button"
      @click="goToNext()"
      class="constructor-step__button btn btn--bordered"
    >
      продолжить
    </button>
  </constructor-step>
</template>

<script>
import ConstructorStep from "../ConstructorStep.vue";
import { required } from "vuelidate/lib/validators";
import VueInfiniteAutocomplete from "vue-infinite-autocomplete";
export default {
  data: () => ({
    recipient_name: null,
    audio: null,
    namesItems: [
      {
        id: 1,
        text: "Августин",
      },
      {
        id: 2,
        text: "Авраам",
      },
      {
        id: 3,
        text: "Аврора",
      },
      {
        id: 4,
        text: "Агата",
      },
      {
        id: 5,
        text: "Агафон",
      },
      {
        id: 6,
        text: "Аглая",
      },
      {
        id: 7,
        text: "Агнесса",
      },
      {
        id: 8,
        text: "Агния",
      },
      {
        id: 9,
        text: "Ада",
      },
      {
        id: 10,
        text: "Аделаида",
      },
      {
        id: 11,
        text: "Аделина",
      },
      {
        id: 12,
        text: "Адина",
      },
      {
        id: 13,
        text: "Азалия",
      },
      {
        id: 14,
        text: "Айлин",
      },
      {
        id: 15,
        text: "Айсултан",
      },
      {
        id: 16,
        text: "Акулина",
      },
      {
        id: 17,
        text: "Алан",
      },
      {
        id: 18,
        text: "Алевтина",
      },
      {
        id: 19,
        text: "Александр",
      },
      {
        id: 20,
        text: "Александра",
      },
      {
        id: 21,
        text: "Алексей",
      },
      {
        id: 22,
        text: "Али",
      },
      {
        id: 23,
        text: "Алина",
      },
      {
        id: 24,
        text: "Алиса",
      },
      {
        id: 25,
        text: "Алихан",
      },
      {
        id: 26,
        text: "Алла",
      },
      {
        id: 27,
        text: "Алсу",
      },
      {
        id: 28,
        text: "Алтана",
      },
      {
        id: 29,
        text: "Альберт",
      },
      {
        id: 30,
        text: "Альбина",
      },
      {
        id: 31,
        text: "Альмира",
      },
      {
        id: 32,
        text: "Алёна",
      },
      {
        id: 33,
        text: "Амалия",
      },
      {
        id: 34,
        text: "Амелия",
      },
      {
        id: 35,
        text: "Амина",
      },
      {
        id: 36,
        text: "Амир",
      },
      {
        id: 37,
        text: "Анастасия",
      },
      {
        id: 38,
        text: "Анатолий",
      },
      {
        id: 39,
        text: "Ангелина",
      },
      {
        id: 40,
        text: "Андрей",
      },
      {
        id: 41,
        text: "Анжела",
      },
      {
        id: 42,
        text: "Анжелика",
      },
      {
        id: 43,
        text: "Анисий",
      },
      {
        id: 44,
        text: "Анна",
      },
      {
        id: 45,
        text: "Антон",
      },
      {
        id: 46,
        text: "Антонина",
      },
      {
        id: 47,
        text: "Анфиса",
      },
      {
        id: 48,
        text: "Ариадна",
      },
      {
        id: 49,
        text: "Арина",
      },
      {
        id: 50,
        text: "Аркадий",
      },
      {
        id: 51,
        text: "Арнистарх",
      },
      {
        id: 52,
        text: "Арсен",
      },
      {
        id: 53,
        text: "Арсений",
      },
      {
        id: 54,
        text: "Арслан",
      },
      {
        id: 55,
        text: "Артем",
      },
      {
        id: 56,
        text: "Артемий",
      },
      {
        id: 57,
        text: "Артеом",
      },
      {
        id: 58,
        text: "Артур",
      },
      {
        id: 59,
        text: "Архип",
      },
      {
        id: 60,
        text: "Ася",
      },
      {
        id: 61,
        text: "Байрак",
      },
      {
        id: 62,
        text: "Белла",
      },
      {
        id: 63,
        text: "Богдан",
      },
      {
        id: 64,
        text: "Божена",
      },
      {
        id: 65,
        text: "Болеслав",
      },
      {
        id: 66,
        text: "Борис",
      },
      {
        id: 67,
        text: "Борислав",
      },
      {
        id: 68,
        text: "Бронеслав",
      },
      {
        id: 69,
        text: "Бронислава",
      },
      {
        id: 70,
        text: "Булат",
      },
      {
        id: 71,
        text: "Вадим",
      },
      {
        id: 72,
        text: "Валентин",
      },
      {
        id: 73,
        text: "Валентина",
      },
      {
        id: 74,
        text: "Валерий",
      },
      {
        id: 75,
        text: "Валерия",
      },
      {
        id: 76,
        text: "Василий",
      },
      {
        id: 77,
        text: "Василиса",
      },
      {
        id: 78,
        text: "Венера",
      },
      {
        id: 79,
        text: "Веньямин",
      },
      {
        id: 80,
        text: "Вера",
      },
      {
        id: 81,
        text: "Вероника",
      },
      {
        id: 82,
        text: "Викентий",
      },
      {
        id: 83,
        text: "Виктор",
      },
      {
        id: 84,
        text: "Виктория",
      },
      {
        id: 85,
        text: "Вилен",
      },
      {
        id: 86,
        text: "Виолетта",
      },
      {
        id: 87,
        text: "Виссарион",
      },
      {
        id: 88,
        text: "Вита",
      },
      {
        id: 89,
        text: "Виталий",
      },
      {
        id: 90,
        text: "Влад",
      },
      {
        id: 91,
        text: "Владимир",
      },
      {
        id: 92,
        text: "Владислав",
      },
      {
        id: 93,
        text: "Владислава",
      },
      {
        id: 94,
        text: "Владлен",
      },
      {
        id: 95,
        text: "Всеволд",
      },
      {
        id: 96,
        text: "Вячеслав",
      },
      {
        id: 97,
        text: "Гавриил",
      },
      {
        id: 98,
        text: "Галина",
      },
      {
        id: 364,
        text: "Га&#x301;лия",
      },
      {
        id: 365,
        text: "Галия&#x301;",
      },
      {
        id: 99,
        text: "Геннадий",
      },
      {
        id: 100,
        text: "Георгий",
      },
      {
        id: 101,
        text: "Герман",
      },
      {
        id: 102,
        text: "Глафира",
      },
      {
        id: 103,
        text: "Глеб",
      },
      {
        id: 104,
        text: "Гордей",
      },
      {
        id: 105,
        text: "Григорий",
      },
      {
        id: 106,
        text: "Гульмира",
      },
      {
        id: 107,
        text: "Гульнара",
      },
      {
        id: 108,
        text: "Давид",
      },
      {
        id: 109,
        text: "Дана",
      },
      {
        id: 110,
        text: "Даниил",
      },
      {
        id: 111,
        text: "Даниэла",
      },
      {
        id: 112,
        text: "Данияр",
      },
      {
        id: 113,
        text: "Дарина",
      },
      {
        id: 114,
        text: "Дарья",
      },
      {
        id: 115,
        text: "Даяна",
      },
      {
        id: 116,
        text: "Демьян",
      },
      {
        id: 117,
        text: "Денис",
      },
      {
        id: 118,
        text: "Диана",
      },
      {
        id: 366,
        text: "Ди&#x301;ля",
      },
      {
        id: 367,
        text: "Диля&#x301;",
      },
      {
        id: 119,
        text: "Дина",
      },
      {
        id: 120,
        text: "Динар",
      },
      {
        id: 121,
        text: "Динара",
      },
      {
        id: 122,
        text: "Дмитрий",
      },
      {
        id: 123,
        text: "Дорогая",
      },
      {
        id: 124,
        text: "Дорогой",
      },
      {
        id: 125,
        text: "Дорогой друг",
      },
      {
        id: 126,
        text: "Дружище",
      },
      {
        id: 127,
        text: "Ева",
      },
      {
        id: 128,
        text: "Евгений",
      },
      {
        id: 129,
        text: "Евгения",
      },
      {
        id: 130,
        text: "Евдаким",
      },
      {
        id: 131,
        text: "Евдокия",
      },
      {
        id: 132,
        text: "Егор",
      },
      {
        id: 133,
        text: "Екатерина",
      },
      {
        id: 134,
        text: "Елена",
      },
      {
        id: 135,
        text: "Елизавета",
      },
      {
        id: 136,
        text: "Елисей",
      },
      {
        id: 137,
        text: "Есения",
      },
      {
        id: 138,
        text: "Ефим",
      },
      {
        id: 139,
        text: "Ефрем",
      },
      {
        id: 140,
        text: "Ефросиния",
      },
      {
        id: 141,
        text: "Жанна",
      },
      {
        id: 142,
        text: "Ждан",
      },
      {
        id: 143,
        text: "Заира",
      },
      {
        id: 144,
        text: "Заряна",
      },
      {
        id: 145,
        text: "Захар",
      },
      {
        id: 146,
        text: "Земфира",
      },
      {
        id: 147,
        text: "Зинаида",
      },
      {
        id: 148,
        text: "Зиновий",
      },
      {
        id: 149,
        text: "Злата",
      },
      {
        id: 150,
        text: "Зоя",
      },
      {
        id: 151,
        text: "Иван",
      },
      {
        id: 152,
        text: "Ивета",
      },
      {
        id: 153,
        text: "Игнатий",
      },
      {
        id: 154,
        text: "Игорь",
      },
      {
        id: 155,
        text: "Изабелла",
      },
      {
        id: 156,
        text: "Изольда",
      },
      {
        id: 157,
        text: "Иларион",
      },
      {
        id: 158,
        text: "Илона",
      },
      {
        id: 159,
        text: "Илья",
      },
      {
        id: 160,
        text: "Инга",
      },
      {
        id: 161,
        text: "Инесса",
      },
      {
        id: 162,
        text: "Инна",
      },
      {
        id: 163,
        text: "Иннокентий",
      },
      {
        id: 164,
        text: "Иосиф",
      },
      {
        id: 165,
        text: "Ираида",
      },
      {
        id: 166,
        text: "Ираклий",
      },
      {
        id: 167,
        text: "Ирина",
      },
      {
        id: 168,
        text: "Ислам",
      },
      {
        id: 169,
        text: "Казимир",
      },
      {
        id: 170,
        text: "Калерия",
      },
      {
        id: 171,
        text: "Камбар",
      },
      {
        id: 172,
        text: "Камила",
      },
      {
        id: 173,
        text: "Камиль",
      },
      {
        id: 174,
        text: "Капиталина",
      },
      {
        id: 175,
        text: "Карим",
      },
      {
        id: 176,
        text: "Карина",
      },
      {
        id: 177,
        text: "Каролина",
      },
      {
        id: 178,
        text: "Касьян",
      },
      {
        id: 179,
        text: "Катерина",
      },
      {
        id: 180,
        text: "Кира",
      },
      {
        id: 181,
        text: "Кирилл",
      },
      {
        id: 182,
        text: "Клавдия",
      },
      {
        id: 183,
        text: "Клара",
      },
      {
        id: 184,
        text: "Клариса",
      },
      {
        id: 185,
        text: "Клим",
      },
      {
        id: 186,
        text: "Константин",
      },
      {
        id: 187,
        text: "Кристина",
      },
      {
        id: 188,
        text: "Ксения",
      },
      {
        id: 189,
        text: "Кузьма",
      },
      {
        id: 190,
        text: "Лада",
      },
      {
        id: 191,
        text: "Лариса",
      },
      {
        id: 192,
        text: "Лев",
      },
      {
        id: 193,
        text: "Лейсан",
      },
      {
        id: 194,
        text: "Леон",
      },
      {
        id: 195,
        text: "Леонид",
      },
      {
        id: 196,
        text: "Леонтий",
      },
      {
        id: 197,
        text: "Леся",
      },
      {
        id: 198,
        text: "Лиана",
      },
      {
        id: 199,
        text: "Лидия",
      },
      {
        id: 200,
        text: "Лика",
      },
      {
        id: 201,
        text: "Лилиана",
      },
      {
        id: 202,
        text: "Лилия",
      },
      {
        id: 203,
        text: "Лиля",
      },
      {
        id: 204,
        text: "Лина",
      },
      {
        id: 205,
        text: "Лолита",
      },
      {
        id: 206,
        text: "Лукьян",
      },
      {
        id: 207,
        text: "Любовь",
      },
      {
        id: 208,
        text: "Людмила",
      },
      {
        id: 209,
        text: "Магдалина",
      },
      {
        id: 210,
        text: "Мадина",
      },
      {
        id: 211,
        text: "Майя",
      },
      {
        id: 212,
        text: "Макар",
      },
      {
        id: 213,
        text: "Максим",
      },
      {
        id: 214,
        text: "Марат",
      },
      {
        id: 215,
        text: "Маргарита",
      },
      {
        id: 216,
        text: "Марианна",
      },
      {
        id: 217,
        text: "Марина",
      },
      {
        id: 218,
        text: "Мария",
      },
      {
        id: 219,
        text: "Марк",
      },
      {
        id: 220,
        text: "Марта",
      },
      {
        id: 221,
        text: "Марфа",
      },
      {
        id: 222,
        text: "Мастер своего дела",
      },
      {
        id: 223,
        text: "Матвей",
      },
      {
        id: 224,
        text: "Махер",
      },
      {
        id: 225,
        text: "Медина",
      },
      {
        id: 226,
        text: "Мелиса",
      },
      {
        id: 227,
        text: "Мила",
      },
      {
        id: 228,
        text: "Милана",
      },
      {
        id: 229,
        text: "Милена",
      },
      {
        id: 230,
        text: "Милый друг",
      },
      {
        id: 231,
        text: "Мира",
      },
      {
        id: 232,
        text: "Мирон",
      },
      {
        id: 233,
        text: "Мирослава",
      },
      {
        id: 234,
        text: "Митрофан",
      },
      {
        id: 235,
        text: "Михаил",
      },
      {
        id: 236,
        text: "Моисей",
      },
      {
        id: 237,
        text: "Мой добрый друг",
      },
      {
        id: 238,
        text: "Мурат",
      },
      {
        id: 239,
        text: "Мухаммед",
      },
      {
        id: 240,
        text: "Надежда",
      },
      {
        id: 241,
        text: "Назар",
      },
      {
        id: 242,
        text: "Наиля",
      },
      {
        id: 243,
        text: "Наталья",
      },
      {
        id: 244,
        text: "Наташа",
      },
      {
        id: 245,
        text: "Наум",
      },
      {
        id: 246,
        text: "Нелли",
      },
      {
        id: 247,
        text: "Непревзойдённый талант",
      },
      {
        id: 248,
        text: "Несравненная",
      },
      {
        id: 249,
        text: "Несравненный",
      },
      {
        id: 250,
        text: "Ника",
      },
      {
        id: 251,
        text: "Никанор",
      },
      {
        id: 252,
        text: "Никита",
      },
      {
        id: 253,
        text: "Никифор",
      },
      {
        id: 254,
        text: "Николай",
      },
      {
        id: 255,
        text: "Николь",
      },
      {
        id: 256,
        text: "Никон",
      },
      {
        id: 257,
        text: "Нина",
      },
      {
        id: 258,
        text: "Нинель",
      },
      {
        id: 259,
        text: "Нонна",
      },
      {
        id: 260,
        text: "Нора",
      },
      {
        id: 261,
        text: "Нурислам",
      },
      {
        id: 262,
        text: "Нурлан",
      },
      {
        id: 263,
        text: "Оксана",
      },
      {
        id: 264,
        text: "Олег",
      },
      {
        id: 265,
        text: "Олеся",
      },
      {
        id: 266,
        text: "Ольга",
      },
      {
        id: 267,
        text: "Омар",
      },
      {
        id: 268,
        text: "Павел",
      },
      {
        id: 269,
        text: "Парамон",
      },
      {
        id: 270,
        text: "Петр",
      },
      {
        id: 271,
        text: "Платон",
      },
      {
        id: 272,
        text: "Полина",
      },
      {
        id: 273,
        text: "Прасковья",
      },
      {
        id: 274,
        text: "Прохор",
      },
      {
        id: 275,
        text: "Рада",
      },
      {
        id: 276,
        text: "Радмила",
      },
      {
        id: 277,
        text: "Раиса",
      },
      {
        id: 278,
        text: "Рассул",
      },
      {
        id: 279,
        text: "Раяна",
      },
      {
        id: 280,
        text: "Регина",
      },
      {
        id: 281,
        text: "Ренат",
      },
      {
        id: 282,
        text: "Рената",
      },
      {
        id: 283,
        text: "Римма",
      },
      {
        id: 284,
        text: "Ринат",
      },
      {
        id: 285,
        text: "Рита",
      },
      {
        id: 286,
        text: "Роберт",
      },
      {
        id: 287,
        text: "Родион",
      },
      {
        id: 288,
        text: "Роза",
      },
      {
        id: 289,
        text: "Роксана",
      },
      {
        id: 290,
        text: "Роман",
      },
      {
        id: 291,
        text: "Ростислав",
      },
      {
        id: 292,
        text: "Руслан",
      },
      {
        id: 293,
        text: "Рустам",
      },
      {
        id: 294,
        text: "Сабина",
      },
      {
        id: 295,
        text: "Савелий",
      },
      {
        id: 296,
        text: "Самира",
      },
      {
        id: 297,
        text: "Самсон",
      },
      {
        id: 298,
        text: "Самуил",
      },
      {
        id: 299,
        text: "Санжар",
      },
      {
        id: 300,
        text: "Сара",
      },
      {
        id: 301,
        text: "Сарра",
      },
      {
        id: 302,
        text: "Светлана",
      },
      {
        id: 303,
        text: "Светлый ангел",
      },
      {
        id: 304,
        text: "Святослав",
      },
      {
        id: 305,
        text: "Севастьян",
      },
      {
        id: 306,
        text: "Семён",
      },
      {
        id: 307,
        text: "Серафима",
      },
      {
        id: 308,
        text: "Сергей",
      },
      {
        id: 309,
        text: "Снежана",
      },
      {
        id: 310,
        text: "София",
      },
      {
        id: 311,
        text: "Софья",
      },
      {
        id: 312,
        text: "Станислав",
      },
      {
        id: 313,
        text: "Стелла",
      },
      {
        id: 314,
        text: "Степан",
      },
      {
        id: 315,
        text: "Стефания",
      },
      {
        id: 316,
        text: "Таисия",
      },
      {
        id: 317,
        text: "Тамара",
      },
      {
        id: 318,
        text: "Тамила",
      },
      {
        id: 319,
        text: "Тарас",
      },
      {
        id: 320,
        text: "Татьяна",
      },
      {
        id: 321,
        text: "Терентий",
      },
      {
        id: 322,
        text: "Тимофей",
      },
      {
        id: 323,
        text: "Тимур",
      },
      {
        id: 324,
        text: "Тина",
      },
      {
        id: 325,
        text: "Тихон",
      },
      {
        id: 326,
        text: "Томирис",
      },
      {
        id: 327,
        text: "Трофим",
      },
      {
        id: 328,
        text: "Уважаемая",
      },
      {
        id: 329,
        text: "Уважаемый",
      },
      {
        id: 330,
        text: "Ульяна",
      },
      {
        id: 331,
        text: "Урсула",
      },
      {
        id: 332,
        text: "Фадей",
      },
      {
        id: 333,
        text: "Фаина",
      },
      {
        id: 368,
        text: "Фари&#x301;да",
      },
      {
        id: 369,
        text: "Фарида&#x301;",
      },
      {
        id: 370,
        text: "Фати&#x301;ма",
      },
      {
        id: 371,
        text: "Фатима&#x301;",
      },
      {
        id: 334,
        text: "Федор",
      },
      {
        id: 335,
        text: "Федот",
      },
      {
        id: 336,
        text: "Филимон",
      },
      {
        id: 337,
        text: "Филипп",
      },
      {
        id: 338,
        text: "Хина",
      },
      {
        id: 339,
        text: "Шакира",
      },
      {
        id: 340,
        text: "Шахина",
      },
      {
        id: 372,
        text: "Эдга&#x301;р",
      },
      {
        id: 341,
        text: "Эдгар",
      },
      {
        id: 342,
        text: "Эдгарт",
      },
      {
        id: 343,
        text: "Эдита",
      },
      {
        id: 344,
        text: "Эдуард",
      },
      {
        id: 345,
        text: "Элеонора",
      },
      {
        id: 346,
        text: "Элина",
      },
      {
        id: 347,
        text: "Элла",
      },
      {
        id: 348,
        text: "Эльвиа",
      },
      {
        id: 349,
        text: "Эльдар",
      },
      {
        id: 350,
        text: "Эльнара",
      },
      {
        id: 351,
        text: "Юлиан",
      },
      {
        id: 352,
        text: "Юлиана",
      },
      {
        id: 353,
        text: "Юлий",
      },
      {
        id: 354,
        text: "Юлия",
      },
      {
        id: 355,
        text: "Юма",
      },
      {
        id: 356,
        text: "Юна",
      },
      {
        id: 357,
        text: "Юрий",
      },
      {
        id: 358,
        text: "Яков",
      },
      {
        id: 359,
        text: "Ян",
      },
      {
        id: 360,
        text: "Яна",
      },
      {
        id: 361,
        text: "Янина",
      },
      {
        id: 362,
        text: "Ярослав",
      },
      {
        id: 363,
        text: "Ясмина",
      },
    ],
    currentValue: "value",
    nameOptions: [
      { text: "Дорогому другу" },
      { text: "Милому другу" },
      { text: "Моему доброму другу" },
      { text: "Дружище!" },
      { text: "Несравненному!" },
      { text: "Несравненной!" },
      { text: "Непревзойденному таланту" },
      { text: "Светлому ангелу" },
      { text: "Мастеру своего дела" },
      { text: "Маме" },
      { text: "Папе" },
      { text: "Дорогому брату" },
      { text: "Дорогой сестре" },
      { text: "Бабушке" },
      { text: "Дедушке" },
      { text: "Любимой" },
      { text: "Любимому" },
      { text: "Доченьке" },
      { text: "Сыну" },
      { text: "Дорогому коллеге" },
      { text: "Дорогой коллеге" },
      { text: "Любимой подруге" },
    ],
    errorMessage: {
      recipient_name: null,
      audio: null,
    },
    submitStatus: null
  }),
  validations: {
    recipient_name: { required },
    audio: { required },
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    errorReset() {
      this.$v.$reset();

      this.errorMessage = {
        recipient_name: null,
        audio: null,
      };
    },
    handleOnSelect(selectedValue) {
      this.recipient_name = selectedValue.text;
    },
    handleOnSelectAudio(selectedValue) {
      this.audio = selectedValue.id;
    },
    goToNext() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;

      if (this.submitStatus !== "PENDING") {
        this.submitStatus = "PENDING";
        document.querySelector('.preloader').classList.add('_show');
        this.$store.commit("CHANGE_RECIPIENT_NAME", this.recipient_name);
        this.$store.commit("CHANGE_AUDIO_ID", this.audio);
        
        this.$store
          .dispatch("CompleteCongratulation", {
            congratulation_id: this.$store.getters.congratulation_id,
            private: this.$store.getters.privateMode,
            sender_name: this.$store.getters.sender_name,
            recipient_name: this.$store.getters.recipient_name,
            audio_id: this.$store.getters.audio_id,
          })
          .then((r) => {
            console.log(r);
            if (r.error != 0) {
              document.querySelector('.preloader').classList.remove('_show');
              this.submitStatus = null;
              this.$modal.show("common_error", {
                text: "Что-то пошло не так, " + r.message.common,
              });
            } else {
              this.submitStatus = null;
              document.querySelector('.preloader').classList.remove('_show');
              this.$store.commit("CHANGE_PINCODE", r.pin);
              this.$store.commit("CHANGE_VIDEO_URL", r.video);
              this.$root.$emit("nextStep");
            }
          })
          .catch((e) => {
            this.submitStatus = null;
            document.querySelector('.preloader').classList.remove('_show');
            this.$modal.show("common_error", {
              text: "Что-то пошло не так, " + e,
            });
          });
      }
    },
  },
  mounted() {
    setTimeout(() => {
      const recipient = document
        .getElementById("recipient_name")
        .querySelector("input");
      const audio = document.getElementById("audio_id").querySelector("input");
      if (recipient) {
        recipient.setAttribute("placeholder", "Впишите обращение");
      }
      if (audio) {
        audio.setAttribute("placeholder", "Выберите имя/обращение");
      }
    }, 100);
  },
  components: { ConstructorStep, VueInfiniteAutocomplete },
};
</script>

<style lang="scss">
.constructor-step__content {
  .infinite-autocomplete-wrapper {
    color: $yellow;
    input {
      height: rem(67px);
      appearance: none;
      font-size: rem(24px);
      background: #ffffff;
      border: 1px solid $yellow;
      border-radius: 0px;
      /*text-transform: uppercase;*/
      padding: 0 rem(15px) 0;
      letter-spacing: 1px;
      transition: all 0.3s ease-in-out;
      color: #1a1511;
      &::placeholder {
        color: $yellow;
        transition: 0.4s;
      }
      &:focus {
        outline: none;
        border-color: $red;
        &::placeholder {
          opacity: 0;
        }
      }
      @media (max-width: $sm) {
        height: rem(33px);
        font-size: rem(10px);
      }
    }
    ul {
      width: 100%;
      li {
        padding-top: rem(8px);
        font-size: rem(12px);
      }
    }
  }
}
</style>
