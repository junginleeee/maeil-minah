const rainContainer = document.getElementById('rain-container');

function createRain() {
    const rainDrop = document.createElement('div');
    rainDrop.classList.add('rain');

    // 랜덤 가로 위치
    rainDrop.style.left = `${Math.random() * 100}vw`;

    // 애니메이션 강제 설정
    rainDrop.style.animation = 'diagonalFall 6s linear forwards';
    rainDrop.style.animationDuration = `${Math.random() * 2 + 6}s`; // 6~8초 지속
    rainDrop.style.animationDelay = `${Math.random() * 2}s`; // 0~2초 랜덤 딜레이

    rainContainer.appendChild(rainDrop);

    // 빗줄기 제거
    setTimeout(() => {
        rainDrop.remove();
    }, 8000); // 애니메이션 완료 후 제거
}

// 고정된 빗줄기 초기화
setInterval(() => {
    document.querySelectorAll('.rain').forEach((rainDrop) => {
        if (!rainDrop.style.animation) {
            rainDrop.remove(); // 애니메이션 없는 빗줄기 제거
        }
    });
}, 500);

setInterval(createRain, 150); // 150ms마다 빗줄기 생성

function createSparkleWave() {
    const sparkleCount = 150; // 생성할 스파클 개수

    for (let i = 0; i < sparkleCount; i++) {
        setTimeout(() => {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');

            // 랜덤 초기 위치 (ground 맨 위에서 시작)
            pixel.style.left = `${Math.random() * 100}vw`;
            pixel.style.top = `${window.innerHeight - 520}px`; // ground 위쪽에서 시작

            // 랜덤 높이 튀어오름 설정
            const randomHeight = Math.random() * 520 + 450; // 450~970px 사이 랜덤 높이
            pixel.style.setProperty('--sparkle-height', `${randomHeight}px`);

            // 픽셀 추가
            document.body.appendChild(pixel);

            // 픽셀 제거 (2초 후)
            setTimeout(() => {
                pixel.remove();
            }, 2000);
        }, Math.random() * 2000); // 0~2초 랜덤 딜레이
    }
}

// 클릭 이벤트로 스파클 웨이브와 배경 트랜지션 실행
document.body.addEventListener('click', () => {
    // 배경 색상 변경
    document.body.classList.add('background-flash'); // 배경 플래시 효과 추가
    setTimeout(() => {
        document.body.classList.remove('background-flash'); // 원래 배경으로 복귀
    }, 4000); // 4초 후 복귀

    // 스파클 웨이브 생성
    createSparkleWave();
});
