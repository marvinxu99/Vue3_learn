<script setup lang="ts">
// https://vuejs.org/guide/essentials/component-basics.html

import { ref } from 'vue'
import BlogPost from './BlogPost.vue'
import AlertBox from './AlertBox.vue'
import TSPropsExample from './TSPropsExample.vue'
import EventValidation from './EventValidation.vue'
import VModelExample from './VModelExample.vue'
import VModelExample2 from './VModelExample2.vue'
import VModelModifier from './VModelModifier.vue'
import FallthroughAttributes from './FallthroughAttributes.vue'
import FancyButton from './FancyButton.vue'
import AwesomeIcon from './AwesomeIcon.vue'
import NamedSlot from './NamedSlot.vue'
import FancyList from './FancyList.vue'

const count = ref(10)

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])

const postFontSize = ref(1)

const enlargeFont = () => {
  postFontSize.value = postFontSize.value > 3 ? 1 : postFontSize.value + 0.1
}

const onSubmit = (payload: { email: string; password: string }) => {
  console.log('Submitted payload:', payload)
  return payload.email.includes('@') // Example validation
}

const firstName = ref('first')
const lastName = ref('last')

const myText = ref('myText')
</script>

<template>
  <h3>Component Basic Examples</h3>
  <button @click="count++">You clicked me {{ count }} times.</button>
  <br />
  <h3>My Vue Posts:</h3>
  <div style="margin-left: 20px" :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="enlargeFont"
    />
  </div>
  <AlertBox type="error"> Something bad happened. </AlertBox>
  <br />
  <TSPropsExample title="hello world!" :likes="40" greeting-message="Hi, good morning!" />

  <TSPropsExample />

  <EventValidation @submit="onSubmit" />

  <VModelExample v-model="count" />
  <br />

  <VModelExample2 v-model:first-name="firstName" v-model:last-name="lastName" />

  <p>Parent value: {{ myText }}</p>
  <VModelModifier class="fake-class" style="margin-left: 20px" v-model.capitalize="myText" />

  <FallthroughAttributes class="fake-class test" style="color: red" />

  <FancyButton>Click Me</FancyButton>
  <FancyButton>
    <span style="color: cyan">Click me! </span>
    <AwesomeIcon />
  </FancyButton>
  <FancyButton />

  <NamedSlot>
    <template #header>
      <h1>Here might be a page title</h1>
    </template>

    <!-- implicit default slot -->
    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </NamedSlot>

  <FancyList api-url="/api/items" :per-page="10">
    <template #item="{ body, username, likes }">
      <div>
        <h3>{{ body }}</h3>
        <p>By: {{ username }}</p>
        <p>Likes: {{ likes }}</p>
      </div>
    </template>
  </FancyList>
</template>
