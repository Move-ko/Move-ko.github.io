module exmaple::test {
    fun copy_signer (s: &signer) {
    let x: &signer = *s;
}

}