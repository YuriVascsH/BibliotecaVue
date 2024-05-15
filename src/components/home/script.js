import PopRegister from "../popregister/PopRegister.vue";

export default {
  components: {
    PopRegister,
  },

  data() {
    return {
      dialog: false,
      email: "",
      password: "",
      menuNavegacao: [
        { text: "Item 1", href: "#" },
        { text: "Item 2", href: "#" },
        { text: "Item 3", href: "#" },
      ],
      MostrarPopup: false,
    };
  },
};
