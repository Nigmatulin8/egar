<template>
  <div class="userCart">
    <div>
      <div class="userCart__avatar">
        <div class="userCart__avatar__pic">
          <v-img src="https://www.nicepng.com/png/full/914-9144016_avatar-pictures-anime-male-hair-reference.png"/>
        </div>
      </div>

      <div class="userCart__nsp">
        <div class="userCart__nsp-ns">
          <TextArea
              :content-class="'userCart__nsp-ns__text'"
              v-model="editedUser.firstName"
              :edit-mode="editMode"
          />

          <TextArea
              :content-class="'userCart__nsp-ns__text'"
              v-model="editedUser.secondName"
              :edit-mode="editMode"
          />
        </div>

        <div class="userCart__nsp-p">
          <TextArea
              :content-class="'userCart__nsp-ns__text'"
              v-model="editedUser.patronymicName"
              :edit-mode="editMode"
          />
        </div>
      </div>

      <div class="userCart__department">
        <div class="userCart__department__head"> Отдел: </div>

        <TextArea
            :content-class="'userCart__department__name'"
            v-model="editedUser.department"
            :edit-mode="editMode"
        />
      </div>

      <div class="userCart__birthDate">
        <div class="userCart__birthDate-text"> Дата рождения: </div>

        <TextArea
            :content-class="'userCart__birthDate-text'"
            v-model="editedUser.birthDate"
            :edit-mode="editMode"
        />
      </div>

      <div class="userCart__address">
        <div class="userCart__address-text"> Адрес: </div>

        <TextArea
            :content-class="'userCart__address-text'"
            v-model="editedUser.address"
            :edit-mode="editMode"
        />
      </div>

      <div class="userCart__about">
        <TextArea
            :content-class="'userCart__about-text'"
            v-model="editedUser.about"
            :edit-mode="editMode"
        />
      </div>
    </div>

    <div>
      <div class="userCart__actions">
        <!-- BEGIN. Edit buttons -->

        <v-btn
            v-if="!editMode"
            icon
            style="margin: 0 12px;"
            @click="editMode = true"
        >
          <v-icon> edit </v-icon>
        </v-btn>

        <v-btn
            v-if="editMode"
            icon
            style="margin: 0 12px;"
            @click="userUpdate"
        >
          <v-icon color="green"> save </v-icon>
        </v-btn>

        <!-- END. Edit buttons -->

        <!-- BEGIN. Delete buttons -->

        <v-btn
            icon
            @click="userDelete"
        >
          <v-icon color="red"> delete_outline </v-icon>
        </v-btn>

        <!-- BEGIN. Delete buttons -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import { userCartActions} from '@/store/helpers/actionsTypes';
import TextArea from '@/components/TextArea';
import {userCartMutations} from "@/store/helpers/mutationTypes";

export default {
  name: 'UserCart',

  components: {
    TextArea,
  },

  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    editMode: false,
  }),

  computed: {
      ...mapGetters({ }),

      editedUser() {
          return {
            ...this.user,
          }
      },
  },

  methods: {
    ...mapMutations({
        'updateFavoriteStatus' : userCartMutations.UPDATE_FAVORITE,
    }),

    ...mapActions({
        'deleteUser': userCartActions.DELETE_USER,
        'updateUser': userCartActions.UPDATE_USER,
    }),

    userDelete() {
      this.deleteUser(this.user);
    },

    userUpdate() {
      this.editMode = false;

      this.updateUser(this.editedUser)
    },
  },
}
</script>

<style lang="scss">
  .userCart {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 355px;
    min-width: 280px;
    max-width: 355px;
    height: 500px;
    background: #FFFFFF;
    box-shadow: -12px 23px 39px rgba(0, 0, 0, 0.08);
    border-radius: 24px;
    padding: 32px;
    margin: 0 16px 32px 16px;
    overflow: scroll;

    &__avatar {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 16px;

      &__pic {
        width: 147px;
        height: 147px;
      }
    }

    &__nsp { // Name, Surname, Patronymic
      margin-bottom: 8px;

      &-ns {
        display: flex;
        justify-content: center;

        &__text {
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
        }
      }

      &-p {
        display: flex;
        justify-content: center;
      }
    }

    &__department {
      display: flex;
      justify-content: center;
      align-items: center;

      &__head {
        font-size: 14px;
      }

      &__name {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
      }
    }

    &__birthDate {
      display: flex;
      justify-content: center;
      margin-top: 8px;

      &-text {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      }
    }

    &__address {
      display: flex;
      justify-content: center;
      margin-top: 4px;

      &-text {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
      }
    }

    &__about {
      margin-top: 16px;
      margin-bottom: 36px;
      text-align: center;

      &-text {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        opacity: 0.65;
      }
    }

    &__actions {
      display: flex;
      justify-content: center;
    }
  }
</style>