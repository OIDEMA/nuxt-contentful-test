<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="6" lg="4" sm="4" ms="4" v-for="(post, i) in posts" :key="i">
                <card
                    :id="post.sys.id"
                    :title="post.fields.name"
                    :description="post.fields.description"
                    :date="post.sys.updatedAt"
                    :image="post.fields.thumbnail.fields.file.url"
                />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import contentful from '@/plugins/contentful'
import Card from '~/components/card.vue'
export default {
  components: {
    Card
  },
  asyncData() {
    return contentful
      .getEntries({
      'content_type': 'hujihara',
       order: '-sys.createdAt',
    })
    .then((entries) => {
        console.log(entries.items[0].fields.thumbnail.fields.file.url)
        return {
          posts: entries.items
        }
    })
    .catch(console.error)
  }
}
</script>
<style scoped>

</style>