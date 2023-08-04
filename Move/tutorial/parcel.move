module test::example {
    use std::signer;
    use std::string;
    use aptos_framework::account;
    use std::signer;
    use aptos_framework::event;
    use std::string::String;
    use aptos_std::table::{Self, Table};
    /*택배리스트*/
    struct ParcelList  has key{
        parcels: Table<u64, Parcel>,
        parcel_counter: u128
    }
    /*택배*/
    struct Parcel has store, drop, copy {
        parcel_id: u128,
        from_name:String,
        from_phone_number:String,
        from_phone_number_seconde:String,
        from_account:address,
        from_address:String,
        from_email:String,
        request:String,
        to_name:String,
        to_phone_number:String,
        to_phone_number_seconde:String,
        to_address:String,
        to_account:address,
        parcel_progress:u64,
        parcel_name:String,
        parcel_payment:String,
        parcel_type:u64,
    } 

    /*init*/
    public entry fun  init_module(account: &signer) {
        
        let parcel_list_init = ParcelList {
            parcels: table::new(),
            parcel_counter: 0
        };
        move_to(account, parcel_list_init);
    }

    
      /*새로운 택배 리스트를 만들고요*/
       public entry fun create_task(
            account: &signer,     
            parcel_id: u128,
            from_name:String,
            from_phone_number:String,
            from_phone_number_seconde:String,
            from_account:address,
            from_address:String,
            from_email:String,
            request:String,
            to_name:String,
            to_phone_number:String,
            to_phone_number_seconde:String,
            to_address:String,
            to_account:address,
            parcel_progress:u64,
            parcel_name:String,
            parcel_payment:String,
            parcel_type:u64,
            contract:address
            ) acquires TodoList {
       //errror
        let parcel_list = borrow_global_mut<ParcelList>(contract);
        let counter = parcel_list.parcel_counter + 1;
        let new_parcel = Parcel {
            parcel_id: parcel_id,
            from_name:from_name,
            from_phone_number:from_phone_number,
            from_phone_number_seconde:from_phone_number_seconde,
            from_account:from_account,
            from_address:from_address,
            from_email:from_email,
            request:request,
            to_name:to_name,
            to_phone_number:to_phone_number,
            to_phone_number_seconde:to_phone_number_seconde,
            to_address:to_address,
            to_account:to_account,
            parcel_progress:parcel_progress,
            parcel_name:parcel_name,
            parcel_payment:parcel_payment,
            parcel_type:parcel_type,
        };
        table::upsert(&mut parcel_list.parcel_list, counter, new_parcel);
        parcel_list.parcel_counter = counter;
        event::emit_event<Parcel>(
            &mut borrow_global_mut<ParcelList>(signer_address).set_task_event,
            new_parcel,
        );
        assert!(exists<ParcelList>(signer_address), E_NOT_INITIALIZED);
    }

   /*업데이트 용*/
    public entry fun update_list(account: &signer, parcel_id: u64) acquires TodoList {
        let signer_address = signer::address_of(account);
        let parcel_list = borrow_global_mut<ParcelList>;
        let parcel_recode = table::borrow_mut(&mut parcel_list.parcel_list, parcel_id);
        parcel_recode.completed = true;
    }
}