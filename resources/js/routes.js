import Students from './components/Students.vue';
import AddStudent from './components/AddStudent.vue';
import UpdateStudent from './components/UpdateStudent.vue';
import Login         from './components/auth/Login.vue'
import Register      from './components/auth/Register.vue'

export const routes =  [
        {
            path: '/',
            component: Students,
            name: 'home',
            meta: {requiresAuth: true}
        },
        {
            path: '/login',
            component: Login,
            name: 'login',
            meta: {guest: true}
        },
        {
            path: '/register',
            component: Register,
            name: 'register',
            meta: {guest: true}
        },
        {
            name: 'add',
            path: '/add',
            component: AddStudent,
            meta: {requiresAuth: true}
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: UpdateStudent,
            meta: {requiresAuth: true}
        },
    ]
