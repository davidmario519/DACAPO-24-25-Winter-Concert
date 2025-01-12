document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // 이미지와 팝업 이미지 매핑
    const imageMap = {
        t1: ["s1", "s2", "s3"],
        t2: ["s4"],
        t3: ["s5", "s6", "s7"],
        t4: ["s8"],
        t5: ["s9"],
        t6: ["s10"],
        t7: ["s11"],
        t8: ["s12"],
        t9: ["s13"],
        t10: ["s14", "s15", "s16"],
        t11: ["s17"],
        t12: ["s18"],
        t13: ["s19"],
        t14: ["s20"],
        t15: ["s21"],
        t16: ["s22"],
        t17: ["s23"],
        t18: ["s24"]

    };

    let currentImageSet = [];
    let currentIndex = 0;

    // 이미지 클릭 이벤트 등록
    const images = document.querySelectorAll(".image");
    images.forEach((image) => {
        image.addEventListener("click", () => {
            const imageId = image.id;
            currentImageSet = imageMap[imageId] || [];
            currentIndex = 0;

            if (currentImageSet.length === 1) {
                prevButton.style.display = "none"; // 이전 버튼 숨김
                nextButton.style.display = "none"; // 다음 버튼 숨김
            } else {
                prevButton.style.display = "block"; // 이전 버튼 표시
                nextButton.style.display = "block"; // 다음 버튼 표시
            }

            // 첫 번째 이미지로 팝업 띄우기
            popupImage.src = `../../${currentImageSet[currentIndex]}.png`;
            popup.style.display = "flex";
        });
    });

    // 이전 버튼 이벤트
    prevButton.addEventListener("click", () => {
        if (currentImageSet.length > 1) {
            currentIndex = (currentIndex - 1 + currentImageSet.length) % currentImageSet.length;
            popupImage.src = `../../${currentImageSet[currentIndex]}.png`;
        }
    });

    // 다음 버튼 이벤트
    nextButton.addEventListener("click", () => {
        if (currentImageSet.length > 1) {
            currentIndex = (currentIndex + 1) % currentImageSet.length;
            popupImage.src = `../../${currentImageSet[currentIndex]}.png`;
        }
    });

    // 팝업 닫기 버튼 이벤트
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
        popupImage.src = ""; // 이미지 src 초기화
    });

    // 팝업 외부 클릭 시 닫기
    popup.addEventListener("click", (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
            popupImage.src = "";
        }
    });
});