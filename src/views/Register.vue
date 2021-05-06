<template>
  <div class="view-content login-signup">
    <div class="view-box">

      <form class="view-container" @submit.prevent="submitSignUpForm">

        <div class="form-group">
          <label>Saisissez votre Prénom *</label>
          <input type="text" v-model="signup.firstname" class="form-control" autofocus required minlength="4"/>


        </div>

        <div class="form-group">
          <label>Saisissez votre adresse e-mail *</label>
          <input type="email" v-model="signup.email" class="form-control" required />
        </div>

        <div class="form-group">
          <label>Saisissez votre numéro de téléphone *</label>
          <input type="tel" id="phone" name="phone"
                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                 v-model="signup.phone" class="form-control" required minlength="10" maxlength="10"/>
        </div>

        <div class="form-group">
          <label>Choisissez un mot de passe *</label>
          <input type="password" v-model="signup.password" class="form-control" required minlength="8" />
        </div>


        <div class="form-group">
          <label for="acept-cgv" class="field-checkbox" >
            <input type="checkbox" id="acept-cgv" v-model="signup.cgvu">
            <span class="checkmark"></span>
            <span class="label">J'accepte les <a href="/cgv" >conditions générales de ventes et d'utilisations</a> de wood box.</span>
          </label>
        </div>

        <div class="form-group action">
          <button class="btn btn-primary">Inscription</button>
        </div>


      </form>

    </div>

  </div>

</template>

<script>
// import CategorieService from "@/services/Categorie.service";

import CategorieService from "@/services/Categorie.service";

export default {
  components: {

  },
  data() {
    return {
      signup: {
        firstname: '',
        email: '',
        phone: '',
        password: '',
        cgvu: false,
      },
      submitted: false,
    };
  },
  methods: {
    submitSignUpForm() {
      console.log(this.signup)
      alert("you're succefully registered, please don't check your mailbox")
      CategorieService.Register(this.signup)
          .then((response) => {
            console.log(response)
            this.category = response
            console.log(this.category)
          })
          .catch((error) => {
            this.loading = false
            console.log(error)
            console.log(error.response)
          })

    }
  }
}

</script>
<style>
.view-box{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>