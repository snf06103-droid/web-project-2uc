document.addEventListener('DOMContentLoaded', function() {
    const selectLabel = document.querySelector('.select-label');
    const selectBox = document.querySelector('.select-box');

    // 요소가 존재하는지 먼저 체크하는 습관이 중요해요!
    if (selectLabel && selectBox) {
        selectLabel.addEventListener('click', () => {
            selectBox.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!selectBox.contains(e.target)) {
                selectBox.classList.remove('active');
            }
        });
    }
});