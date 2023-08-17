module test_addr::parcel {

    use sui::transfer;
    use sui::object::{Self, UID};
    use sui::tx_context::{Self, TxContext};
    use sui::table::{Self, Table};
    use std::string::{Self,String};

   /*
   택배리스트
   
   */
    struct ParcelList has key {
        id:UID,
        list:Table<u64,Parcel>,
     }
   /*
   택배
   
   */ 
      struct Parcel has store,drop,copy{
        id:u64,
        from_address:address,
        to_address:address,
        worker_address:address,
        url:String,
        progress: u8,
     }
     /*
     반품 택배 리스트
          
     */
     struct ReturnParcelList has store,drop,copy {
        id:u64,
        from_address:address,
        to_address:address,
        worker_address:address,
        url:String,
        progress: u8,
     }
   /* 
    반품 택배

   */
     struct ReturnParcel has store,drop,copy {
        id:u64,
        from_address:address,
        to_address:address,
        worker_address:address,
        url:String,
        progress: u8,
     }


  /*
  init
        id:id값
        from_address:보내는주소
        to_address:받는주소
        worker_address:택배 주소
        url:메타데이텅
        progress:상태

  
  */
    fun init(ctx: &mut TxContext) {
        let parcel = table::new<u64, Parcel>(ctx);
         transfer::share_object(ParcelList {
            id: object::new(ctx),
            list:parcel
        })

        let return_parcel = table::new<u64, ReturnParcel>(ctx);
         transfer::share_object(ReturnParcelList {
            id: object::new(ctx),
            list:return_parcel
        })

    }
   
   /*
        택배예약
        id:id값
        from_address:보내는주소
        to_address:받는주소
        worker_address:택배 주소
        url:메타데이텅
        progress:상태
   */
   public entry fun create_task(parcel_list:&mut ParcelList,id:u64,from_address:address,to_address:address,url:String) {

    table::add(&mut parcel_list.list, id, 
    Parcel { 
      id: id, 
      from_address:from_address,
      to_address,
      worker_address,
      url,
      progress:1
      });
    }
   /*
     반품예약
      id:id값
      from_address:보내는주소
      to_address:받는주소
      worker_address:택배 주소
      url:메타데이텅
      progress:상태
   */
    public entry fun return_parcel_reservation (return_parcel:&mut ReturnParcelList,from_address:address,){
       table::add(&mut parcel_list.list, id, Parcel { id: id, content: string::utf8(content),completed:false });
    }
   /*
   
   
   */
   public entry fun update_progress(){
      
   } 

  
    

    


}