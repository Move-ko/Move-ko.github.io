module example::test {
 fun  main(){
   let s= S {f:10}
   let f_ref1:&u64 = &s.f; //공장
   let s_ref:&S= &s;
   let f_ref2: &u64= &s_ref.f //또한 작동
 }
}