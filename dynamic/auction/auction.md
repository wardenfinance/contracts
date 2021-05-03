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
## entries

### place_bid
#### require 
##### place_bid_c1
`(state = Created)`
##### place_bid_c2
`(transferred > highest_bid)`

