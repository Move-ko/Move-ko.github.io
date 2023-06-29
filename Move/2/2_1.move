module example::test {
    fun main(){
//  명시적 주석이 있는 리터럴;
            let explicit_u8 = 1u8;
            let explicit_u16 = 1u16;
            let explicit_u32 = 1u32;
            let explicit_u64 = 2u64;
            let explicit_u128 = 3u128;
            let explicit_u256 = 1u256;
            let explicit_u64_underscored = 154_322_973u64;
            
            // 간단한 추론을 통한 리터럴
            let simple_u8: u8 = 1;
            let simple_u16: u16 = 1;
            let simple_u32: u32 = 1;
            let simple_u64: u64 = 2;
            let simple_u128: u128 = 3;
            let simple_u256: u256 = 1;
            
            //보다 복잡한 추론을 통한 리터럴
            let complex_u8 = 1; // 추론된: u8
            //shift의 오른쪽 피연산자는 u8이어야 합니다.
            let _unused = 10 << complex_u8;
            
            let x: u8 = 38;
            let complex_u8 = 2; //// 추론된: u8
            //인수는 동일한 타입을 가져야합니다.
            let _unused = x + complex_u8;
            
            let complex_u128 = 133_876; // 추론된: u128
            //함수 인수의 타입으로부터 추론됨
            function_that_takes_u128(complex_u128);
            
            //16진수로 리터럴을 작성할 수 있습니다.
            let hex_u8: u8 = 0x1;
            let hex_u16: u16 = 0x1BAE;
            let hex_u32: u32 = 0xDEAD80;
            let hex_u64: u64 = 0xCAFE;
            let hex_u128: u128 = 0xDEADBEEF;
            let hex_u256: u256 = 0x1123_456A_BCDE_F;
    }
}