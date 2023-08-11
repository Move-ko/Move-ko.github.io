/*
벡터 리터럴을 사용하여 어떤 유형의 벡터든 생성할 수 있습니다.

vector[]		       비어있는 벡터
vector[e1, ..., en]		n개의 요소가 있는 벡터(길이 n)
*/

module example::test {
    fun main(){
   //이러한 경우에는 벡터의 유형이 원소 유형이나 벡터의 사용으로부터 추론됩니다. 유형을 추론할 수 없는 경우 또는 명확성을 위해 유형을명시적 으로 지정할 수도 있습니다.
    vector<T>[]: vector<T>
    vector<T>[e1, ..., en]: vector<T>
   

    (vector[]: vector<bool>);
    (vector[0u8, 1u8, 2u8]: vector<u8>);
    (vector<u128>[]: vector<u128>);
    (vector<address>[@0x42, @0x100]: vector<address>);

    //vector<u8> 타입의 리터럴
    //Move에서 벡터를 사용하는 일반적인 사례는바이트 배열을 나타내는 것인데, 이는 vector<u8>로 표현됩니다. 이러한 값들은 종종 공개 키나 해시 결과와 같은 암호화 목적으로 사용됩니다. 이러한 값들은 널리 사용되어 특정 구문이 제공되어 값을 더 가독성 있게 만들어줍니다. 각 개별 u8 값이 숫자 형태로 지정되는 vector[]를 사용해야 하는 대신에 특정 구문을 사용할 수 있습니다.
    //현재 지원되는 두 가지 유형의 vector<u8> 리터럴은바이트 문자열(byte strings)과16진수 문자열(hex strings)입니다.
    

    //바이트 문자열(Byte Strings)
    //바이트 문자열 은 b로 접두사가 붙은 따옴표로 둘러싸인 문자열 리터럴입니다. 예를 들어,b"Hello!\n" 과 같습니다.
    //이는 ASCII 로 인코딩된 문자열로서이스케이프 시퀀스 를 허용합니다

    /*
       \n	새 줄(또는 줄바꿈)
       \r	캐리지 리턴(Carriage return)
       \t	Tab
       \\	Backslash
       \0	Null
       \"	Quote
       \xHH	Hex escape, inserts the hex byte sequence HH    
    */

    }
     fun byte_and_hex_strings() {
        //16진수 문자열은 x로 접두사가 붙은 따옴표로 둘러싸인 문자열 리터럴입니다. 예를 들어, x"48656C6C6F210A"와 같습니다. 각각의 바이트 쌍은 00부터 FF까지의 16진수로 인코딩된 u8값을 의미합니다. 따라서 각 바이트 쌍은 결과적인 vector<u8>에서 하나의 항목에 해당합니다.

        assert!(b"" == x"", 0);
        assert!(b"Hello!\n" == x"48656C6C6F210A", 1);
        assert!(b"\x48\x65\x6C\x6C\x6F\x21\x0A" == x"48656C6C6F210A", 2);
        assert!(
            b"\"Hello\tworld!\"\n \r \Null=\0" ==
                x"2248656C6C6F09776F726C6421220A200D205C4E756C6C3D00",
            3
        );
    }

   //vector<T>의 일부 동작은 원소 유형 T의 기능에 따라 달라집니다. 예를 들어, 드롭(drop) 기능이 없는 원소를 포함하는 벡터는 위의 예시에서 v와 같이 암묵적으로 폐기될 수 없으며, 명시적으로 vector::destroy_empty를 사용하여 파괴해야 합니다. vector::destroy_empty는 vec에 원소가 없을 경우에만 실행 시점에서 중단됩니다:
    fun destory_any_vector<T>(vec:vector<T>){
    vector::destory_empty(vec)//이 줄을 삭제하면 컴파일러 오류가 발생합니다.
   }
   //하지만 드롭(drop) 기능이 있는 원소를 포함하는 벡터를 폐기하려고 할 때 오류가 발생하지는 않습니다.
    fun destroy_droppable_vector<T: drop>(vec: vector<T>) {
    // 유효한!
    // 벡터를 파괴하기 위해 명시적으로 수행할 필요가 없습니다.
    // nothing needs to be done explicitly to destroy the vector
}
    //마찬가지로, 원소 유형이복사 가능한 경우에만 벡터를 복사할 수 있습니다. 다시 말해, T가 복사 가능한 경우에만vector<T>가 복사 가능합니다. 그러나 복사 가능한 벡터조차도 암묵적으로 복사되지는 않습니다.
    fun destroy_droppable_vectors<T: drop>(vec: vector<T>) {

    let x = vector::singleton<u64>(10);
    let y = copy x; // 사본이 없는 컴파일러 오류! 
    }
    

    //대용량 벡터의 복사는 비용이 많이 들 수 있으므로 컴파일러는 복사가 명시적으로 이루어지도록 요구하여 어디에서 복사가 발생하는지 쉽게 파악할 수 있도록 합니다. 자세한 내용은유형 능력(type abilities)과제네릭(generics) 섹션을 참조하십시오.

   //소유권
   //위에서 언급한 대로,원소가 복사 가능한 경우에만 벡터 값들을 복사할 수 있습니다. 이 경우에는 복사가 명시적으로 이루어져야 하며, 복사 또는 역참조 *를 통해 이루어집니다.

}