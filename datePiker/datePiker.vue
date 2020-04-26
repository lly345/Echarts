<template>
  <div class="timeBox">
    <Form ref="formItem" :model="formItem" :label-width="80" inline>
      <FormItem label style="width:50px">
        <h5 style="width:30px">{{$t('time')}}</h5>
      </FormItem>
      <FormItem label>
        <Row>
          <Col span="11">
            <DatePicker type="date" v-model="formItem.timeStart"></DatePicker>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <DatePicker
              type="date"
              :start-date="new Date(formItem.startDate)"
              v-model="formItem.timeEnd"
            ></DatePicker>
          </Col>
        </Row>
      </FormItem>
      <FormItem style="margin-left:50%">
        <Button type="primary" @click="handleSubmit('formItem')">{{$t('sear')}}</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
import { curTime } from "@/libs/curTime";

export default {
  data() {
    return {
      formItem: {
        timeStart: "",
        timeEnd: "",
        startDate: new Date() || ""
      }
    };
  },
  components: {},
  methods: {
    handleSubmit() {
      console.log(this.formItem.timeEnd, "this.formItem.timeEnd");
      this.formItem.timeEnd = curTime(this.formItem.timeEnd);
      this.formItem.timeStart = curTime(this.formItem.timeStart);
      if (
        this.formItem.timeEnd !== "NaN-NaN-NaN" &&
        this.formItem.timeStart !== "NaN-NaN-NaN"
      ) {
        this.$emit("datePik", {
          sendDateStart: this.formItem.timeStart,
          sendDateEnd: this.formItem.timeEnd
        });
      } else {
        this.$Message.error("Select date！");
      }
    }
  }
};
</script>

<style scoped>
.timeBox {
  width: 100%;
  height: 80px;
  background: #ffffff;
}
.ivu-form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.ivu-form-item {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
