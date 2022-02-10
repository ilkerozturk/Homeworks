film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.
film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?
film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?
country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?
city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

### film tablosunda bulunan replacement_cost sütununda bulunan birbirinden farklı değerleri sıralayınız.

__SQL QUERY 1 :__ SELECT DISTINCT Replacement_cost FROM Film

---

### film tablosunda bulunan replacement_cost sütununda birbirinden farklı kaç tane veri vardır?

__SQL QUERY :__ SELECT COUNT(Replacement_cost) FROM Film

---

### film tablosunda bulunan film isimlerinde (title) kaç tanesini T karakteri ile başlar ve aynı zamanda rating 'G' ye eşittir?

__SQL QUERY :__ SELECT * FROM Film Where title LIKE 'T%' AND rating = 'G'

---

### country tablosunda bulunan ülke isimlerinden (country) kaç tanesi 5 karakterden oluşmaktadır?

__SQL QUERY :__ SELECT DISTINCT Country FROM Country Where Country LIKE '_____'

---

### city tablosundaki şehir isimlerinin kaç tanesi 'R' veya r karakteri ile biter?

__SQL QUERY :__ SELECT COUNT(*) FROM City Where City ILIKE ('%r') 

---
