<template>
  <article>
    <v-card
        class="mx-auto my-12"
        max-width="374"
        @click="article_push(id)"
    >
        <v-img
        height="250"
        :src="image"
        @click="article_push(id)"
        ></v-img>

        <v-card-title
          @click="article_push(id)">{{ title }}</v-card-title>

        <v-card-text>

        {{ description }}

        </v-card-text>

        <v-divider class="mx-4"></v-divider>
    </v-card>
  </article>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  },
  methods: {
    article_push(id) {
      this.$router.push({ path: `/articles/${id}` })
    },
  }
}
</script>
<style scoped>
.v-card {
  border-radius: 12px;
}
</style>