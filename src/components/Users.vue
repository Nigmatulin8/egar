<template>
  <v-container class="container">
      <header class="header">
        <div class="header__logo">
          <!-- Лого просто взято с интернета -->
          <v-img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/EGAR_Technology_logo.svg/1200px-EGAR_Technology_logo.svg.png" />
        </div>
        <div class="header__button">
          <v-dialog
              v-model="dialog"
              persistent
              max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  rounded
                  v-bind="attrs"
                  v-on="on"
                  width="150px"
              >
                Добавить
              </v-btn>
            </template>

            <v-card>
              <v-card-title>
                <span class="text-h5">Новый сотрудник</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                        cols="12"
                    >
                      <v-text-field
                          v-model="user.firstName"
                          label="Имя*"
                          required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                          v-model="user.secondName"
                          label="Фамилия*"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                          v-model="user.patronymicName"
                          label="Отчество"
                          hint="При наличии"
                          persistent-hint
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                          v-model="user.birthDate"
                          label="Дата рождения*"
                          type="date"
                          required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                          v-model="user.address"
                          label="Адрес проживания*"
                          required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-text-field
                          v-model="user.department"
                          label="Отдел*"
                          required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12">
                      <v-textarea
                          v-model="user.about"
                          label="О себе"
                          auto-grow
                          maxLength="240"
                          :placeholder="'Сообщение длинной 240 символов'"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>

              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="closeCreateModal"
                >
                  Закрыть
                </v-btn>
                <v-btn
                    color="blue darken-1"
                    text
                    @click="addNewUser"
                >
                  Создать
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </header>

      <div class="content">
          <div
              v-if="!sortedUsers.length"
              class="content__add"
          >
            Нажмите на кнопку "Добавить" чтобы создать первого сотрудника.
          </div>

          <UserCart
              v-for="(user, index) in sortedUsers"
              :user="user"
              :key="index"
          />
      </div>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { userActions } from '@/store/helpers/actionsTypes';
import UserCart from '@/components/UserCart';

export default {
  name: "Users",

  components: {
    UserCart,
  },

  data: () => ({
    dialog: false,

    user: {
      firstName: '',
      secondName: '',
      patronymicName: '',
      department: '',
      birthDate: '',
      address: '',
      about: '',
    }
  }),

  computed: {
      ...mapGetters([
          'usersList',
      ]),

      sortedUsers() {
        // Отбираем только те, которые мы сами добавили
        return this.usersList.filter(user => user.firstName && user.secondName);
      },
  },

  methods: {
    ...mapMutations ({

    }),

    ...mapActions({
      'getUsers': userActions.GET_USERS,
      'createUser': userActions.CREATE_USER,
    }),

    addNewUser() {
        this.dialog = false;

        this.createUser(this.user);

        this.user = {
          firstName: '',
          secondName: '',
          patronymicName: '',
          department: '',
          birthDate: '',
          address: '',
          about: '',
        };
    },

    closeCreateModal() {
      this.dialog = false;

      this.user = {
        firstName: '',
        secondName: '',
        patronymicName: '',
        department: '',
        birthDate: '',
        address: '',
        about: '',
      };
    },
  },

  created() {
      this.getUsers();
  }
}
</script>

<style lang="scss">
  .v-text-field {
    padding-top: 0;
    margin-top: 0;
  }

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .container {

  }

  .header {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    background: whitesmoke;
    justify-content: space-between;
    align-items: center;
    padding: 12px 10%;

    &__logo {
      width: 150px;
    }

    &__button {

      & button {
        text-transform: capitalize;
        letter-spacing: 0;
        font-weight: 300;
      }
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: 84px;
  }
</style>