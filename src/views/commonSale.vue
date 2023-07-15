<template >
   <el-card class="box-card"  >
       <el-row>
      <el-col :span="10">
          <div>
               <el-form ref="form" :model="form" label-width="80px" >
                          <el-form-item label="股票代码">
                            <el-input v-model="form.name"></el-input>
                          </el-form-item>
                          <el-form-item label="股票名称">
                            <el-input v-model="form.name"></el-input>
                          </el-form-item>
                          <el-form-item label="买入价格">
                           <el-input v-model="form.name"></el-input>
                          </el-form-item>
                          <el-form-item label="最大可买">
                           <el-input v-model="form.name"></el-input>
                          </el-form-item>
                          <el-form-item label="买入数量">
                           <el-input v-model="form.name"></el-input>
                          </el-form-item>
                          <el-form-item>
                          <el-button type="primary" @click="onSubmit">卖出下单</el-button>
                          <el-button>重置</el-button>
                          </el-form-item>
                </el-form>
          </div>
      </el-col>
            <el-col :span="14">
          <div>

          </div>
      </el-col>
       </el-row>
    </el-card>
</template>

<script>
export default {
    name: 'commonBuy',
    data() {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!')
        },
    },
}
</script>

<style scoped>
    .box-card {
        margin: 20px;
  }
</style>
