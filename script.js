document.addEventListener('DOMContentLoaded', function() {
    const changeTextBtn = document.getElementById('changeTextBtn');
    const dynamicText = document.getElementById('dynamicText');

    let clickCount = 0;

    changeTextBtn.addEventListener('click', function() {
        clickCount++;
        if (clickCount % 2 === 1) {
            dynamicText.textContent = '你点击了按钮！这是通过JavaScript改变的文字。';
        } else {
            dynamicText.textContent = '文字又变回来了！再点击试试。';
        }
    });
});
