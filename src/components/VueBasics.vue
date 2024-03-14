<template>
    <div class="container">
      <div class="row m-3">
          <div class="col-lg-4 col-md-4 col-sm-12 ">
            <h5>Example of Data Interpolation & V-Model:</h5>
          <p>Name: {{ name }}</p>
          <input type="text" name="name" id="name" v-model="name">
          <hr>

          <h5>Example of Data Computed Property:</h5>
          <p>Author has books: {{countedBooks}}</p>
          <hr>

          <h5>Example of Watcher:</h5>
          <p>{{num}}: {{watchMe }}</p>
          <hr>

          <h5>Example of Event:</h5>
          <button @click="num--">Decrease Num</button>&nbsp;
          <button @click="num++">Increase Num</button>
          <hr>

          <h5>Example of Routing:</h5>
          <router-link to="/test">Testing route</router-link> 
          <hr>




        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 ">
         

          <h5>Example of List Rendering:</h5>
          <ul v-for="item in items" :key="item.id">
            <li>{{ item.id }} - {{ item.name }}</li>
          </ul>
      
          <h5>Useful for Objects:</h5>
          <ul v-for="(value,key) in items" :key="key.id">
            <li>{{ key }} - {{ value.name }}</li>
          </ul>
          <hr>

          <h5>Example of Class & Style Binding:</h5>
          <p style="color:red;">Regular Styling</p>
          <p :style="{color:'green',fontSize:'20px'}">Style Binding</p>
          <p :class="[{ myClass: isActive}]">Class Binding</p>
          <hr>

          <h5 v-show="isActive">Example of Conditional Rendering:</h5>
          <button @click="isActive = !isActive">Toggle Me</button>
          <p v-if="num>0">I'm positive number.</p>
          <p v-else-if="num==0">I'm neutral number.</p>
          <p v-else>I'm negative number.</p>
          <hr>

          

        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 ">
          <h5>Key Modifiers: Press Enter</h5> 
          <input @keyup.enter="HandleMe" />
          <hr>

          <h5>Input Binding</h5>
          <select v-model="selected">
            <option v-for="option in options" :value="option.value" :key="option.value">
              {{ option.text }}
            </option>
          </select>
          <p>Selected:{{ selected }}</p>
          <hr>

          <h5>Example of Refs:</h5>
          <input type="text" name="name" ref="input">
          <hr>
          <h5>Props & Emits:</h5>
          <add-user @add-user="addUser"></add-user>
          <show-user v-for="user in users" :key="user.id" :user-name="user.name" :user-age="user.age" ></show-user>
          <hr>
        </div>
      </div>
      

 

      

   
    </div>
</template>
<script>

export default {
    name:'VueBasics',
    data(){
        return{
            name:'Ritesh',
            books:['Java','PHP','JavaScript'],
            states:'',
            num:0,
            watchMe:'Zero',
            isActive:true,
            items:[
              {
                id:1,
                name:'Learning How to Learn'
              },
              {
                id:2,
                name:'Ultralearning'
              },
              {
                id:3,
                name:'Deep Work'
              }
            ],
            selected:'A',
            options:[
              {
                text:'One',
                value:'A'
              },
              {
                text:'Two',
                value:'B'
              },
              {
                text:'Three',
                value:'C'
              }
            ],
            users:[
              {
                id:1,
                name:'Ritesh',
                age:24
              },
              {
                id:2,
                name:'Krish',
                age:23
              }
            ]
        }
    },
    methods:{
      HandleMe() {
        alert('Submitted');
      },
      addUser(name,age){
                const newUser = {
                id: new Date().toISOString(),
                name:name,
                age:age
            }
            this.users.push(newUser);
      }
    },
    computed:{
      countedBooks(){
        return this.books.length >0 ? 'Yes':'No'; 
      }
    },
    watch:{
        num(){
          if(this.num > 0){
             this.watchMe= 'Positive Number';
          }else if(this.num==0){
            this.watchMe= "Zero";
          }else{
            this.watchMe= 'Negative Number';
          }
        }
    },

    mounted(){
      this.$refs.input.focus();
      
    }

}

</script>
<style>
  .myClass{
    font-size: 18px;
    color:blue;
    border: 1px solid red;
    background: yellow;
  }
</style>