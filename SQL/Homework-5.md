
### film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en uzun (length) 5 filmi sıralayınız.

__SQL QUERY 1 :__ SELECT * FROM Film Where title LIKE '%n' ORDER BY Length DESC LIMIT 5

---

### film tablosunda bulunan ve film ismi (title) 'n' karakteri ile biten en kısa (length) ikinci(6,7,8,9,10) 5 filmi(6,7,8,9,10) sıralayınız.

__SQL QUERY :__ SELECT * FROM Film Where title LIKE '%n' ORDER BY Length ASC OFFSET 5 LIMIT 5

---

### customer tablosunda bulunan last_name sütununa göre azalan yapılan sıralamada store_id 1 olmak koşuluyla ilk 4 veriyi sıralayınız.

__SQL QUERY :__ SELECT * FROM Customer Where Store_id = 1 Order By Last_name DESC LIMIT 4

---

