<template>
  <div>
    <div class="container">
      <h2>Students</h2>
      <div class="panel panel-primary">
        <div class="panel-heading">
            Students
            <router-link to="/add" class="btn btn-info pull-right" style="margin-top:-7px;margin-left:2px;">Add Student</router-link>
        </div>
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.id }}</td>
                <td>{{ student.name }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.mobile }}</td>
                <td>{{ student.gender }}</td>
                <td>
                  <div class="btn-group" role="group">
                    <router-link
                      :to="{ name: 'edit', params: { id: student.id } }"
                      class="btn btn-success"
                      >Edit</router-link
                    >
                    <button
                      class="btn btn-danger"
                      @click="deleteStudent(student.id)"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      students: [],
    };
  },
  created() {
    this.axios.get("http://localhost:8000/api/students").then((response) => {
      this.students = response.data;
    });
  },
  methods: {
    deleteStudent(id) {
      this.axios
        .delete(`http://localhost:8000/api/students/${id}`)
        .then((response) => {
          let i = this.students.map((data) => data.id).indexOf(id);
          this.students.splice(i, 1);
        });
    },
  },
};
</script>
