<template >
    <el-card class="box-card" >
    </el-card>
</template>

<script>
export default {
    name: 't1',
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
        width: 1100px;
        margin: 20px;
  }
    .el-form-item{
        width: 400px;
    }
</style>
