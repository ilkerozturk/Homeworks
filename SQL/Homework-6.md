# QUESTIONS

- film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir?
- film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?
- film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?
- film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?


## film tablosunda bulunan rental_rate sütunundaki değerlerin ortalaması nedir

__SQL QUERY :__ SELECT AVG(rental_rate) FROM Film;

---

## film tablosunda bulunan filmlerden kaç tanesi 'C' karakteri ile başlar?

__SQL QUERY :__ SELECT COUNT(*) FROM Film Where title LIKE 'C%';

---

## film tablosunda bulunan filmlerden rental_rate değeri 0.99 a eşit olan en uzun (length) film kaç dakikadır?

__SQL QUERY :__ SELECT MAX(Length) FROM Film Where rental_rate = 0.99

---

## film tablosunda bulunan filmlerin uzunluğu 150 dakikadan büyük olanlarına ait kaç farklı replacement_cost değeri vardır?

__SQL QUERY :__ SELECT COUNT(DISTINCT replacement_cost) FROM Film Where length >= 150

---


