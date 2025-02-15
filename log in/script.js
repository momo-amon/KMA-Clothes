document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // يمكنك إضافة التحقق من صحة البيانات هنا
    if (username === "user" && password === "password") {
        alert("تم تسجيل الدخول بنجاح!");
        // يمكنك توجيه المستخدم إلى صفحة أخرى بعد تسجيل الدخول
        // window.location.href = "dashboard.html";
    } else {
        alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
    }
});