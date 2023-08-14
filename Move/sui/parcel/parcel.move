module example::parcel {
     use sui::object::{Self,UID};
     use sui::tx_context::{Self, TxContext};
     use std::vector::vector;
     use std::string::{Self,String};
     struct ParcelList has key {
        id:UID,
        vector<Parcel>
     }
     struct Parcel has store,drop {
        id:u64,
        name:String
     }
}