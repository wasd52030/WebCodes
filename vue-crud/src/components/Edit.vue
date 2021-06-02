<template>
  <div v-if="EditShow">
    <table>
      <tr>
        <td v-if="ideditflag">id</td>
        <td v-if="ideditflag"><input type="number" v-model="id" /></td>
      </tr>
      <tr>
        <td>name :</td>
        <td><input v-model="name" /></td>
      </tr>
      <tr>
        <td>address :</td>
        <td><input v-model="address" /></td>
      </tr>
      <tr>
        <td>birthday :</td>
        <td><input type="date" v-model="birthday" /></td>
      </tr>
    </table>
    <button class="action" @click="doaction">{{ actions }}</button>
  </div>
  <div>
    <Search v-if="SearchAction" actions="修改" :actionflag="SearchAction"></Search>
    <Message v-if="MessageShow" :status="status" :message="message"></Message>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import Message from "./Message.vue";
import Search from "./Search.vue"
export default {
  name: "Edit",
  components: {
    Message,
    Search
  },
  props: {
    actions: String,
    id: String,
    name: String,
    address: String,
    birthday: String,
    isupdate: Boolean,
  },
  data() {
    return {
      MessageShow: false,
      EditShow: true,
      status: "",
      message: "",
      ideditflag: false,
      cancelflag: false,
      SearchAction: true,
    };
  },
  created() {
    this.ideditflag = this.actions == "新增" ? true : false;
  },
  methods: {
    doaction: function () {
      this.EditShow = !this.EditShow;
      this.MessageShow = !this.EditShow;

      let data = {
        id: this.id,
        name: this.name,
        address: this.address,
        birthday: this.birthday,
      };

      if (this.actions == "新增") {
        axios
          .post("/Back/Insert.php", qs.stringify(data))
          .then((res) => {
            let resdata = res["data"];
            this.status = resdata["status"];
            this.message = resdata["message"];
          })
          .catch((err) => {
            console.error(err);
          });
      } else if (this.actions == "修改") {
        axios
          .post("/Back/Update.php", qs.stringify(data))
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

button {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  border: 1px solid #ddd;
  font-size: 18px;
}
</style>