# QUESTIONS

## Aşağıdaki sorgu senaryolarını örnek veri tabanı üzerinden gerçekleştiriniz.

- city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.
- customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.
- customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.


---

- ### city tablosu ile country tablosunda bulunan şehir (city) ve ülke (country) isimlerini birlikte görebileceğimiz LEFT JOIN sorgusunu yazınız.

<code> 
SELECT city, country FROM CITY
LEFT JOIN COUNTRY ON city.country_id = country.country_id
ORDER BY COUNTRY ASC;
</code>



- ### customer tablosu ile payment tablosunda bulunan payment_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz RIGHT JOIN sorgusunu yazınız.

<code>
SELECT payment_id, first_name, last_name FROM CUSTOMER
RIGHT JOIN PAYMENT ON PAYMENT.customer_id = CUSTOMER.customer_id;
</code>



- ### customer tablosu ile rental tablosunda bulunan rental_id ile customer tablosundaki first_name ve last_name isimlerini birlikte görebileceğimiz FULL JOIN sorgusunu yazınız.

<code> 
SELECT rental_id, first_name, last_name FROM CUSTOMER
FULL JOIN RENTAL ON RENTAL.customer_id = CUSTOMER.customer_id
ORDER BY first_name ASC;
</code>