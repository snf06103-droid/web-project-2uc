window.addEventListener('scroll', () => {
    
    const header = document.querySelector('#site-header header') || document.querySelector('header');
    
    if (window.scrollY > 0) {
        // 1px이라도 내려가면 'on' 클래스 추가
        header.classList.add('on');
    } else {
        // 맨 위로 올라오면 다시 원래대로(불투명)
        header.classList.remove('on');
    }
});