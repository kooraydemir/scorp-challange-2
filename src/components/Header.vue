<template>
  <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">
            <b-icon icon="camera" style="color:#fff;" font-scale="2"></b-icon>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item >
          <router-link :to="'index'" v-localize="{i:'header.home'}"></router-link>
        </b-nav-item>
    
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="mt-1">
          <router-link :to="'about'"  v-localize="{i: 'header.contactus'}"></router-link>
        </b-nav-item>
        <div  class="mt-1">
        
        <b-nav-item-dropdown  right>
           <template slot="button-content"> <label  v-localize="{i: 'header.language'}"></label></template>
          <b-dropdown-item v-on:click="$locale({l: 'en-US'})">EN</b-dropdown-item>
          <b-dropdown-item  v-on:click="$locale({l: 'tr-TR'})">TR</b-dropdown-item>
        </b-nav-item-dropdown>
        </div>
    
        <b-nav-item-dropdown   class="mt-1" v-if="userInfo.name" right>
          <template #button-content>
            <em>{{userInfo.name}}</em>
          </template>
          <b-dropdown-item href="#">{{userInfo.email}}</b-dropdown-item>
          <b-dropdown-item @click="logout()" ><label  v-localize="{i: 'header.logout'}"></label></b-dropdown-item>
        </b-nav-item-dropdown>
         <b-button  v-if="!userInfo.name" v-b-modal.modal-prevent-closing  v-localize="{i: 'header.login'}"></b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Login"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group
          label="E-Mail"
          label-for="email-input"
          invalid-feedback="Email is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>
          <b-form-group
          label="Password"
          label-for="password-input"
          invalid-feedback="Password is required"
          :state="passwordState"
        >
          <b-form-input
            id="password-input"
            v-model="password"
            :state="passwordState"
            type="password"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
</div>
</template>

<script>
export default {
  name: 'scorpHeader',
    data() {
      return {
        userInfo: {
          name: "",
          email:"",
          password: null
        },
        name: '',
        email: '',
        password: '',
        nameState: null,
        emailState: null,
        passwordState: null,
      }
    },
    mounted() {
         if(localStorage.userInfo) {
         var currentUser = localStorage.getItem('userInfo')
         var parsedUser = JSON.parse(currentUser)
        this.userInfo.name = parsedUser.name
        this.userInfo.email = parsedUser.email
      }
    },
      methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        this.emailState = valid
        this.passwordState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
        this.email = ""
        this.emailState = null
        this.password=null
        this.passwordState = null
      },
      
      handleOk(bvModalEvt) {
        bvModalEvt.preventDefault()
        this.handleSubmit()
      },
      handleSubmit() {
        if (!this.checkFormValidity()) {
          localStorage.setItem('userInfo', JSON.stringify(state));
          return
        }
        this.userInfo.name = this.name
        this.userInfo.email = this.email
        this.userInfo.password = this.password
        localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
        console.log(this.userInfo)
       
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
      logout() {
        localStorage.removeItem('userInfo')
        this.userInfo.name = "",
        this.userInfo.email = "",
        this.userInfo.password = null
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
