<script setup lang="ts">
// https://vuejs.org/guide/essentials/event-handling.html

import { ref } from 'vue'

const text = ref('input')
const text2 = ref('')
const message = ref('')

const checkedNames = ref(['John'])
const picked = ref('Two')
const selected = ref('')

const selected2 = ref('')
const options = ref([
  { text: 'One', value: 'A' },
  { text: 'Two', value: 'B' },
  { text: 'Three', value: 'C' },
])
</script>

<template>
  <h2>Form Input Binding</h2>

  <input :value="text" @input="(event) => (text = event.target.value)" />
  <p>text = {{ text }}</p>

  <p>text2 is: {{ text2 }}</p>
  <input v-model="text2" placeholder="edit me" />
  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
  </div>
  <div>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>
  </div>

  <div>
    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
  </div>

  <div>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
  </div>
  <div>
    <div>Selected: {{ selected2 }}</div>
    <select v-model="selected2">
      <option disabled value="">Please select one</option>
      <option v-for="option in options" :value="option.value" :key="option.value">
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
