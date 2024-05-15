<template>
  <v-app>
    <v-app-bar app color="white" elevate-on-scroll>
      <v-toolbar-title class="titlebar">Beyond</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        elevation="3"
        color="transparent"
        class="orange-border margin-left"
        @click="dialog = true"
        >Registrar</v-btn
      >
      <!-- Inicio -->
      <v-dialog
        v-model="dialog"
        persistent
        max-width="1080px"
        max-height="7680px"
      >
        <v-card>
          <v-container>
            <v-row>
              <!-- Imagem do lado esquerdo -->
              <v-col
                cols="12"
                md="6"
                class="d-flex align-center justify-center"
                style="background-color: blue"
              >
                <img
                  src="../assets/pop.png"
                  style="max-width: 100%; height: auto"
                />
              </v-col>

              <!-- Formulário do lado direito -->
              <v-col cols="12" md="6">
                <v-card flat>
                  <!-- Botão de fechar -->
                  <v-row justify="end">
                    <v-btn icon @click="dialog = false">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-row>

                  <!-- Texto de boas-vindas -->
                  <v-card-text>
                    <h2 class="text-center">Registro</h2>
                    <h5 class="text-center">Seja Bem vindo</h5>
                  </v-card-text>

                  <!-- Formulário de login -->
                  <v-form @submit.prevent="login">
                    <v-row justify="center">
                      <v-col cols="12" md="8">
                        <v-text-field
                          v-model="email"
                          label="Email"
                          filled
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row justify="center">
                      <v-col cols="12" md="8">
                        <v-text-field
                          v-model="password"
                          label="Senha"
                          type="password"
                          filled
                          required
                        ></v-text-field>
                      </v-col>
                    </v-row>

                    <v-row justify="center">
                      <v-col cols="12" md="8">
                        <v-card-actions
                          class="botao"
                          style="justify-content: center"
                        >
                          <v-btn
                            @click="register"
                            width="200px"
                            type="submit"
                            color="primary"
                          >
                            Criar Conta
                          </v-btn>
                        </v-card-actions>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
      <!-- Fim -->
      <!-- Botão de Login -->
      <v-btn
        elevation="3"
        color="transparent"
        class="orange-border margin-left"
      >
        Sign up
      </v-btn>
    </v-app-bar>
    <!-- Conteudo Principal -->
    <v-main>
      <v-container class="mt-10">
        <v-row>
          <v-col cols="6">
            <h2 style="margin-bottom: 10px">Biblioteca Digital</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur deleniti error saepe illum quis possimus natus
              asperiores perspiciatis est iure, nostrum aperiam quibusdam, sint
              eveniet? Temporibus ad necessitatibus voluptates pariatur?
            </p>
            <v-btn class="mr-6">Iniciar</v-btn>
            <v-btn>Planos</v-btn>
          </v-col>
          <v-col cols="6">
            <img width="100%" src="../assets/home.jpg" />
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <!-- Seção 1 -->
        <v-row color="red lighten-1">
          <v-col cols="12" class="text-center">
            <h2>Nossos Serviços</h2>
            <v-row>
              <v-col cols="4">
                <v-card
                  color="red"
                  height="150px"
                  class="cartao d-flex justify-center align-center"
                >
                  <v-icon>mdi-school</v-icon>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card
                  color="red"
                  height="150px"
                  class="cartao d-flex justify-center align-center"
                >
                  <v-icon>mdi-library</v-icon>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card
                  color="red"
                  height="150px"
                  class="cartao d-flex justify-center align-center"
                >
                  <v-icon>mdi-library</v-icon>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- Seção 2 -->
        <v-row>
          <v-col cols="12" class="text-center">
            <h2>Seção 2</h2>
            <p>Conteúdo da Seção 2...</p>
          </v-col>
        </v-row>

        <!-- Adicione mais seções conforme necessário -->
      </v-container>
    </v-main>

    <!-- Foooter -->
    <v-footer dark>
      <v-row class="inicio" justify="space-around">
        <!-- Empresa -->
        <v-col cols="3">
          <h2>Beyond</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            nemo consequatur facilis deleniti fugit, labore provident quia nam
            voluptatem libero at dignissimos dolore corrupti perspiciatis
            delectus obcaecati nesciunt beatae voluptates.
          </p>
          <v-icon class="icone direita" size="30">mdi-linkedin</v-icon>
          <v-icon class="icone direita" size="30">mdi-instagram</v-icon>
          <v-icon class="icone" size="30">mdi-facebook</v-icon>
        </v-col>

        <!-- Explore -->
        <v-col cols="2" class="text-start">
          <h3>Explore</h3>
          <v-list dense class="transparent">
            <v-list-item>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Planos</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Serviços</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Parceiros</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Contato</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="2" class="text-start">
          <h3>Serviços</h3>
          <v-list dense class="transparent">
            <v-list-item>
              <v-list-item-title>Reforço online</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Biblioteca Digital</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Consultoria de Carreira</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>

        <!-- Contato -->
        <v-col cols="2">
          <h3>Contato</h3>
          <div class="espaco inicio">
            <v-icon class="fundo">mdi-map-marker</v-icon>
            <span>Recife, Cidade Universitária</span>
          </div>
          <div class="espaco">
            <v-icon class="fundo">mdi-phone</v-icon>
            <span>(81) 98765-9876</span>
          </div>
          <div class="espaco">
            <v-icon class="fundo">mdi-email</v-icon>
            <span>supporte@gmail.com</span>
          </div>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style src="../components/home/style.css"></style>

<script src="../components/home/script.js"></script>
