module apa_addr::example {
    use std::signer;
    use std::string;
    use aptos_framework::account;
    use aptos_framework::event;
    use std::string::String;
    use aptos_std::table::{Self, Table};
     


    /*진행사황
    - 잡화처리
    - 간선상차
    - 간선하차
    - 배송중
    - 배송완료
    */
    
    const PACKAGE_HOLDING = 1;
    const INTER_TERMINAL_LODING = 2;
    const INTER_TERMINAL_UNLODING = 3;
    const IN_TRNSIT: = 4;
    const DELIVERED = 5;
    /* 전체 택배 리스트*/  
    struct ParcelList  has key{
        parcels: Table<u64, Parcel>,
        parcel_counter: u64
    }
    /*
    택배 구조체
    parcel:id
    보내는 주소
    받는 주소
    meta_data
    현재 상황
    */
    struct Parcel has store, drop, copy {
        parcel_id: u64,
        from_address:address,
        to_address:address,
        worker_address:address,
        meta_data:String,
        parcel_progress:u64,
    } 
    /*
    init
    */
     fun  init_module(account: &signer) {
        
        let parcel_list_init = ParcelList {
            parcels: table::new(),
            parcel_counter: 0
        };
        move_to(account, parcel_list_init);
    }

    /*택배 등록*/ 
    public entry fun create_task(
            meta_data:String,         
            contract:address,
            to_address:address,
            from_address:address,
            ) acquires ParcelList {
        let parcel_list = borrow_global_mut<ParcelList>(contract);
        let counter = parcel_list.parcel_counter + 1;
        let new_parcel = Parcel {
            parcel_id: counter,
            from_address:from_address,
            to_address:to_address,
            meta_data:meta_data,
            parcel_progress:PACKAGE_HOLDING,
        };
        table::upsert(&mut parcel_list.parcels, counter, new_parcel);
        parcel_list.parcel_counter = counter;
    }
    

    /*
    택배기사만 등록
    */
    public entry fun update_list(contract:address,account: &signer, parcel_id: u64) acquires ParcelList {
        let parcel_list = borrow_global_mut<ParcelList>(contract);
        let parcel_recode = table::borrow_mut(&mut parcel_list.parcels, parcel_id);
        let worker_addr= signer::address_of(account);
        assert!(parcel_recode.worker_address == worker_addr , code: u64);
        parcel_recode.parcel_progress = parcel_recode.parcel_progress+1;
    }
}