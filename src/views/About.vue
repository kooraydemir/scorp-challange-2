<template>
  <div class="about p-5">
       <b-form class="col-md-8 offset-md-2 col-xs-12">
        <div class="col-md-12 row">
        <label class="col-md-3" for="input-1"  v-localize="{i: 'header.name'}"></label>
        <b-form-input
        class="col-md-6"
          id="input-1"
          v-model="contactForm.name"
          type="text"
          required
        ></b-form-input>
        </div>
        <div class="col-md-12 row mt-5">
        <label l class="col-md-3" for="input-2"  v-localize="{i: 'header.email'}"></label>
        <b-form-input
          class="col-md-6"
          id="input-2"
          v-model="contactForm.email"
          type="email"
          required
        ></b-form-input>
        </div>
         <div class="col-md-12 row mt-5">
        <label l class="col-md-3" for="input-3"  v-localize="{i: 'header.number'}"></label>
        <b-form-input
          class="col-md-6"
          id="input-3"
          v-model="contactForm.phoneNumber"
          type="number"
          required
        ></b-form-input>
        </div>
           <div class="col-md-12 row mt-5">
        <label l class="col-md-3" for="input-4"  v-localize="{i: 'header.country'}"></label>
    <b-form-select  class="col-md-6" v-model="contactForm.selectedCountry" :options="countryList"></b-form-select>
          </div>
          <div class="col-md-12 row mt-5">
        <label l class="col-md-3" for="input-4"  v-localize="{i: 'header.text'}"></label>
              <b-form-textarea
                class="col-md-6"
              id="textarea"
              v-model="contactForm.text"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
       </div>
      <b-button type="button" @click='submitForm()' class="mt-3" variant="primary"  v-localize="{i: 'header.submit'}"></b-button>
    </b-form>
  </div>
</template>
<script>
export default {
  name: 'scorpHeader',
    data() {
      return {
        contactForm: {
            name: '',
            email: '',
            phoneNumber: null,
            text: '',
            selectedCountry: null,
        },
         countryList : [
            { value: "TR", text: "Turkey" },
            { value: "US", text: "United States of America" },
            { value: "GB", text: "United Kingdom" },
            { value: "DE", text: "Germany" },
            { value: "SE", text: "Sweden" },
            { value: "KE", text: "Kenya" },
            { value: "BR", text: "Brazil" },
            { value: "ZW", text: "Zimbabwe" }
          ]
      }
    },
    methods: {
      submitForm(){
        console.log(JSON.stringify(this.contactForm))
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

</style>
