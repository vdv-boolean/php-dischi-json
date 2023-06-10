const { createApp } = Vue;

createApp({
  data() {
    return {
      discography: [],
      isActive: false,
      highlighted: [],
    };
  },
  methods: {
    requestDiscography() {
        axios.get('http://localhost:8888/php-dischi-json/discography.php')
            .then(response => this.discography = response.data);
    },
    toggleModal() {
      this.isActive = !this.isActive;
    },
    toggleAndPaste(disco) {
      this.highlighted = disco;
      this.toggleModal();
    },
    
},
created() {
    this.requestDiscography();
}
}).mount('#app')