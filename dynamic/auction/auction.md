# auction
> Genrated with [Archetype](https://archetype-lang.org/) v1.2.3

## Assets

### bid

| Field | Desc | Type | Attribute |
|--|--|--|--|
| bidder |  | address | __key__
| value |  | tez | 

## Transitions

### start
`called by ` auctioneer

### complete
## entries

### place_bid
#### require 
##### place_bid_c1
`(state = Started)`
##### place_bid_c2
`(transferred > highest_bid)`

