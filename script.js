const { createApp } = Vue;

createApp({
  data() {
    return {
      discography: [],
      isActive: false,
    };
  },
  methods: {
    requestDiscography() {
        axios.get('http://localhost:8888/php-dischi-json/discography.php')
            .then(response => this.discography = response.data);
    },
    toggleModal(disco) {
      this.isActive = !this.isActive;
    },
},
created() {
    this.requestDiscography();
}
}).mount('#app')