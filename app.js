var obj = {
  name: '',
  get foo() {
      return this.name;
  },
  set foo(val) {
      this.name = val;
  }
}
 

 
obj.foo = 'hello';
 
console.log(obj.foo);
// "hello"


