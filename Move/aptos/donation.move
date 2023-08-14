module donation::test {
    use std::string::String;
    //type정의

    //error정의

    
    //프로젝트 리스트
    struct ProjectList {
        projects: vector<Project>

    }
    //프로젝트  
    struct Project {
      project_id:u64,
      project_name:String,
    }
    //itnit
    //일단 영수증
    struct Receipt {
       receipt_id: u64,
       address:address,
       content: String,
    }
    //영수증 저장
    struct ReceiptList has key{
     receipts: Table<u64, Receipt>,
         set_receipt_event: event::EventHandle<Receipt>,

     receipt_counter: u64
    }
    //회사 영수
    struct CompanyReceipt{
       company_receipt_id: u64,
       address:address,
       content: String,
       completed: bool,
    }
    //회사 영수증 목록
    struct CompanyReceiptList {
         company_receipts: Table<u64, CompanyReceipt>,
         company_receipt_counter: u64
    }

   //nft
    struct NFT {
        id:u64,
        img:String,
    }

    //통장 용 지갑
    struct CompanyAddresses{
      addresses:Table<u64,address>
    } 


     //초기화
    fun init_module(account:&signer)acquires Counter{
    let counter:u8=0;

    move_to(account, ProjectList {
      tasks: table::new(),
      set_task_event: account::new_event_handle<Task>(account),
      task_counter: 0
    });
    move_to(account, todo_list);
    move_to(account, todo_list);
    move_to(account, todo_list);
    move_to(account, todo_list);

}
     //프로젝트 만들기
    public entry fun creat_project(account: &signer){
    let todo_list = TodoList {
      tasks: table::new(),
      set_task_event: account::new_event_handle<Task>(account),
      task_counter: 0
    };
    // TodoList 리소스를 서명자 계정 아래로 이동합니다.
    move_to(account, todo_list);
    }


    //기부하기
    public entry fun donation(from: &signer,to:address,price:u64){
        let from_addr = signer::address_of(from);
        coin::transfer<CoinType>(from_addr, to, price);
       
        //영수증 리스트
        let receipt_list = borrow_global_mut<ReceiptList>(from_addr);

        let counter = receipt_list.receipt_counter + 1;


       let new_receipt = Receipt {
         receipt_id: counter,
         address: signer_address,
         content,
       };
        table::upsert(&mut receipt_list.receipts, counter, new_receipt);
        receipt_list.receipt_counter = counter;

        event::emit_event<Receipt>(
        &mut borrow_global_mut<ReceiptList>(from_addr).set_receipt_event,
        new_receipt,
    );
    }
    
   

     


}