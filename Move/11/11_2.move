module example::test {
    use std::vector;
    fun pop_twice<T>(v:&mut vector<T>):(T,T){
        if (vector::length(v)<2)abort 42;

        (vector::pop_back(v),vector::pop_back(v))
    }
}