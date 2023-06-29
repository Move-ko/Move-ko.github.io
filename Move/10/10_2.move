address 0x42 {
    module example {
        struct S has copy,drop {
            f:u64,
            s:vector<u8>
        }
        fun alwats_true():bool {
            let s= S {
                f:0,
                s:b""
            };
            //괄호는 필요하지 않지만 이 예시에서 명확성을 위해 추가되었습니다.
            (copy s) == s
        }
        fun alwats_false():bool {
            let s = S {
                f:0,
                s:b""
            };
            //괄호는 필요하지 않지만 이 예시에서 명확성을 위해 추가되었습니다.
            (copy s) != s
        }
    }
}