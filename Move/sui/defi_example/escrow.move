

module defi::escrow {
   use sui::object::{Self,ID,UID};
   use sui::transfer;
   use sui::tx_context::{Self,TxContext};

   struct EscrowedObj <T:key+store,phantom ExchangeForT:key +store > has ,store {
     
   }
   const EMismatchedSenderRecipient: u64 = 0;
   const EMismatchedExchangeObject: u64 = 1;

   public fun create<T:key + store ,ExchangeForT:key +store>(
      recipient:address,
      third_party:address,
      exchange_for:ID,
      escrowed:T,
      ctx:&mut TxContext
   ){
      
   }

}