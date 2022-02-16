# QUESTIONS

## Aşağıdaki sorgu senaryolarını örnek veri tabanı üzerinden gerçekleştiriniz.

- city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
- customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.
- customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.


---

- ### city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

<code> 
SELECT city, country FROM CITY INNER JOIN COUNTRY ON city.country_id = country.country_id;
</code>



- ### customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

<code>
SELECT payment_id, CONCAT(first_name, ' ', last_name) as CustomerName FROM CUSTOMER
INNER JOIN PAYMENT ON payment.customer_id = customer.customer_id;
</code>



- ### customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz INNER JOIN sorgusunu yazınız.

<code> 
SELECT rental_id, CONCAT(first_name, ' ', last_name) AS CustomerName FROM CUSTOMER
INNER JOIN RENTAL ON RENTAL.customer_id = CUSTOMER.customer_id;
</code>