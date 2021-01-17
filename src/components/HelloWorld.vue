<template>
  <div class="hello">
    <div>
      <button v-on:click="loadPersonList()">Load Persons</button>
    </div>
    <ul/>
    <a>Liste des personnes ({{this.personList.length}}): </a>
    <ul/>
    <li v-if="isVisible" v-for="pers in this.personList" v-bind:key="pers">{{pers.id}} : {{pers.lastname}} {{pers.firstname}}</li>
     <ul/>
    <ul/>
    <h2>Find a family name</h2>
    <ul/>
    <form>
      <input v-model="name" placeholder="Cherchez un nom">
      <button v-on:click="loadFamily(name)">search</button>
    </form>
    <ul/>
    <a>List of family ({{this.familyList.length}}): </a>
    <ul/>
    <li v-if="isVisible2" v-for="pers in this.familyList" v-bind:key="pers">{{pers.id}} : {{pers.lastname}} {{pers.firstname}}</li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      personList: [],
      familyList: []
    }
  },
  computed:
  {
    isVisible () {
      console.log(this.personList)
      return this.personList !== undefined && this.personList.length > 0
    },
    isVisible2 () {
      console.log(this.familyList)
      return this.familyList !== undefined && this.familyList.length > 0
    }
  },
  mounted () {
    this.loadPersonList()
    this.loadFamily()
  },
  methods: {
    loadPersonList () {
      this.$store.dispatch('getPersonList')
      this.personList = this.$store.state.person.personList
    },
    loadFamily (lastname) {
      this.$store.dispatch('getFamily', lastname)
      this.familyList = this.$store.state.person.familyList
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
