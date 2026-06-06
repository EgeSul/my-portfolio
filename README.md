# 🚀 Klasik Portfolyoları Unutun: Yaşayan Bir Siber Kontrol Paneli

**Geliştirici:** Ege Sül  
**Pozisyon / Alan:** Bilgisayar Programcılığı Öğrencisi & Backend / AI Odaklı Geliştirici  
**Proje Türü:** Dönem Sonu Proje Ödevi & Canlı Yazılım Simülasyonu

---

## 💡 Bu Proje Nereden Çıktı? (Amacım ve Felsefem)

İnternette gezinirken karşımıza çıkan o tekdüze, şablon (*boilerplate*) portfolyo sitelerinden hepimiz sıkılmadık mı? *"Merhaba, ben kod yazıyorum"* deyip iki tane grafik barı koyup bırakılan statik siteler, bir yazılımcının gerçek potansiyelini göstermekten çok uzak.

Ben hedefleri ve yüksek standartları olan bir geliştiriciyim. Daha önce sıfırdan bir mimarlık/tasarım sitesi geliştirme sürecinde edindiğim tecrübeler, bana bazı "amelelik" ve tekrara düşen kısımların ne kadar sıkıcı olduğunu gösterdi. Bu projeye başlarken kendime net bir kural koydum: **Kendime sınır koymayacaktım.** Akademik müfredatın ve sunulan kaynakların çok daha ötesine geçmeyi hedefledim. Doğrudan canlıda (*domain* üzerinde) gururla sergileyebileceğim, "adamakıllı" ve tam kapsamlı bir yazılım simülasyonu inşa etmek istedim. 

Bu projede **C# / .NET Core backend bilgimi**, **ilişkisel veritabanı (MS SQL Server) mantığımı** ve **asenkron JavaScript yeteneklerimi** bir araya getirdim. Yapay zeka entegrasyonu gibi ileri düzey konularda ise yapay zekayı adeta bir kıdemli ortak geliştirici (*Pair Programmer*) olarak yanıma aldım. Vizyonunu benim çizdiğim, kod filtresinden geçirip tarayıcıda bozup bozup düzelttiğim bu çalışma; sadece bir ödev değil, yaşayan fütüristik bir üründür.

---

## 🛠️ Sistemin Arkasında Ne Dönüyor? (Teknik Altyapı)

Web sitemi kurarken harici, hantal CSS kütüphaneleri (Tailwind, Bootstrap vb.) veya spagetti koda sebep olabilecek yapılar kullanmadım. Temel web geliştirme (**HTML5, CSS3, Vanilla JS**) yapısına sadık kalarak, her şeyi tek bir dinamik dosya düzeninde optimize ettim.

### 📐 Sistem Katmanları

| Katman | Kullanılan Teknolojiler / Yapılar | Görevi |
| :--- | :--- | :--- |
| **Grafik & Fizik** | Canvas 2D API | İnteraktif siber ağlar ve pürüzsüz DevOps izleme grafiği render eder. |
| **İş Mantığı (Logic)** | Asenkron JavaScript, DOM Manipulation | Terminal simülatörü, SQL Sandbox, LocalStorage durum yönetimi ve veri akışı. |
| **Yapay Zeka (AI)** | Google Gemini 2.5 Flash API | Arka planda asenkron konuşan dinamik chat asistanı. |
| **Ses Motoru** | Web Audio API | Dışarıdan dosya (.mp3/.wav) yüklemeden kodla fütüristik UI sesleri üretir. |

---

## 🧠 Sitedeki "Çılgın" Özellikler ve Çalışma Mantıkları

### 🌀 A. Cyberconstellation Plexus (Kürelerden Siber Ağ)
Eski nesil kare parçacık mimarisini tamamen sildim. Yerine, **C# ve SQL Server arasındaki veri paket transferini** sembolize eden yuvarlak, neon parıltılı kürelerden oluşan bir siber ağ (*plexus*) kurdum:
* **Yay (Spring) Fiziği:** Parçacıklar farenin konumuna göre gravitasyonel tepki verir. Fare yaklaştığında bükülür, uzaklaştığında sarsıntısız bir şekilde orijinal koordinatlarına geri yaylanır.
* **Parallax Derinliği:** Parçacıklar 3 farklı katmanda (arka, orta, ön plan) farklı hız ve opaklık değerleriyle hareket ederek ekrana gerçekçi bir 3D uzay derinliği kazandırır.
* **Asenkron Veri Paketleri:** Bağlantı çizgileri üzerinde rastgele tetiklenen minik asenkron ışıklar, backend veritabanlarındaki veri akışını simüle eder.

### 💻 B. İnteraktif Developer Terminali (`egesul.sh`)
Hakkımda bölümünde yer alan siber terminal, kullanıcılardan klavye girdisi kabul edebilen gerçek bir komut satırı simülatörüdür.
* JavaScript üzerinde klavye tuş basımlarını (`keydown`) dinleyen bir sistem kurguladım.
* `help`, `about`, `skills`, `goals` ve `clear` komutları asenkron string analiziyle çalıştırılır ve terminal çıktısı DOM'a anlık enjekte edilir. `clear` komutuyla geçmiş silinirken CLI promptu korunur.

### 📊 C. DevOps Sağlık Monitörü (Canlı Sistem Grafiği)
Terminalin hemen yanına canlı sunucu durumunu simüle eden bir DevOps paneli yerleştirdim.
* Rastgele üretilen gerçekçi CPU yükü, ağ gecikmesi (*Network Latency - ms*) ve Redis önbellek hit-rate değerleri her 2 saniyede bir güncellenir.
* Gecikme grafiği, Canvas 2D bağlamı kullanılarak anlık olarak pürüzsüzce çizilir.

### 🗄️ D. İnteraktif SQL Sandbox & Sorgu Çalıştırıcı
Yazılım dünyasında "SQL biliyorum" demek kolaydır; ben bunu canlı olarak simüle etmek istedim.
* JavaScript üzerinde `GymMembers` (SaaS projesi), `OzanCmsPosts` (CMS portalı) ve `SecurityGatewayLogs` (siber güvenlik ağ günlükleri) tablolarını simüle eden bir JSON veritabanı mimarisi kurguladım.
* Kullanıcı hazır sorguları seçtiğinde veya metin alanına kendi `SELECT` sorgusunu yazdığında sorgu asenkron işlenir. Doğru tablolarda veriler anında siber neon bir veri tablosunda render edilirken, hatalı tablolarda siber hata logu (`[!] HATA`) basılır.

### 🤖 E. Gemini 2.5 Flash Yapay Zeka Entegrasyonu (Ege-AI)
Portfolyonun en prestijli bölümü, doğrudan Google'ın LLM modeli ile asenkron konuşan siber chat asistanıdır.
* **Özel Sistem Promptu:** Asistanın arka planında, yapay zekayı bir *"Ege Sül Siber Asistanı"* olarak konumlandıran gizli bir talimat çalışır. Bu talimat yapay zekaya benim kimliğimi, C#/.NET Core, MS SQL ve Python yetkinliklerimi, projelerimi (*Gym SaaS, Burger House, CMS, CyberAuth*) ve kurumsal C# yazılım mimarı olma hedeflerimi tanımlar.
* **Üstel Geri Çekilme (Exponential Backoff):** Yapay zeka asenkron API çağrısı, siber parazitlere veya bağlantı kopmalarına karşı korunmaktadır. İstek başarısız olduğunda sistem 5 kez (gecikme sürelerini her defasında ikiye katlayarak: 1sn, 2sn, 4sn, 8sn, 16sn) otomatik yeniden deneme (*retry*) yapar.

### 🔊 F. Fütüristik Sentezlenmiş Ses Motoru (Web Audio API)
Sitedeki en sıra dışı detaylardan biri, hiçbir dış ses dosyası yüklenmeden, tarayıcının kendi ses işlemcisini tetikleyen ses sentezleyicidir.
* **OscillatorNode:** UI üzerindeki buton kliklerinde ve terminal tuş basımlarında farklı frekans ve dalga formlarında (*Sine, Triangle, Sawtooth*) dijital bip sesleri asenkron olarak üretilir.
* **GainNode:** Ses sönümlenme hızı (*exponential decay*) kontrol edilerek premium bir siber atmosfer elde edilmiştir. Sol alttaki sessize alma butonuyla sistem tamamen susturulabilir.

### 🎨 G. Siber Kontrol Paneli Belirleyicisi (Neon Customizer)
Ziyaretçilerin web sitesiyle kurduğu etkileşimi en üst seviyeye çıkarmak için sağ altta yer alan kontrol panelini geliştirdim:
* **Renk Temaları:** Klasik (Sarı/Mavi), Matrix Yeşili, Volkan Pembe/Sarı, Sanal Kan (Blood) ve Gökyüzü (Sky) temalarıyla CSS Değişkenleri (*CSS Variables*) manipüle edilir ve tüm parçacıklar anında seçilen temaya adapte olur.
* **Ağ Eleman Şekli:** Canvas plexus üzerindeki parçacıkların çizim yolları dinamik olarak Küre (*Circle*), Kare (*Square*) veya siber sönümlü Yıldız (*Star*) olarak değiştirilebilir.
* **Sunum Modları:** Sitenin genel görsel kimliğini Siber Neon (canlı mod), Terminal (retro monospaced mod) veya Minimalist (grid çizgilerinin kapalı olduğu temiz kurumsal okuma modu) olarak dönüştürebilirsiniz.
* **Hafıza (LocalStorage):** Tüm kullanıcı tercihleri tarayıcı hafızasına kaydedilir, sayfa yenilendiğinde tercihler kaybolmaz.

---

## 📈 Bir Geliştirici Olarak Bana Ne Kattı? (Öğrendiklerim & Refactoring)

Bu portfolyoyu geliştirmek benim için muazzam bir *refactoring* (kod iyileştirme) ve asenkron programlama okulu oldu.

* **Yapay Zeka ile Ortak Çalışma Kültürü:** Yapay zekayı sadece kod kopyalamak için değil, bilmediğim karmaşık mimarileri (API entegrasyonu, siber ses sentezleme algoritması vb.) projemin vizyonuna uygun şekilde yönetmek için nasıl bir "asistan" olarak kullanabileceğimi deneyimledim. Kodun her hücresini analiz ederek asıl öğrenmeyi gerçekleştirdim.
* **Performans Odaklı Düşünme:** Canvas döngüsünde her saniye yüzlerce kez stil okuyan ağır fonksiyonları kaldırıp verileri JavaScript üzerinde önbelleğe alarak rendering optimizasyonu yapmayı öğrendim.
* **Hata Yönetimi ve Dayanıklılık:** Gemini API entegrasyonu yaparken, ağ kesintilerine karşı üstel geri çekilme (*exponential backoff*) algoritmalarını asenkron olarak kurmayı deneyimledim.
* **Öğrenmeye Devam:** Backend tarafında C# ve SQL Server derinliğimi korurken, yapay zeka modelleri ve veri analitiği otomasyonu için Python ekosistemine de sağlam bir adım attım.

---

## 🗺️ Gelecek Yol Haritam (Roadmap)

- [ ] **Gerçek .NET API Bağlantısı:** JavaScript mock veritabanı yapısını, Docker üzerinde koşan gerçek bir .NET Core Web API projesine ve Redis cache sunucusuna asenkron olarak bağlamak.
- [ ] **Canlı GitHub API Entegrasyonu:** Sitedeki projeler alanını, GitHub profilimdeki commit (kod yükleme) hareketleriyle asenkron olarak beslemek.

---

### 💬 Son Söz
Yazılım benim için sadece kod yazmak değil; bir fikri asenkron çalışan, optimize edilmiş, güvenli ve fütüristik bir sisteme dönüştürmektir. Sitemi incelediğiniz için teşekkürler!
