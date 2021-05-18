<template>
    <table>
        <tr>
            <td>status：</td>
            <td>{{status}}</td>
        </tr>
        <tr>
            <td>message：</td>
            <td>{{message}}</td>
        </tr>
    </table>
</template>


<script>
export default {
    name: "Message",
    props:{
        status:String,
        message:String
    }
}
</script>