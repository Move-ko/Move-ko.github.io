//m.move
address 0x2 {
    module m {
      struct Foo has drop {x:u64}

      public fun new_foo() : Foo {
          Foo { x : 42}
      }
    }
}