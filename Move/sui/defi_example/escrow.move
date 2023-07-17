

module defi::escrow {
   use sui::object::{Self,ID,UID};
   use sui::transfer;
   use sui::tx_context::{Self,TxContext};

   struct EscrowedObj <T:key+store,phantom ExchangeForT:key +store > has ,store {
     
   }
}