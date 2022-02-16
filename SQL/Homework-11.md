# QUESTIONS

## Aşağıdaki sorgu senaryolarını örnek veri tabanı üzerinden gerçekleştiriniz.

- actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.
- actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.
- actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.
- İlk 3 sorguyu tekrar eden veriler için de yapalım.


---

- ### actor ve customer tablolarında bulunan first_name sütunları için tüm verileri sıralayalım.

<code> 
(SELECT first_name FROM ACTOR)
UNION
(SELECT first_name FROM CUSTOMER)
</code>



- ### actor ve customer tablolarında bulunan first_name sütunları için kesişen verileri sıralayalım.

<code>
(SELECT first_name FROM ACTOR)
INTERSECT
(SELECT first_name FROM CUSTOMER)
</code>



- ### actor ve customer tablolarında bulunan first_name sütunları için ilk tabloda bulunan ancak ikinci tabloda bulunmayan verileri sıralayalım.

<code> 
(SELECT first_name FROM ACTOR)
EXCEPT
(SELECT first_name FROM CUSTOMER)
</code>



- ### İlk 3 sorguyu tekrar eden veriler için de yapalım.

<code> 
(SELECT first_name FROM ACTOR)
UNION ALL
(SELECT first_name FROM CUSTOMER)
</code>

<code> 
(SELECT first_name FROM ACTOR)
INTERSECT ALL
(SELECT first_name FROM CUSTOMER)
</code>

<code> 
(SELECT first_name FROM ACTOR)
EXCEPT ALL
(SELECT first_name FROM CUSTOMER)
</code>