module example::test {
    struct Ignorable has drop {f:u64 }
    struct Pair has copy, drop, store { x: u64, y: u64 }
}