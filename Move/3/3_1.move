module 3_1::test {

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
    fun need_gas(destination_distance:u64,has_round_trip:bool):bool{
      if (has_round_trip) {
      return destination_distance * 2 >= 40
    } else {
      return destination_distance >= 40
    };
    }

    /*
    need_gas(20,true)
    need_gas(40,false)
    */
}