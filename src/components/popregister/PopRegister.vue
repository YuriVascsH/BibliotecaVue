<template>
  <v-card class="popup-card">
    <v-row>
      <v-col cols="6" class="red">

      </v-col>
      <v-col cols="6">
        <div>
        <v-btn icon @click="$emit('close')" class="d-flex justify-end">
  <v-icon>mdi-close</v-icon>
</v-btn></div>
          <v-card-title>
      <span>Registrar</span>
     </v-card-title>
   
    <v-card-text>
      <v-form>
        <v-text-field
          v-model="email"
          label="Email"
          filled
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Password"
          filled
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('close')">Close</v-btn>
    </v-card-actions>
  </v-col>
  </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.popup-card {
  width: 100%;
  max-width: 1080px;
  height: 600px; /* Adjust the height as necessary */
}
</style>
