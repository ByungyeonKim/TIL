import { useState } from 'react';

export function FetchingWithAbort() {
  const [users, setUsers] = useState();
  const [fetchStatus, setFetchStatus] = useState('idle');

  const getUsers = async () => {
    setFetchStatus('loading');
    const controller = new AbortController();
    const signal = controller.signal;

    const timeout = setTimeout(() => {
      controller.abort();
    }, 2000);

    try {
      const response = await fetch('http://localhost:3000/users', { signal });
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
        disabled={fetchStatus === 'loading'}
        type='button'
      >
        사용자 불러오기
      </button>
      {fetchStatus === 'success' && <pre>{JSON.stringify(users, null, 2)}</pre>}
      {fetchStatus === 'error' && <p>에러 발생!</p>}
    </>
  );
}
