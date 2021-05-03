# auction
> Genrated with [Archetype](https://archetype-lang.org/) v1.2.3

## Assets

### bid

| Field | Desc | Type | Attribute |
|--|--|--|--|
| bidder |  | address | __key__
| value |  | tez | 

## Transitions

### complete
`called by ` auctioneer
## entries

### place_bid
#### require 
##### place_bid_c1
`(state = Created)`
##### place_bid_c2
`(transferred > highest_bid)`

### increase_bid
#### require 
##### increase_bid_c1
`(state = Created)`
##### increase_bid_c2
`(bid.contains (caller))`
##### increase_bid_c3
`((bid[caller]).value + transferred > highest_bid)`

### reclaim_bid
#### require 
##### reclaim_bid_c1
`(state = Created)`
##### reclaim_bid_c2
`(bid.contains (caller))`
##### reclaim_bid_c3
`((bid[caller]).value <> highest_bid)`

