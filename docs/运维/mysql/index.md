# 索引

## 一、最左前缀匹配原则

对于多列索引。如果定义了index name(co1,col2,col3)，那么在使用查询的时候，索引只会对以下语句有影响

```sql
SELECT * FROM tbl_name WHERE col1=val1;
SELECT * FROM tbl_name WHERE col1=val1 AND col2=val2;
```

同时在官方文档中也说明了对于联合索引的限制。

1. 最多16列
2. 可以额外创建一列, 其列值由联合索引包含 的所有列值所生成的**hash值**来构成

## 资料备注

1.[官方多列索引的解释](https://dev.mysql.com/doc/refman/8.0/en/multiple-column-indexes.html)

