<template>
    <div class="test">
        <h1>{{msg}}</h1>
        <h3>{{title}}</h3>
        

        <div v-if="flag">
            <ul>
                <li :key="carro" v-for="(carro, ind) in carros">{{ind + ' - '+ carro}}</li>
            </ul>
        </div>
        <button v-on:click="saludar()">dkdk</button>
        <h1>{{nombre}}</h1>
        <input type="text" v-model="nombre" v-on:keydown.l="algo">
        <textarea name="on" id="" cols="30" rows="10" v-model="nombre" v-on:keyup.ctrl.c="clear"></textarea>
        <br>
        <h1>{{fullName}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nombre: 'Alan',
            title: 'Holo VueJs',
            tag: '<h1>Que rollo es h1?</h1>',
            flag: true,
            carros: ['ram', 'chevy', 'golf', 'nissan', 'camaro', 'charger']
        }
    },
    methods:{
        saludar(){
            this.nombre='Tete';
            console.log('popopeooe');
        },
        algo(event){
            console.log(event);
        },
        clear(){
            this.nombre='';
        }
    },
    computed:{
        fullName(){
            let nom = this.title + ', '+this.nombre;
            let year = new Date().getFullYear();
            nom = nom+', como Estas, hoy es '+year;
            return nom;
        }
    },
    props:{
        msg:{
            type: String,
            default: 'Mensaje por defecto'
        }
    }
}
</script>

<style media='screen'>
    .test{
        background: #429490;
    }
</style>