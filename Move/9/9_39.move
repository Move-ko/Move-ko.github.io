module exmple::test{
    fun main(){
        {
            let x = 0;
            {
                let y= x +1;//유효
            }
        }
    }
}