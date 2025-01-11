document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-item');
    const popup = document.querySelector('.popup');
    const popupImage = document.getElementById('popup-image');
    const overlay = document.querySelector('.popup-overlay');

    images.forEach(image => {
        image.addEventListener('click', () => {
            // data-popup 속성에 있는 이미지를 가져와 팝업에 표시
            const popupSrc = image.getAttribute('data-popup');
            popupImage.src = popupSrc;

            popup.style.display = 'flex';
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', () => {
        // 팝업 닫기
        popup.style.display = 'none';
        overlay.style.display = 'none';
        popupImage.src = '';
    });
});