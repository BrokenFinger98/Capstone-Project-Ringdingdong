export default async function fetchData(){
    try {
      const token = localStorage.getItem('jwtToken');
      // 로컬에서 토큰 받아옴.
      const response = await fetch('/token', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('API 요청 오류:', error);
    }
  };



  