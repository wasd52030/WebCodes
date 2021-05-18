<template>
    <table border="1">
        <tr>
            <td>id</td>
            <td>name</td>
            <td>address</td>
            <td>birthday</td>
        </tr>
        <tr v-for="i in d" :key="i">
            <td>{{i.id}}</td>
            <td>{{i.name}}</td>
            <td>{{i.addr}}</td>
            <td>{{i.birth}}</td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios'
export default {
    name:'ViewALL',
    data(){
        return{
            d:null
        }
    },
    mounted(){
        console.log('ViewALL!');
        axios.get('/Back/Select.php')
        .then(res => {
            this.d=res['data']['result']
        })
        .catch(err => {
            this.d=err;
        })
    }
}
</script>