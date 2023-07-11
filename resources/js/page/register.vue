<template>
  <div class="authentication-wrapper authentication-basic container-p-y">
    <div class="authentication-inner d-flex justify-content-center">
      <!-- Register -->
      <div class="card col-md-4">
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center"></div>
          <!-- /Logo -->
          <h2 class="text-center">ສ້າງບັນຊີໃໝ່</h2>

          <div class="mb-3 fv-plugins-icon-container">
            <label for="email" class="form-label">ຊື່</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              name="email-username"
              placeholder="ປ້ອນອີເມວລ໌"
              autofocus=""
            />
          </div>
          <div class="mb-3 fv-plugins-icon-container">
            <label for="email" class="form-label">ອີເມວລ໌</label>
            <input
              type="text"
              class="form-control"
              id="email"
              v-model="email"
              name="email-username"
              placeholder="ປ້ອນອີເມວລ໌"
              autofocus=""
            />
          </div>

          <div class="mb-3 form-password-toggle fv-plugins-icon-container">
            <label for="password" class="form-label">ລະຫັດຜ່ານ</label>
            <div class="input-group input-group-merge has-validation">
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control"
                name="password"
                placeholder="············"
                aria-describedby="password"
              />
              <span class="input-group-text cursor-pointer"
                ><i class="bx bx-hide"></i
              ></span>
            </div>
          </div>
          <div class="mb-3 form-password-toggle fv-plugins-icon-container">
            <label for="password" class="form-label">ຢືນຢັນ ລະຫັດຜ່ານ</label>
            <div class="input-group input-group-merge has-validation">
              <input
                type="password"
                id="password2"
                v-model="password2"
                class="form-control"
                name="password"
                placeholder="············"
                aria-describedby="password"
              />
              <span class="input-group-text cursor-pointer"
                ><i class="bx bx-hide"></i
              ></span>
            </div>
          </div>

          <div class="alert alert-warning" role="alert" v-if="show_error">
            {{ text_error }}
          </div>

          <div class="mb-3">
            <button
              class="btn btn-secondary d-grid w-100"
              type="button"
              @click="register()"
            >
              ລົງທະບຽນ
            </button>
          </div>
          <input type="hidden" />

          <p class="text-center">
            <span>ມີບັນຊີແລ້ວ | </span>
            <router-link to="/login">
              <span>ເຂົ້າສູ່ລະບົບ</span>
            </router-link>
          </p>
        </div>
      </div>
      <!-- /Register -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MiniposRegister",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      show_error: false,
      text_error: "",
    };
  },

  mounted() {},

  methods: {
    register() {
      if (
        this.name == "" ||
        this.email == "" ||
        this.password == "" ||
        this.password2 == ""
      ) {
        this.show_error = true;
        this.text_error = "ກະລຸນາປ້ອນຂໍ້ມູນໃຫ້ຄົບຖ້ວນ";
      } else {
        this.show_error = false;
        this.text_error = "";

        if (this.password == this.password2) {
        } else {
          this.show_error = true;
          this.text_error = "ລະຫັດຜ່ານບໍ່ກົງກັນ";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>