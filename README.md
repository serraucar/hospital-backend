**Hospital Automation System - Backend** <br> <br>
Bu proje, TypeScript ve Express kullanarak geliştirilmiş bir hastane otomasyon sisteminin backend kısmını içerir. PostgreSQL veritabanı kullanılarak doktor ve hasta bilgileri yönetilir. <br> <br><br>
**İçindekiler**<br>
Proje Tanımı <br>
Kurulum<br>
Kullanım<br>
API Dokümantasyonu <br> <br>
**Proje Tanımı** <br>
Bu proje, hastane otomasyon sistemi için bir backend API sağlar. Doktorlar ve hastalar için CRUD (Create, Read, Update, Delete) işlemleri yapılabilir. API, PostgreSQL veritabanına bağlanır ve Sequelize ORM kullanılarak veritabanı işlemleri yönetilir.<br><br>
**Kurulum**<br>
--Gereksinimler--<br>
Node.js <br>
PostgreSQL<br><br>
**1.Proje Bağımlılıklarını Yükleyin:**<br>
npm install<br><br>
**2.Veritabanı Yapılandırması:**<br>
config/config.json dosyasını açın ve PostgreSQL bağlantı bilgilerinizi girin:<br>
{
  "development": {
    "username": "your-username",
    "password": "your-password",
    "database": "your-database",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}<br><br>
**3.Veritabanı Tablolarını Oluşturun:**<br>
npx sequelize-cli db:migrate<br><br>
**4.Uygulamayı Başlatın:**<br>
npm start<br><br>

**Kullanım**<br>
API'yi test etmek için Postman gibi bir araç kullanabilirsiniz. Aşağıda bazı API endpoint'leri hakkında bilgi bulunmaktadır.<br>

**Doktorlar**<br>
GET /doctors - Doktorların listesini getirir.<br>
POST /doctors - Yeni bir doktor ekler. Gerekli alanlar: 'name', 'specialty'.<br>
PUT /doctors/:id - Mevcut bir doktoru günceller. Gerekli alanlar: 'name', 'specialty'.<br>
DELETE /doctors/:id - Bir doktoru siler.<br><br>
**Hastalar**<br>
GET /patients - Hastaların listesini getirir.<br>
POST /patients - Yeni bir hasta ekler. Gerekli alanlar: 'name, age'.<br>
PUT /patients/:id - Mevcut bir hastayı günceller. Gerekli alanlar:' name', 'age'.<br>
DELETE /patients/:id - Bir hastayı siler.<br><br>

**API Dokümantasyonu**<br>
--Doktor Ekleme--<br>
POST /doctors<br>
{
  "name": "Dr. John Doe",
  "specialty": "Cardiology"
}<br><br>
--Hasta Ekleme--<br>
POST /patients<br>
{
  "name": "Jane Smith",
  "age": 30
}
