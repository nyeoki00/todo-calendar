function initializeMarquee($text_div) {
    let $textCompact = $text_div.find('.text-compact');

    if ($textCompact.length > 0) {
        // 이미 초기화된 경우에는 다시 초기화하지 않음
        // 모달 팝업 시 텍스트 무한 복제 방지
        if ($textCompact.find('.js-marquee').length > 0) {
            return;
        }

        // overflow 발생 시에만 적용
        if ($textCompact[0].scrollWidth > $textCompact[0].offsetWidth) {
            $textCompact.marquee({
                duration: 5000,
                startVisible: true,
                pauseOnHover: true,
                duplicated: true,
                gap: 50 // 공백 크기 설정 (픽셀 단위)
            });

            $text_div.hover(
                function() {
                    // 마우스를 올리면 text-overflow: ellipsis 제거
                    $textCompact.css('text-overflow', 'clip');
                    $textCompact.marquee('resume');
                },
                function() {
                    // 마우스를 떼면 text-overflow: ellipsis 다시 설정
                    $textCompact.css('text-overflow', 'ellipsis');
                    $textCompact.marquee('pause');
                }
            );

            // Start paused
            $textCompact.marquee('pause');
        }
    }

}

// ajax json 전달
function commonAjax(url, type, param) {
    $.ajax({
        url: url,
        type: type,
        data: JSON.stringify(param),
        contentType: 'application/json',
        success: function(response) {
            afterSuccess(response, type);
        },
        error: function(xhr, status, error) {
            console.error("AJAX 요청 오류:", status, error);
        }
    });
}

// $(document).ready(function() {
//     // 페이지가 로드되면 모든 컨테이너에 대해 marquee 초기화
//     $('.text_div').each(function() {
//         initializeMarquee($(this));
//     });
// });
