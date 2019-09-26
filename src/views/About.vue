<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <md-table>
        <md-table-row>
          <md-table-head md-numeric>ID</md-table-head>
          <md-table-head>Name</md-table-head>
          <md-table-head>Email</md-table-head>
          <md-table-head>Gender</md-table-head>
        </md-table-row>
        <md-table-row v-for="(user, index) in users" :key="user._id" class="toto">
          <md-table-cell  md-numeric>{{index}}</md-table-cell>
          <md-table-cell>{{user.first_name}}</md-table-cell>
          <md-table-cell>{{user.email}}</md-table-cell>
          <md-table-cell>{{user.gender}}</md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

    @Component({
      components: {
        HelloWorld
      }
    })
export default class About extends Vue {
    @Prop() private users!: any;
    private baseURL: string = 'http://localhost:3000';

    created () {
      this.getUsers()
    }

    async getUsers () {
      const res = await this.axios.get(this.baseURL + '/users')
      console.log(res.data)
      this.users = res.data
    }
}
</script>

<style scoped>
  .toto{
    background-color: #ecfff0;
    padding: 10px;
  }
  .about {
    margin: 30px;
  }
  .toto:hover {
    color: blue;
  }
</style>
