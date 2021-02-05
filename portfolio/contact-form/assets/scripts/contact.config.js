new Contact({
    formPopup: { set: true, btnSelector: "#popup", closeSelector: "popup-close-btn", formSelector: "#popup-form"},
    resultPopup: { set: true, closeSelector: "popup-close-btn", selector: "#popup-result"},
    formContainerSelector: "#popup-form .popup-window .popup-body",
    resultContainerSelector: "#popup-result .popup-window .popup-body",
    logo: { set: true, src: "assets/img/logo.png"},
    title: { set: true, text: "Оставьте ваши данные и мы вам перезвоним"},
    nameInput: { set: true, placeholder: "Ваше имя"},
    phoneInput: { set: true, placeholder: "+7 (___) ___ - __ - __", mask: "+7(999) 999-99-99"},
    emailInput: { set: true, placeholder: "E-mail"},
    messageInput: { set: false, limit: 500, placeholder: "Текст сообщения"},
    timeChose: true,
    fileAttach: { set: false, accept: 'application/pdf, application/vnd.ms-excel', text: '<i class="fas fa-paperclip"></i> Прикрепите файл'},
    recaptcha: { set: false, sitekey: ""},
    policyCheck: { set: true, withCheck: true, text: "Я согласен на обработку <a href=\"#\">персональных данных</a>"},
    buttonText: { basic: "Перезвоните мне", alt: "Напишите мне"},
    resultIcon: { success: "assets/img/success.png", error: "assets/img/error.png"},
    resultText: { success: "Спасибо за заявку! Скоро мы вам перезвоним", error: "Ошибка. Обратитесь пожалуйста позже"}
});