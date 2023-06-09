const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Questo messaggio proviene da vue",
    }
  }
}).mount('#app')