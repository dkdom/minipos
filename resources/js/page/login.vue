<template>
  <div class="authentication-wrapper authentication-basic container-p-y">
    <div class="authentication-inner d-flex justify-content-center">
      <!-- Register -->
      <div class="card col-md-4">
        <div class="card-body">
          <!-- Logo -->
          <div class="app-brand justify-content-center"></div>
          <!-- /Logo -->
          <h2 class="text-center">ສະບາຍດີ, ຍິນດີຕ້ອນຮັບ</h2>

            <div class="mb-3 fv-plugins-icon-container">
              <label for="email" class="form-label">ອີເມວລ໌</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email-username"
                placeholder="ປ້ອນອີເມວລ໌"
                autofocus=""
              />
              <div class="fv-plugins-message-container invalid-feedback"></div>
            </div>
            <div class="mb-3 form-password-toggle fv-plugins-icon-container">
              <label for="password" class="form-label">ລະຫັດຜ່ານ</label>
              <div class="input-group input-group-merge has-validation">
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  name="password"
                  placeholder="············"
                  aria-describedby="password"
                />
                <span class="input-group-text cursor-pointer"
                  ><i class="bx bx-hide"></i
                ></span>
              </div>
              <div class="fv-plugins-message-container invalid-feedback"></div>
            </div>

            <div class="mb-3">
              <button class="btn btn-primary d-grid w-100" type="submit">
                ເຂົ້າສູ່ລະບົບ
              </button>
            </div>
            <input type="hidden" />

          <p class="text-center">
            <span>ບໍ່ມີບັນຊີ | </span>
            <router-link to="/register">
              <span>ສ້າງບັນຊີໃໝ່</span>
            </router-link>
          </p>

        </div>
      </div>
      <!-- /Register -->
    </div>
  </div>
</template>

<script>
import { useStore } from "../store/auth";

export default {
  name: "MiniposLogin",

  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>