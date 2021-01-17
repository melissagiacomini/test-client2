<template>
  <div class="hello">
    <h1>Add someone</h1>
    <form >
     <input v-model="lastname" id="ln" placeholder="Entrez un nom">
     <input v-model="firstname" id="fn" placeholder="Entrez un prénom">
     <div>{{firstname}} {{lastname}}</div>
     <button v-on:click="AddPerson()">Add</button>
    </form>
    <ul/>
    <a>Liste of people ({{this.personList.length}}): </a>
    <ul/>
     <li v-for="pers in this.personList" v-bind:key="pers">{{pers.id}} : {{pers.lastname}} {{pers.firstname}}</li>
    <ul/>
    <div>
      <button v-on:click="loadPersonList()">Load Persons</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      personList: [],
      lastname: null,
      firstname: null
    }
  },
  mounted () {
    this.AddPerson()
    this.loadPersonList()
  },
  methods: {
    loadPersonList () {
      this.$store.dispatch('getPersonList')
      this.personList = this.$store.state.person.personList
    },

    AddPerson () {
      var name = [ this.firstname, this.lastname ]
      if (this.firstname !== undefined && this.firstname !== null && this.lastname !== undefined && this.lastname !== null) {
        this.$store.dispatch('AddPerson', name)
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: left;
  margin: 0 10px;
  border : dotted #B0C4DE 1px;
}
a {
  color: #42b983;
}

button {
  background : #42b983;
  width:150px;
}
</style>
