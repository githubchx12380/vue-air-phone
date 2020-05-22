<template>
  <div>
       <van-dropdown-item v-model="model.value1" :options="option1" @change="onChange" />
       <van-dropdown-item v-model="model.value2" :options="option2" @change="onChange" />
       <van-dropdown-item v-model="model.value3" :options="option3" @change="onChange" />
  </div>
</template>

<script>
export default {
    data() {
        return {
            model:{
                 value1: '',
                 value2: '',
                 value3: '',
            },
            option1: [
                { text: '全部价格', value: '' },
                { text: '价格最低', value: 'low' },
                { text: '价格最高', value: 'hgt' },
            ],
            option2: [
                { text: '起飞时段', value: '' },
                { text: '06:00-12:00', value: '06:00-12:00' },
                { text: '12:00-18:00', value: '12:00-18:00' },
                { text: '18:00-24:00', value: '18:00-24:00' },
            ],
            option3: [
                { text: '餐食提供', value: '' },
                { text: '有餐食', value: '有餐食' },
                { text: '无餐食', value: '无餐食' },
            ],
        }
    },
    methods:{
        //时间转换为分,来进行对比
        handleData(val) {
            let date = val.split('-')
            let begm = Number(date[0].split(':')[0]) * 60 + Number(date[0].split(':')[1])
            let finm = Number(date[1].split(':')[0]) * 60 + Number(date[1].split(':')[1])
            return [begm,finm]           
            
        },

        //过滤数据
        onChange(val) {
            let newData = this.flightList

            //价格高低排序
            if(this.model.value1 == 'low' || this.model.value1 == '') {
                newData.sort((a,b)=>{
                    return a.price - b.price
                });
            }
            if(this.model.value1 == 'hgt') {
                newData.sort((a,b) => {
                    return b.price - a.price
                })
            }
            
            //出发时间排序
            if(this.model.value2) {
                newData = newData.filter(item => {
                    let sp = item.depTime.split(':')
                    let m = Number(sp[0]) * 60 + Number(sp[1])
                    let dd = this.handleData(this.model.value2)
                    return dd[0] < m && m < dd[1]
                })
            }


            //有无餐食排序
            if(this.model.value3) {
                newData = newData.filter(item => {
                    return this.model.value3 == item.mealDesc
                })
            }
            console.log(newData[0].price);
            
            this.$emit('handleAriChange',newData)
        },


        initFlight() {
            if(this.model.value1 || this.model.value2 || this.model.value3) {
                this.model.value1 = ''
                this.model.value2 = ''
                this.model.value3 = ''
                this.onChange()
            }else{
                window.scrollTo(0,0)
            }
            
        }
    },
    props:['flightList'],
    
}
</script>

<style>

</style>