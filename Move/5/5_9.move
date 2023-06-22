//s is a singer
module example::test {
 struct PlayingCard has copy{

 }
 fun main(){
     let a = vector<signer>[s];
     let b = vector[true, false, false];
     let c = vector<PlayingCard>[PlayingCard{8}, PayingCard{10}];
 }
}
