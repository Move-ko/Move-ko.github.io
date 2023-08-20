module example::staked {

    
    /// A self-custodial object holding the staked SUI tokens.
    struct StakedSui has key {
    id: UID,
    /// ID of the staking pool we are staking with.
    pool_id: ID,
    /// The epoch at which the stake becomes active.
    stake_activation_epoch: u64,
    /// The staked SUI tokens.
    principal: Balance<SUI>,
}
}