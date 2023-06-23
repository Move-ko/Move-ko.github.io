module example::test {
    fun main(){
     signer::address_of(&signer): address



     signer::borrow_address(&signer): &address
    }
}
//A signer represents a user that has been authenticated by code outside of Move

//A signer cannot be created via literals or instructions