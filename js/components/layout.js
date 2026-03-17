// async function includeLayout() {
//   const headerTarget = document.getElementById("site-header");
//   const footerTarget = document.getElementById("site-footer");

//   if (headerTarget) {
//     try {
//       const response = await fetch("/components/header.html");
//       if (!response.ok) throw new Error(`header load failed: ${response.status}`);
//       headerTarget.innerHTML = await response.text();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   if (footerTarget) {
//     try {
//       const response = await fetch("/components/footer.html");
//       if (!response.ok) throw new Error(`footer load failed: ${response.status}`);
//       footerTarget.innerHTML = await response.text();
//     } catch (error) {
//       console.error(error);
//     }
//   }
// }

// includeLayout();

async function includeLayout() {
    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    // [1] 현재 페이지 위치 계산 (상대 경로 접두사)
    // /pages/ 폴더 안에 있는 파일이라면 ../../ 를 붙여줍니다.
    const isSubPage = window.location.pathname.includes('/pages/');
    const prefix = isSubPage ? "../../" : "./";

    // [2] 헤더 불러오기
    if (headerTarget) {
        try {
            const response = await fetch(`${prefix}components/header.html`);
            if (!response.ok) throw new Error(`header load failed`);
            const html = await response.text();
            headerTarget.innerHTML = html;

            // 헤더 로드 후 이미지 및 링크 경로 수정
            fixLayoutPaths(headerTarget, prefix);
            
            // 헤더 스크롤 이벤트 연결 (헤더가 생성된 후 실행)
            initHeaderScroll();
        } catch (error) {
            console.error(error);
        }
    }

    // [3] 푸터 불러오기
    if (footerTarget) {
        try {
            const response = await fetch(`${prefix}components/footer.html`);
            if (!response.ok) throw new Error(`footer load failed`);
            const html = await response.text();
            footerTarget.innerHTML = html;

            // 푸터 로드 후 경로 수정
            fixLayoutPaths(footerTarget, prefix);
        } catch (error) {
            console.error(error);
        }
    }
}

// 경로 수정 함수: /로 시작하는 경로를 prefix에 맞게 변경
function fixLayoutPaths(target, prefix) {
    const images = target.querySelectorAll('img');
    const links = target.querySelectorAll('a');

    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && src.startsWith('/')) img.src = prefix + src.substring(1);
    });

    links.forEach(a => {
        const href = a.getAttribute('href');
        if (href && href.startsWith('/')) a.href = prefix + href.substring(1);
    });
}

// 헤더 스크롤 함수
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('on');
        } else {
            header.classList.remove('on');
        }
    });
}

includeLayout();
