<template>
  <div>
    <div class="container">
      <h2>Update Student</h2>
      <div class="panel panel-primary">
        <div class="panel-heading">
            Update Student
            <router-link to="/" class="btn btn-info pull-right" style="margin-top:-7px;margin-left:2px;">Student List</router-link>
        </div>
        <div class="panel-body" v-show="isPageEnabled">
          <form @submit.prevent="updateStudent">
            <div class="form-group">
              <label>Name</label>
              <input type="text" class="form-control" v-model="student.name" />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="email"
                class="form-control"
                v-model="student.email"
              />
            </div>
            <div class="form-group">
              <label>Mobile</label>
              <input
                type="text"
                class="form-control"
                v-model="student.mobile"
              />
            </div>
            <div class="form-group">
              <label :style="{color: LabelColor}">Gender</label>
              <select :class="{active: isActive}" class="form-control" v-model="student.gender">
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <button v-bind:id="buttonUpdate" v-bind:disabled="isButtonDisabled" type="submit" class="btn btn-primary">Update Student</button>

            <br>
            {{ computedStudentInfo }}
            <br>

            <ul>
                <li v-for="item in items" :key="item.id">{{ item.message }}</li>
            </ul>


            <br><br>

            <button @click="updateCounter">Update Counter</button>
            <p>Button has been clicked {{ counter }} times</p>

            <!-- <student-detail @hide="hideElement" :student="student" v-if="showDetails"></student-detail> -->

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentDetail from './StudentDetail.vue';
export default {
  components: { StudentDetail },
  data() {
    return {
      student: {},
      mytextfield:'',
      isButtonDisabled: false,
      isPageEnabled: true,
      buttonUpdate: 'update-button',
      isActive:false,
      showDetails:true,
      LabelColor : 'red',
      counter:0,
      items:[
          {id: 1 , message: 'First Message'},
          {id: 2 ,message: 'Second Message'},
          {id: 3 ,message: 'Third Message'},
      ]
    };
  },
  watch: {
    // whenever question changes, this function will run
     'student.gender' : function (newValue, oldValue) {
    }
  },
  created() {
    this.axios
      .get(`http://localhost:8000/api/students/${this.$route.params.id}`)
      .then((res) => {
        this.student = res.data;
      });
  },
  computed:{
     computedStudentInfo(){
         return this.student.gender + ' ' + this.student.name
     }
  },
  methods: {

    updateCounter(e){
        e.preventDefault();
        this.counter++;
    },
    hideElement(){
        this.showDetails = false;
    },
    updateStudent() {
      this.axios
        .patch(
          `http://localhost:8000/api/students/${this.$route.params.id}`,
          this.student
        )
        .then((res) => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
