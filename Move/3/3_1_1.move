module example::test {
    fun example(){
      let a = true  //true
      let b = false //false
      let c = true && false //false
      let d = false || true //true
      let e = true || false && true //true
      let f = !true //false
      let g = !false  //true
      let h = !true || true //true
       let i = false || true && false //false  
    }
}