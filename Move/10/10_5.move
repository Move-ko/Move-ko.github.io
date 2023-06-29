module example::test {
    fun main(){
        let i = &0;
        let m = &mut 1;

        i == freeze(m); //false
        freeze(m) == i;//false
        m == m;//true
        i == i;//true
    }
}