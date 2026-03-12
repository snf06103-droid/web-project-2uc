const observerOptions = {
    root: null,
    threshold: 0.2
};

// 화면에 들어왔을 때 실행할 함수
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // 한 번 나타나면 감시 종료 (원치 않으면 삭제)
            // observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// 클래스가 slide-up-text인 모든 요소를 찾아 감시 시작
document.querySelectorAll('.slide-up').forEach(el => observer.observe(el));