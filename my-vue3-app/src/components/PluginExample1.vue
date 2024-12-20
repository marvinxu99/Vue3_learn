<script setup lang="ts">
/* No need to import anything as $translate is globally available */
</script>

<template>
  <div>
    <h1>{{ $translate('en.greeting') }}</h1>
    <p>{{ $translate('en.nested.welcome') }}</p>
    <p>{{ $translate('fr.greeting') }}</p>
  </div>
</template>
