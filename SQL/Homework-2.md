


### film tablosunda bulunan tüm sütunlardaki verileri replacement cost değeri 12.99 dan büyük eşit ve 16.99 küçük olma koşuluyla sıralayınız ( BETWEEN - AND yapısını kullanınız.)

__SQL QUERY 1 :__ SELECT * FROM Film Where Replacement_cost >= 12.99 AND Replacement_cost < 16.99 ORDER BY Replacement_cost ASC;
__SQL QUERY 2 :__ SELECT * FROM Film Where Replacement_cost BETWEEN 12.99 AND 16.98 ORDER BY Replacement_cost ASC

---

### actor tablosunda bulunan first_name ve last_name sütunlardaki verileri first_name 'Penelope' veya 'Nick' veya 'Ed' değerleri olması koşuluyla sıralayınız. ( IN operatörünü kullanınız.)

__SQL QUERY :__ SELECT first_name, last_name FROM Actor WHERE first_name IN ('Penelope','Nick','Ed')

---

### film tablosunda bulunan tüm sütunlardaki verileri rental_rate 0.99, 2.99, 4.99 VE replacement_cost 12.99, 15.99, 28.99 olma koşullarıyla sıralayınız. ( IN operatörünü kullanınız.)

__SQL QUERY :__ SELECT * FROM Film Where rental_rate IN (0.99,2.99,4.99) AND replacement_cost IN (12.99,15.99,28.99) ORDER BY replacement_cost

---


