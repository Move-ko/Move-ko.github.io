module overmint::bananas{

    struct Hat{
        color:vector:<u8>
    }
   public fun test(){

    let a = 8u64 == 19u64;
    let b = 8u8 == 8u64;
    let c = Hat{b"red"} == Hat{b"red"};
    let d = &8 == &mut 39;

   }

   //Equalitier only work if the two operands are the same type(a,b)

   //The type of references do not matter when comparing references(ex.d)

   //Equalities consume the values when comparing them
}

