import { useState } from 'react';

export function FetchingWithAlert() {
  const [users, setUsers] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  const getUsers = async () => {
    setFetchStatus('loading');

    const timeout = setTimeout(() => {
      setFetchStatus('delayed');
    }, 2000);

    try {
      const response = await fetch('http://localhost:3000/users');
      const json = await response.json();

      setUsers(json);
      setFetchStatus('success');
    } catch {
      setFetchStatus('error');
    } finally {
      clearTimeout(timeout);
    }
  };

  return (
    <>
      <button
        onClick={getUsers}
        disabled={fetchStatus === 'loading' || fetchStatus === 'delayed'}
        type='button'
      >
        사용자 불러오기
      </button>
      {fetchStatus === 'success' && <pre>{JSON.stringify(users, null, 2)}</pre>}
      {fetchStatus === 'delayed' && (
        <p>
          응답이 평소보다 느린 것 같습니다. 데이터를 불러오는 데에 다소 시간이
          걸릴 수 있습니다. 잠시만 기다려 주세요.
        </p>
      )}
      {fetchStatus === 'error' && <p>에러 발생!</p>}
    </>
  );
}
