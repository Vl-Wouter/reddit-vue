<template>
  <v-container fluid>
      <v-layout row wrap>
        <v-flex xs8 offset-xs2>
          <h1>r/webdev</h1>
          <v-flex xs12 my-3 v-for="post in posts" :key="post.id">
            <v-card elevation-4>
              <v-layout>
                <v-flex xs2 v-if="post.data.thumbnail != 'self'">
                  <v-img
                    :src='post.data.thumbnail'
                    height="120px"
                    contain
                    ></v-img>
                </v-flex>
                <v-flex v-if="post.data.thumbnail != 'self'" xs11>
                  <v-card-title primary-title>
                    <div class='flex-inline'><h3>{{ post.data.title }}</h3><v-chip v-if="post.data.link_flair_css_class != null">{{ post.data.link_flair_text }}</v-chip></div>
                    <div>{{ post.data.selftext }}</div>
                    <div mt-1 class='flex-inline start'><a :href='"https://www.reddit.com/" + post.data.permalink'>{{ post.data.num_comments }} comments</a> <p></p></div>
                  </v-card-title>
                </v-flex>
                <v-flex v-if="post.data.thumbnail == 'self'" xs12>
                  <v-card-title primary-title>
                    <div class='flex-inline'><h3>{{ post.data.title }}</h3><v-chip v-if="post.data.link_flair_css_class != null">{{ post.data.link_flair_text }}</v-chip></div>
                    <div>{{ post.data.selftext }}</div>
                    <div mt-1 class='flex-inline start'><a :href='"https://www.reddit.com/" + post.data.permalink'>{{ post.data.num_comments }} comments</a> <p></p></div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<!-- Script to fetch api -->
<script>
export default {
  name: 'Webdev',
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      // load posts from API
      const url = 'https://www.reddit.com/r/webdev/.json';
      fetch(url)
        .then(response => response.json())
        .then((result) => {
          // result.data.children.forEach((child) => {
          //   child.showImage = false;
          // });
          this.posts = result.data.children;
          console.log(this.posts);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-inline {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
}

.start {
  justify-content: flex-start;
}

</style>
