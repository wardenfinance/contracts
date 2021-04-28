# escrow
> Genrated with [Archetype](https://archetype-lang.org/) v1.2.3

## Roles

### buyer_address

| Attribute              | Value  |
|----------------|---|---|
| Kind           | variable  |
| Address        | tz1placeholderplaceholderplacejAYjjX  |


### seller_address

| Attribute              | Value  |
|----------------|---|---|
| Kind           | variable  |
| Address        | tz2placeholderplaceholderplacejAYjjX  |


### oracle_address

| Attribute              | Value  |
|----------------|---|---|
| Kind           | variable  |
| Address        | tz3placeholderplaceholderplacejAYjjX  |


## Transitions

### abort
`called by ` (buyer_address or seller_address)

### confirm

### complete
`called by ` oracle_address

### cancel
`called by ` oracle_address

