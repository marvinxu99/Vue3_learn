<script setup lang="ts">
// https://vuejs.org/guide/essentials/component-basics.html

import { ref } from 'vue'
import BlogPost from './BlogPost.vue'
import AlertBox from './AlertBox.vue'
import TSExampleComponent from './TSExampleComponent.vue'

const count = ref(0)

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' },
])

const postFontSize = ref(1)

const enlargeFont = () => {
  postFontSize.value = postFontSize.value > 3 ? 1 : postFontSize.value + 0.1
}
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
  <TSExampleComponent title="hello world!" :likes="40" />
</template>
