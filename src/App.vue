<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input v-model="newTask" id="taskBox" placeholder="Enter Task" style="margin-bottom:15px" @keyup.enter="add"></b-form-input>
         <b-button class="ml-2" style="margin-bottom: 15px" variant="primary" @click="add">Add</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="p-2 alert alert-secondary">
          <h3>Backlog</h3>
          <draggable class="list-group" :list="arrBacklog" group="tasks">
            <div class="list-group-item" v-for="element in arrBacklog" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-primary">
          <h3>In Progress</h3>
          <draggable class="list-group" :list="arrInProgress" group="tasks">
            <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-warning">
          <h3>Tested</h3>
          <draggable class="list-group" :list="arrTested" group="tasks">
            <div class="list-group-item" v-for="element in arrTested" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-success">
          <h3>Done</h3>
          <draggable class="list-group" :list="arrDone" group="tasks">
            <div class="list-group-item" v-for="element in arrDone" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import main from './main'


export default {
  name: 'App',
  components: {
  draggable
  },
  data() {
    return {
      newTask: "",
      arrBacklog: [
        {name: "Code sign up page"},
        {name: "Test dashboard"},
        {name: "Style Registeration"},
        {name: "say help with designs"}
      ],
      arrInProgress: [],
      arrTested: [],
      arrDone:[]

    }
  },
  methods: {
    add() {
        if(this.newTask) {
        this.arrBacklog.push({name:this.newTask});
      }
      main.db.collection('boards').add({
        newTask: this.newTask
      })
      .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
    console.error("Error adding document: ", error);
      });
      
    },
    delete() {

    }
  }
}
</script>

<style>


</style>
