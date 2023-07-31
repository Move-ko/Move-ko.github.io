module test::example {
    /*택배리스트*/
    struct ParcelList {
        parcel_list: Table<u64, Parcel>,
        parcel_counter: u128
    }
    /*택배*/
    struct Parcel {
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
    fun init_module(account: &signer) {

        let parcel_list_init = ParcelList {
            parcels: table::new(),
            parcel_counter: 0
        };
        move_to(account, parcel_list_init);
    }

    
      /*새로운 택배 리스트를 만들고요*/
       public entry fun create_task(account: &signer, content: String) acquires TodoList {
       //errror
        let parcel_list = borrow_global_mut<ParcelList>;
        let counter = parcel_list.parcel_counter + 1;
        let new_parcel = Parcel {
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