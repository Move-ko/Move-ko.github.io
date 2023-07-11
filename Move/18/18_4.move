module example::test {
    struct Cup<T> has copy, drop, store, key { item: T }
}