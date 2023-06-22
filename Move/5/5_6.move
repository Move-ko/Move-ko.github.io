module example::test {
 fun destroy_droppable_vector<T: drop>(vec: vector<T>) {
    // 유효한!
    // 벡터를 파괴하기 위해 명시적으로 수행할 필요가 없습니다.
    // nothing needs to be done explicitly to destroy the vector
}
}