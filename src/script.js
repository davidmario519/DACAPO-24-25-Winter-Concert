document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const backButton = document.getElementById('backButton');
    const detailsPage = document.getElementById('detailsPage');

    // 시작하기 버튼 클릭 시 상세 페이지로 전환
    startButton.addEventListener('click', () => {
        detailsPage.classList.remove('hidden');
        // 부드러운 전환을 위한 페이드 인 효과
        detailsPage.style.opacity = '0';
        requestAnimationFrame(() => {
            detailsPage.style.transition = 'opacity 0.3s ease-in-out';
            detailsPage.style.opacity = '1';
        });
    });

    // 돌아가기 버튼 클릭 시 메인 페이지로 전환
    backButton.addEventListener('click', () => {
        detailsPage.style.opacity = '0';
        setTimeout(() => {
            detailsPage.classList.add('hidden');
        }, 300);
    });
});