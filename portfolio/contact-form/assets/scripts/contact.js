function Contact(options) {

    let logo, title, nameField, nameInput, phoneRadio, phoneChose, emailRadio, emailChose, phoneField, phoneInput, emailField, emailInput,
        immediatelyRadio, immediatelyChose, timeRadio, timeChose, timeField, messageField, messageInput, attachField, attachInput,
        attachButton, recaptcha, personalCheckbox, preloader, formSuccess, formError, popupBtn, formWindow, resultWindow;

    if(options.formPopup.set){
        popupBtn = document.querySelector(options.formPopup.btnSelector);
        formWindow = document.querySelector(options.formPopup.formSelector);
        popupBtn.addEventListener("click", function () {
            formWindow.classList.add("popup-show");
        });
        formWindow.addEventListener("click", function (e) {
            const target = e.target;
            if (target.className === options.formPopup.closeSelector || (target === formWindow)) {
                formWindow.classList.remove("popup-show");
            } else {
                return true;
            }
        });
    }
    if(options.resultPopup.set){
        resultWindow = document.querySelector(options.resultPopup.selector);
        resultWindow.addEventListener("click", function (e) {
            const target = e.target;
            if (target.className === options.resultPopup.closeSelector || (target === resultWindow)) {
                resultWindow.classList.remove("popup-show");
                if(formSuccess)
                    formSuccess.remove();
                if(formError)
                    formError.remove();
            } else {
                return true;
            }
        });
    }

    const formContainer = document.querySelector(options.formContainerSelector);
    const resultContainer = document.querySelector(options.resultContainerSelector);
    const callbackForm = document.createElement('form');
    callbackForm.method = 'post';
    callbackForm.name = 'callback-form';
    callbackForm.className = 'callback-form';
    callbackForm.enctype = 'multipart/form-data';
    callbackForm.innerHTML = '';
    formContainer.appendChild(callbackForm);

    if(options.logo.set){
        logo = document.createElement('img');
        logo.className = 'callback-form__logo';
        logo.src = options.logo.src;
        callbackForm.appendChild(logo);
    }
    if(options.title.set){
        title = document.createElement('span');
        title.className = 'callback-form__title';
        title.innerHTML = options.title.text;
        callbackForm.appendChild(title);
    }
    if(options.nameInput.set){
        nameField = document.createElement('div');
        nameField.className = 'callback-form__field';
        nameField.innerHTML =
            '<i class="fas fa-user"></i>\n' +
            '<input type="text" name="username" id="username" class="callback-form__input" placeholder="'+options.nameInput.placeholder+'" />\n' +
            '<span class="warning" title="некорректные данные"><i class="fas fa-exclamation-triangle"></i></span>'
        callbackForm.appendChild(nameField);
        nameInput = document.querySelector("#username");
        nameInput.addEventListener('input', function (e) {
            (validateNameField(e.target)) ? updateField(nameField, true) : updateField(nameField, false);
        });
    }
    if(options.phoneInput.set && options.emailInput.set){
        const contactChose = document.createElement('div');
        contactChose.innerHTML =
            '<label for="connect" class="callback-form__radio radio-container">Связаться по телефону\n' +
            '<input type="radio" name="connect" id="connect" value="phone" checked/>\n' +
            '<span class="radiomark"></span>\n' +
            '</label>\n' +
            '<label for="connect2" class="callback-form__radio radio-container">по e-mail\n' +
            '<input type="radio" name="connect" id="connect2" value="phone" />\n' +
            '<span class="radiomark"></span>\n' +
            '</label>'
        callbackForm.appendChild(contactChose);
        phoneRadio = document.querySelector("#connect");
        phoneChose = phoneRadio.parentNode;
        emailRadio = document.querySelector("#connect2");
        emailChose = emailRadio.parentNode;
        document.addEventListener("DOMContentLoaded", function () {
            togglePhoneField();
        });
        phoneChose.addEventListener('click', function (e) {
            togglePhoneField();
        });
        emailChose.addEventListener('click', function (e) {
            toggleEmailField();
        });
    }
    if(options.phoneInput.set){
        phoneField = document.createElement('div');
        phoneField.className = 'callback-form__field';
        phoneField.innerHTML =
            '<i class="fas fa-phone"></i>\n' +
            '<input type="text" name="phonenum" id="phonenum" class="callback-form__input" placeholder="'+options.phoneInput.placeholder+'" />\n' +
            '<span class="warning" title="некорректные данные"><i class="fas fa-exclamation-triangle"></i></span>'
        callbackForm.appendChild(phoneField);
        phoneInput = document.querySelector("#phonenum");
        if(options.phoneInput.mask){
            $("#phonenum").mask(options.phoneInput.mask, {
                completed: function () {
                    updateField(phoneField, true)
                }
            });
        }
        phoneInput.addEventListener('input', function (e) {
            (validatePhoneField(e.target)) ? updateField(phoneField, true) : updateField(phoneField, false);
        });
    }
    if(options.emailInput.set){
        emailField = document.createElement('div');
        emailField.className = 'callback-form__field';
        emailField.innerHTML =
            '<i class="fas fa-envelope"></i>\n' +
            '<input type="email" name="email" id="email" class="callback-form__input" placeholder="'+options.emailInput.placeholder+'">\n' +
            '<span class="warning" title="некорректные данные"><i class="fas fa-exclamation-triangle"></i></span>'
        callbackForm.appendChild(emailField);
        emailInput = document.querySelector('#email');
        emailInput.addEventListener('input', function (e) {
            (validateEmailField(e.target)) ? updateField(emailField, true) : updateField(emailField, false);
        });
    }
    if(options.timeChose){
        const time = document.createElement('div');
        time.innerHTML =
            '<label for="immediately" class="callback-form__radio radio-container">Позвонить сейчас\n' +
            '<input type="radio" name="when" id="immediately" value="immediately" checked/>\n' +
            '<span class="radiomark"></span>\n' +
            '</label>\n' +
            '<label for="bythetime" class="callback-form__radio radio-container">Выбрать время\n' +
            '<input type="radio" name="when" id="bythetime" value="bythetime" />\n' +
            '<span class="radiomark"></span>\n' +
            '</label>\n' +
            '<input type="time" name="time" class="callback-form__time" id="time-field">'
        callbackForm.appendChild(time);
        immediatelyRadio = document.querySelector('#immediately');
        immediatelyChose = immediatelyRadio.parentNode;
        timeRadio = document.querySelector('#bythetime');
        timeChose = timeRadio.parentNode;
        timeField = document.querySelector('#time-field');
        immediatelyChose.addEventListener('click', function (e) {
            hideTimeField();
        });
        timeChose.addEventListener('click', function (e) {
            showTimeField();
        });
    }
    if(options.messageInput.set){
        messageField = document.createElement('div');
        messageField.className = 'callback-form__field';
        messageField.innerHTML =
            '<textarea name="message" id="message" class="callback-form__area callback-form__input" placeholder="'+options.messageInput.placeholder+'"></textarea>\n' +
            '<span class="warning" title="некорректные данные"><i class="fas fa-exclamation-triangle"></i></span>\n' +
            '<span class="callback-form__count" id="count"><span id="count-number">0</span> / <span id="count-per">0</span></span>'
        callbackForm.appendChild(messageField);
        messageInput = document.querySelector('#message');
        document.getElementById('count-per').innerHTML = options.messageInput.limit;
        messageInput.addEventListener('input', function (e) {
            (validateMessageField(e.target)) ? updateField(messageField, true) : updateField(messageField, false);
            document.getElementById('count-number').innerHTML = this.value.length;
            if(this.value.length >= options.messageInput.limit){
                this.value = this.value.substr(0, options.messageInput.limit-1);
            }
        });
    }
    if(options.fileAttach.set){
        attachField = document.createElement('div');
        attachField.className = 'callback-form__attach attach';
        attachField.innerHTML =
            '<button type="button" class="attach__btn" id="attach-btn">'+options.fileAttach.text+'</button>\n' +
            '<input type="file" name="attach" id="attach" accept="'+options.fileAttach.accept+'">'
        callbackForm.appendChild(attachField);
        attachInput = document.querySelector('#attach');
        attachButton = document.querySelector('#attach-btn');
        attachButton.addEventListener('click', function (e) {
            attachInput.click();
        });
        attachInput.addEventListener('change', function (e) {
            attachFile();
        });
    }
    if(options.recaptcha.set){
        recaptcha = document.createElement('div');
        recaptcha.className = 'g-recaptcha';
        recaptcha.id = 'recaptcha';
        recaptcha.dataset.sitekey = options.recaptcha.sitekey;
        recaptcha.innerHTML = ''
        callbackForm.appendChild(recaptcha);
    }
    if(options.policyCheck.set){
        const policy = document.createElement('div');
        if(options.policyCheck.withCheck){
            policy.innerHTML =
                '<label for="personal" class="check-container" id="policy">'+options.policyCheck.text+'\n' +
                '<input type="checkbox" name="personal" id="personal" class="personal" />\n' +
                '<span class="checkmark"></span>\n' +
                '</label>'
        }else {
            policy.innerHTML =
                '<label for="personal" class="check-container" id="policy">'+options.policyCheck.text+'</label>'
        }
        callbackForm.appendChild(policy);
        if(options.policyCheck.withCheck)
            personalCheckbox = document.querySelector('#personal');
    }

    const sendButton = document.createElement('button');
    sendButton.type = "button";
    sendButton.name = "send";
    sendButton.id = "send";
    sendButton.className = "btn callback-form__send";
    sendButton.innerHTML = options.buttonText.basic;
    callbackForm.appendChild(sendButton);
    sendButton.addEventListener('click', function (e) {
        if(options.policyCheck.withCheck){
            if (personalCheckbox.checked) {
                if (validateForm()) {
                    sendForm();
                } else {
                    e.preventDefault();
                }
            } else {
                e.preventDefault();
            }
        }
        else{
            if (validateForm()) {
                sendForm();
            } else {
                e.preventDefault();
            }
        }
    });

    if(options.policyCheck.set && options.policyCheck.withCheck) {
        updateSendButton(false);
        personalCheckbox.addEventListener('change', function (e) {
            validateAgreement() ? updateSendButton(true) : updateSendButton(false);
        });
    }

    function updateField(element, correct) {
        if (correct) {
            element.classList.remove("incorrect");
            element.classList.add("correct");
            if (element.tagName === 'DIV') {
                element.querySelector('.warning').style.display = "none";
            }
        } else {
            element.classList.remove("correct");
            element.classList.add("incorrect");
            if (element.tagName === 'DIV') {
                element.querySelector('.warning').style.display = "inline-block";
            }
        }
    }

    function updateAttachField(filename) {
        filename = "<i class=\"fas fa-paperclip\"></i> " + filename;
        document.querySelector('#attach-btn').innerHTML = filename;
        document.querySelector('#attach-btn').classList.add("attached");
    }

    function updateRecaptcha(element, correct){
        if(correct) {
            element.style.border = "none";
        } else {
            element.style.border = "1px solid red";
        }
    }

    function updateSendButton(correct) {
        correct ? sendButton.classList.remove("disabled") : sendButton.classList.add("disabled");
    }

    function togglePhoneField() {
        emailField.style.display = "none";
        phoneField.style.display = "block";
        sendButton.innerHTML = options.buttonText.basic;
        immediatelyChose.style.display = "inline-block";
        timeChose.style.display = "inline-block";
        immediatelyChose.click();
    }

    function toggleEmailField() {
        phoneField.style.display = "none";
        emailField.style.display = "block";
        sendButton.innerHTML = options.buttonText.alt;
        immediatelyChose.style.display = "none";
        timeChose.style.display = "none";
        timeField.style.display = "none";
    }

    function hideTimeField() {
        timeField.style.display = "none";
    }

    function showTimeField() {
        timeField.style.display = "block";
    }

    function popupResult() {
        resultWindow.classList.add("popup-show");
        preloader = document.createElement('div');
        preloader.className = 'preloader';
        preloader.innerHTML = '<img src="assets/img/spinner.gif" alt="please wait" class="form-result__icon">'
        resultContainer.appendChild(preloader);
    }

    function showResult(success) {
        preloader.remove();
        if (success) {
            formSuccess = document.createElement('div');
            formSuccess.className = 'form-result';
            formSuccess.innerHTML =
                '<img src="'+options.resultIcon.success+'" alt="success" class="form-result__icon">\n' +
                '<span class="form-result__title">'+options.resultText.success+'</span>\n'
            resultContainer.appendChild(formSuccess);
        } else {
            formError = document.createElement('div');
            formError.className = 'form-result';
            formError.innerHTML =
                '<img src="'+options.resultIcon.error+'" alt="error" class="form-result__icon">\n' +
                '<span class="form-result__title">'+options.resultText.error+'</span>\n'
            resultContainer.appendChild(formError);
        }
    }



    function validateNameField(element) {
        let name = element.value.trim();
        const re = /^[a-zA-Zа-яА-ЯёЁ\s\-]*$/;
        let success = name.match(re);
        if (name.length === 0 || !success) return false;
        else return true;
    }

    function validatePhoneField(element) {
        let phone = element.value.trim();
        const re = /^[0-9()\s\-+]*$/;
        let success = phone.match(re);
        if (phone.length === 0 || !success) return false;
        else return true;
    }

    function validateEmailField(element) {
        let email = element.value.trim();
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let success = re.test(String(email).toLowerCase());
        if (email.length === 0 || !success) return false;
        else return true;
    }

    function validateTime() {
        if (timeField.value.length === 0) return false;
        else return true;
    }

    function validateMessageField(element) {
        let message = element.value.trim();
        if (message.length === 0) return false;
        else return true;
    }

    function attachFile() {
        let file = attachInput.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            let filename = file.name.slice(0, 30);
            if (filename.length < file.name.length)
                filename += '...';
            updateAttachField(filename);
        };
        reader.readAsDataURL(file);
    }

    function validateAgreement() {
        return personalCheckbox.checked;
    }

    function validateForm(e) {
        if(options.nameInput.set){
            if (!validateNameField(nameInput)) {
                updateField(nameField, false)
                return false;
            }
        }
        if(options.phoneInput.set && options.emailInput.set){
            if (phoneRadio.checked) {
                if (!validatePhoneField(phoneInput)) {
                    updateField(phoneField, false);
                    return false;
                }
            }
            if (emailRadio.checked) {
                if (!validateEmailField(emailInput)) {
                    updateField(emailField, false)
                    return false;
                }
            }
        }
        else if(options.phoneInput.set && !options.emailInput.set){
            if (!validatePhoneField(phoneInput)) {
                updateField(phoneField, false);
                return false;
            }
        }
        else if(options.emailInput.set && !options.phoneInput.set){
            if (!validateEmailField(emailInput)) {
                updateField(emailField, false)
                return false;
            }
        }
        else{
            console.log("Включите в настройках хотя бы один из способов связи!");
            return false;
        }
        if(options.messageInput.set){
            if (!validateMessageField(messageInput)) {
                updateField(messageField, false)
                return false;
            }
        }
        if(options.timeChose){
            if (timeRadio.checked) {
                if (!validateTime()) {
                    updateField(timeField, false)
                    return false;
                }
            }
        }
        if(options.recaptcha.set){
            let response = grecaptcha.getResponse();
            if (response.length == 0) {
                updateRecaptcha(recaptcha, false);
                return false;
            }
        }
        return true;
    }

    async function sendForm(e) {
        if(options.formPopup.set)
            formWindow.classList.remove("popup-show");
        if(options.resultPopup)
            popupResult();

        await fetch('php/sendmail.php', {
            method: 'POST',
            body: new FormData(callbackForm)
        }).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(function (data) {
            if(data.status === "success"){
                showResult(true);
            }
            else{
                showResult(false);
                console.log(data.reason);
            }
        }).catch((error) => {
                console.log(error);
                showResult(false);
            });
    }
}