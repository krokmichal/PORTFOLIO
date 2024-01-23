const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          title: "Lunar Moon",
          author: "Terry Crosby",
          img: "/images/book1.jpeg",
          isFav: true,
        },
        {
          title: "Memory",
          author: "Angelina Aludo",
          img: "/images/book2.jpg",
          isFav: false,
        },
        {
          title: "Soul",
          author: "Olivia Wilson",
          img: "/images/book3.jpg",
          isFav: true,
        },
      ],

      booksDisplayed: true,
      text: "Hide Books",
    };
  },
  methods: {
    toggleBooks() {
      this.booksDisplayed = !this.booksDisplayed;
    },

    isFav() {},
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
