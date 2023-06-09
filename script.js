const { createApp } = Vue;

createApp({
  data() {
    return {
      discography: [],
    };
  },
  methods: {
    requestDiscography() {
        axios.get('http://localhost:8888/php-dischi-json/discography.php')
            .then(response => this.discography = response.data);
    },
    showModal(disco) {
      console.log(disco.albumYear + " " + disco.albumName);
    }
},
created() {
    this.requestDiscography();
}
}).mount('#app')