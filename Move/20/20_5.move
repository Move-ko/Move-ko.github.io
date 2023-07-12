module 0x42::m { 
    friend 0x42::nonexistent; // ERROR! 
//   ^^^^^^^^^^^^^^^^^ 연결되지 않은 모듈 '0x42::nonexistent'입니다.
}