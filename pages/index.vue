<template>
 <div>
   <p>hello</p>
   {{user.email}}
   <p>{{$store.state}}</p>
   <p>{{$auth.user}}</p>
      <h2>ログイン状態:{{ $auth.loggedIn }}</h2>
      <p>{{this.$auth.$state}}</p>
   <button @click="logout">logout</button>
 </div>
</template>

<script>
export default {
  name: 'AuthorityIcon',
  middleware({ store, redirect }) {
    if(!store.$auth.loggedIn) {
      redirect('/login');
    }
  },
  computed: {
    user() {
      return this.$auth.user;
    }
  },
  methods: {
    logout() {
      this.$auth.logout();
    },
  }
}
</script>
