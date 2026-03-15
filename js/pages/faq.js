document.addEventListener('DOMContentLoaded', () => {
    // 1. 클릭할 버튼들 (click-1 ~ click-8)
    const buttons = document.querySelectorAll('.faq-box .cover[class*="click-"]');
    
    // 2. 보여줄 내용 클래스들 (순서대로)
    const targets = [".all", ".product", ".delivery", ".exchange", ".as", ".edit", ".coupon", ".other"];

    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // 모든 버튼 active 해제
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 모든 내용 숨기기
            document.querySelectorAll('.faq-content').forEach(content => {
                content.classList.remove('active');
            });

            // 클릭한 버튼의 순서(index)에 맞는 내용들만 찾아서 보이기
            const targetClass = targets[index];
            document.querySelectorAll(targetClass).forEach(target => {
                target.classList.add('active');
            });
        });
    });

    // 3. 페이지 열리자마자 첫 번째 버튼(전체보기) 강제 클릭
    if(buttons[0]) buttons[0].click();
});