<template >
   <el-row>
       <el-col :span="6">
           <div>
               <el-select v-model="value" placeholder="拐点买入" style="width: 100%">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
           </div>
       </el-col>
        <el-col :span="8">
              <el-card class="box-card" style="width: 100%"  >
                  <div slot="header" class="clearfix">
                    <span>拐点买入</span>
                  </div>
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
                 </el-form>
              </el-card>
       </el-col>
        <el-col :span="8">
            <el-card class="box-card"  >
                  <div slot="header" class="clearfix">
                    <span>股票详情</span>
                  </div>
                  <el-form ref="form" :model="form" label-width="80px" >
                 </el-form>
              </el-card>
       </el-col>
   </el-row>
</template>

<script>
export default {
    name: 'bugTask',
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
            options: [{
                value: '选项1',
                label: '黄金糕',
            }, {
                value: '选项2',
                label: '双皮奶',
            }],
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
    .el-select{
        margin: 20px;
    }
</style>
