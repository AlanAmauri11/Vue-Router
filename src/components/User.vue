<template>
	<div class="user">
		<ul>
			<li :key="index" v-for="(user, index) in users" >
				{{user.name}} - {{user.email}} <button @click="deleteUser(user)">X</button>
			</li>
		</ul>

		<form @submit.prevent="addUser">
			<label>Nombre:</label>
			<input type="text" v-model="newUser.name">
			<br>
			<label>Email:</label>
			<input type="text" v-model="newUser.email">
			<br>
			<button type="submit">Agregar</button>
		</form>
	</div>
</template>

<script>
//import axios from 'axios';
export default {
	data() {
		return {
			users: [],
			newUser:{
				name:'',
				email:'',
				contacted: false
			}
		}
	},
	created(){
		//------Fecth----------
		/*fetch('https://jsonplaceholder.typicode.com/users')
			.then(res=>res.text())
			.then(data=>{this.users=JSON.parse(data)});*/

		//------XMLHttpRequest----------
		let datos = this;
		let http = new XMLHttpRequest();
		http.open('GET','https://jsonplaceholder.typicode.com/users',true);
		http.onload = function(){
			datos.users=JSON.parse(http.responseText);
		}
		http.send();
	},
	methods:{
		addUser(){
			this.users.push(this.newUser);
			this.newUser={contacted:false};
		},
		deleteUser(user){
			console.log(this.users.indexOf(user));
			this.users.splice(this.users.indexOf(user), 1);
		}
	}
};
</script>

<style>
.user {
	background: #9a9eaf;
}
</style>