<template>
 <v-container fluid pa-0 ma-0>
     <v-row justify="center" align="center">
         <v-col cols="12" lg="7" sm="8" class="my-lg-6">
            <v-img
                height="330"
                :src="post.fields.thumbnail.fields.file.url"
                >
            </v-img>
            <p>{{ post.fields.name }}</p>
            
            <div v-for="(item, i) in post.fields.Body.content" :key=i >
                <h2 v-if="item.nodeType ==='heading-2'">{{ item.content[0].value }}</h2>
                <h3 v-if="item.nodeType ==='heading-3'">{{ item.content[0].value }}</h3>
                <p v-if="item.nodeType ==='paragraph'">{{ item.content[0].value }}</p>
            </div>
         </v-col>
     </v-row>
 </v-container>
</template>
<script>
import contentful from '@/plugins/contentful'
export default {
  asyncData({ params }) {
    return contentful
        .getEntry(params.id)
        .then((entry) => {
            console.log({'コンテンツ': entry.fields.Body.content} )
            return { post: entry }
        })
        .catch(console.error)
    }
}
</script>