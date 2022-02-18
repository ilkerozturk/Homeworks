# QUESTIONS

## Aşağıdaki sorgu senaryolarını örnek veri tabanı üzerinden gerçekleştiriniz.

- film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?
- film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?
- film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.
- payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.


---

- ### film tablosunda film uzunluğu length sütununda gösterilmektedir. Uzunluğu ortalama film uzunluğundan fazla kaç tane film vardır?

<code> 
SELECT COUNT(*) FROM FILM 
WHERE length >
(
SELECT AVG(Length) FROM FILM
)
</code>



- ### film tablosunda en yüksek rental_rate değerine sahip kaç tane film vardır?

<code>
SELECT COUNT(*) 
FROM FILM 
	WHERE rental_rate >=
		(
		SELECT MAX(rental_rate) FROM FILM
		)
</code>



- ### film tablosunda en düşük rental_rate ve en düşün replacement_cost değerlerine sahip filmleri sıralayınız.

<code> 
SELECT rental_rate, replacement_cost
FROM FILM 
	WHERE rental_rate =
		(
		SELECT MIN(rental_rate) FROM FILM
		)
		ORDER BY replacement_cost ASC LIMIT 1
</code>



- ### payment tablosunda en fazla sayıda alışveriş yapan müşterileri(customer) sıralayınız.

<code> 
SELECT customer_id, COUNT(Customer_id)
FROM PAYMENT
GROUP BY customer_id 
ORDER BY COUNT DESC
</code>
---