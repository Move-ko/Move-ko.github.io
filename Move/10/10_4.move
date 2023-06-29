module example::test {
    fun main(){
        let i = &0;
        let n = &mut 1;
        i == m;//false
        m == i;//false
        m == m;//true
        i == i;//true
    }
}