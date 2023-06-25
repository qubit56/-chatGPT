$(document).ready(function(){
    // 오늘 날짜를 얻어 가입일로 설정합니다
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('join-date').value = today;
  
    // 폼 제출 시 어떤 동작을 할지 설정합니다
    $('#signup-form').submit(function(e) {
      e.preventDefault();
      // 이곳에 폼 제출 시 원하는 동작을 추가할 수 있습니다.
      console.log('회원 가입 완료!');
    });
  });
  