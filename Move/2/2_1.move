module example::test {
    fun main(){
// literals with explicit annotations;
            let explicit_u8 = 1u8;
            let explicit_u16 = 1u16;
            let explicit_u32 = 1u32;
            let explicit_u64 = 2u64;
            let explicit_u128 = 3u128;
            let explicit_u256 = 1u256;
            let explicit_u64_underscored = 154_322_973u64;
            
            // literals with simple inference
            let simple_u8: u8 = 1;
            let simple_u16: u16 = 1;
            let simple_u32: u32 = 1;
            let simple_u64: u64 = 2;
            let simple_u128: u128 = 3;
            let simple_u256: u256 = 1;
            
            // literals with more complex inference
            let complex_u8 = 1; // inferred: u8
            // right hand argument to shift must be u8
            let _unused = 10 << complex_u8;
            
            let x: u8 = 38;
            let complex_u8 = 2; // inferred: u8
            // arguments to  must have the same type
            let _unused = x + complex_u8;
            
            let complex_u128 = 133_876; // inferred: u128
            // inferred from function argument type
            function_that_takes_u128(complex_u128);
            
            // literals can be written in hex
            let hex_u8: u8 = 0x1;
            let hex_u16: u16 = 0x1BAE;
            let hex_u32: u32 = 0xDEAD80;
            let hex_u64: u64 = 0xCAFE;
            let hex_u128: u128 = 0xDEADBEEF;
            let hex_u256: u256 = 0x1123_456A_BCDE_F;
    }
}