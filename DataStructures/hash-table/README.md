# Hash Table

In computing, a **hash table** (hash map) is a data
structure which implements an *associative array*
abstract data type, a structure that can  *map keys
to values* . A hash table uses a *hash function* to
compute an index into an array of buckets or slots,
from which the desired value can be found

Ideally, the hash function will assign each key to a
unique bucket, but most hash table designs employ an
imperfect hash function, which might cause hash
collisions where the hash function generates the same
index for more than one key. Such collisions must be
accommodated in some way.

[![Hash Table](https://github.com/trekhleb/javascript-algorithms/raw/master/src/data-structures/hash-table/images/hash-table.jpeg)](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/hash-table/images/hash-table.jpeg)

Hash collision resolved by separate chaining.

[![Hash Collision](https://github.com/trekhleb/javascript-algorithms/raw/master/src/data-structures/hash-table/images/collision-resolution.jpeg)](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/hash-table/images/collision-resolution.jpeg)

*Made with [okso.app](https://okso.app)*

## References

* [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
* [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
