# QUESTIONS

## Aşağıdaki sorgu senaryolarını dvdrental örnek veri tabanı üzerinden gerçekleştiriniz.

- film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.
- film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.
- customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir? 
- city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.

---

- ### film tablosunda bulunan filmleri rating değerlerine göre gruplayınız.

<code> SELECT rating, COUNT(rating) FROM Film GROUP BY rating ORDER BY rating ASC; </code>



- ### film tablosunda bulunan filmleri replacement_cost sütununa göre grupladığımızda film sayısı 50 den fazla olan replacement_cost değerini ve karşılık gelen film sayısını sıralayınız.

<code> SELECT replacement_cost, COUNT(title) FROM Film GROUP BY replacement_cost HAVING COUNT(title) >=50 ORDER BY count ASC; </code>



- ### customer tablosunda bulunan store_id değerlerine karşılık gelen müşteri sayılarını nelerdir?

<code> SELECT Store_id, COUNT(Customer_id) FROM Customer GROUP BY Store_id; </code>



- ### city tablosunda bulunan şehir verilerini country_id sütununa göre gruplandırdıktan sonra en fazla şehir sayısı barındıran country_id bilgisini ve şehir sayısını paylaşınız.

<code> SELECT country_id, COUNT(CITY) FROM City GROUP BY country_id ORDER BY COUNT(CITY) DESC; </code>




