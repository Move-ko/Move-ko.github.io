module example::test {
   fun takes_immut_returns_immut(x:&u64):&u64{x}

   //반환값에 대한 추론 고정
   fun takes_mut_returns_immut(x:&mut u64):&u64{x}

   fun expression_examples(){

    let x= 0;
    let y= 0;
    takes_immut_returns_immut(&x);//추론없음
    takes_immut_returns_immut(&mut x);//추정 동결(&mut x)
    takes_mut_returns_immut(&mut x);//추론없음

    assert!(&x == &mut y,42);//추정 동결(&mut y)
   }
   

   fun assignment_examples(){
      let x= 0;
      let y= 0;
      let imm_ref:&u64 = &x;

      imm_ref= &x;//추론없음
      imm_ref= &mut y;//추정 동결(&mut y)
    
   }

   
   
   }