module example::test {
   fun takes_immut_returns_immut(x:&u64):&u64{x}

   //반환값에 대한 추론 고정
   fun takes_mut_returns_immut(x:&mut u64):&u64{x}

   fun expression_examples(){

    let x= 0;
    let y= 0;
    takes_immut_returns_immut(&x);//추론없음
   }
   
   
   
   }