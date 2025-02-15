document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // التحقق من صحة البيانات
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    // التحقق من صحة البريد الإلكتروني
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("يرجى إدخال بريد إلكتروني صحيح!");
        return;
    }

    // إرسال النموذج (يمكنك إضافة الكود الخاص بإرسال البيانات إلى الخادم هنا)
    alert("تم إرسال الرسالة بنجاح!");
    document.getElementById('contactForm').reset(); // إعادة تعيين النموذج
});