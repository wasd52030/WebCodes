<template>
  <div v-if="actionflag">
    <table border="1">
      <tr>
        <td></td>
        <td>name</td>
        <td>address</td>
        <td>birthday</td>
      </tr>
      <tr v-for="(item, index) in d" :key="index">
        <td><input type="radio" name="x" :value="item.id" v-model="id" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.addr }}</td>
        <td>{{ item.birth }}</td>
      </tr>
    </table>
    <button class="action" @click="doaction">{{ actions }}</button>
  </div>

  <div class="result">
    <Edit
      :actions="actions"
      v-if="doupdate"
      :id="id"
      :name="name"
      :address="addr"
      :birthday="birth"
      :isupdate="doupdate"
    ></Edit>
    <Message v-if="dodelete" :status="status" :message="message"></Message>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import Edit from "./Edit.vue";
import Message from "./Message.vue";

export default {
  name: "Search",
  components: {
    Edit,
    Message,
  },
  props: {
    actions: String,
    actionflag:String
  },
  data() {
    return {
      d: [],
      doupdate: false,
      dodelete: false,
      id: 0,
      name: "",
      addr: "",
      birth: "",
      actionflag: true,
      status:'',
      message:'',
    };
  },
  mounted() {
    axios
      .get("/Back/Select.php")
      .then((res) => {
        this.d = res["data"]["result"];
      })
      .catch((err) => {
        this.d = err;
      });
  },
  methods: {
    doaction: function () {
      this.actionflag = false;
      
      let data = {
        id: this.id,
      };

      if (this.actions == "修改") {
        this.doupdate = true;
        this.dodelete = false;
        axios
          .post("/Back/Search.php", qs.stringify(data))
          .then((res) => {
            let resdata = res["data"]["result"];
            console.log(resdata);
            this.id = resdata[0]["id"];
            this.name = resdata[0]["name"];
            this.addr = resdata[0]["addr"];
            this.birth = resdata[0]["birth"];
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (this.actions == "刪除") {
        this.doupdate = false;
        this.dodelete = true;
        axios
          .post("/Back/Delete.php", qs.stringify(data))
          .then((res) => {
            let resdata = res["data"];
            this.status = resdata["status"];
            this.message = resdata["message"];
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
  },
};
</script>

<style>
.action {
  margin: 10px 0 0 0;
}
.result {
  margin: 10px 0 0 0;
}
button:hover:not(.active) {
  background-color: #ddd;
}
</style>