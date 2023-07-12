module A::AModule {
    use B::Bar;
    use C::Foo;
    public fun foo(): u64 {
        Bar::foo() + Foo::bar()
    }
}