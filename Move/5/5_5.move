module example::test {
   fun destory_any_vector<T>(vec:vector<T>){
    vector::destory_empty(vec)//이 줄을 삭제하면 컴파일러 오류가 발생합니다.
   }
}