module aptos::aptos {
fun copy_signer(s:&signer){
    let x:&signer= *s;
}
}

//which of the following are qualities of the signer type?