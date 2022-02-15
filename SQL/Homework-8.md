# QUESTIONS

## Aşağıdaki sorgu senaryolarını örnek veri tabanı üzerinden gerçekleştiriniz.

- test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.
- Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
- Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.
- Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

---

- ### test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

<code> 
CREATE TABLE employee (
	id serial primary key,
	name varchar(50) not null,
	birthday date not null,
	email varchar(100) not null
)
</code>



- ### Oluşturduğumuz employee tablosuna 'Mockaroo' servisini kullanarak 50 adet veri ekleyelim.
<code>
insert into employee (name, birthday, email) values ('Ariadne', '1901-09-24', 'adwyer0@cocolog-nifty.com');
...
...
...
insert into employee (name, birthday, email) values ('Glenine', '2006-09-06', 'gannakin1d@gnu.org');
</code>



- ### Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

### UPDATE 1

<code> 
UPDATE employee
SET name = 'İlker',
	birthday = '1984-11-20',
	email = 'ilker.ozturkwm@gmail.com'
WHERE id = 2
Returning *;
</code>

### UPDATE 2

<code> 
UPDATE Employee
SET email = 'update2@deneme.com'
WHERE name LIKE '%illo%'
Returning *;
</code>

### UPDATE 3

<code> 
UPDATE Employee
SET birthday = '2000-01-01'
WHERE name LIKE '%ver%'
Returning *;
</code>

### UPDATE 4

<code> 
UPDATE Employee
SET birthday = '1923-04-23',
	email = 'update4@patika.com'
	
WHERE id BETWEEN 40 AND 50
Returning *;
</code>

### UPDATE 5

<code> 
UPDATE Employee
SET name = 'Patika'
Where id between 40 AND 43 AND email like '%pati%' 
Returning *;
</code>


- ### Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

### DELETE 1

<code> 
DELETE FROM Employee
Where id = 5
Returning *;
</code>

### DELETE 2

<code> 
DELETE FROM Employee
WHERE name LIKE '%illo%'
Returning *;
</code>

### DELETE 3

<code> 
DELETE FROM Employee
WHERE birthday = '2000-01-01'
Returning *;
</code>

### DELETE 4

<code> 
DELETE FROM Employee
WHERE email like  '%pati%'
Returning *;
</code>

### DELETE 5

<code> 
DELETE FROM Employee
WHERE id between 10 AND 25
Returning *;
</code>




