<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col form-inline">
        <b-form-input v-model="newTask" id="taskBox" placeholder="Task here" style="margin-bottom:15px" @keyup.enter="add"></b-form-input>
         <b-button class="ml-2" style="margin-bottom: 15px" variant="primary" @click="add">Add</b-button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3">
        <div class="p-2 alert alert-secondary">
          <h3 style="text-align:center">Backlog</h3>
          <draggable class="list-group" :list="arrBacklog" group="tasks">
            <div class="list-group-item" v-for="element in arrBacklog" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-primary">
          <h3 style="text-align:center">In Progress</h3>
          <draggable class="list-group" :list="arrInProgress" group="tasks">
            <div class="list-group-item" v-for="element in arrInProgress" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-warning">
          <h3 style="text-align:center">Tested</h3>
          <draggable class="list-group" :list="arrTested" group="tasks">
            <div class="list-group-item" v-for="element in arrTested" :key="element.name">
              {{element.name}}
            </div>
          </draggable>
        </div>
      </div>

      <div class="col-md-3">
        <div class="p-2 alert alert-success">
          <h3 style="text-align:center">Done</h3>
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

export default {
  name: 'App',
  components: {
  draggable
  },
  data() {
    return {
      newTask: null,
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
    },
  }
}
</script>

<style>

</style>
