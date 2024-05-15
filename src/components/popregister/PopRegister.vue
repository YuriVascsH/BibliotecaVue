<v-dialog v-model="dialog" persistent max-width="1080px" max-height="7680px">
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
                            @click="registrar"
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
