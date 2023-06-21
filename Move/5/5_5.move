module example::test {
   fun destory_any_vector<T>(vec:vector<T>){
    vector::destory_empty(vec)//deleting this line will cause a compiler error
   }
}