module example:test {
    struct Hat {
        color:vector<u8>
    }
    fun main(){
    let a = 8u64 == 19u64;//false
    let b = 8u8 == 8u64;//false
    let c = Hat{b"red"} == Hat{b"red"};//true
    let d = &8 == &mut 39;//false


    }

}