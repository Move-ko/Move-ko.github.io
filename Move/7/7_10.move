module example::test {
  fun reference_copies(s:&mut S){
    let s_copy1=s;//유효
    let s_extension= &mut s.f;//유효
    let s_copy2 = s;//유효
  }
}