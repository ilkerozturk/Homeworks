
### FILM TABLOSUNDA BULUNAN TITLE VE DESCRIPTION SUTUNLARINDAKI VERILERI SIRALAMA SORGUSU

*** SELECT title, description FROM film; ***

### FILM TABLOSUNDA BULUNAN TUM VERILERI FILM UZUNLUGU 60'TAN BUYUK VE 75'TEN KUCUK OLMA KOSULUYLA SIRALANMASI SORGUSU

*** SELECT * FROM film WHERE length >=60 AND length <=75 ORDER BY length ASC ***

### FILM TABLOSUNDA BULUNAN TÜM SÜTUNLARDAKI VERILERI RENTAL_RATE 0.99 VE REPLACEMENT_COST 12.99 VEYA 28.99 OLMA KOŞULLARIYLA SIRALANMASI SORGUSU

*** SELECT * FROM Film WHERE Rental_Rate = 0.99 AND Replacement_Cost = 12.99 OR Replacement_Cost = 28.99 ORDER BY Replacement_Cost ASC; ***

### CUSTOMER TABLOSUNDA BULUNAN FIRST_NAME SÜTUNUNDAKI DEĞERI 'Mary' OLAN MÜŞTERININ LAST_NAME SÜTUNUNDAKI DEĞERI NEDIR?

*** SELECT Last_Name FROM CUSTOMER WHERE First_Name = 'Mary'; ***

### FILM TABLOSUNDAKI UZUNLUĞU(LENGTH) 50 TEN BÜYÜK OLMAYIP AYNI ZAMANDA RENTAL_RATE DEĞERI 2.99 VE 4.99 OLMAYAN VERILERI SIRALAYINIZ.

*** SELECT * FROM Film WHERE Length <= 50 AND (Rental_Rate <> 2.99 AND Rental_Rate <> 4.99); ***